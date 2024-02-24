let movie = 'Alpha'
function theNotebook(){
    let movie = 'the NoteBook';
    return movie
}
console.log(movie)
console.log(theNotebook())
console.log(movie)
function buckysFunction() {
    let isHorse = true;
    let saying = 'Bacon is good';
    console.log('\nBefore if:', saying);

    if(isHorse){
        let saying = 'I am a horse';
        console.log('Inside if:', saying);
    }

    console.log('After if:', saying);
}

buckysFunction();