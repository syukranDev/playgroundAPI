## TODO List

### Microservices - User API
```
[X] POST: app/portal/user/list 
[X] POST: app/portal/user/create 
    [X] status = 0 - Request level, awating approve by Admin 
[ ] POST: app/portal/user/edit/:username/:status 
    [ ] status = 1 - Approved @ Active 
    [ ] status = 2 - Deactivated  
```
### Microservices - Inventory API (Warehouse and product)
```
[X] GET: app/portal/warehouse/list  
[X] POST: app/portal/warehouse/add
[ ] POST: app/portal/warehouse/edit/:warehouseId 
[ ] POST: app/portal/warehouse/remove/:warehouseId 

[x] GET: app/portal/product/list
[x] POST: app/portal/product/add 
[ ] POST: app/portal/product/edit/:productId 
[ ] POST: app/portal/product/remove/:productId 
```
### etc
```
[ ] Request schema body validation
[ ] Logger for better debugging
[X] Hash user's password
[ ] local db .csv
```

