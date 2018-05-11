#!/usr/bin/env node
var fs = require('fs');
// read the JSON object and parse it to 
function readFromFile(){
    try {  
        var data = fs.readFileSync('store.json', 'utf8');
        obj = JSON.parse(data);
        return obj;    
        } catch(e) {
        console.log('Error:', e.stack);
        }    
}

//the Action argument( Add - List - get - remove - Clear )
// and convert it to lowercase
var args = process.argv.slice(2)[0].toLowerCase() ;

switch(args) {
    case 'add': // add key - value to object and save the new object
            obj = readFromFile();
            var argkey = process.argv.slice(3)[0]; // the key name
            var argvalue = process.argv.slice(4)[0]; // the value name
            obj[argkey] = argvalue;
            newObj = JSON.stringify(obj);
            fs.writeFile("store.json", newObj ,function(err, data){
                if (err) throw err; 
                console.log('Successfully added') 
                }); 
        break;

    case 'list': // list the object as key : value
            obj = readFromFile();
            for (var o in obj)
                { console.log( o+' '+':'+' '+obj[o])}
        break;

    case 'get': // get  the value
            obj = readFromFile();
            var args = process.argv.slice(3);
            if(typeof obj[args] =='undefined' ) 
                    console.log('No found key')
            else        
                    console.log(obj[args])
        break;

    case 'remove':
            obj = readFromFile();
            var args = process.argv.slice(3)[0];
            if(typeof obj[args] =='undefined' ) 
                    console.log('No found key'); 
            else
                    delete obj[args];
            newObj = JSON.stringify(obj);
            fs.writeFile("store.json", newObj ,function(err, data){
                if (err) throw err;  
                }); 
        break;

    case 'clear':
    fs.writeFile('store.json',JSON.stringify({}), function (err) {
        if (err) throw err;
        console.log('Successfully Clear the file')
    }); 
    break;
 } 


















