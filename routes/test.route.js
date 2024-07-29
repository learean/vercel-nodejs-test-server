const { Router } = require('express');
const { SuccessResponseObject } = require('../common/http');

const r = Router();

r.get('/', (req, res) => {
    console.log(req.data)
    res.json(new SuccessResponseObject(data=req.data));
});

module.exports = r;
