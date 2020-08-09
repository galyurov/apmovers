<?php
$postData = file_get_contents('php://input');
$data = json_decode($postData, true);
$order = $data['order'];
$email = $data['email'];
// $email = md5()
// 
$link = mysqli_connect('n4g643522066891.db.43522066.60b.hostedresource.net:3312', 'n4g643522066891', 'f9B|/!CBF','n4g643522066891');
function regUser(){
	$pass = getdate()['0'];
	$param = "INSERT INTO `users` (`email`,`pass`) VALUES ('$email', '$pass')";
	$reg = mysqli_query($link,$param);
}


function arselect($arr) {
	
	$getUser = "SELECT * FROM `users` WHERE `email` = '$email'";
	$check_users = mysqli_query($link,$getUser);

	if(mysqli_num_rows($check_users) > 0){
		$user = mysqli_fetch_assoc($check_users);
		$userId = $user['id'];
		print_r('write');
		$sql = "INSERT INTO `orders` (`name`, `userId`) VALUES ('$order', '$userId')";
		$result = mysqli_query($link,$sql);
	} else {
		print_r('reg');
		regUser();
		arselect($data);
	}
	
	
	
	
	
}

arselect($data);




?>