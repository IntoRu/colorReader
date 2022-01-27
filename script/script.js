// подключаем базу цветов
// import ral from './color.js'
// импорт экспорт не работает без лайва
// если с ипортом то не забываем type='module'

// получаем доступ к дом 

// это строка нужна для игнорирования регистра
document.querySelector('input').addEventListener('input', function() {
    this.value = this.value.toUpperCase()
  }) // это для игнорирования регистра

let inp = document.querySelector('input')
let bt = document.querySelector('button')
let out = document.querySelector('.block4')
let p = document.querySelector('.block3')


// проверяем есть ли цвет в массиве
bt.onclick = function(){
    if(inp.value){// что бы при пустом инпуте при нажатии кнопки ничего не происходило
        if(inp.value in ral) {
            out.style.backgroundColor = ral[inp.value][0]// выводим значение массива
            p.innerHTML = inp.value +' --- '+ral[inp.value][1]// выводим ключь массива
        }
        // теперь по буквам ищем
        else if(inp.value in ral1) {
            out.style.backgroundColor = ral1[inp.value][0]// выводим значение массива
            p.innerHTML = ral1[inp.value][1] +' --- '+inp.value// выводим ключь массива
        }
        
        else{
            p.innerHTML = 'нет в базе'// если цвета нет в базе
            out.style.backgroundColor = 'white'// обнуляем цвет
        }
        inp.value = ''
    }
   
}


// // пытаемся делать тоже но через буквенное обозначение рала

// // получаем доступ
// let inT = document.querySelector('.inT')
// let btT = document.querySelector('.btT')

// // // находим рал по буквенному обозначению
// // function find(object, value) {
// //     return Object.keys(object).find(key => object[key][1] === value);
// // }

// // console.log(find(ral, 'RRD'))// выводим рал по буквенному обозначению
// // console.log(ral[7015][1])// выводим буквенное обозначение рала

// // проверяем есть ли цвет в массиве  по буквам
// btT.onclick = function(){
//     if(inT.value){// что бы при пустом инпуте при нажатии кнопки ничего не происходило
//         if(inT.value in ral1) {
//             out.style.backgroundColor = ral1[inT.value][0]// выводим значение массива
//             p.innerHTML = inT.value +' --- '+ral1[inT.value][1]// выводим ключь массива
//         }
        
//         else{
//             p.innerHTML = 'нет в базе'// если цвета нет в базе
//             out.style.backgroundColor = 'white'// обнуляем цвет
//         }
//         inT.value = ''
//     }
   
// }


