import { createClient } from 'pexels';

const client = createClient('pXXo6ot2FU6CShvvpjQPBVowtdZIYEGs5ImcH37w0OrsaeA2POvAchIb');
const query = "nature";

const resultadoPesquisa = client.photos.search({ query, per_page: 1 }).then(photosResult => {
    return photosResult;
});

const fotos = async () => {
    return resultadoPesquisa;
};

const fotosEncontradas = await fotos();

console.log(fotosEncontradas);