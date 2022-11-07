## TODO List

### Microservices - User API
```
[X] GET: app/portal/user/list 
[X] POST: app/portal/user/create 
    [X] status = 0 - Request level, awating approve by Admin 
[ ] POST: app/portal/user/edit/:username/:status 
    [ ] status = 1 - Approved @ Active 
    [ ] status = 2 - Deactivated  
```
### Microservices - Inventory API (Warehouse and product)
```
[X] POST: app/portal/warehouse/list 
[X] POST: app/portal/warehouse/add
[X] POST: app/portal/warehouse/edit
[X] POST: app/portal/warehouse/remove

[x] POST: app/portal/product/list
[x] POST: app/portal/product/add 
[X] POST: app/portal/product/edit/:productId 
[X] POST: app/portal/product/remove/:productId 
```
### etc
```
[ ] Request schema body validation
[X] Logger for better debugging
[X] Hash user's password
[ ] local db .csv
[ ] unit test tdd
```

