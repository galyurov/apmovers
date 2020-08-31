<?php
session_start();
$postData = file_get_contents('php://input');
$data = json_decode($postData, true);
$order = $data['order'];
$email = $data['email'];
$name = $data['name'];
$date = $data['values']['searchParam']['datepicker'];

$value = json_encode($data['values'],JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE);
$prices = json_encode($data['prices'],JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE);
$pass = getdate()['0'];
$password = md5($pass);
$link = mysqli_connect('n4g643522066891.db.43522066.60b.hostedresource.net:3312', 'n4g643522066891', 'f9B|/!CBF','n4g643522066891');



$select_users = mysqli_query($link,"SELECT * FROM `users` WHERE `email` = '$email'");
$select_dates = mysqli_query($link,"SELECT * FROM `dates` WHERE `date` = '$date'");
if(mysqli_num_rows($select_dates) > 0){
    $currentDate = mysqli_fetch_assoc($select_dates);
	 $commands = $currentDate['commands'];
	 if($commands > 0){
		--$commands;
		$sql = "UPDATE dates set  `commands` ='$commands' WHERE `date`='$date'";
		mysqli_query($link,$sql);
	 } else {
		header('Location: /');
	 }
} else {
    $select_default_commands = mysqli_query($link,"SELECT * FROM `dates` WHERE `date` = 'commands'");
	 $default_commands = mysqli_fetch_assoc($select_default_commands);
	 $commands = $default_commands['commands'];
    --$commands;
    $sql = "INSERT INTO `dates` (`date`, `commands`) VALUES ('$date', '$commands')";
    mysqli_query($link,$sql);
}

if(mysqli_num_rows($select_users) > 0){
	$user = mysqli_fetch_assoc($select_users);
	$userId = $user['id'];
	$sql = "INSERT INTO `orders` (`name`, `userId`,`value`,`prices`) VALUES ('$order', '$userId','$value','$prices')";
	mysqli_query($link,$sql);
} else {
	mysqli_query($link,"INSERT INTO `users` (`name`,`email`,`pass`) VALUES ('$name','$email','$password')");
	$check_users = mysqli_query($link,"SELECT * FROM `users` WHERE `email` = '$email'");
	setcookie('apuser',$name,time()+3600*48,'/');
    setcookie('aphash',md5($email),time()+3600*48,'/');
    setcookie('apmail',$user['email'],time()+3600*48);
	if(mysqli_num_rows($check_users) > 0){
		$user = mysqli_fetch_assoc($check_users);
		$userId = $user['id'];
		$sql = "INSERT INTO `orders` (`name`, `userId`,`value`,`prices`) VALUES ('$order', '$userId','$value','$prices')";
		mysqli_query($link,$sql);
	}
}
?>