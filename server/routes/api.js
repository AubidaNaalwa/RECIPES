//including all the libraries for the route FILE
const express = require('express')
const urllib = require('urllib');

// using ROUTE 
const router = express.Router()


//returning 
router.get('/sanity', function(req,res){
    res.send({ "status" : "OK" })
})


//making an external API request and getting back all of the informations that we need
//using request library from npm package
//the link for it 
router.get('/recipes/:ingredient', function (req, res) {
    const ingredient = req.params.ingredient
    // making the api request using the ingredent that we get from the CLIENT
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, (err, data, response) =>
        res.send(JSON.parse(data).results)
    );
})


//EXPORTING TO USE IT IN THE SERVER
module.exports = router