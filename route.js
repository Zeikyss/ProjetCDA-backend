const express = require("express");
const router = express.Router();
const Jokes = require('./Models/jokes');

router.get('/blagues', async (req, res) => {
    const jokes = await Jokes.findAll();
    res.status(200).json(jokes);
});

router.post('/blagues', async (req, res) => {
    const { joke } = req.body;
    const newJoke = JokesModel.build({
        'joke': joke,
    })
    try {
        await newJoke.save()
        res.status(201).json(newJoke);
    }
    catch (error) {
        res.json(error)
    }

});

router.get('/blagues', async (req, res) => {
    const jokes = await JokesModel.findAll();
    res.status(200).json(jokes);
});


router.get('/blagues/:id', async (req, res) => {
    const joke = await JokesModel.findOne({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json(joke)
});

/*router.get('/blagues/random', async (req, res) => {
    const joke = await JokesModel.ra
})*/

module.exports = router;