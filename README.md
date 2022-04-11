        About The Project

I'll start with the name of my project, as one of the tasks was: 'Find a name for your product'. This application is called LieSitPut. I'll explain a little why this name - lie in bed, sit in a armchair, put in the cupboard, hence the idea of LieSitPut.

A little more about the idea of the application. The home page of the application is the authentication page. Depending on the role the user has chosen for authentication (admin, user), such functionality is available.

The ADMIN is allowed to:

- sort products by categories (bed, sofa, armchair, cupboard, dresser)
- search for goods by product name
- sort goods:  
    a) from expensive to cheaper 
    b) from cheap to expensive 
    c) by quality (from the highest quality to the lowest quality)
- edit the product (when you click on the edit button, the admin opens the edit page). The admin can edit the product name, price, quality.
- 
The USER is allowed to:

- sort products by categories (bed, sofa, armchair, cupboard, dresser)
- search for goods by product name
- sort goods: 
    a) from expensive to cheaper 
    b) from cheap to expensive 
    c) by quality (from the highest quality to the lowest quality)

        Built With

    - React.js
    - Redux
    - Express
    - MongoDB
    - SCSS

        Installation

    - First you need to clone the project: git clone https://github.com/vasvjuck/moonshiner-task.git
    - Install node modules: npm install
    - Launch the client part: npm start
    - Launch the server part: npm run dev
    - In the MongoDB database in the 'goods-data' collection (it will be created automatically when the server is started), you need to insert data from the GoodsData.json (src folder).

        How it works
Authentication 
    As I said before, the home page of the application is the AUTHENTICATION page('src/pages/Auth/SignUp.js). When you click on the button(Sign Up), a HTTP POST Request is sent to the server, after which the user is added to the database (collection 'users-data'). If the response is successful, the user must Log In with the SAME username and password on the LOGIN page('src/pages/Auth/Auth.js).In case of a successful response from the server, the user is directed to the HOMEPAGE page('src/pages/Auth/Auth.js) of the application

Main page (src/components/Main/Main.js) 
The MAIN page displays a list of products that we receive from the database. At the first render of the page, using the useEffect hook, we send a HTTP GET Request to the server, in response we receive an array of all products. After that we operate with this array, using the filter method. In this way we sort the array by category. When the user clicks on a category, the user sees the corresponding products on the page.

    --- How to search by product name This is also implemented using the filter method as well as the useEffect hook. The first parameter in useEffect is a callback function, in which we write filtering logic. The second parameter is the value of the input. When the input value changes, the function will be executed. So, in the function I used the filter method, in which I check whether the value of the input coincides with the name of the products. 
    --- How to filter by product price and rating This is done with the help of a select. Depending on which option the user has chosen, this condition works. Sorting is done using the sort method. (SortData function/Main.js)

Edit page This page is only available to users with ADMIN roles. As specified in the task, the ADMIN user can update (edit) products. So, when you click on the edit button, on the MAIN page, the user opens the EDIT page, with the corresponding product. On this page, the ADMIN user sees the current product data and can also edit them. When the ADMIN user fills the entire form with new data, then click on the EDIT button, an HTTP PUT Request is sent. In case of a successful request, the ADMIN user returns to the main page, where he sees the updated product.

The edit page is only available to the ADMIN user.

        REDUX

    Why I used the redux in this application. In my opinion, this is the best way to make a global state. In the '/src/store/reducer' folder you can see three reducers.

    - I use the first reducer (addUserReducer.js) when the user Log in. In the state I write down data about the user to use them in the Main component.
    - The second reducer (allGoods.js) I use when I get all the products. This state i use in the Main component
    - The third reducer (oneGoods.js) I use to keep one item, that the user clicked on, to update it. This you can see in the ItemList component, EDIT function. Later, I use data from this state on the EDIT page.
