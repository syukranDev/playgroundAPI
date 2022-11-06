// const axios  = require('axios');
const test = require('../../model/inventory');
const sql = require("./index");
const utils = require('../utils');
const logger = require('../logger').logger;
const config = require('config');

//===================== Warehouse APIs
var listWarehouse = (arg) => {
    return promise = new Promise(async (resolve, reject) => {
        var totalRec = 0, pageCount = 0;
		var pageSize  = arg.body.page_size ? arg.body.page_size : 10
        var start = 0;
		var currentPage = 1;
	
        let query = `SELECT COUNT(*) as total_record FROM [${config.db.database}].[dbo].[warehouse]`
        let data = {}
        
        sql.executeQuery(query, data)
			.then(records => {
                totalRec = records[0].total_record;
                pageCount = Math.ceil(totalRec /  pageSize);
                if (typeof arg.body.page_no !== 'undefined'){
                    currentPage = arg.body.page_no;
                }
                
                if(currentPage >1){
                    start = (currentPage - 1) * pageSize;
                }

                let query = `SELECT *  FROM [${config.db.database}].[dbo].[warehouse] ORDER BY created_date DESC OFFSET @start ROWS FETCH NEXT @pageSize ROWS ONLY`
                let data = { "start" : start, "pageSize": pageSize}
        
                sql.executeQuery(query, data)
                    .then(records => {
                        let resObj = {
                            "list" : records,
                            "total_records" : totalRec
                        }
                        return resolve(resObj)
                    })

            }).catch(err => {
                logger.error({
                    path: "dbQueries/listWarehouse/catch",
                    query: query,
                    queryData: data,
                    message: err && err.message,
                    stack: err && err.stack
                })
                return reject({
                    statusCode: 500,
                    message: "System Error: Unable to reach listWarehouse API."
                });

            })
    });
}


var createWarehouse = (arg) => {
    return promise = new Promise(async (resolve, reject) => {
        let query = `SELECT * FROM [${config.db.database}].[dbo].[warehouse] WHERE warehouseName=@warehouseName`
        let data = {
            "warehouseName" : arg.body.warehouseName
        }

        if (arg.body.warehouseName) {
            sql.executeQuery(query, data)
                .then(records => {
                    if (records.length ===0) {
                        let query = `INSERT INTO [${config.db.database}].[dbo].[warehouse] (warehouseName, state, total_product, created_date, updated_date) 
                                     VALUES (@warehouseName, @state, @total_product, GETDATE(), GETDATE())`
                        let data = {
                            "warehouseName" : arg.body.warehouseName,
                            "state" : arg.body.state,
                            "total_product" : "0" //set to "0" as new warehouse doesnt have any stock registered && in db set as string.
                        }

                        sql.executeQuery(query, data)
                        .then(() => {
                            let resObj = {
                                "message" : "New warehouse added!"
                            }
                            return resolve(resObj)
                        }).catch(err => { 
                            console.log(err.message)
                        })

                    } else {
                        resolve({ "message" : "Warehouse already exist!"})
                    }
    
                }).catch(err => { 
                    logger.error({
                        path: "dbQueries/createWarehouse/catch",
                        query: query,
                        queryData: data,
                        message: err && err.message,
                        stack: err && err.stack
                    });

                    return reject({
                        statusCode: 500,
                        message: "System Error: Unable to reach createWarehouse API."
                    });
                })
        }
    });
}

// var editWarehouse = (arg) => {
//     return promise = new Promise(async (resolve, reject) => {
//         let data = {}
//         let query = ``

//         sql.executeQuery(query, data)
// 			.then(records => {
//                 return resolve(records)
//             })
//     });
// }

// var removeWarehouse = (arg) => {
//     return promise = new Promise(async (resolve, reject) => {
//         let data = {}
//         let query = ``

//         sql.executeQuery(query, data)
// 			.then(records => {
//                 return resolve(records)
//             })
//     });
// }

