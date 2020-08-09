<?php
$postData = file_get_contents('php://input');
$data = json_decode($postData, true);


function arselect($arr) {
	$link = mysqli_connect('localhost:3306', 'root', 'root','test');
	foreach($arr as $key => $val) {
		print $key .'=>'. $val . ';';
		mysqli_query($link,"INSERT INTO `pricing`(`name`, `value`) VALUES ('$key','$val')");
		
		 }
	}

arselect($data);





?>