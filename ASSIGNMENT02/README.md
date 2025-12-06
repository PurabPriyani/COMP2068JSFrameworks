1. IMAGE UPLOAD using Multer 
I implemented file upload functionality using the Multer middleware. This allows users to upload an image of 
a lost/found item, and the file is stored on the server while the filename is saved in MongoDB. The UI dynamically 
displays item images on the public and private pages. This feature required independent learning beyond the course material.

2. Implemented Github Authentication Using Github Passport
I added GitHub authentication to the application using Passport-GitHub2. Users can now log in with their GitHub account.
This required learning how OAuth flows work, setting up client credentials, and configuring callback routes on my own.

3. Search Functionality
I implemented a keyword-based search bar that filters items by their name. This involved handling GET query parameters and
performing database queries with case-insensitive matching. This feature was independently learned.

