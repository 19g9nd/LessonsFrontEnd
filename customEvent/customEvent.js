const ul = document.querySelector('ul');

ul.addEventListener('click',(e) => {
    const target = e.target;

    if (target.tagName !== 'LI') return;

    const targetClass = 'active';
    const action = target.classList.contains(targetClass) ? 'remove' : 'add';

    target.classList[action](targetClass);
});


if(false){
    const obj = document.querySelector("div");

    const catFound = new CustomEvent("animalfound", {
    
        detail: {
            name: "cat",
        },
    });
    
    const dogFound = new CustomEvent("animalfound", {
    
        detail: {
            name: "dog",
        },
    });
    
    obj.addEventListener("click", (e) => {
        obj.dispatchEvent(catFound);
        obj.dispatchEvent(dogFound);
    })
    
    obj.addEventListener("animalfound", (e) => console.log(e.detail.name));
    obj.dispatchEvent(catFound);
    obj.dispatchEvent(dogFound);
}
 