const readLine = require('readline');
const reader = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question('What is your first name?', function(firstname){
    reader.question('What is your last name?', function(lastname){
        console.log(`>> Hi, ${firstname} ${lastname}`);
    });
});

reader.on('close', function(){
    console.log('\nBye !!!');
    process.exit(0);
});