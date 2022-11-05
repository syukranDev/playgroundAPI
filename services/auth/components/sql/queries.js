const axios  = require('axios');
const test = require('../../model/auth');
// const _ = require('lodash');
const sql = require("./index");
const utils = require('../utils');
const logger = require('../logger').logger;
const config = require('config');
const { create } = require('lodash');
const bcrypt = require('bcrypt')

var authList = (arg) => {
    return promise = new Promise(async (resolve, reject) => {
       ///....codeGoeshere
        let data = { "name": "Syukran"}
        let query = `SELECT *  FROM [${config.db.database}].[dbo].[user]`

       sql.executeQuery(query, data)
			.then(records => {
                return resolve(records)
            })


            
    // return data


    });
}


var createUser = (arg) => {
    return promise = new Promise(async (resolve, reject) => {
       
        if (arg.body.username && arg.body.password) {
            let hashedPassword = await bcrypt.hash(arg.body.password,10)

            let query = `SELECT * FROM [${config.db.database}].[dbo].[user] WHERE username = @username`
            let data = {
                "username" : arg.body.username,
            }
            sql.executeQuery(query, data)
                        .then(records => {
                            console.log('Total records ==>' + records.length)
                            if (records.length === 0) {
                                let query = `INSERT INTO [${config.db.database}].[dbo].[user] (username, password) VALUES (@username, @password)`
                                let data = {
                                    "username" : arg.body.username,
                                    "password" : hashedPassword
                                }
                                sql.executeQuery(query, data)
                                    .then( ()=> {
                                        resolve({ 
                                            "mesage" : "Successful"})
                                    })
                                    .catch(err => { console.log(err.message)})
                            } else {
                                resolve({
                                    "message" : "User already exist!"
                                })
                            }
                        })
                        .catch(err => { 
                            console.log(err.message)
                        })


           
            
        }

    });
}


module.exports = {
    authList :  authList,
    createUser : createUser
}