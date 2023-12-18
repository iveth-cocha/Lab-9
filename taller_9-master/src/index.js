const express = require('express')
const fs = require('fs');

const path = require('path');

// Inicializaciones
const app = express()

// Configuraciones 
app.set('port',process.env.port || 3000)
app.set('views',path.join(__dirname, 'views'))

// Middlewares 
app.use(express.urlencoded({extended:false}))


// Variables globales

app.use(express.json())

// Rutas 
app.get('/',(req,res)=>{
    res.send("Server on and ready")
})




const nombre =  [
    {
    "Nombre": "Jhordy Aguas",
    "Carrera": "Desarrollo de software",
    "Edad": "21",
    "Correo": "jhordy.aguas@epn.edu.ec"
    },
    {
    "Nombre": "Melani Barrera",
    "Carrera": "Desarrollo de software",
    "Edad": "21",
    "Correo": "melani.barrera@epn.edu.ec"
    },
    {
    "Nombre": "Dennis Cataña",
    "Carrera": "Desarrollo de software",
    "Edad": "20",
    "Correo": "dennis.cataña@epn.edu.ec"
    },
    {
    "Nombre": "Iveth Cocha",
    "Carrera": "Desarrollo de software",
    "Edad": "22",
    "Correo": "iveth.cocha@epn.edu.ec"
    },
    {
    "Nombre": "David Lascano",
    "Carrera": "Desarrollo de software",
    "Edad": "21",
    "Correo": "David.lascano@epn.edu.ec"
    },
    {
    "Nombre": "Brandon Sandoval",
    "Carrera": "Desarrollo de software",
    "Edad": "20",
    "Correo": "brandon.sandoval@epn.edu.ec"
    },
    {
    "Nombre": "Washington Villares",
    "Carrera": "Desarrollo de software",
    "Edad": "20",
    "Correo": "washington.villares@epn.edu.ec"
    },
    {
    "Nombre": "Andrew Vilcacundo",
    "Carrera": "Desarrollo de software",
    "Edad": "20",
    "Correo": "andrew.vilcacundo@epn.edu.ec"
  }
    
    ]



app.get('/informacion',(req,res)=>{

    
    const respuestaFormateada = JSON.stringify(nombre, null, 2);
    res.set('Content-Type', 'application/json'); // Configura el tipo de contenido
    res.send(respuestaFormateada);
})


app.get('/productos',(req,res)=>{
    res.send(`
            <h1>Bienvenidos</h1>
            <h2>Menú</h2>
                <p>Parrilladas</p>
                <p>Hambuguesas</p>
                <p>Helados</p>
                <p>Salchipapas</p>
                <p>Pasteles</p>

    `)
})



app.get('/grupo',(req,res)=>{
    res.send(`
             <h1>Grupo 4</h1>
             <p>¡Espero que estés teniendo un gran día! Quería tomarme un momento para contarte sobre el increíble equipo que tenemos aquí. <br>
              Estamos muy emocionados de trabajar juntos y queríamos que nos conozcas un poco mejor. <br>
              <br>
             ------------------------------------------------------- 
             <br>


             **[Jhordy Aguas]  <br>
             -El Experto en: [Desarrollo Backend]  <br>
             -Hobby Secreto: [Le gusta jugar videojuegos] <br>
             <br>
             -------------------------------------------------------
             <br>
             **[Melani Barrera]  <br>
             -El Experta en: [Bases de datos SQL] <br>
             -Hobby Secreto: [Su hobby secreto es chef] <br>
             <br>
             -------------------------------------------------------
             <br>
             **[Dennis Cataña]  <br>
             -El Experto en: [Bases de datos No SQL] <br>
             -Hobby Secreto: [Le gusta hacer ejercicios fisicos de fuerza] <br>
             <br>
             -------------------------------------------------------
             <br>
             **[Iveth Cocha]  <br>
             -El Experto en: [Desarrollo Backend] <br>
             -Hobby Secreto: [Leer en sus tiempos libres] <br>
             <br>
             -------------------------------------------------------
             <br>
             **[David Lascano]  <br>
             -El Experto en: [Desarrollo Frotend] <br>
             -Hobby Secreto: [Le gusta hacer ejercicios fisicos de fuerza] <br>
             <br>
             -------------------------------------------------------
             <br>
             **[Brandon Sandoval]  <br>
             -El Experto en: [Desarrollo Backend] <br>
             -Hobby Secreto: [Le gusta hacer calistenia] <br>
             <br>
             -------------------------------------------------------
             <br>
             **[Washington Villares]  <br>
             -El Experto en: [Bases de datos SQL] <br>
             -Hobby Secreto: [Le gusta jugar videojuegos] <br>
             <br>
             -------------------------------------------------------
             <br>
             **[Andrew Vilcacundo]  <br>
             -El Experto en: [Desarrollo Frontend--Figma] <br>
             -Hobby Secreto: [Le gusta jugar videojuegos] <br>


             </p>
    
    
    `)
})








module.exports = app


app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
})

