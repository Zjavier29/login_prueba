<?php 
session_start();
	$id_usuario = $_SESSION['usuario_id'];
	if ($id_usuario == ''){
 		header('Location: /Prueba1');
     }
 ?>
