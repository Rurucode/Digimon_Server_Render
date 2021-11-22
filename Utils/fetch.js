const fetch = require('node-fetch') //ACTIVAR EL FETCH DE NODE-FETCH

const buscarDigimon = async (name) => {
    try {
        const data =  await fetch(`https://digimon-api.herokuapp.com/api/digimon/name/${name}`);
        const result = await data.json();

        const digimon = {
            nombre: result[0].name,
            img: result[0].img,
            level: result[0].level
        };
        
        console.log(digimon)
        return digimon;

    } catch (error) {
        console.log("ESTE ES EL ERROR  " + error);
    }
}

buscarDigimon('agumon')

module.exports = buscarDigimon;
