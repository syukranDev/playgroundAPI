const axios  = require('axios');
const test = require('../../model/inventory');
const sql = require("./index");
const utils = require('../utils');
const logger = require('../logger').logger;
const config = require('config');

//===================== Warehouse
var listWarehouse = (arg) => {
    return promise = new Promise(async (resolve, reject) => {
        let data = ``
        let query = ``

        sql.executeQuery(query, data)
			.then(records => {
                return resolve(records)
            })
    });
}
var createWarehouse = (arg) => {
    return promise = new Promise(async (resolve, reject) => {
        let data = ``
        let query = ``

        sql.executeQuery(query, data)
			.then(records => {
                return resolve(records)
            })
    });
}
var editWarehouse = (arg) => {
    return promise = new Promise(async (resolve, reject) => {
        let data = ``
        let query = ``

        sql.executeQuery(query, data)
			.then(records => {
                return resolve(records)
            })
    });
}

var removeWarehouse = (arg) => {
    return promise = new Promise(async (resolve, reject) => {
        let data = ``
        let query = ``

        sql.executeQuery(query, data)
			.then(records => {
                return resolve(records)
            })
    });
}
//===================== Product
var listProduct = (arg) => {
    return promise = new Promise(async (resolve, reject) => {
        let data = ``
        let query = ``

        sql.executeQuery(query, data)
			.then(records => {
                return resolve(records)
            })
    });
}
var createProduct = (arg) => {
    return promise = new Promise(async (resolve, reject) => {
        let data = ``
        let query = ``

        sql.executeQuery(query, data)
			.then(records => {
                return resolve(records)
            })
    });
}
var editProduct = (arg) => {
    return promise = new Promise(async (resolve, reject) => {
        let data = ``
        let query = ``

        sql.executeQuery(query, data)
			.then(records => {
                return resolve(records)
            })
    });
}

var removeProduct = (arg) => {
    return promise = new Promise(async (resolve, reject) => {
        let data = ``
        let query = ``

        sql.executeQuery(query, data)
			.then(records => {
                return resolve(records)
            })
    });
}

module.exports = {
    listWarehouse : listWarehouse,
    createWarehouse : createWarehouse,
    editWarehouse :  editWarehouse,
    removeWarehouse : removeWarehouse,

    listProduct : listProduct,
    createProduct : createProduct,
    editProduct : editProduct,
    removeProduct : removeProduct
}