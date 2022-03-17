# Final-Prog-LabII
by Juan Manuel Fullana & Andoni Roque

--DOCUMENTACION POSTMAN: https://www.getpostman.com/collections/10dbe7774b1ae65e8274

--Funcionalidades que consideramos están incompletas o no cumplen con buenas prácticas:

    1) "Base de datos" de Usuarios en el front end. Está ubicado en un archivo JS por lo que solo con hacer click derecho + inspeccionar
    ya se puede acceder a la contraseña de todos los usuarios.

    2) Sistema de login sin cookies ni JWT

    3) Ausencia de sistema de comentarios y condiciones para la eliminación/edición de peliculas.
    Este es el punto más débil y el unico que consideramos que no cumple con las consignas.
    No lo implementamos por la complejidad que entendemos requiere un sistema de comentarios bien desarrollado.
    Cada pelicula (dentro del JSON) debería de contar con un diccionario dentro de si misma con: ID (del comentario),
    ID (del usuario que realizo el comentario) y el cuerpo del comentario.
    Una vez que contara con eso, necesitariamos que se cumplan con las condiciones de comentar, editar o borrrar, tanto comentarios
    como peliculas.
    Tendriamos que tomar el id del usuario que esta logueado en ese momento, el id del usuario que realizó el comentario o los comentarios ( que podrian ser de multiples usuarios, includio quien esta logueado, por lo que habria que hacer alguna que otra excepcion para la logica del chequeo), realizar una comparación y en caso de ser el mismo permitir la edición o la eliminación tanto de un comentario como de una pelicula.
    Si bien es parte de la actividad, y aprendimos muchisimo por nuestra cuenta (en base a necesidad para la implementacion de ciertas funcionalidades del sitio y de otras, como la documentacion de postman, por dar un ejemplo), consideramos que el sistema de comentarios es algo para lo cual nos faltan algunos conocimientos basicos fundamentales.

    4) Sistema de busqueda
