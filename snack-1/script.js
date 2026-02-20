const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'


let nameString = ''
names.forEach(name => nameString += name + ", ") // si puo anche fare con `${}` ma deve calcolare ogni volta il sito meglio di no
console.log(nameString);
