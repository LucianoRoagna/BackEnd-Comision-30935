const express = require('express');

const app = express();




app.get('/', (req, res) => {
    res.send
    ('<h1 style="color:blue;">Bienvenidos al servidor express</h1>')
})

let visitas = 0
app.get('/visitas', (req, res) => {
    res.send
    (`La cantidad de visitas es ${++visitas}`)
})
app.get('/date', (req, res) => {
    res.send({
        date: new Date().toLocaleString()
    })
})


const PORT = 8080

const connectedServer = app.listen(PORT, () => {
    console.log(`Servidor Http escuchado en el puerto ${connectedServer.address().port}`)
})

// MANEJADOR DE ERRORES
connectedServer.on('error', error => console.log(`Error en el servidor ${error}`))