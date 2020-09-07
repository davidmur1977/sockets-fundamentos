
        //   usamos var para aumentar compatibilidad entre navegadores
        //   io() viene del script que hemos cargado
         var socket = io();

         //escuchar: TODOS LOS .on 
         socket.on('connect', function(){
             console.log('Conectado al servidor');

             socket.on('room1');
         });

         socket.on('disconnect', function() {
             console.log('Perdimos conexión con el servidor');
         });

         //Enviar información de cliente a serv.
         socket.emit('enviar mensaje', {
             usuario: 'Fernando',
             mensaje: 'Hola Mundo'
         }, function(resp){
             console.log('respuesta server:', resp);
         });

         //Escuchar informacion
         socket.on('enviar mensaje', function(mensaje){
             console.log('Servidor: ', mensaje);
         });

    