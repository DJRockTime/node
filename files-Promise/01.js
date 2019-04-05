const fs = require('fs')

const path = require('path')



function getFileByPath(fpath, callback) {
    fs.readFile(path.join(__dirname, 'files/1.txt'), 'utf-8', (err, datastr) => {
        // if (err) throw err
        if (err) return callback(err)
        // console.log(datastr)
        // return datastr
        callback(null, datastr)
    })
}

let result = getFileByPath(path.join(__dirname, './files/1.txt'), (err, datastr) => {
    // console.log(datastr + '=====')
    if(err) return console.log(err.message)
    console.log(result)
})
