console.log('Hello world from HTML')
const a = 5;
const b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
console.log("Fifteen is " + a + b + " and\nnot " + (2 * a + b) + ".");

console.log(`Check ho toi a = ${a}, b = ${10}`)

function run() {
    var foo = "Foo";
    let bar = "Bar";
  
    console.log(foo, bar); // Foo Bar
  
    {
      var moo = "Mooo"
      let baz = "Bazz";
      console.log(moo, baz); // Mooo Bazz
    }
  
    console.log(moo); // Mooo
    console.log(baz); // ReferenceError
}
  
// pham vi cua var bao quat toan bo ham run()
// pham vi cua let chi bao quat trong {}
  run();