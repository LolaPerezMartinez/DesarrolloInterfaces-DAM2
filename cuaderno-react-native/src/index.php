
<?php 
//Todo lo que esta dentro de php lo lee el navegador
//echo sirve para imprimir
echo '<p>Hola desde echo</p>';

//en echo puedo añadir variables por ejemplo:
/*
echo "Mi nombre es " .$nombre
 */

//include permite incluir funciones, archivos o documentos
//tambien se puede utilizar require
//pero include si tiene un error sigue funcionando pero require no
//include_once si queremos incluir un archivo que solo se pueda incluir una vez
include "inc/header.php";
$nombre = 'Luis';
// es recomendable poner null cada vez que una variable entra por post o get
$numero = $_GET['numero'] ?? null;

echo '<h1 style="color:red">Mi nombre es '. $nombre . '<h1>';
echo '<p>Y tengo ' . $numero . 'años.<p>';
?>
<a href="index.php?numero=18">Número</a>
  <main>
<!-- Esta parte la metemos en inicio.php-->  
 <?php
 $contenido = $_GET['contenido'] ?? null;
  if(!$contenido){
    include 'inc/inicio.php';
  }else{
    include 'inc/' . $contenido . '.php';
  }
 ?>
</main>
<?php include 'inc/footer.php' ?>
