console.log('Hello world from HTML')

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arr = [
    {name: 'Luong', age: 22},
    {name: 'Long', age: 32},
    {name: 'Ngoc', age: 34},
    {name: 'Cam', age: 22},
]
//filter, find

// let filter = arr.filter((item, index) => {
//     // console.log('>>> check filter: item: ', item, 'index: ', index)
//     return item && item.age === 22;
// });

let finds = arr.find((item, index) => {
    return item && item.age > 32
});

console.log(finds)
