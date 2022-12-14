## Aim : To create backend APIs (only) for Warehouse/Product + User Management system (no UI involved).
```
[X] As a user I can register.
[X] As an admin i can approve registration, reject, suspend, and delete users.
[X] As a user I can login in only after approval and do the following on a product:
    [X] Add product
    [X] List products
    [X] Add warehouse
    [X] List warehouse
    [X] List warehouses
    [X] Delete product
    [X] Delete warehouse
[ ] As a user I can logout from the system (in res.send() forms since no UI developed)
[X] As an admin i can login to manage users (in res.send() forms since no UI developed)
```
### How to use
```
1. Create local mssql database with and import data from attached .sql (DATABASE.sql) 
2. git clone <repo link>
3. npm i 
4. Start microservices - User (localhost:300/app/portal/user/...)
    -cd services/user
    -set NODE_ENV=dev
    -node index.js

4. Start microservices - Inventory (warehouse && product/stock) (localhost:400/app/portal/product/...)
    -cd services/inventory
    -set NODE_ENV=dev
    -node index.js

5. use curl or postman to test below microservices API.   
```
### Microservices - User API & Auth API (combined)
```
1. API: localhost:3000/auth 
   Method: POST
   Request body : {
                    "username" : req.body.username,
                    "password" : req.body.password
                  }

    Note:
    - Will redirect to localhost:3000/home if theres user profile in db, output format in res.send() only due to no UI being developed.
    - session will be saved via module express-session
    - TODO, hashedpassword-comparing to allow/reject user to login.

===============================================================================================================


1. API: app/portal/user/list 
   Method: POST
   Request Body: {"loginUser" : "Admin"}

   Note: 
   - Only both approved User with role set to 'Admin' or 'Staff' can use this API to show User list information.
   
2. API: app/portal/user/create 
   Method:  POST
   Request Body: {
                    "username" : "John Lemon",
                    "password" : "england", // password will be hashed to database
                    "access_level" : "Admin", // or can change to "Staff"
                    "loginUser"  : "Admin" //or any other username that has role set to 'Admin' in database.
                 }

    Note:
    - This API will create new User that flag as "status = 0" in database.
    - At this point, this API is used to generate new User that awating approve by Admin, thus a newly created user cant used to access other API.
    - Only both approved User with role set to 'Admin' or 'Staff' can use this API to create new User.


3. API: app/portal/user/approve
   Method: POST
   Request Body:{
                    "userId" : 1009,
                    "username" : "John Lemon",
                    "loginUser" : "Admin"
                } 
    
    Note: 
    - This API will make the newly created user in API /user/create to become active @ (status = 1 in database)
    - Once User become active @ (status = 1 AND role = 'Admin'), the User can use all API.
    - Once User become active @ (status = 1) AND role = 'Staff'), the User can use some of the API such as add/delete/remove product
      or warehouse. But the user cannot use add/remove User APIs.
    - Only both approved User with role set to 'Admin' can use this API to create new User.
```
### Microservices - Inventory API (Warehouse and product)
```
1.  API: app/portal/warehouse/list 
    Request body: {
                    "page_no" : 1,
                    "page_size" : 10,
                    "loginUser"  : "Admin"
                  }              
    Note: 
    - Pagination system is being applied here. page_no represent the current page of the page_size.
    - To go to another page of the records, you may set page_no = 2. Another 10 list of records will be retrieved. Number of records        
      fetched are depends on declared page_size.   
    - Only both approved User with role set to 'Admin' or 'Staff' can use this API to create new User.

2.  API: app/portal/warehouse/add
    Method: POST
    Request Body: {
                    "warehouseName" : "North Region Warehouse 2",
                    "state" : "Kedah",
                    "loginUser" : "Admin"
                  } 
    Note: 
    - Only both approved User with role set to 'Admin' or 'Staff' can use this API to create new User.             

3.  API: app/portal/warehouse/remove
    Method: POST
    Request body: {      
                    "warehouseName" : "North Region Warehouse 2",
                    "loginUser" : "John Lemon"
                  }
    Note: 
    - Only both approved User with role set to 'Admin' or 'Staff' can use this API to create new User.             


4.  API: app/portal/stock/list
    Method: POST
    
5.  API: app/portal/stock/add
    Method: POST

6.  API: app/portal/stock/remove
    Method: POST
    
```
### etc to do list
```
[ ] Request schema body validation
[X] Logger for better debugging
[X] Hash user's password
[X] database.sql for localhost db mssql setup
[ ] unit test tdd
[X] screenshot response for some APIs 
[ ] use pm2 to manage nodejs services
```

