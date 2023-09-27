const regexp = /(diana){2,3}/i;
// ^ - начинается с выражения
// & - кончается 
// i - case insensetive (с маленькой и большой)
// (выражение){количество,повторения} но только слитно (между количеством и повторения к примеру от 2 до 5)
// (выражение){количество, } от количество и больше
// const str = regexp.test('dianadianadiana');
// console.log(str);

// ^((2[0-3])|([0-1][0-9])):([0-5][0-9])$ время

// function Find(str,name,lastname){
//     const regexp = new RegExp(`${name}|${lastname}`,'i' );
//     return regexp.test(str);
// }

// const str = 'DIANAAhadovadinaA';
// const name = prompt('name:');
// const lastname = prompt('Lastname:');Dina
// console.log(Find(str,name, lastname));

function IsStrContains(str,allowWords){
    const regexp = new RegExp(allowedWords.join('|'), 'gi');
    return regexp.test(str);
}
const search = prompt('search word:');
const allowedWords = ['Dina','Arkhun', 'Samra']

console.log(IsStrContains(search,allowedWords));