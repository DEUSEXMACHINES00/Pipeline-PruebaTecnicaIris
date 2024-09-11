'use strict'

var controller = {


    hello: function (req, res) {
       res.status(200).send({
        message : 'Hello, Dev Ops!'
       })
    }

};

module.exports = controller;
