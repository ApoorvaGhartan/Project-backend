

const {userneed} = require("axios");
const imageModel = require("../models/imageModel");

const generateImage = async (req, res) => {
    const body = req.body;
    const searchText = body.searchText;

    let imageUrl = "";
    try{
       
        const res =  await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
        const data = await res.json();
        imageUrl = data.products[0].images[0]; 
      

        await imageModel.create({
            searchText: searchText,
        });
       
    }
    catch(err){
        console.log(err);
    }

    res.json({
        status: 'success',
        data: {
            imageUrl: imageUrl,
        }
    })
}

module.exports = {
    generateImage
}
