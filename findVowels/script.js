const vowels = ['a', 'e', 'i', 'o', 'u']
let count = 0;
function findVowels(value){
    const strValue = value.toLowerCase().split("")
    for(let i = 0; i < value.length; i++){
        if (vowels.includes(strValue[i])) {
            count++;
        }
    }

    return console.log(count);;
}

findVowels("how are you and what are you doing")