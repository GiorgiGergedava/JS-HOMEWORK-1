// Homework
//  1

let newNumber = 100;
if (newNumber < 50) {
    console.log('less than 50');
}
else if (newNumber > 20) {
    console.log('more than 20');
}
else {
    console.log('error');
}



// let resultNew = newNumber < 50 ? 'less than 50' : newNumber > 20 ? 'more than 20' : 'error';




//  2
let studentName = "მარიამ";

switch (studentName) {
    case "მარიამ":
        console.log(true);

        break;

    default:
        console.log(false);
        break;
}



// 3

let Username = 'mariam'

Username || true
Username = 'mariam' && true
console.log(true);