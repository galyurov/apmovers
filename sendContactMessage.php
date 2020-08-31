<?php
$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

$name = $data['name'];
$email = $data['email'];
$phone = $data['phone'];
$text = $data['text'];


$link = mysqli_connect('n4g643522066891.db.43522066.60b.hostedresource.net:3312', 'n4g643522066891', 'f9B|/!CBF','n4g643522066891');
$sql = "INSERT INTO `messages` (`name`, `email`,`phone`,`text`) VALUES ('$name','$email','$phone','$text')";
mysqli_query($link,$sql);

?>