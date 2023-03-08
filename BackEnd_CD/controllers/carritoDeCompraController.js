const CarritoDeCompra = require("../models/CarritoDeCompra");

exports.crearCarritoDeCompra = async (req,res) => {
    try{
        let carritoDeCompra;
        // creamos nuestro carritoDeCompra
        carritoDeCompra = new CarritoDeCompra(req.body);
        await carritoDeCompra.save();
        res.send(carritoDeCompra);
    }catch (error) {
        console.log(error);
        res.status(500).send("hay un error al recibir los datos");
    }
}

exports.mostrarCarritoDeCompras=async (req,res) =>{
    try{
        const carritoDeCompras = await  CarritoDeCompra.find();
        res.json(carritoDeCompras)
    } catch (error){
        console.log(error)
        res.status(500).send("hay un error al recibir los datos");
    }
}

exports.obtenerCarritoDeCompra = async (req,res) =>{
    try{
        let carritoDeCompra = await  CarritoDeCompra.findById(req.params.id);
        if (!carritoDeCompra){
            res.status(404).json({msg: 'La carritoDeCompra no existe'})
        }
        res.json(carritoDeCompra);
    }catch (error){
        console.log(error)
        res.status(500).send("hay un error al recibir los datos");
    }
}

exports.eliminarCarritoDeCompra = async (req,res) =>{
    try{
        let carritoDeCompra = await  CarritoDeCompra.findById(req.params.id);
        if (!carritoDeCompra){
            res.status(404).json({msg: 'la carritoDeCompra no existe'})
        }
        await  CarritoDeCompra.findByIdAndRemove({ _id: req.params.id})
        res.json({msg: ' CarritoDeCompra eliminada con exito'});
    }catch (error){
        console.log(error)
        res.status(500).send("hay un error al recibir los datos");

    }
}

exports.actualizarCarritoDeCompra = async (req,res) =>{
    try{
        const {cantidadCompra,precioCompra} = req.body;
        let carritoDeCompra = await  CarritoDeCompra.findById(req.params.id);
        if (!carritoDeCompra){
        res.status(404).json({msg: 'La carritoDeCompra no existe'})
    }
        carritoDeCompra.cantidadCompra = cantidadCompra;
        carritoDeCompra.precioCompra = precioCompra;
       

        carritoDeCompra = await  CarritoDeCompra.findOneAndUpdate({_id: req.params.id}, carritoDeCompra, {new:true})
        res.json(carritoDeCompra);
    }
    catch (error){
        console.log(error)
        res.status(500).send("hay un error al recibir los datos");
    }
}
