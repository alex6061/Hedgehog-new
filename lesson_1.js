
//
// const firstName = `Alex`;
// const age = 31;
//
// console.log(`имя человека ` + firstName + `, а возраст человека: ` + age)
//
// const lastName = prompt(`Введите фамилию`);

//alert(firstName + '' + lastName);

// 3 операторы

// const currentYear = 2022;
// const birthYear = 1991;
// const age = currentYear - birthYear;
//
// console.log(age);

// const a = 10
// const b = 5
//
// let c = 32;

// c = c + a;
// c += a;
//
// c -= a;
//

// 3 операторы;
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(currentYear)
// console.log(c)

// 4. основные типы данных==============================================

// const isProgramer = true
// const name = `Vladilen`
// const age = 31
//
// let x
//
// console.log(typeof isProgramer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)


// 5 Приоритет операторов
//
// const fullAge = 31
// const birthYear = 1991
// const currentYear = 2022
//
// const isFullAge = currentYear - birthYear >= fullAge

//
// const courseStatus = ''
//
// if (courseStatus === 'ready') {
//     console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//     console.log('Курс пока находится в процессе разработки');
// } else {
//     console.log(`Курс не получился`)
// }
//
// const num1 = 42; // number
// const num2 = '42'; // string
//
// console.log(num1 === num2);
//
// const isReady = true
//
// if (isReady === true) {
//
//     if (isReady) {
//         console.log(`Все готово!`)
//     } else {
//         console.log(`Все не готово`)
//     }
// }console.log(isFullAge)


//  тернарное выражение

// isReady ? console.log(`Все готово`) : console.log(`Все не готово`);


// 7 Булевая логика

// 8 Функции

// function calculateAge(year) {
//     return 2022 - year
// }
// const myAge = calculateAge(1991)
// console.log(myAge)

//или
// console.log(calculateAge(1991))
// console.log(calculateAge(1952))
// console.log(calculateAge(1965))
//
// function logInfoAbout(name, year) {
//     const age = calculateAge(year)
//     if (age > 0) {
//         console.log('человек по имени ' + name + ' сейчас имеет возраст ' + age);
//     } else {
//         console.log('Вообще-то это будущее')
//     }
// }
//
// logInfoAbout('Алексей', 1991)
// logInfoAbout('Julia', 2000)
// logInfoAbout('Andrea', 2023)

// 9. Массивы

// const cars = ['Мазда', 'Опель', 'Форд']

// const cars = new Array('Мазда', 'Опель', 'Форд')  -- старый вариант;
//
// console.log(cars)
//
// console.log(cars[0])
// console.log(cars[1])
// console.log(cars[2])
// console.log(cars.length)
//
// cars[0] = 'Porsche'
// console.log(cars)
//
// cars[cars.length] = 'Mazda'
// console.log(cars)


// 10 циклы

// const cars = ['Мазда', 'Опель', 'Форд', 'Porsche']

// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]
//     console.log(car)
// }

// for (let car of cars) {
//     console.log(car)
// }

//11 Объекты
// в объект группируются элементы массива
// const person = {
//     firstName: 'Garkusha',
//     lastName: 'Alex',
//     year: 1991,
//     languages: ['ru','eng','De'],
//     hasWife: false,
//     greet: function() {
//         console.log('greet from person')
//     }
// }


//
// console.log(person.languages[1])
// console.log(person)
// const key = 'year'
// console.log(person[key])
// person.greet()
//
// person.isprogrammer = true
//
// person.town = 'China'
// person.city = 'Peking'
//
// console.log(person)
//




























