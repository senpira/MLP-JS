
let numberArr = [ 2 , 3 , 6 , 9 , 3]
let nameArray=["bob", "john", "jess", "juliet", "donny"];

// function area(a, b){
//     let res = a * b
//     return res
// }
// console.log(area(8 , 2))
// function circArea(r){
//     let result = r * r;
//     return result
// }
// console.log(circArea(5))
// function cylindArea(height, radius){
// let result = height* radius;
// return result
// }
// console.log(cylindArea(5, 8))
// function oneByOne(arr){
//     for (let arrElement of arr) {
//         console.log(arrElement)

//     }
// }

// oneByOne(nameArray)
// function paragraph() {
//   let text = arguments[0]
//   document.write("<p>" + text + "</p>")
// }
// paragraph("hello my name is bob")
// function list(){
//     document.write("<ul>"+ "<li>"+arguments[0]+"</li>"+ "<li>"+arguments[0]+"</li>"+ "<li>"+arguments[0]+"</li>"+ "</ul>")
// }
// list("only option")
// function prefList(){
//  let litems = ""
//     for(i = 0; i < arguments.length; i++){
//        litems = litems + ("<li>"+arguments[i]+"</li> <br>")}
//        document.write("<ul>"+litems+"</ul>")
       
// }

// prefList("first", "second" , "third", "fourth")
//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function arrList(arr){
//     let listItem = ""
//     for(item of arr){
//         listItem = listItem + ("<li>" + item + "</li>")
//     }
//     document.write("<ul>" + listItem + "</ul>")
// }
// arrList(nameArray)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// function arrObjSorter(arr){
//     for(let obj of arr){
//         for(let item of Object.values(obj)){
//             document.write(item + " ")
//         }
//             document.write("<br>")
//     }

// }
// let objArray = [
//     {id: 1, name: "bob", age: 25}, 
//     {id: 2, name: "jess", age: 30},
//     {id: 3, name: "donny", age: 35}
// ]
// arrObjSorter(objArray)


//- створити функцію яка повертає найменьше число з масиву
// function smallestNum(arr){
//     let result = arr[0]
//     for(let num of arr){
//         if(result > num){
//             result = num 
//         }
//                 else{
//             continue
//         }
        
//     }
//     return result
// }
// 
// document.write(smallestNum(numberArr))

//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// function sumArr(arr){
//     let result = 0
//     for(let num of arr){
//         result += num
//     }
//     return result
// }
// document.write(sumArr(numberArr))

//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// function swap(arr,index1,index2){
// let buffer1 = arr[index1]
// let buffer2 = arr[index2]
// arr[index1] = buffer2
// arr[index2] = buffer1
// return arr
// }
// document.write([11,22,33,44] +"<br>")
// document.write( swap([11,22,33,44],1,3) )

//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
//of Object.keys
function exchange(sumUAH, currencyValues, exchangeCurrency){
    let currencyValue = null
    for(let object of currencyValues){
        if(object["currency"] == exchangeCurrency){
            currencyValue = object["value"]
        }
    }
    let result = sumUAH/currencyValue
    return result
}
document.write(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))