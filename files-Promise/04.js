const fs = require('fs')

function getFileByPath(fpath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fpath, 'utf-8', (err, dataStr) => {
            if (err) return reject(err)
            resolve(dataStr)
        })
    })
}


// getFileByPath('1.txt')
//     .then(function (data) {
//         console.log('----' + data + '----')
        
//         getFileByPath('2.txt')
//             .then(function (data) {
//                 console.log('----' + data + '----')

//                 getFileByPath('3.txt')
//                     .then(function (data) {
//                         console.log('----' + data + '----')


//                     })

//             })
//     })

getFileByPath('1.txt')
.then(function (data) {
    console.log(data)
    return getFileByPath('2.txt')
})
.then(function (data) {
    console.log(data)
    return getFileByPath('3.txt')
})
.then(function (data) {
    console.log(data)
})
.catch(function (err) {
    console.log( err.message );
    
})

console.log('okokok')