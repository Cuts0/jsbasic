console.log('Hello world from HTML')

let top4 = ['MC', 'Liverpool', 'MU', 'Chelsea']

// for(let i = 1; i <= top4.length; i++){
//     console.log("Top", i,": ", top4[i])
// }

let i = 0;
// while(i < top4.length){
//     console.log("Top", i+1,": ", top4[i]);
//     i++;
// }

let flag = false
while(!flag){
    console.log('Check variable: ', i)
    i++;
    if(i === 10) flag = true
}