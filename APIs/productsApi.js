//create mini exp app
const exp=require('express');
const productApp=exp.Router();
const expressAsyncHandler=require('express-async-handler')

//product routes
productApp.get('/products',expressAsyncHandler(async(req,res)=>{
    //get prod collection obj
    let productsCollection=req.app.get('productsCollection');
    //get all products
    let productsList=await productsCollection.find().toArray()
    //sen res
    res.send({message: 'products', payload: productsList});
}))

productApp.get('/products/:id',expressAsyncHandler(async(req,res)=>{
     //get prod collection obj
     let productsCollection=req.app.get('productsCollection');

     //get products id from url
     let productid=Number(req.params.id);

     //get product from id
     let product=await productsCollection.findOne({id:{$eq:productid}},{})

     res.send({message: 'product',payload:product});

}))



//export
module.exports=productApp;