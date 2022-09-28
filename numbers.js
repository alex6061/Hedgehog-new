//5 String
//
// const name = `Alex`
// const age = 31

// const output = `Привет, меня зовут ${name}, и мне ${age > 20 ? `A` : `B`}  лет`
//
//
// console.log(name)
// console.log(output)


// for (let age = 2; age < 10; i++) {
//     if (age % 2 === 0) {
//         const age = 30
//
//         console.log('годов')
//     }   else {
//         console.log('лет')
//     }
// }


// const output = '' +
//     '<div> this is div </div>' +
//     '<p>this is o</p>'
//
// console.log(output);


// const name = 'Alexey'
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
//
// console.log(name[2])
// console.log(name.indexOf(''))
// console.log(name.toLowerCase.startsWith('alex')) // проверяет, совпадает ли начало .name с текстом
// console.log(name.endsWith(`ex`)) // проверяет, совпадает ли окончание  .name с текстом
// console.log(name. repeat(3))

// const string = '     password      ';
// console.log(string.trim()); // trim - убирает пробелы в строке\
// console.log(string.trimLeft()); // trim - убирает пробелы в строке\
// console.log(string.trimRight()); // trim - убирает пробелы в строке\



function logPerson (s, name, age) {
        console.log(s, name, age)

    if (age < 0) {
        age = `Еще не родился`;
    }
    return  `${s[0]${name}${s[1]}${age}${s[2]}` ;
    
}

 const personName = 'Alex'
 const personAge = 31

 const output =  logPerson `Имя: ${personName}, возраст: ${personAge}!`
 console.log(output);



//
// function isEven(year) {
//     if (age % 2 === 0) {
//         years = 'Годов'
//     }   else {
//         year = 'Лет'
//     }
//     return year
// }
//

