const { io } = require('../server');

//callback para gestionar cuándo un cliente se conecta a servidor
io.on('connection', (client) =>{

    console.log('Usuario conectado');

    //enviamos mensaje desde servidor para que lo vea el cliente al conectarse
    client.emit('enviar mensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'

    });


    client.on('disconnect', ()=>{
         console.log('Usuario desconectado');
    });

    //Escuchar el cliente
    client.on('enviar mensaje', (data, callback)=>{
           console.log(data);

           client.broadcast.emit('enviar mensaje', data);


        //  if (mensaje.usuario){
        //     callback({
        //         resp: 'TODO SALIO BIEN!'
        //     });
        //  } else {
        //     callback({
        //         resp: 'TODO SALIO MAL!'
        //     }); 
        //  }
          
    });

});