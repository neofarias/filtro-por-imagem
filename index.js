import { createClient } from 'pexels';
const client = createClient('pXXo6ot2FU6CShvvpjQPBVowtdZIYEGs5ImcH37w0OrsaeA2POvAchIb');

const query = 'Nature';
const listaFotos = [];

client.photos.search({ query, per_page: 1 }).then(photos => listaFotos);
console.log(listaFotos);