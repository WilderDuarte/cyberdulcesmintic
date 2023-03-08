const Persona = require("../models/Persona");

exports.crearPersona = async (req,res) => {
    try{
        let persona;
        // creamos nuestro persona
        persona = new Persona(req.body);
        await persona.save();
        res.send(persona);
    }catch (error) {
        console.log(error);
        res.status(500).send("hay un error al recibir los datos");
    }
}

exports.mostrarPersonas =async (req,res) =>{
    try{
        const personas = await Persona.find();
        res.json(personas)
    } catch (error){
        console.log(error)
        res.status(500).send("hay un error al recibir los datos");
    }
}

exports.obtenerPersona = async (req,res) =>{
    try{
        let persona = await Persona.findById(req.params.id);
        if (!persona){
            res.status(404).json({msg: 'La persona no existe'})
        }
        res.json(persona);
    }catch (error){
        console.log(error)
        res.status(500).send("hay un error al recibir los datos");
    }
}

exports.eliminarPersona = async (req,res) =>{
    try{
        let persona = await Persona.findById(req.params.id);
        if (!persona){
            res.status(404).json({msg: 'la persona no existe'})
        }
        await Persona.findByIdAndRemove({ _id: req.params.id})
        res.json({msg: 'Persona eliminada con exito'});
    }catch (error){
        console.log(error)
        res.status(500).send("hay un error al recibir los datos");

    }
}

exports.actualizarPersona = async (req,res) =>{
    try{
        const {nombrePersona, apellidoPersona, categoriaPersona, telefonoPersona, ciudadPersona, direccionPersona, emailPersona, passwordPersona} = req.body;
        let persona = await Persona.findById(req.params.id);
        if (!persona){
        res.status(404).json({msg: 'La persona no existe'})
    }
        persona.nombrePersona = nombrePersona;
        persona.apellidoPersona = apellidoPersona;
        persona.categoriaPersona = categoriaPersona;
        persona.telefonoPersona = telefonoPersona;
        persona.ciudadPersona = ciudadPersona;
        persona.direccionPersona = direccionPersona;
        persona.emailPersona = emailPersona;
        persona.passwordPersona = passwordPersona;

        persona = await Persona.findOneAndUpdate({_id: req.params.id}, persona, {new:true})
        res.json(persona);
    }
    catch (error){
        console.log(error)
        res.status(500).send("hay un error al recibir los datos");
    }
}
