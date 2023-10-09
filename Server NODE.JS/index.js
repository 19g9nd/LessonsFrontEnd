// const response = await fetch('http://localhost:8000');

// const ans = await response.text();
// console.log(ans);

const form = document.querySelector('form');
const getTasks = async() => {
    const response = await fetch('http://localhost:8000');
    return response.json();
}

const sendTask = async(task) => {
    const parsedDatas = [...task];
    const data ={};
    parsedDatas.forEach(parsedData => data[parsedData[0]]= parsedData[1]);
    
    const response = await fetch('http://localhost:8000',{
        method:'POST',
        body: JSON.stringify(data)
    });
    return response.json();
}


let tasks = await getTasks();
console.log(tasks);
form.addEventListener('submit', (e) => {
    //formdata works only with attr name
    e.preventDefault();
    const formData = new FormData(form);
    sendTask(formData);
    // console.log([...formData]);

})