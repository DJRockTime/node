const fs = require('fs')

const path = require('path')



function getFileByPath(fpath, succCb, errCb) {
    fs.readFile(path.join(__dirname, 'files/1.txt'), 'utf-8', (err, datastr) => {

        if (err) return callback(err)
      
        succCb(datastr)
    })
}

// getFileByPath(path.join(__dirname, './files/1.txt'), function (data) {
//     console.log(data + '哇哈哈，成功了')
// }, function (err) {
//     console.log('失败的结果，我们用失败回调处理一下！' + 'err.message')
// })

getFileByPath(path.join(__dirname, './files/1.txt'),function (data) {
    console.log(data);
    getFileByPath(path.join(__dirname, './files/2.txt'), function (data) {
        console.log(data);
        getFileByPath(path.join(__dirname, './files/3.txt'), function (data) {
            console.log();
            
        })
        
    })
    
})

