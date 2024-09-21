let x = 28

if (x > 0) {
    console.log(`${x} is a postive number.`)
} else if (x < 0) {
    console.log(`${x} is a negative number.`)
} else {
    console.log('X is 0.')
}

var day = '7'

switch (day) {
    case '1':
        console.log('Today is Sunday.')
        break;
    case '2':
        console.log('Today is Monday.')
        break;
    case '3':
        console.log('Today is Tuesday.')
        break;
    case '4':
        console.log('Today is Wednesday.')
        break;
    case '5':
        console.log('Today is Thursday.')
        break;
    case '6':
        console.log('Today is Friday.')
        break;
    case '7':
        console.log('Today is Saturday.')
        break;
}

for (var i=1; i <=5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(`${i}`)
}

var i = 1;

while (i <=5) {
    if (i === 3) {
        break;
    }
    console.log(`${i}`);
    i++
}

var j = 1;

do {
    console.log(`${j}`);
    j++
} while (j <=5)

let globalVar = "I am global!"

scopeExample("I was having issues becuase I didn't define this parameter.")

function scopeExample(issue) {
    let localVar = "I am local!"
    console.log(`${globalVar} ${localVar}`)
    console.log(issue)
}
