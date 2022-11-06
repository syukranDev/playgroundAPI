const sql = require('mssql/msnodesqlv8')

console.log('Testing db connection..................')

var config = {
    server : "DESKTOP-NHJMGL4",
    database: "warehouse_database",
    driver : "msnodesqlv8",
    options: {
        trustedConnection: true
      }
}

sql.connect(config, err => {
    if (err) { throw err }
    console.log("Connection SQL successful.....")
    new sql.Request().query('SELECT * FROM dbo.user', (err, query) => [
        console.dir(result)
    ])
})


sql.on('error', err => {
    console.log("Sql db connection error", err)
})