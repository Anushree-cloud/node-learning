const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function calculator(){
    console.clear()
    reader.question('Enter 1st number: ', function(firstnum){
        reader.question('Enter 2nd number: ', function(secondnum){
            reader.question('Add-1 Subtract-2 Multiply-3 Division-4. Enter the operation: ', function(action){
                switch(action){
                    case '1': 
                        console.log(`${Number(firstnum) + Number(secondnum)}`);
                        break;
    
                    case '2': 
                        console.log(`${Number(firstnum) - Number(secondnum)}`);
                        break;
    
                    case '3': 
                        console.log(`${Number(firstnum) * Number(secondnum)}`);
                        break;
                        
                    case '4': 
                        console.log(`${Number(firstnum) / Number(secondnum)}`);
                        break;
    
                    default: 
                        console.log('Invalid entry !!!');
                        break;
                }
                reader.question('Press 1 to Continue. Press 0 to Quit. Enter your action: ', function(action){
                    switch(action){
                        case '1':
                            calculator()
                            break;
                        case '0':
                            reader.close()
                    }
                })
            })
        })
    })
    
}

reader.on('close', function(){
    console.log('\nBye !!!\n');
    process.exit(0);
});

calculator()
