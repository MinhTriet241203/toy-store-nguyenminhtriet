# Toy Store application description

Demo of this application can be accessed [HERE](https://toy-store-nguyenminhtriet.onrender.com) (May require sometime for the project to re-deploy)

## 1. Use case

**Store managers** can perform CRUD operations on categories and products, while **board directors** can also manage managers, customers, and access statistics from different store branches. **Users** can view and purchase products as well as manage their account.

<p align="center">
    <img src="demo_images/use_case.png" alt="Use case">
</p>

## 2. Database

The application uses MongoDB as its database system. The design is as follow:

<p align="center">
    <img src="demo_images/database_design.png" alt="Database Design">
</p>

## 3. System access

The system can be accessed as 

- A director with (Will be directed to admin dashboard)
```
{
    "username": "BDAccount"
    "password": "admin"
}
```

- An user with (Will be directed to user homepage)
```
{
    "username": "user"
    "password": "user"
}
```

- A manager with (Will be directed to categories view)
```
{
    "username": "cyfylib"
    "password": "manager"
}
```

## 4. Pages

### 4.1. Admin pages

Admin pages are accessible for director and manager accounts. Here is the product page showing all the products in the database.

<p align="center">
    <img src="demo_images/product_view.png" alt="Product View page">
</p>

This is the create product page allowing users to add product to the system both for admin pages sand for user pages.

<p align="center">
    <img src="demo_images/product_create.png" alt="Product Create page">
</p>

The image of the new product will be saved in the \public\img\products\ folder.

<p align="center">
    <img src="demo_images/product_image.png" alt="Product Image">
</p>

A new record will be added to the product view page.

<p align="center">
    <img src="demo_images/new_product.png" alt="New product added">
</p>

The new product will also be updated to the user page.

<p align="center">
    <img src="demo_images/new_product_user.png" alt="New product added on user pages">
</p>

The view pages offers the ability to search for the corresponding item. Below is the search functionality implemented on products.

<p align="center">
    <img src="demo_images/search.png" alt="Search functionality">
</p>

Update and delete functionalities are similar to the add function. Both manager and director accounts can manage products and category. But only director accounts can manage manager accounts, view user accounts and dashboard. Here are the users and managers views.

<p align="center">
    <img src="demo_images/user_view.png" alt="User View page">
</p>

<p align="center">
    <img src="demo_images/manager_view.png" alt="Manager View page">
</p>

The dashboard will allow directors to see the sales made. The following image shows products sold by different store branches.

<p align="center">
    <img src="demo_images/dashboard.png" alt="Products sold by store branches">
</p>

The next images shows the products sold of each store branch by date.

<p align="center">
    <img src="demo_images/store_branch_date.png" alt="Product sold of each store branch by date">
</p>

The chart can be queried by date using the Show data from calender at the bottom of it as shown below.

<p align="center">
    <img src="demo_images/store_branch_date_query.png" alt="Product sold of each store branch queried by date">
</p>

The last chart shows income of each store branch by date.

<p align="center">
    <img src="demo_images/income_date.png" alt="Income of each store branch by date">
</p>

This chart can also be queried to see income of each store branch in a particular month.

<p align="center">
    <img src="demo_images/income_branch_query.png" alt="Income of each store branch queried by date">
</p>

Additionally, the system can prevent customers and managers from entering the dashboard page.

<p align="center">
    <img src="demo_images/prevent_access.png" alt="Prevent unauthorized access">
</p>

### 4.2. User pages

This is the user homepage showing the categories offered by the store.

<p align="center">
    <img src="demo_images/user_homepage.png" alt="User Homepage">
</p>

Next is the shop page which will show all the product in the store.

<p align="center">
    <img src="demo_images/shop_page.png" alt="Shop page">
</p>

Users can click on any product in the shop page to see the details of the product.

<p align="center">
    <img src="demo_images/details_page.png" alt="Details page">
</p>

## 5. Technologies

- The application was developed in Microsoft Visual Code due to its lightweight feature and how easy it is to get started as well as its support for Heroku CLI and Git CLI.

- The server was run on Node.js and the framework used was Express thanks to its flexibility and a powerful feature set for web applications that it offers.

- The version control system (VCS) was GitHub to store and share our code between the members of the team because we were familiar with this technology from previous projects.

- The database for this application was MongoDB because it is a No-SQL database with the ability to manipulate and store data on a server rather than locally.

- The application was innitially deployed to Heroku, but due to recent policies changes, the free version of Heroku became unavailable so I hosted this application on Render.

#### More information on how we implemented this application and difficulties we faced can be found [HERE](https://drive.google.com/file/d/1VI8pZeliPoWPUXx5D3qV-kdBRMrosPXX/view?usp=sharing)