export async function getData(offset = 0) {
    const urlApi = `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`;

    let data = {
        items: [],
        total: 0
    };

    try {
        await fetch(urlApi)
            .then((responce) => {
                if (!responce.ok) {
                    throw new Error(responce.status);
                }
                return responce.json();
            })
            .then(responce => {
                data.total = responce.count;
                data.items = responce.results
            })
    } catch (error) {
        console.error(error)
    }

    return data;
}

export async function getDataPokemon(pokemonName = 'bulbasaur') {
    const urlApi = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    let data;

    try {
        await fetch(urlApi)
            .then((responce) => {
                if (!responce.ok) {
                    throw new Error(responce.status);
                }
                data = responce.json();
            })

    } catch (error) {
        console.error(error)
    }

    return data;
}
