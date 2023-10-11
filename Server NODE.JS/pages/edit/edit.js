const arr = JSON.parse(localStorage.getItem('message'));

console.log(arr);

arr[1] = 'TEST';

localStorage.setItem('message', JSON.stringify(arr));