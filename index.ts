// semi colon true: OK
const hello = (): void => {
  console.log('helload');
};

hello();

// trailing comma: OK
const obj = {
  one: 'one',
};

console.log(obj);

// block spacing: OK
const somename ='ad';
console.log(somename);

// brace style:
function example(): void {

}
example();

// comma spacing
const obj2 = { 'foo': 'bar', 'baz': 'qur' };

console.log(obj2);

// func-call-spacing
const exampleFunction = (): void => {};
exampleFunction();

// key-spacing
const obj3 = { 'foo': 42 };
console.log(obj3);