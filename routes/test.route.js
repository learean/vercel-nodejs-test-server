const { Router } = require('express');
const { SuccessResponseObject } = require('../common/http');

const r = Router();

r.post('/', (req, res) => {
    console.log('FIRE');
    res.json(new SuccessResponseObject(data=req.data));
});

module.exports = r;
