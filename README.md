# eva1_2asir_pro001
**Proyecto de primeros pasos con el lenguaje typescript**   

hemos creado el repositorio en local con git init
hemos creado el proyecto typescript con tsc --init
Que para compilar usare: tsc -w

--
Para volver a subir al repsoitorio:
git add . 
git commit -m "mensaje que se quiera"
git push -u origin master
--

hemos creado el readme.md directamente en el repositorio y
hemos actualizado el local con git pull
Para ver el estado git status

hemos excluido la carpeta dist con .gitignore

Para clonar, estando en la carpeta anterior a la del proyecto,
porque el clone me la crea:
git clone https://github.com/Mariadiazgalvez/eva1_2asir_pro001.git

--

recordar que hemos añadido "outDir": "./dist", a tsconfig.json para
controlar los archivos transpilados de ts a js

Para ejecutar un archivo js: node /dist/ejercicio001