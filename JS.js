// // $(document).ready(function() {
// //     $('.header-burger').click(function(event) {
// //         $('.header-burger,.header-menu').toggleClass('active');
// //     });
// // });
//
//
// const onGetPositionSuccess = function (position) {
//     console.log('Это вызов onGetPositionSuccess');
//     console.log(position);
// };
//
// const onGetPositionError = function (error) {
//     console.log('это вызов onGetPositionError');
//     console.log(error);
// }
//
// window.navigator.geolocation.getCurrentPosition(
//     onGetPositionSuccess,
//     onGetPositionError,
// );

//
// const callback = function ()
// {
//     console.log('Через 2 секунды внутри колбека в таймауте');
// };
//
// console.log('В коде перед таймаутом');
// setTimeout(callback, 2000);
//
// console.log('в коде после таймаута');
//
//
//
// const filter = function (array, test) {
//     const filteredArray = [];
//
//     for (const el of array) {
//         console.log(el);
//         const passed = test(el);
//
//         if (passed) {
//             filteredArray.push(el);
//         }
//     }
//     return filteredArray;
// };



// 1. надо передать фунцию
// 2. функция получает элекмент массива
// 3. если элемент массива удовлетворяет условию, то функция вернет true;
// 4. если элемент массива НЕ удовлетворяет условию, то функция вернет false;


// const callback1 = function (value) {
//     return value >= 3;
// };
//
// const callback2 = function(value) {
//     return value <= 3;
// }
//
// console.log(callback1)
// console.log(callback2)
//
// const r1 = filter ([1,2,3,4,5,6,7,8,9], callback1)
//
// console.log(r1);
//
// const r2 = filter ([1,2,3,4,5,6,7], callback2);
//
// console.log(r2);


// =====================Zamikaniya==================

// const fnA = function (paramert) {
//     const innerVariable = 'значение внутренней переменной функции fnA';
//
//     const innerFunction = function () {
//         console.log(innerVariable);
//         console.log('Это вызов innerFunction');
//
//     }
//     return innerFunction;
// }
//
// const fnB = fnA(555);
// fnB();
//
// console.log(fnB);


// ========Замыкания===============
//
// const makeSheff = function (name) {
//     const innerVar = 555;
//
//     const makeDish = function (dish) {
//         console.log(innerVar);
//         console.log(`${name} готовит ${dish}`);
//     }
//     return makeDish;
// };
//
// const mango = makeSheff (`Mango`);
//
// mango('котлеты');
// mango('пирожок');
//
//
// const poly = makeSheff(`Poly`);
//
// poly(`чай`);
// poly(`омлет`);
//
// console.dir(mango);

// ===========end=============

//
// const floatingPoint = 3.11611;
// const someInt = Math.round (floatingPoint);
// const withDecimails = Number (floatingPoint.toFixed(2));
//
// const myLibFactory = function () {
//     let value = 0;
//
//     return {
//         add(num) {
//             value +=num;
//         },
//         getValue() {
//             return value;
//         },
//     };
// };



// const myLib = myLibFactory();
//
// console.log(myLib);
//
//
// const myLibFactory = function () {
//     let value = 0;
//     const add = function () {
//         value += num;
//     };
//
//     return {
//         add: add,
//         getValue() {
//             return value;
//         },
//     };
// };
//
// const myLib = myLibFactory();
//
// console.log(myLib);


// ============приватные переменные ================

    //
    // const salaryManagerFactory = function (employeeName, baseSalary = 0) {
    //         let salary = baseSalary;
    //     return{
    //         raise(amount){
    //            salary += amount;
    //         },
    //         lower(amount){
    //             salary -= amount;
    //         },
    //         current(){
    //             return `текущая зарплата ${employeeName} - ${salary}`;
    //         },
    //     };
    // };
    //
    // const salaryManager = salaryManagerFactory ('Mango', 5000);
    //
    // // console.dir(salaryManager.current());
    //
    // console.log (salaryManager);




    // =====================стрелочные функции================
