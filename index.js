import { createClient } from 'pexels';
const client = createClient('pXXo6ot2FU6CShvvpjQPBVowtdZIYEGs5ImcH37w0OrsaeA2POvAchIb');

const query = "nature";
let listaFotos = [];

client.photos.search({ query, per_page: 1 }).then(photos => {
    listaFotos[{...photos}];
});

const resultJson = JSON.stringify(listaFotos);

console.log(resultJson);
console.log(listaFotos);