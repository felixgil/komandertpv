#INSTALACION KomanderTPV
================

KomanderTPV es un sistema desarrollado con HTML, PHP y JavaScript. Corre bajo un servidor Apache y un servidor de base de datos MySQL. Utiliza Ghostscript y GSview para la impresi�n de documentos.

Actualmente no existe un archivo de instalaci�n para facilitar su puesta en marcha. Espero tener tiempo para crear una instalaci�n m�s f�cil y automatizada, ya que es una de las tareas pendientes, junto con un backend mejorado para no tener que usar phpMyAdmin para realizar ciertas configuraciones.

Ahora que el sistema es de c�digo abierto se podr� mejorar todo m�s r�pidamente gracias a la colaboraci�n de todas aquellas personas que quieran participar en el proyecto.

=================


##REQUISITOS

- Servidor web: 
	
	a) Xampp: http://sourceforge.net/projects/xampp/
	b) Wamp: http://www.wampserver.com/
	
	- httpd.conf debe estar configurado para permitir acceso desde cualquier equipo en la red.
	- Configurar seg�n timezone en php.ini

- Ghostcript: http://www.ghostscript.com/	

- GSview: http://pages.cs.wisc.edu/~ghost/gsview/index.htm
	
- Poner una IP fija en el equipo servidor
	
	


##INSTALACI�N

- Crear base de datos en MySQL (Cualquier nombre es bueno)

- Importar uno de los archivos sql a la base de datos creada:

	- demo.sql: Base de datos de demostraci�n.
	- wkomander: Base de datos vac�a.

- Copiar las carpetas 'wkomander' y 'pdf' dentro del directorio publico de Apache (/www o /httpdocs dependiendo del sistema operativo)
	- La carpeta 'wkomander' se puede renombrar al nombre que prefiera. Si lo cambia, tendr� que indicarlo modificando la variable _APP_FOLDER_ dentro del archivo config.php


##CONFIGURACION


- Abrir archivo /wkomander/clases/db/config.php y modificar seg�n las necesidades.

- Datos de la empresa:
	- Acceder a la base de datos (localhost/phpmyadmin)
	- Entrar en la tabla empresa y a�adir o editar una nueva empresa. Se pueden a�adir las empresas que necesite. La empresa seleccionada est� indicada en el valor _EMPRESA_ dentro del arhivo config.php.

- Configurar impresora de caja:
	- Cambiar nombre a la impresora de caja y poner: 'tiket'
	- Modificar los siguientes archivos para cambiar la ruta de 'gsprint':
		- tiket.php
		- tiket_todo.php
		- abrir_cliente.php
		- /clases/_pte.php
	(Buscar en cada archivo la palabra 'Ghostgum' y sustituir por la ruta correcta donde est� instalado gsprint)







