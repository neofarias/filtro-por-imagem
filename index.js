import { createClient } from 'pexels';

const client = createClient('pXXo6ot2FU6CShvvpjQPBVowtdZIYEGs5ImcH37w0OrsaeA2POvAchIb');
const query = "nature";

let listaFotos = {};

client.photos.search({ query, per_page: 1 }).then(photosResult => {
    listaFotos = {...photosResult};
    //console.log(listaFotos); //Mostra lindo o resultado
 });

console.log(listaFotos); // Fica vazio!!!\