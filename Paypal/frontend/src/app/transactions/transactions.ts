import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './transactions.html',
  styleUrls: ['./transactions.css']
})
export class TransactionsComponent {

  transactions: any[] = [];

  // ADD FIELDS
  payer: string = '';
  payee: string = '';
  amount: number | null = null;
  status: string = 'Pending';

  // EDIT FIELDS
  editId: string = '';
  editPayer: string = '';
  editPayee: string = '';
  editAmount: number | null = null;
  editStatus: string = 'Pending';

  constructor(private service: TransactionService) {
    this.load();
  }

  // LOAD TRANSACTIONS
  load() {
    this.service.getTransactions().subscribe(res => {
      this.transactions = res;
    });
  }

  // ADD TRANSACTION
add() {
  // simple validation
  if (!this.payer || !this.payee || this.amount === null || this.amount <= 0) {
    alert('Please enter payer, payee, and a valid amount.');
    return;
  }

  const data = {
    payer: this.payer,
    payee: this.payee,
    amount: this.amount,
    status: this.status
  };

  this.service.addTransaction(data).subscribe(() => {
    // clear form
    this.payer = '';
    this.payee = '';
    this.amount = null;
    this.status = 'Pending';
    this.load();
  });
}

  // START EDITING
  startEdit(t: any) {
    this.editId = t._id;
    this.editPayer = t.payer;
    this.editPayee = t.payee;
    this.editAmount = t.amount;
    this.editStatus = t.status;
  }

  // CANCEL EDIT
  cancelEdit() {
    this.editId = '';
  }

// SAVE EDIT
saveEdit() {
  if (!this.editId) return;

  if (!this.editPayer || !this.editPayee || this.editAmount === null || this.editAmount <= 0) {
    alert('Please enter payer, payee, and a valid amount.');
    return;
  }

  const updated = {
    payer: this.editPayer,
    payee: this.editPayee,
    amount: this.editAmount,
    status: this.editStatus
  };

  this.service.updateTransaction(this.editId, updated).subscribe(() => {
    this.editId = '';
    this.load();
  });
}

  // DELETE TRANSACTION
  delete(id: string) {
    this.service.deleteTransaction(id).subscribe(() => {
      this.load();
    });
  }

  // SUMMARY
  get totalAmount() {
    return this.transactions.reduce((sum, t) => sum + t.amount, 0);
  }

  get totalCount() {
    return this.transactions.length;
  }
}