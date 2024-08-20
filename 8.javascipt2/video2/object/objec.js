const myarray = ['darshan','dhameliya']

const myobject = {
    username:"darshan",
    rolnumber:92,

    insidefunction : function(){
        console.log(`the username is ${this.username}`);
    }
}
function mmm(){
    console.log(`this is function`);
}


Object.prototype.darshan = function(){
    console.log(`darshan is present in all object`);
}

Array.prototype.heydrashan = function(){
    console.log(`darshan says hello`);
    
}

Function.prototype.hidarshan =function(){
    console.log(`function say hello`);
    
}
// myobject.darshan() // true
// myarray.darshan() // true
// myarray.heydrashan() // true
// myobject.heydrashan() // error :- not a function

// const return1 = mmm();
// mmm.darshan(); // true
// mmm.hidarshan() // true

// myobject.hidarshan() // error :- not a function

