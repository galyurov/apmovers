<?php
session_start();
$email = $_POST['email'];
$pass  = $_POST['pass'];
$new_pass  = $_POST['new-pass'];
$conf_pass  = $_POST['conf-pass'];
$pass = md5($pass);
$new_pass  = md5($new_pass);
$conf_pass  = md5($conf_pass);



$conn = mysqli_connect('n4g643522066891.db.43522066.60b.hostedresource.net:3312', 'n4g643522066891', 'f9B|/!CBF','n4g643522066891');
$sql = "UPDATE users set  pass ='$new_pass' WHERE email='$email'";

$change_pass = mysqli_query($conn,$sql);
	if($new_pass===$conf_pass) {
		if ($change_pass){
			$_SESSION['change']= "Update successful";
			header('Location: profile-setting.php');
		} else {
			$_SESSION['change']= "Update error";
		}
	} else {
		$_SESSION['change']= 'New password and Confirm password are different!';
		header('Location: profile-setting.php');
	}
mysqli_close($conn);
?>