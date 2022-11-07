// const axios  = require('axios');
const userAPI = require('../../model/user');
// const _ = require('lodash');
const sql = require("./index");
// const utils = require('../utils');
const logger = require('../logger').logger;
const config = require('config');
// const { create } = require('lodash');
const bcrypt = require('bcrypt')

var listUser = (arg) => {
    return promise = new Promise(async (resolve, reject) => {
       ///....codeGoeshere
        let data = {}
        let query = `SELECT *  FROM [${config.db.database}].[dbo].[user]`

       sql.executeQuery(query, data)
			.then(records => {
                return resolve(records)
            }).catch(err => {
                logger.error({
                    path: "dbQueries/listUser/catch",
                    query: query,
                    queryData: data,
                    message: err && err.message,
                    stack: err && err.stack
                })
                return reject({
                    statusCode: 500,
                    message: "System Error: Unable to reach listUser API."
                });
            })
    });
}


var createUser = (arg) => {
    return promise = new Promise(async (resolve, reject) => {
        const isUserAdmin = await isCheckAdmin(arg)

        if (arg.body.username && arg.body.password && isUserAdmin == 1) {
            let hashedPassword = await bcrypt.hash(arg.body.password,10)

            let query = `SELECT * FROM [${config.db.database}].[dbo].[user] WHERE username = @username`
            let data = {
                "username" : arg.body.username,
            }
            sql.executeQuery(query, data)
                        .then(records => {
                            if (records.length === 0) {

                                // status = 0 - Request level, awating approve by Admin
                                // status =  1 - Approved @ Active
                                // status = 2 - Deactivated 

                                let query = `INSERT INTO [${config.db.database}].[dbo].[user] (username, password, access_level, status, created_date, updated_date) 
                                             VALUES (@username, @password, @access_level, @status, GETDATE(), GETDATE())`
                                let data = {
                                    "username" : arg.body.username,
                                    "password" : hashedPassword,
                                    "access_level" : arg.body.access_level,
                                    "status" : 0 //awaiting approve
                                }
                                sql.executeQuery(query, data)
                                    .then( ()=> {
                                        resolve({ 
                                            "mesage" : "Add New User Request successfully added"})
                                    })
                                    .catch(err => { console.log(err.message)})
                            } else {
                                resolve({
                                    "message" : "User already exist!"
                                })
                            }
                        })
                        .catch(err => { 
                            logger.error({
                                path: "dbQueries/createUser/catch",
                                query: query,
                                queryData: data,
                                message: err && err.message,
                                stack: err && err.stack
                            })
                            return reject({
                                statusCode: 500,
                                message: "System Error: Unable to reach createUser API."
                            });
                        })
 
        } else {
            return resolve(isUserAdmin)
        }

    });
}

var approveUser = (arg) => {
    return promise = new Promise(async (resolve, reject) => {
        
    })
}

var removeUser = (arg) => {
    return promise = new Promise(async (resolve, reject) => {
        const isUserApproved = await isApprovedAdmin(arg)
        const isUserAdmin = await isUserPowerUser(arg)

        let query = `DELETE FROM [${config.db.database}].[dbo].[user] WHERE username=@user`
        let data = { "username" : arg.body.user}

        if (isUserApproved == 1 && isUserAdmin == 1) {
            sql.executeQuery(query, data)
                .then((s) => { resolve({
                    "Action" : "Remove User",
                    "message" : "User is removed succesfully."
                })
            })
        } else {
            resolve({
                "Action" : "Remove User",
                "message" : "Access denied! User login is not approved Admin"
            })
        }

    })
}

var isCheckAdmin = (arg) => {
    let query = `SELECT * FROM [${config.db.database}].[dbo].[user] WHERE username=@loginUser and status=1`
    let data = { "loginUser" : arg.body.loginUser }

    return sql.executeQuery(query, data).then(res => {
        if (res && res.length >= 1){
            // console.log(1)
            return 1
            
        } else {
            return ({
                "message" : "No Privilege!"
            })
        }
    }).catch(err => {
        return ({
            message: "System Error - isCheckAdmin failed " + err.message
        });
    })
}

var isUserPowerUser = (arg) => {
    let query = `SELECT * FROM [${config.db.database}].[dbo].[user] WHERE username=@loginUser AND access_level='Admin' and status=1`
    let data = { "loginUser" : arg.body.loginUser }

    return sql.executeQuery(query, data).then(res => {
        if (res && res.length >= 1){
            // console.log(1)
            return 1
            
        } else {
            return ({
                "message" : "No Privilege!"
            })
        }
    }).catch(err => {
        return ({
            message: "System Error - isCheckAdmin failed " + err.message
        });
    })
}

module.exports = {
    listUser :  listUser,
    createUser : createUser,
    removeUser : removeUser
}