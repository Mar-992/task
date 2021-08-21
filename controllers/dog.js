const Dog = require("../models/Dog");



module.exports = {
    createOne: async (req, res) => {
        try{
            let dog = {
                ...req.body,
                dogId: req.dog.id,
            };
            await Dog.create(dog);
            res.status(200).send({
                error:false,
                dog
            });
        }catch (err) {
            res.status(500).send({
                error: true,
                message: err.message,
            });
        }
    },
    getAll: async (req,res) => {
        let dogs = null;
        if(req.query.breed) {
            dogs = await Dog.find({ breed: req.query.breed});
        }else{
            dogs = await Dog.find()
        }
        res.status(200).send({
            error: false,
            message: 'All breeds are shown',
            dogs
        })
    }
    
}