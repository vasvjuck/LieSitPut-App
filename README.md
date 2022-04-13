**About The Project**

Let me begin with the name of my project, as one of the tasks was: 'Find a name for your product'. This application is called LieSitPut. I'll explain a little what this name means - lie in a bed, sit in an armchair, put in a cupboard, hence the idea of LieSitPut.

A little bit more about the idea of the application. The application offers the user a variety of furniture products, helps to sort products by different categories and get the best deals by different options. The home page of the application is the authentication page. The functionality I've created allows users to choose a role for an authentication: user or admin

1.**The ADMIN is allowed to:**

- sort products by categories (bed, sofa, armchair, cupboard, dresser)
- search for goods by product name
- sort goods:  
1.  from expensive to cheaper 
2.  from cheap to expensive 
3.  by quality (from the highest quality to the lowest quality)
- edit the product (when ADMIN clicks on the edit button, the edit page opens). The admin can change the product name, price, quality.
- remove products

2.**The USER is allowed to:**

- sort products by categories (bed, sofa, armchair, cupboard, dresser)
- search for goods by product name
- sort goods: 
1.  from expensive to cheaper 
2.  from cheap to expensive 
3.  by quality (from the highest quality to the lowest quality)

**Built With**

- React.js
- Redux
- Express
- MongoDB
- SCSS

**Installation**

1. First you need to clone the project: git clone https://github.com/vasvjuck/moonshiner-task.git
2. Install node modules: npm install
3. Launch the client part: npm start
4. Launch the server part: npm run dev
5. In the MongoDB database in the 'goods-data' collection (it will be created automatically when the server is started), you need to insert data from the GoodsData.json (src folder).

**How it works**
        
- **Authentication**. As I said before, the home page of the application is the AUTHENTICATION page('src/pages/Auth/SignUp.js). When you click on the button(Sign Up), a HTTP POST Request is sent to the server, after which the user is added to the database (collection 'users-data'). If the response is successful, the user must Log In with the SAME username and password on the LOGIN page('src/pages/Auth/Auth.js).In case of a successful response from the server, the user is directed to the HOMEPAGE('src/pages/Auth/Auth.js) of the application.

- **Main page** (src/components/Main/Main.js). The MAIN page displays a list of products that we receive from the database. At the first render of the page, using the useEffect hook, we send a HTTP GET Request to the server, in response we receive an array of all products. After that we operate with this array, using the filter method. In this way we sort the array by category. When the user clicks on a category, the user sees the corresponding products on the page.

     - How to search by product name. This is also implemented using the filter method as well as the useEffect hook. The first parameter in useEffect is a callback function, in which we write filtering logic. The second parameter is the value of the input. When the input value changes, the function will be executed. So, in the function I used the filter method, in which I check whether the value of the input coincides with the name of the products. 
     - How to filter by product price and rating. This is done with the help of a select. Depending on which option the user has chosen, this condition works. Sorting is done using the sort method. (SortData function/Main.js)

- **Edit page**(src/pages/Edit/Edit.js). This page is only available to users with ADMIN roles. As specified in the task, the ADMIN user can update (edit) products. So, when you click on the edit button, on the MAIN page, the user opens the EDIT page, with the corresponding product. On this page, the ADMIN user sees the current product data and can also edit them. When the ADMIN user fills the entire form with new data, then click on the EDIT button, a HTTP PUT Request is sent. In case of a successful request, the ADMIN user returns to the main page, where he sees the updated product. When you click on the delete button, a HTTP DELETE Request is sent, with which we delete the product in the database.

The edit page is only available to the ADMIN user.

**REDUX**
- **Why I used the redux in this application**. In my opinion, this is the best way to make a global state. In the '/src/store/reducer' folder you can see three reducers.
1. I use the first reducer (addUserReducer.js) when the user Log in. In the state I write down data about the user to use them in the Main component.
2. The second reducer (allGoods.js) I use when I get all the products. This state I use in the Main component.
3. The third reducer (oneGoods.js) I use to keep one item, that the user clicked on, to update it. You can see this in the ItemList component, EDIT function. Later, I use data from this state on the EDIT page.
