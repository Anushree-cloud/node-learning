const readline = require('readline')

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let todos = []

function toContinue(){
    reader.question('\nDo you want to continue (y/n): ', function(toQuit) {
        switch (toQuit) {
            case 'y':
                todoApp()
                break;
            case 'n':
                reader.close()
            default:
                console.log('\nInvalid entry!');
                todoApp()
                break;
        }
    })
}

function todoApp(){
    console.clear()
    console.log(
    `Todo App
=========
\nš Add Todo: Press 1
š View All Todos: Press 2
š Delete Todo: Press 3
š Exit: Press 0`);
    reader.question('\nEnter your choice: ', function(action) {
        switch(action){
            case '1':
                console.clear()
                console.log(
                `\nāš¼ Add Todos
==============`)
                reader.question('\nEnter your Todo: ', function(newTodo){
                    todos.push(newTodo)
                    console.log('\nš„³ Todo Added!');
                    toContinue()
                })
                break;
            
            case '2':
                console.clear()
                console.log(
                `\nš Your Todos
===============`)
                if(todos.length !== 0){   
                    todos.forEach((todo, index) => {
                    console.log(`${index+1}. ${todo}`);
                })}
                else{
                    console.log('\nš No todos to show!');
                }
                toContinue()
                break;

            case '3':
                console.clear()
                if(todos.length === 0){
                    console.log('\nš No todos to delete!');
                    toContinue()
                }
                else{
                    reader.question('\nEnter todo number to delete: ', function(todoNumber) {
                        todos.splice(todoNumber-1, 1)
                        console.log(`\nā Todo Deleted!`);
                        toContinue()
                    })
                }
                break;
            
            case '0':
                reader.close()

            default:
                console.log('\nInvalid entry!');
                todoApp()
                break;
        }
    })
}

reader.on('close', function(){
    console.log('\nBye !!!\n');
    process.exit(0);
});

todoApp()