console.log('Hello world from HTML')

// key: value
let obj = {
    name: 'Luong',
    address: 'Nam Dinh'
};

let b = 'name';
obj[b] = "Long"

console.log('what is your name?', `My name is: `, obj['name'])
console.log('where are you from?', `I'm in: `, obj['address'])