# Grapple Gears
<img src="src\assets\images\readme-images\full-home-page-screenshot.jpg" style="display: block">
<br>

The live demo to the frontend web application can be accessed [here](https://grapple-gears.netlify.app/).
>This is a bootcamp project where a full stack web framework and React frontend was created.

## Index

1. [Project Summary](#1-project-summary)
2. [UI/UX](#2-uiux)
3. [Frontend Web Application Features](#3-frontend-web-application-features)
4. [Testing](#4-testing)
5. [Technologies Used](#5-technologies-used)
6. [API & Database](#6-api--database)
7. [Deployment](#7-deployment)
8. [Credits](#8-credits)


## 1. Project Summary

### Project Context
Grapple Gears is an e-commerce web application for Brazilian Jiu Jitsu (BJJ) gears and apparels. BJJ is a martial art and combat sport based on ground fighting and submission holds. The e-commerce web application serves to provide a platform for:
* brands to reach out to a larger customer pool by listing their products; and
* customers to exclusively browse and purchase for BJJ gears and apparels. 


## 2. UI/UX

### Strategy

#### Organisation Objectives

To create an e-commerce web application to sell BJJ products exclusively. The organisation aims to collaborate with as many different BJJ product brands as possible to list their products on the platform. This will create a centralised platform for customers to browse and purchase a wide variety of products. The organisation profits by charging the brands a small platform listing fee and by selling products to customers at a slight markup from the wholesale price.

#### User Objectives

**BJJ Product Brand Owners | Adults (20 - 60 years old)**:

User Story: Small brand owners who are starting out often face difficulties to enter the market when there are existing big players in the field. And as a small business, they have limited budget for advertisement which make it difficult to gain exposure on their products. For large brand owners, a cheap way to gain additional exposure on their products would benefit their business.

Acceptance Criteria: A convenient and cost-effective way to advertise their products to a greater customer pool, hence allowing their business to grow.

**Customers | Adults (20 - 60 years old)**:

User Story: BJJ product brands owners either only sell their products on their web application or sell a small variety of their products on general marketplaces. For potential customers to browse all the specific brand's products, they would need to visit the brand's web application. Hence, to browse and search multiple brands' products, customer would be required to navigate through multiple web applications.

Acceptance Criteria: To easily browse a variety of BJJ products from varied brands, search for a specific product based on certain criteria, and purchasing the products on a single web application. Being able to discover new brands would be an added benefit.

### Scope

**Functional Requirements**
* For admins (backend web application):
    * Login for admins/employees only
    * Management of products and its variants (search and CRUD operations)
    * Management of orders (search and RUD operations)
    * Management of users (RUD operations)

* For customers (frontend web application):
    * Registration, login, and logout for customers
    * Add to cart and management of cart items
    * View orders
    * View and search products

**Non-functional requirements**
* Performance criteria
* Mobile responsiveness

### Structure
All pages of the web application can be accessed through the navigation bar. The image below shows a flowchart of how different features can be accessed. The 'Orders' and 'Cart' pages are only accessible after the user have logged in.

<img src="src\assets\images\readme-images\site-map-fe.jpg" style="display: block">
<br>

### Skeleton
The wireframes for mobile and laptop display for the web application can be accessed [here](https://benedict19472.invisionapp.com/freehand/Wireframe--TGC-Proj-3--mXGLRhfsr?dsid_h=503ba82c8a8ab93bf1d9aa30cf17eabdbacc48e25df6719698deb92da27dbbb0&uid_h=5a1828007a271c9d5497b0558b46e0ef2ead753c17efbedf4d212e9bec42337b)

### Surface
**Colours**: A combination of black and white is used for the web application. The colour combination creates a contrast to achieve a clean and simplistic look.

**Font Choice**: Roboto font is used for all the headings and Libre Franklin font is used for the other type of texts. The sans-serif font style is selected to make texts legible and readable. Standard font sizes are used as the web application is catered for adults.

**Layout**: Simple layout with navigation bar and buttons which enable users to easily navigate the web application.


## 3. Frontend Web Application Features
>Features for the backend web application can be found [here](https://github.com/nanometre/bjj-ecommerce-tgc-proj3-express#4-backend-web-application-structure-and-features)

Features                                   | Descriptions
------------------------------------------ | ---------------------------------------------
Registration, login, and logout of account | Users can register for an account using a unique email (email is not tagged to an existing account) and logging in and out of an account
View and search all available products     | Master detail view for products and allow users to search and filter products based on certain search criteria
Add to cart and cart management            | Allow user to add product to cart after logging in and, delete and update cart items. Users can checkout their cart items through a payment service provider, Stripe.
View orders                                | Users can view all their pending and completed orders.

### Limitations and future implementations
Limitations                               | Future Implementations to Resolve Limitations
----------------------------------------- | ---------------------------------------------
There is no implementation for users to reset their password. If users forget their password, they will never be able to access their account. | Implement a feature where users can reset their passwords on the frontend web application.
All products are currently loaded in a single page on the master view. As the product catalogue size grows, this could increase the time required to load the page and it is not scalable. | Implement a pagination feature where more products will only load as the user click on the next page or scroll to the end of a 'page'.

## 4. Testing
### Test Cases
Manual and unit testing have been done for this project. The test cases for the critical functionality of this project are documented [here](https://github.com/nanometre/bjj-ecommerce-tgc-proj3-react/blob/main/src/assets/images/readme-images/test-cases.pdf).

### Testing for Mobile Responsiveness
Testing for mobile responsiveness was done using Responsively across iPhone X, iPad, and Generic Laptop.


## 5. Technologies Used
Technology                                                                                  | Description
------------------------------------------------------------------------------------------  | -----------
[Stripe](https://stripe.com/)                                                               | Payment processing service
[axios](https://github.com/axios/axios)                                                     | Axios is a promise-based HTTP client for node.js and it is used to handle all the API requests in this project.
[Bootstrap V5.1.3](https://github.com/twbs/bootstrap)                                       | Bootstrap is used to create a mobile responsive web application. Multiple components from Bootstrap were used for ease of web application design
[React](https://reactjs.org/)                                                               | ReactJS is a frontend JavaScript library used for building user interfaces specifically for single-page application.
[react-hook-form](https://github.com/react-hook-form/react-hook-form)                       | React-Hook-Form is used to handle most of the forms in the application to remove unnecessary re-rendering in React application to improve performance.
[react-lottie](https://github.com/chenqingspring/react-lottie)                              | Lottie is a JSON-based animation file format which is used for the loading animation for the web application.
[react-responsive-carousel](https://github.com/leandrowd/react-responsive-carousel)         | ReactJS responsive carousel
[react-router-dom](https://github.com/remix-run/react-router)                               | Declarative routing for ReactJS
[react-toastify](https://fkhadra.github.io/react-toastify/introduction)                     | Toast notification for ReactJS
[yup](https://github.com/jquense/yup)                                                       | Yup, a schema validation library for Node.js, is used to validate data from forms and requests.
[Google fonts](https://fonts.google.com/)                                                   | Google fonts is used to select font families for the web application.


## 6. API & Database
The project makes use of a custom API which retrieve and manage data. The API and database were built using ```Express.js```, ```Bookshelf.js``` and ```db-migrate```. The source code and documentation for the API and database can be found [here](https://github.com/nanometre/bjj-ecommerce-tgc-proj3-express). The API and database are [hosted on Heroku](https://bjj-ecom-tgc-proj3-express.herokuapp.com/) and is accessible from the frontend 


## 7. Deployment
The frontend web application is deployed on Netlify. The live demo to the web application can be accessed [here](https://grapple-gears.netlify.app/).


## 8. Credits
- Web layouts are inspired by [MDBootstrap](https://mdbootstrap.com/)

- Images and videos are taken from [Nick Lim (Carpe Diem BJJ Singapore)](https://instagram.com/nickycdbjj?igshid=YmMyMTA2M2Y=), Lachlan McAdam, [Progress JJ](https://progressjj.co.uk/), and [Scramble Brand](https://scramblestuff.com/).

- Quote from Ryan Hall in [Lex Fridman Podcast](https://www.youtube.com/watch?v=hhEwWghH_XM&t=2722s)

- User icon (created by Freepik) taken from [Flaticon](https://www.flaticon.com/free-icons/user)

- [Using Axios for HTTP method with RESTful API in React](https://edupala.com/react-axios-for-http-method-with-rest-api/)

- [React form validation with Bootstrap, react-hook-form and yup](https://www.bezkoder.com/react-form-validation-hooks/)

- YouTube and Stack Overflow community for guidance on various issues faced.