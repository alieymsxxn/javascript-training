const id = Symbol(123)
const anotherId = Symbol(123)
// console.log(id == anotherId);
const arr = [1, 2, 3]
const obj = {
    name: 'Mohsin'
}
const f = function() {
    console.log('Hi');
}

console.log(typeof id, typeof f, typeof obj, typeof arr);