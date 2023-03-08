const Categoria = require("../models/Categoria");

exports.crearCategoria = async (req,res) => {

    try{
        let categoria;
         // creamos nuestra categoria
        categoria = new Categoria(req.body);
        await categoria.save();
        res.send(categoria);

}catch (error) {
    console.log(error);
    res.status(500).send("hay un error al recibir los datos");
}
}

exports.mostrarCategorias =async (req,res) =>{

try{
    const categorias = await Categoria.find();
    res.json(categorias)
    } catch (error){
        console.log(error)
        res.status(500).send("hay un error al recibir los datos");
    }
}

exports.obtenerCategoria = async (req,res) =>{
    try{
        let categoria = await Categoria.findById(req.params.id);
        if (!categoria){
            res.status(404).json({msg: 'el categoria no existe'})
        }
    res.json(categoria);
    }catch (error){
        console.log(error)
        res.status(500).send("hay un error al recibir los datos");

    }
}

exports.eliminarCategoria = async (req,res) =>{
    try{
        let categoria = await Categoria.findById(req.params.id);
        if (!categoria){
            res.status(404).json({msg: 'la categoria no existe'})
        }
        await Categoria.findByIdAndRemove({ _id: req.params.id})
        res.json({msg: 'Categoria eliminada con exito'});
}catch (error){
    console.log(error)
    res.status(500).send("hay un error al recibir los datos");

}
}

exports.actualizarCategoria = async (req,res) =>{
    try{
        const {nombreCategoria, descripcionCategoria } = req.body;
        let categoria = await Categoria.findById(req.params.id); 
        if (!categoria){
            res.status(404).json({msg: 'la categoria no existe'})
        }
//cambiar los campos por los de la coleccion
    categoria.nombreCategoria = nombreCategoria;
    categoria.descripcionCategoria = descripcionCategoria;


    categoria = await Categoria.findOneAndUpdate({_id: req.params.id}, categoria, {new:true})
    res.json(categoria);

    }catch (error){
    console.log(error)
    res.status(500).send("hay un error al recibir los datos");
}
}
