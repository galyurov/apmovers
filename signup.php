<?php
session_start();

$login  = $_POST['login'];
$name  = $_POST['name'];
$email = $_POST['email'];
$pass  = $_POST['pass'];

$pass = md5($pass);

$servername = "localhost:3306";
$database = "register-database";
$username = "root";
$password = "root";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
// Check connection
if (!$conn) {
	$_SESSION['error']= "Connection failed: " . mysqli_connect_error();
}
 
$sql = 
if (mysqli_query($conn, $sql)) {
	$_SESSION['ok']= "Registration successful";
} else {
	$_SESSION['error'] =  "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);
?>