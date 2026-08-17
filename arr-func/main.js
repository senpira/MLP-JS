// - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'

// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str1 = "hello world"
// let str2 = "lorem ipsum"
// let str3 = "javascript is cool"
// let arr = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL']
// console.log(arr.map((str) => str.toLowerCase() ));

// function strLenght(strng){
// console.log(strng.length);

// }
// strLenght(str1)
// strLenght(str2)
// strLenght(str3)

// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
// console.log(str1.toUpperCase());
// console.log(str2.toUpperCase());
// console.log(str3.toUpperCase());

// // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     function stringToarray(x){
//         return x.split(" ")
//     }
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// console.log(arr)



// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

// let numarr = [10,8,-7,55,987,-1011,0,1050,0];


// let strarr = numarr.map((a) => String(a) )
// console.log(strarr)

// // - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// let nums = [11,21,3];

// function sortNums(arr, direction){
// arr.sort(function (a, b){
// if(direction === 'ascending'){
//     return a - b
// }
// else if (direction === 'descending'){
//     return b - a
// }
// else{
//     console.log('wrong direction input')
// }
// })
// return arr
// }
// console.log(sortNums(nums, 'ascending'))
// console.log(sortNums(nums, 'descending'))


//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

//  const uid = function(){
//         return Date.now().toString(36) + Math.random().toString(36).substr(2);
//     }
    
//     console.log(uid())

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // coursesAndDurationArray.sort(function(a,b){
// //     return b.monthDuration - a.monthDuration
// // })
// // console.log(coursesAndDurationArray)

// // console.log(coursesAndDurationArray.filter((obj) => obj.monthDuration > 5))

// coursesAndDurationArray = coursesAndDurationArray.map((obj , num) => {
// return{
//     ...obj, 
//     id : num
// }
// })
// console.log(coursesAndDurationArray)











//  описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }



const deck = [
    { cardSuit: 'spade', value: '6', color: 'black' },
    { cardSuit: 'spade', value: '7', color: 'black' },
    { cardSuit: 'spade', value: '8', color: 'black' },
    { cardSuit: 'spade', value: '9', color: 'black' },
    { cardSuit: 'spade', value: '10', color: 'black' },
    { cardSuit: 'spade', value: 'J', color: 'black' },
    { cardSuit: 'spade', value: 'Q', color: 'black' },
    { cardSuit: 'spade', value: 'K', color: 'black' },
    { cardSuit: 'spade', value: 'A', color: 'black' },
    { cardSuit: 'heart', value: '6', color: 'red' },
    { cardSuit: 'heart', value: '7', color: 'red' },
    { cardSuit: 'heart', value: '8', color: 'red' },
    { cardSuit: 'heart', value: '9', color: 'red' },
    { cardSuit: 'heart', value: '10', color: 'red' },
    { cardSuit: 'heart', value: 'J', color: 'red' },
    { cardSuit: 'heart', value: 'Q', color: 'red' },
    { cardSuit: 'heart', value: 'K', color: 'red' },
    { cardSuit: 'heart', value: 'A', color: 'red' },
    { cardSuit: 'diamond', value: '6', color: 'red' },
    { cardSuit: 'diamond', value: '7', color: 'red' },
    { cardSuit: 'diamond', value: '8', color: 'red' },
    { cardSuit: 'diamond', value: '9', color: 'red' },
    { cardSuit: 'diamond', value: '10', color: 'red' },
    { cardSuit: 'diamond', value: 'J', color: 'red' },
    { cardSuit: 'diamond', value: 'Q', color: 'red' },
    { cardSuit: 'diamond', value: 'K', color: 'red' },
    { cardSuit: 'diamond', value: 'A', color: 'red' },
    { cardSuit: 'club', value: '6', color: 'black' },
    { cardSuit: 'club', value: '7', color: 'black' },
    { cardSuit: 'club', value: '8', color: 'black' },
    { cardSuit: 'club', value: '9', color: 'black' },
    { cardSuit: 'club', value: '10', color: 'black' },
    { cardSuit: 'club', value: 'J', color: 'black' },
    { cardSuit: 'club', value: 'Q', color: 'black' },
    { cardSuit: 'club', value: 'K', color: 'black' },
    { cardSuit: 'club', value: 'A', color: 'black' }
];
// console.log(deck.find((card, id)=> card.cardSuit === 'spade' && card.value === "A"

// ))
// let allSix = []
// allSix = deck.filter((card) => card.value === '6')
// console.log(allSix)
// let allRed = []
// allRed = deck.filter((card)=> card.color === "red")
// console.log(allRed)
// let allDiamond = []
// allDiamond = deck.filter((card) => card.cardSuit ==="diamond")
// console.log(allDiamond)
// let myCondition = []
// myCondition = deck.filter((card) => (parseInt(card.value) > 8 || card.value === "A" || card.value === "K" || card.value === "Q" || card.value === "J") && card.cardSuit ==="club")  
// console.log(myCondition)

// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// let objsass = []
// objsass = coursesArray.filter((value) => value.modules.includes("sass"))
// console.log(objsass)



// let objdocker = []
// objdocker = coursesArray.filter((value) => value.modules.includes("docker"))
// console.log(objdocker)
let obj