//===================== Product APIs
var listProduct = (arg) => {
    return promise = new Promise(async (resolve, reject) => {
        var totalRec = 0, pageCount = 0;
		var pageSize  = arg.body.page_size ? arg.body.page_size : 10
        var start = 0;
		var currentPage = 1;
	
        let query = `SELECT COUNT(*) as total_record FROM [${config.db.database}].[dbo].[stock]`
        let data = {}
        
        sql.executeQuery(query, data)
			.then(records => {
                totalRec = records[0].total_record;
                pageCount = Math.ceil(totalRec /  pageSize);
                if (typeof arg.body.page_no !== 'undefined'){
                    currentPage = arg.body.page_no;
                }
                
                if(currentPage >1){
                    start = (currentPage - 1) * pageSize;
                }

                let query = `SELECT *  FROM [${config.db.database}].[dbo].[stock] ORDER BY created_date DESC OFFSET @start ROWS FETCH NEXT @pageSize ROWS ONLY`
                let data = { "start" : start, "pageSize": pageSize}
        
                sql.executeQuery(query, data)
                    .then(records => {
                        let resObj = {
                            "list" : records,
                            "total_records" : totalRec
                        }
                        return resolve(resObj)
                    })

            }).catch(err => {
                logger.error({
                    path: "dbQueries/listProduct/catch",
                    query: query,
                    queryData: data,
                    message: err && err.message,
                    stack: err && err.stack
                });

                return reject({
                    statusCode: 500,
                    message: "System Error: Unable to reach listProduct API."
                });
            })
    });
}

var createProduct = (arg) => {
    return promise = new Promise(async (resolve, reject) => {
        let query = `SELECT * FROM [${config.db.database}].[dbo].[stock] WHERE stock_name=@stockName`
        let data = {
            "stockName" : arg.body.stockName
        }

        if (arg.body.stockName) {
            let totalUpdatedStock = 0;
            sql.executeQuery(query, data)
                .then(records => {
                    if (records.length ===0) {
                        let query = `INSERT INTO [${config.db.database}].[dbo].[stock] (stock_name, stock_warehouse, stock_type, created_date, updated_date) 
                                     VALUES (@stockName, @stockWarehouse,@stockType, GETDATE(), GETDATE())`
                        let data = {
                            "stockName" : arg.body.stockName,
                            "stockWarehouse" : arg.body.stockWarehouse,
                            "stockType" : arg.body.stockType}

                        sql.executeQuery(query, data)
                        .then(() => {
                            let query = `SELECT * FROM [${config.db.database}].[dbo].[warehouse] WHERE warehouseName=@warehouseName`
                            let data = {"warehouseName" : arg.body.stockWarehouse}

                            sql.executeQuery(query, data)
                            .then(records => {
                                totalUpdatedStock = parseInt(records[0].total_product) + 1

                                let query = `UPDATE [${config.db.database}].[dbo].[warehouse] 
                                             SET total_product = @newTotalProduct, updated_date = GETDATE()
                                             WHERE warehouseName = @warehouseName`
                                let data = { 
                                    "newTotalProduct" : totalUpdatedStock,
                                    "warehouseName" : arg.body.stockWarehouse,
                                }

                                sql.executeQuery(query, data).then(() => {
                                    resolve({
                                        "message" : "New product added and total stock in warehouse updated!"
                                    })
                                }).catch(err => { 
                                    console.log(err.message)
                                })

                            }).catch(err => { 
                                console.log(err.message)
                            })

                        }).catch(err => { 
                            console.log(err.message)
                        })

                    } else {
                        resolve({ "message" : "Product already exist!"})
                    }
    
                }).catch(err => { 
                    logger.error({
                        path: "dbQueries/createProduct/catch",
                        query: query,
                        queryData: data,
                        message: err && err.message,
                        stack: err && err.stack
                    });

                    return reject({
                        statusCode: 500,
                        message: "System Error: Unable to reach createProduct API."
                    });
                })
        }
    });
}

// var editProduct = (arg) => {
//     return promise = new Promise(async (resolve, reject) => {
//         let data = {}
//         let query = ``

//         sql.executeQuery(query, data)
// 			.then(records => {
//                 return resolve(records)
//             })
//     });
// }

// var removeProduct = (arg) => {
//     return promise = new Promise(async (resolve, reject) => {
//         let data = {}
//         let query = ``

//         sql.executeQuery(query, data)
// 			.then(records => {
//                 return resolve(records)
//             })
//     });
// }

module.exports = {
    listWarehouse : listWarehouse,
    createWarehouse : createWarehouse,
    // editWarehouse :  editWarehouse,
    // removeWarehouse : removeWarehouse,

    listProduct : listProduct,
    createProduct : createProduct,
    // editProduct : editProduct,
    // removeProduct : removeProduct
}