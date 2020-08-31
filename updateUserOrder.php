<?php
$postData = file_get_contents('php://input');
$data = json_decode($postData, true);
$order = $data['order'];
$email = $data['email'];

$value = json_encode($data['obj'],JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE);
$prices = json_encode($data['prices'],JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE);

$link = mysqli_connect('n4g643522066891.db.43522066.60b.hostedresource.net:3312', 'n4g643522066891', 'f9B|/!CBF','n4g643522066891');



$select_users = mysqli_query($link,"SELECT * FROM `users` WHERE `email` = '$email'");

if(mysqli_num_rows($select_users) > 0){
	$user = mysqli_fetch_assoc($select_users);
	$userId = $user['id'];
	$sql = "UPDATE orders set  `value` ='$value', `prices` = '$prices' WHERE `name`='$order' AND `userId`='$userId'";
	mysqli_query($link,$sql);
} 
?>