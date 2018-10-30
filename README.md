# ApiCalculadora
Operaciones básicas suma/resta/multiplicación/división

# Compilar imagen Docker
Dirigase al directorio que contiene su Dockerfile y ejecute el siguiente comando para crear la imagen de Docker.$ docker build -t <your username>/ApiCalculadora .  
  
La imagen será listada en Docker, con el comando:

$ docker images

#Example  
REPOSITORY                          TAG        ID              CREATED  
<your username>/ApiCalculadora    latest     d73d3005b0d2    2 minute ago

 
Ejecutar imagen Docker  
Ejecutar la imagen mediante el comando: 
$ docker run -p 1500:1500 -d <your username>/ApiCalculadora 
  Se muestra el siguiente resutlado de la aplicación: 
# Get container ID  
$ docker ps

#Print app output 
$ docker logs <container id>  

#Example  
Server runing on localhost:1500 
Realizar prueba 
Para realizar la prueba del servicio ApiCalucladora, tenga en cuenta lo siguiente:  
•	Las siguientes urls de los métodos implementados pueden ser probadas utilizando una herramienta como SOAPUI o POSTMAN. De acuerdo a su elección.  

# SUM
Método expuesto para realizar la suma de los valores enviados en los parámetros, separados por “/”
#To add 1 + 2 + 3
$ curl http://localhost:1500/calculadora/sum/1/2/3

#Result
Resultado de la suma: 6

# RES
Método expuesto para realizar la resta de los valores enviados en los parámetros, separados por “/”
#To subtract 5 - 3
$ curl http://localhost:1500/calculadora/res/5/3

#Result
Resultado de la resta: 2

# MUL
Método expuesto para realizar la multiplicación de los valores enviados en los parámetros, separados por “/”
#To multiply 6 * 3
$ curl http://localhost:1500/calculadora/mul/6/3

#Result
Resultado de la multiplicación: 18

# DIV
Método expuesto para realizar la División de los valores enviados en los parámetros, separados por “/”
#To divide 8 / 2
$ curl http://localhost:1500/calculadora/div/8/2

#Result
Resultado de la división: 4

