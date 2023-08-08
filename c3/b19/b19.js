console.log('Hello world from HTML')

let sum = (a, b) => {
    return a + b;
}

console.log('check sum: 9 + 6 = ', sum(9, 6))

let obj = {
    name: "Luong",
    address: "Nam Dinh",
    getName: function() {
        return this.name;
    }
}

console.log('>>> get name obj: ', obj.getName())