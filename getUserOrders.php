<?php
session_start();
$link = mysqli_connect('n4g643522066891.db.43522066.60b.hostedresource.net:3312', 'n4g643522066891', 'f9B|/!CBF','n4g643522066891');


$userEmail = $_COOKIE['apmail'];
$user = mysqli_query($link,"SELECT `id` FROM `users` WHERE `email` = '$userEmail'");

if(mysqli_num_rows($user) > 0){
	$data = mysqli_fetch_assoc($user);
	$idUser = $data['id'];
	$result = mysqli_query($link,"SELECT `id`,`name`,`value`,`prices` FROM `orders` WHERE `userId` = $idUser");
	$rows = array();
	while($r = mysqli_fetch_assoc($result)) {
		$elem = array($r['name'],$r['id'],$r['userId'],$r['value'],$r['prices']);
		array_push($rows,$elem);
	}
	print json_encode($rows);
}




?>