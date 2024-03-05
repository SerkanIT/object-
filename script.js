const person = {
  firstName: "Serkan",
  lastName: "Kaya",
  age: 12,
  height: 157,
  gender: "Boy",
  address: {
    TelNumber: 998909936227,
    mail: "serkan@mars.com",
  },
  sayHello: function () {
    console.log("Hello World");
  },
};

// person.sayHello();
// person.sayHello.call();

console.log(person);
person.married = false;

const myComp = {
  nameProduct: "HP",
  allName: "HP Envy x360 15 Convertible",
  gender: "Undefined because its computer🤣",
  year: "3 months",
  address: "United States of America",

  windows: function () {
    console.log(11);
    console.log(this.allName);
  },
};

// myComp.windows.call();
myComp.windows();

myComp.convertible = true;

console.log(myComp.nameProduct);
console.log(myComp.allName);
console.log(myComp.address);
console.log(myComp.year);

// void = qaytarilmaydi return bolmastan //

// key, value, assign() //

var object = {
  a: 1,
  b: 2,
  c: 3,
};

var newObj = {
  d: 4,
  a: 3,
  c: 5,
};

const result = Object.assign(object, newObj);

console.log(result);

// for in => object uchun ishlaydi //
// for of => massiv uchun ishlaydi //
let text = prompt("Wwedite Randomniy Tekst ^_^")

let results = Object.values(text).join('');

// console.log(results);

// for (const key in object) {
//   console.log(person[text]);
// }

person.text = true

person.firstName = text 

for (const key in object) {
   console.log(key + " : " + "Serkan") ;
}