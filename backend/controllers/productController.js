const productModel = require ('../models/productModel')

//Get Products API - /api/v1/product
exports.getProducts = async (req,res,next) =>{
    const query = req.query.keyword?{name : {
        $regex: req.query.keyword.trim() ,// Search for keyword
        $options:'i'// Case-insensitive
    }}:{}
  
    const products = await productModel.find(query); //{}ethu alla datavjum get panum 
    res.json ({
        success:true,
        products
    })

}
//Get Single Products API - /api/v1/product:id
exports.getSingleProduct = async(req,res,next) =>{
    try{
    const product = await productModel.findById(req.params.id);//Get id 
    res.json ({
        success:true,
        product
    })        

    }catch(error){
    res.status(404). json ({
        success:false,
        message:'Unable to get product with that ID' //if insert false id try cash show error message
    })
    }


}