//         const add = function (a,b,c) {
//
//         console.log( a, b, c);
//         return a + b + c;
//     };
//                                         // если параметр один(например а, то скобки не обязательны,
//                                         //если параметров нет, то обязательны пустые скобки "()"
//
//     const addArrow = (a, b, c) => {
//         console.log(a, b, c);
//         return a + b + c;
//     };
//
//     const addArrowNew = (...args) => {
//             console.log(args);
//         return a + b + c;
//     };
//
//
//
// console.log(add(5,10,15));
// console.log(addArrow(5,10,15));


//
//
//
//
// const fnA = function () {
//     return {
//         a: 5,
//     };
// };
//
// console.log(fnA());
//
// // const arrowFnA = () => {
// //     return {
// //         arrowA: 5,
// //     };
// // };
//
// console.log(fnA());
//
// const arrowFnA = () => ({ arrowA: 5 }); //необходимо оборачивать объекты в круглые скобки
//
// console.log(arrowFnA());
//
//
//
//



// const callback2 = function(value) {
//     return value <= 3;
// }

// console.log(callback1)
// console.log(callback2);``//
//
//
// const r1 = filter ([1,2,3,4,5,6,8,7,9], value => value >=3);
//
// console.log(r1);
//
// const r2 = filter([1,2,3,4,5,6,7], value => value <= 4);
//
// console.log(r2);
//
// const r3 = filter(fruits, fruit => quantity >= 120);
// console.log(r3);
//
// const getFruitsWithQuantity = fruit => fruit.quantity >= 120;
//
// $(".autoplay").slick({
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 1000
// });



//
// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log(`showTAg -> this`, this);
//     },
// };
//
// user.showTag();



 //
 //
 // console.log( '[] === []: ', [] === []);
 // console.log( `{} === {}: `, {} === {});
 //
 //
 //    console.log(
 //        'function() {} === function () {}: ',
 //        function () {} === function () {} ,
 //        );
 //
 //
 //    const fnA = function () {
 //        console.log('hello');
 //    };
 //
 //    const fnB = fnA;
 //
 //    console.log(`fnB === fnA: `, fnB === fnA);


// const foo = function () {
//     console.log('foo -> this', this);
// };
//
// foo();

//
//
// const showTag = function () {
//     console.log(`showTag -> this`, this);
//     console.log(`showTag -> this.tag`, this.tag);
// }
//
//

// const user = {
//     tag: 'Mango',
//     showTAg() {
//         console.log(`showTag -> this`, this);
//         console.log('showTag -> this.tag', this.tag)
//     }
// }

//
// const invokeAction = function (action) {
//     console.log(action);
//
//     action();
// }
//
// invokeAction(user.showTag())


// const bookShelf = {
//     authors: ["111", "222"],
//     getAuthors() {
//         return this.authors;
//     },
//
//     addAuthor(authorName) {
//         this.authors.push(authorName);
//     },
// };
//
// console.log(bookShelf.getAuthors());
// bookShelf.addAuthor("Ли Танит");
// console.log(bookShelf.getAuthors());



// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         console.log('changeColor -> this', this)
//     }
//
// const sweater = {
//     color: 'teal',
// }
//
// sweater.updateColor = changeColor
//
// return sweater.updateColor
//
// }
//
// const swapColor = makeChangeColor();
//
// swapColor('blue')


function Human(name, age) {
    this.name = name;
    this.age = age;

    this.sayHello = function () {
        console.log(`Hellow my name is ${this.name}`);
    };
    this.birthday = function () {
        this.age++;  // +=1
    };

}
//
// const bobby = {
//     name: 'Bobby',
//     age: 15,
// }
//
//
// const peter = {
//     name: '{Peter}',
//     age: 20,
// }

// const bobby = new Human('bobby', 15);
// const peter = new Human('peter', 20);
//
// console.log(bobby);
// console.log(peter);

// bobby.sayHello();

// bobby.birthday();
// console.log(bobby.age);

const animal = {
    legs: 4,
};

const cat = Object.create(animal);
cat.eyes = `yellow`;
cat.legs = 3;

console.log(cat.legs);
console.log(cat.legs);
console.log(cat.eyes);

console.log(cat.__proto__.legs);


























