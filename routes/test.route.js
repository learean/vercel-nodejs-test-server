const { Router } = require('express');
const { SuccessResponseObject } = require('../common/http');

const r = Router();

r.post('/', (req, res) => {
    console.log(req.body)
    res.json(new SuccessResponseObject(data=req.body));
});

module.exports = r;
