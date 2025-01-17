/* javascript map & set method */

/* Map method */

// get
// set 
// has
// clear 
// delete
// entries
// key 
// foreach

// Defination :- The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

{
    // let maps = new Map([['1' , 'html'] , ['2' , 'css'] , ['3' , 'javascript'] ])

    // console.log(maps);
    // console.log(maps.size);   // size find krva mate

    //get method
    // let data=maps.get('3')
    // console.log(data);

    //set method
    // maps.set('4','reactJs')
    // console.log(maps);

    //has method   key available che ke nahi te chek kre
    // let result = maps.has('4')
    // console.log(result);

    //clear method
    // maps.clear()
    // console.log(maps);

    //Delete method
    // maps.delete('1')
    // console.log(maps);

    // entries method key and value both show kre 
    // let resultEntries = maps.entries()
    // console.log(resultEntries.next().value);
    // console.log(resultEntries.next().value);
    // console.log(resultEntries.next().value);
    // console.log(resultEntries.next().value);

    //keys method only key show kre
    // let resultkey = maps.keys() 
    // console.log(resultkey.next().value);
    // console.log(resultkey.next().value);
    // console.log(resultkey.next().value);

    //forEach method
    // let maps = new Map([['1' , 'html'] , ['2' , 'css'] , ['3' , 'javascript'] ]).forEach(mapfunction)

    // function mapfunction(value,key){
    //     console.log(`${key}=${value}`);
    // }

}

/* set method */

// add 
// values 
// has
// key 
// entries
// clear 
// delete 
// foreach

// Defination :- The Set object lets you store unique values of any type, whether primitive values or object references.

{
    // let sets = new Set(['html', 'css', 'nodeJs', 'kotlin'])
    // console.log(sets);
    // console.log(sets.size);

    //add nethod
    // sets.add('javascript')
    // console.log(sets);

    //values method
    // let resultvalues = sets.values()
    // console.log(resultvalues.next().value);
    // console.log(resultvalues.next().value);
    // console.log(resultvalues.next().value);
    // console.log(resultvalues.next().value);

    //has method    value available che ke nahi te chek kre
    // let resulthas = sets.has('css')
    // console.log(resulthas);

    //key method    key display kre
    // let resultkeys = sets.keys()
    // console.log(resultkeys.next().value);
    // console.log(resultkeys.next().value);
    // console.log(resultkeys.next().value);
    // console.log(resultkeys.next().value);

    //entries method  key and value display kre
    // let resultEntries = sets.entries()
    // console.log(resultEntries.next().value);
    // console.log(resultEntries.next().value);
    // console.log(resultEntries.next().value);
    // console.log(resultEntries.next().value);

    //clear method
    // let resultclear=sets.clear()
    // console.log(sets);

    //delete method
    // let resultdelete = sets.delete('html')
    // console.log(sets);

    // let sets = new Set(['html', 'css', 'nodeJs', 'kotlin']).forEach(setfunction)

    // function setfunction(value){
    //     console.log(`${value}`);
    // }
}   




