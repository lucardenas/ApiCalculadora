const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('API CALCULADORA');
});

router.get('/sum/*', (req, res) => {
    let result = 0;
    let datos = req.path.split('/');
    if (datos && datos.length >= 4) {
        for (let i = 2; i < datos.length; i++) {
            if (isNaN(datos[i])) {
                return res.status(400).send(`El parametro ${i-1} con valor ${datos[i]} no es numérico, revisar request.`);
            }
            result = result + Number(datos[i]);
        }
        res.status(200).send(`Resultado de la suma: ${result}`);
    } else {
        res.status(400).send('Se ha generado un error en el Request');
    }
});

router.get('/res/*', (req, res) => {
    let result = null;
    let datos = req.path.split('/');
    if (datos && datos.length >= 4) {
        for (let i = 2; i < datos.length; i++) {
            if (isNaN(datos[i])) {
                return res.status(400).send(`El parametro ${i-1} con valor ${datos[i]} no es numérico, revisar request.`);
            } else if (!result) {
                result = Number(datos[i]);
            } else {
                result = result - Number(datos[i]);
            }
        }
        res.status(200).send(`Resultado de la resta: ${result}`);
    } else {
        res.status(400).send('Se ha generado un error en el Request');
    }
});

router.get('/mul/*', (req, res) => {
    let result = 1;
    let datos = req.path.split('/');
    if (datos && datos.length >= 4) {
        for (let i = 2; i < datos.length; i++) {
            if (isNaN(datos[i])) {
                return res.status(400).send(`El parametro ${i-1} con valor ${datos[i]} no es numérico, revisar request.`);
            }
            result = result * Number(datos[i]);
        }
        res.status(200).send(`Resultado de la multiplicación: ${result}`);
    } else {
        res.status(400).send('Se ha generado un error en el Request');
    }
});

router.get('/div/:dividendo/:divisor', (req, res) => {
    let result = 0;
    let dividendo = req.params['dividendo'];
    let divisor = req.params['divisor'];
    if (divisor == 0 || isNaN(dividendo) || isNaN(divisor)) {
        res.status(400).send('Error revisar request, enviar valores numéricos separados por /');
    } else {
        result = Number(dividendo) / Number(divisor);
        res.status(200).send(`Resultado de la división: ${result}`);
    }
});

module.exports = router;