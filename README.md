# Unit-thirteen-homework

<img src='https://img.shields.io/badge/License-MIT-yellow.svg'>

## Description
Back end of application for an e-commerce site created using starter code. Allows user to view and manipulate (post, put, and delete) from e-commerce database containing four tables: Category (id, name), Product (id, name, price, stock, category id), Tag (id, name), Product Tag (id, product id, tag id).
  
## Table of Contents 
 - [Installation](#installation)
 - [Usage](#usage)
 - [Credits](#credits)
 - [Contribution Guidelines](#contribution-guidelines)
 - [Test Instructions](#test-instructions)
 - [License](#license)

## Installation
* Use package.json to download dependencies. In terminal, type:

        npm install
* To populate database with test data, type the following in the terminal:
    
        run node seeds
* To begin application, type the following in the terminal:
        
         npm start


## Usage
After installation instructions above, open in Insomnia (ensure correct url: http://localhost:PORT). 
Category model options:
* Show all categories:
    * Set to GET
    * url: http://localhost:PORT/api/categories/
* Show a category by id:
    * Set to GET
    * url: http://localhost:PORT/api/categories/:id
* Create a new category:
    * Set to POST
    * url: http://localhost:PORT/api/categories/
* Update a category:
    * Set to PUT
    * url: http://localhost:PORT/api/categories/:id
* Delete a category:
    * Set to PUT
    * url: http://localhost:PORT/api/categories/:id

Product Model Options: 
* Show all products:
    * Set to GET
    * url: http://localhost:PORT/api/products/
* Show a product by id:
    * Set to GET
    * url: http://localhost:PORT/api/products/:id
* Create a new product:
    * Set to POST
    * url: http://localhost:PORT/api/products/
* Update a product:
    * Set to PUT
    * url: http://localhost:PORT/api/products/:id
* Delete a product:
    * Set to PUT
    * url: http://localhost:PORT/api/products/:id

Tag Model Options: 
* Show all tags:
    * Set to GET
    * url: http://localhost:PORT/api/tags/
* Show a tag by id:
    * Set to GET
    * url: http://localhost:PORT/api/tags/:id
* Create a new tag:
    * Set to POST
    * url: http://localhost:PORT/api/tags/
* Update a tag:
    * Set to PUT
    * url: http://localhost:PORT/api/tags/:id
* Delete a tag:
    * Set to PUT
    * url: http://localhost:PORT/api/tags/:id

## Credits
Libraries:
* MySQL2 to connect to MySQL database 
* Express.js API to create back end of web application
* Sequelize to connect to MySQL database
* dotenv package to use environmental variables to store sensitive data

## Contribution Guidelines
Utilize <a href= "https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md">The Contributor Covenant</a> as reference for appropriate contribution guidelines.

## Test Instructions
n/a

## License
License type: MIT

    "Copyright 2021 <COPYRIGHT HOLDER>

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."

Source for licensing information: <a href="https://opensource.org/licenses/MIT">Link to MIT license information</a>

## Screenshots

Screenshot of :

<img src='' alt = ''>


## URLs
<a href="https://github.com/mlward639/Unit-thirteen-homework">Link to GitHub Repository</a>

<a href="">Link to walkthrough video demonstrating application functionality</a>
