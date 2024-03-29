const Producto = require("../models/Producto");

exports.crearProducto = async (req,res) => {

    try{
        let producto;
         // creamos nuestro producto
        producto = new Producto(req.body);
        await producto.save();
        res.send(producto);

}catch (error) {
    console.log(error);
    res.status(500).send("*(File BackEnd/controllers/productoController.js line 14) hay un error al recibir los datos *");
}
}

exports.mostrarProductos =async (req,res) =>{

try{
    const productos = await Producto.find();
    res.json(productos)
    } catch (error){
        console.log(error)
        res.status(500).send("* (File BackEnd/controllers/productoController.js line 25) hay un error al recibir los datos*");
    }
}

exports.obtenerProducto = async (req,res) =>{
    try{
        let producto = await Producto.findById(req.params.id);
        if (!producto){
            res.status(404).json({msg: '(File BackEnd/controllers/productoController.js line 33) el producto no existe !'})
        }
    res.json(producto);
    }catch (error){
        console.log(error)
        res.status(500).send("*(File BackEnd/controllers/productoController.js line 38) hay un error al recibir los datos*");

    }
}

exports.eliminarProducto = async (req,res) =>{
    try{
        let producto = await Producto.findById(req.params.id);
        if (!producto){
            res.status(404).json({msg: 'el producto no existe'})
        }
        await Producto.findByIdAndRemove({ _id: req.params.id})
        res.json({msg: 'producto eliminado con exito'});
}catch (error){
    console.log(error)
    res.status(500).send("hay un error al recibir los datos");

}
}

exports.actualizarProducto = async (req,res) =>{
    try{
        const {nombreProducto, idCategoria, precioProducto, descripcionProducto,cantidadSaldo} = req.body;
        let producto = await Producto.findById(req.params.id); 
        if (!producto){
            res.status(404).json({msg: 'el producto no existe'})
        }
//cambiar los campos por los de la coleccion
    producto.nombreProducto = nombreProducto;
    producto.idCategoria = idCategoria;
    producto.precioProducto = precioProducto;
    producto.descripcionProducto = descripcionProducto
    producto.cantidadSaldo = cantidadSaldo;;

    producto = await Producto.findOneAndUpdate({_id: req.params.id}, producto, {new:true})
    res.json(producto);

    }catch (error){
    console.log(error)
    res.status(500).send("(File BackEnd/controllers/productoController.js line 77)) hay un error al recibir los datos");
}
}
