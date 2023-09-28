# Toy Store application description

## 1. Use case

**Store managers** can perform CRUD operations on categories and products, while **board directors** can also manage managers, customers, and access statistics from different store branches. **Users** can view and purchase products as well as manage their account.

![Use case](demo_images/database_design.png)

## 2. Database

The application uses MongoDB as its database system. The design is as follow:

![Alt text](demo_images/use_case.png)

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

![Alt text](demo_images/product_view.png)

This is the create product page allowing users to add product to the system both for admin pages sand for user pages.

![Alt text](demo_images/product_create.png)

The image of the new product will be saved in the \public\img\products\ folder.

![Alt text](demo_images/product_image.png)

A new record will be added to the product view page.

![Alt text](demo_images/new_product.png)

The new product will also be updated to the user page.

![Alt text](demo_images/new_product_user.png)

The view pages offers the ability to search for the corresponding item. Below is the search functionality implemented on products.

![Alt text](demo_images/search.png)

Update and delete functionalities are similar to the add function. Both manager and director accounts can manage products and category. But only director accounts can manage manager accounts, view user accounts and dashboard. Here are the users and managers views.

![Alt text](demo_images/user_view.png)

![Alt text](demo_images/manager_view.png)

The dashboard will allow directors to see the sales made. The image shows the common products sold by different store branches.

![Alt text](demo_images/dashboard.png)



### 4.2. User pages
