<?php
session_start();
$login  = $_POST['login'];
$pass  = md5($_POST['pass']);

$servername = "localhost:3306";
$database = "register-database";
$username = "root";
$password = "root";
$conn = mysqli_connect($servername, $username, $password, $database);
$sql = "SELECT * FROM `users` WHERE `login` = '$login' AND `pass` = '$pass'";

$check_users = mysqli_query($conn,$sql);
if(mysqli_num_rows($check_users) > 0){
	$user = mysqli_fetch_assoc($check_users);
	setcookie('apuser',$user['name'],time()+3600*48);
	setcookie('aphash',md5($user['email']),time()+3600*48);
	header('Location: /');
} else {
	echo 'error';
}
mysqli_close($conn);
?>