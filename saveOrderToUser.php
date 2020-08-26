<?php
$postData = file_get_contents('php://input');
$data = json_decode($postData, true);
$order = $data['order'];
$email = $data['email'];
$name = $data['name'];

$value = json_encode($data['values'],JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE);
$prices = json_encode($data['prices'],JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE);
$pass = getdate()['0'];
$password = md5($pass);
$link = mysqli_connect('n4g643522066891.db.43522066.60b.hostedresource.net:3312', 'n4g643522066891', 'f9B|/!CBF','n4g643522066891');



$select_users = mysqli_query($link,"SELECT * FROM `users` WHERE `email` = '$email'");

if(mysqli_num_rows($select_users) > 0){
	$user = mysqli_fetch_assoc($select_users);
	$userId = $user['id'];
	$sql = "INSERT INTO `orders` (`name`, `userId`,`value`,`prices`) VALUES ('$order', '$userId','$value','$prices')";
	mysqli_query($link,$sql);
} else {
	mysqli_query($link,"INSERT INTO `users` (`name`,`email`,`pass`) VALUES ('$name','$email','$password')");
	$check_users = mysqli_query($link,"SELECT * FROM `users` WHERE `email` = '$email'");

	if(mysqli_num_rows($check_users) > 0){
		$user = mysqli_fetch_assoc($check_users);
		$userId = $user['id'];
		$sql = "INSERT INTO `orders` (`name`, `userId`,`value`,`prices`) VALUES ('$order', '$userId','$value','$prices')";
		mysqli_query($link,$sql);
	}
	
}



?>