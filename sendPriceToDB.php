<?php
$postData = file_get_contents('php://input');
$data = json_decode($postData, true);


function arselect($arr) {
	$link = mysqli_connect('n4g643522066891.db.43522066.60b.hostedresource.net:3312', 'n4g643522066891', 'f9B|/!CBF','n4g643522066891');
	foreach($arr as $key => $val) {
		print $key .'=>'. $val . ';';
		mysqli_query($link,"UPDATE pricing set  `value` ='$val' WHERE `name`='$key'");
	}
	}

arselect($data);





?>