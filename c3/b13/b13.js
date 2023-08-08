console.log('Hello world from HTML')

let arrTop4 = ['Liver', 'Chelsea', 'Mu', 'Man city']

// console.log(arrTop4[1].length)

let i = 0;
while(i < arrTop4.length){
    if(arrTop4[i].length === 2){
        console.log('Top club:', i+1, arrTop4[i]);
    }else if(arrTop4[i].length === 5){
        console.log('Top club:', i+1, arrTop4[i]);
    }else{
        // console.log('Top club:', i+1, arrTop4[i]);
    }
    i++;
}