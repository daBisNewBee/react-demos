// var name = 'lili', age = 15;
// var obj = {
//     name: 'bob',
//     objage: this.age,
//     myFuc: function() {
//         console.log(this.name + ' ' + this.age);
//     }
// };
// console.log(obj.objage);
// obj.myFuc();

//  TODO: 与预期不符合
// id1: 42
// id2: undefined
// 参考: https://blog.csdn.net/zxl1990_ok/article/details/103228544  
function foo() {
    setTimeout(() => {
        console.log('id1:', this.id);
    }, 100);
    setTimeout(function() {
        console.log('id2:', this.id);
    }, 100);
}

var id = 21;

foo.call({ id : 42});