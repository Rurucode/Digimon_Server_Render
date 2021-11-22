//ADD CONTROLLERS AND CHANGE NAME
const { urlencoded } = require('express')
const buscarDigimon = require('../Utils/fetch')

const buscador = {

    home: (req, res) => {
        res.render('home')
    },

    digimon: (req, res) => {
        const digimon = req.body.buscador
        res.redirect(`/digimon/${digimon}`)
         
    },

    resultado: async (req, res) => {

        const buscar = await buscarDigimon(req.params.nombre)

        if (buscar == undefined){
            res.render('error')
        }else{
        await res.render('resultado', {
            nombre: buscar.nombre,
            url: buscar.img,
            level: buscar.level
        })}
    }
}



module.exports = buscador;