<?php
session_start();

$login  = $_POST['login'];
$name  = $_POST['name'];
$email = $_POST['email'];
$pass  = $_POST['pass'];

$pass = md5($pass);

// Create connection
$conn = mysqli_connect('n4g643522066891.db.43522066.60b.hostedresource.net:3312', 'n4g643522066891', 'f9B|/!CBF','n4g643522066891');
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