// Promise 是一个构造函数

// 在 Promise 上， 有两个函数， 分别叫 resolve （成功之后的回调函数） 和 reject （失败之后的回调函数）

// 在 Promise 构造函数的 Prototype 属性上，又一个 .then() 方法， 也就是说，只要是 Promise 构造函数的
// 实例，就可以发访问到 .then() 方法

// 如果Promise 表示一个异步操作； 每当我们 new 一个 Promise 的实力， 找个实例，就表示一个具体的异步操作

//  既然 Promise创建的实例 ，是一个异步操作，那么，这个异步操作的结果，只能有两种状态：
//  5.1 状态1: 异步执行成功了 需要在内部调用成功的回调函数 resolve 把结果返回给调用者
//  5.2 状态2: 异步执行失败了 需要在内部调用失败的回调函数 reject 把结果返回给调用者
//  5.3 由于 Promise 的实例 ，是一个异步操作， 所以，内部拿到 操作的结果后，无法使用 return 把操作结果返回给调用者 
//  这时候，只能使用回调函数的形式，来把成功或失败的结果，返回给调用者

// 6. 我们可以在 new 出来的 Promsie 实例上，调用 .then() 方法 ‘预先’ 为这个 Promize 异步操作 ，指定成功 （resolve） 和 
// 失败 （reject） 回调函数

// new 出来的 promise ，只代表 形式上的 一个异步操作


// 这是一个具体的异步操作，其中， 使用 function 指定一个具体的异步操作
// Promise 只要被创建 立即被执行
// 如果需要调用执行，用function包起来

const fs = require('fs')

function getFileByPath(fpath) {
    return new Promise(function ( resolve, reject) {
        fs.readFile(fpath, 'utf-8', (err, dataStr) => {
            if (err) return reject(err)
            resolve(dataStr)
        })
    })
}


getFileByPath('2.txt')
.then(function (data) {
    console.log('----' + data + '----');
    
}, function (err) {
    console.log(err.message);
    
})

