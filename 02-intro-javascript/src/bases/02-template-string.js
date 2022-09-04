const name = 'William';
const lastName = 'Mejia';

const nombreCompleto = `${name} ${lastName}`;
console.log(nombreCompleto);

function getSaludo(name){
    return 'Hola ' + name;
}

console.log(`Este es un texto: ${getSaludo(name)}`)
console.log(nombreCompleto);