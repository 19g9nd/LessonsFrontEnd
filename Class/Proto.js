// const a = {
//     num: 0,
//     valueOf: function () {
//         return ++this.num;
//     }
// }

// const ans = a === 1 && a === 2 && a === 3;
// console.log(ans);



class Duration{
    #value;
static #isValidDuration(input){
        const timePattern = /^\d+:\d{2}$/;
        return timePattern.test(input);
        
        }
    constructor(value){
        if(!Duration.#isValidDuration(value)) {
            throw new Error("Wrong duration type!");
        }
        this.#value = value;
    }

    get getDuration() {
        return this.#value;
    }

}

const durat = new Duration("3:22");

class Music {
    #name;
    #author;
    #duration;
    constructor(name,author,duration) {
        if(name == String && author == String && duration instanceof Duration)
        this.#name=name;
        this.#author =author;
        this.#duration = duration
    }

    get getName(){
        return Music.#name;
    }

    get getAuthor(){
        return Music.#author;
    }
    get getDuration(){
         return Music.#duration;
    }

}

class MusicCollection{
constructor(){}
filterByAuthor(){
    

}

}