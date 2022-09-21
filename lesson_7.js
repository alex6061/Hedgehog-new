// =========стрелочные функции===========

const logMessage = message => {
    console.log(message);
}

console.log(logMessage('Привет'));

// const add=(a, b) => {
//     return a + b;
// }

// =======не_явный_возврат=======

// const add = (a, b) => a + b;
// console.log(add(2,3));
//
// const add = () => {
//     console.log(arguments);
// };
//
// add(2, 3, 4, 5, 6, 7,);

//
// const user = {
//     fullName: 'Mango',
//     showName () {
//         console.log('this: ', this);
//         console.log('this.fullName', this.fullName);
//
//         const inner = () => {
//             console.log(`this is inner: `, this)
//         }
//         inner();
//     },
// };
//
// user.showName();


//
// const user = {
//     fullName: `Mango`,
//     showName: function () {
//         console.log(`this: `, this);
//         console.log(`this.fullName: `, this.fullName);
//     },
// };
//
// user.showName();
//
//
// const objA = {
//     x: 5,
//     showX() {
//         console.log(this.x);
//
//         const objB = {
//             y:10,
//             showThis() {
//                 console.log(`this в objB.showThis: `, this);
//             },
//         }
//         objB.showThis();
//     } ,
// };
//
// objA.showX();


// const multByTwo = greaterThenTwo.map ((num => num * 3));
//
// console.log(multByTwo);



// const numbers = [1, 5, 2, 4, 3];
//
// const res = numbers
//     .filter(num => num > 2)
//     .map(num => num * 3)
//     .sort((a, b) => a - b);
//
// console.log(res);
//
// const players = [
//         {id: `id-1`, tag: `Mango`, isOnline: true, rank: 800},
//         {id: `id-2`, tag: `Poly`, isOnline: true, rank: 600},
//         {id: `id-3`, tag: `Ajax`, isOnline: true, rank: 100},
//         {id: `id-4`, tag: `kiwi`, isOnline: true, rank: 400},
// ];
//
//
// const onlineAndSorted = players
//     .filter(player => player.isOnline)
//     .sort((prevPlayer, nextPlayer) => prevPlayer.rank - nextPlayer.rank);
//
// console.table(onlineAndSorted);

//
// const updatedPlayers = players.map (function(player){
//         return {
//             ...player,
//             points: player.points + player.points * 0.1,
//         };
//     });



const players = [
         {id: `id-1`, name: `Mango`, timePlayed: 310, points: 54, online: false },
         {id: `id-2`, name: `Poly`, timePlayed: 470, points: 48, online: true },
         {id: `id-3`, name: `Ajax`, timePlayed: 230, points: 78, online: true },
         {id: `id-4`, name: `kiwi`, timePlayed: 80, points: 95, online: false },
]




//
//
// const updatedPlayers = players.map(function(player){
//     return {
//         ...player,
//         points: player.points + player.points * 0.1,
//     };
// });
//
// console.table(updatedPlayers);

// ====1й способ====

// const updatedPlayers = players.map(player =>{
//         return{
//             ...player,
//         points: player.points + player.points * 0.1,
//     };
// });
//
// console.table(updatedPlayers);


// ====2й способ====
//
// const updatedPlayers = players.map(player => ({
//
//         ...player,
//         points: player.points + player.points * 0.1,
// }));
//
// console.table(updatedPlayers);


// ====3й способ====

const updatedPlayers = players.map(player =>
        player.id === playerIdToUpdate
         ? { ...player, timePlayed: player.timePlayed +50 }
            : player,

);

console.table(updatedPlayers);





