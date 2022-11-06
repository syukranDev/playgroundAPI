##TODO

### User API
[X] POST: app/portal/user/list <br>
[X] POST: app/portal/user/create <br>
    * [X] status = 0 - Request level, awating approve by Admin
[ ] POST: app/portal/user/edit/:username/:status <br>
    * [ ] status = 1 - Approved @ Active
    * [ ] status = 2 - Deactivated 

### Warehouse API
[X] GET: app/portal/warehouse/list <br>  
[X] POST: app/portal/warehuse/add <br>
[ ] POST: app/portal/warehouse/edit/:warehouseId <br>
[ ] POST: app/portal/warehouse/remove/:warehouseId <br>

### Product API
[x] GET: app/portal/product/list <br>
[x] POST: app/portal/product/add <br>
[ ] POST: app/portal/product/edit/:productId <br>
[ ] POST: app/portal/product/remove/:productId <br>


### Misc
[ ] Request schema body validation
[ ] Logger for better debugging
[X] Hash password