//async request

Promise.all([
fetch('http://localhost:8000'),
fetch('http://localhost:8000'),
fetch('http://localhost:8000'),
fetch('http://localhost:8000'),
])
.then(responses => {
    const jsonsPR = responses.map(response => response.json());
    return Promise.all(jsonsPR)

})
.then(jsons =>console.log(json))



















// const form = document.querySelector('form');

// const getTasks = async () => {
//     const response = await fetch('http://localhost:8000');

//     return response.json();
// }

// let tasks = await getTasks();

// console.log(tasks);

// const sendTask = async (task) => {
//     const parsedDatas = [...task];
//     const data = {};

//     parsedDatas.forEach(parsedData => data[parsedData[0]] = parsedData[1]);
    
//     const response = await fetch('http://localhost:8000', {
//         method: 'POST',
//         body: JSON.stringify(data)
//     });

//     const tasks = await getTasks();

//     console.log(tasks);
// }

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const formData = new FormData(form);

//     sendTask(formData);
// })