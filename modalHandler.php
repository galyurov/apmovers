<?php
$json_str = file_get_contents('php://input');
$servername = "localhost:3306";
$database = "test";
$username = "root";
$password = "root";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
// Check connection
if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
}
 
echo "Connected successfully";
 
$sql = "INSERT INTO `students`( `string`, `lastname`, `email`) VALUES ('$json_str' ,'test','test')";
if (mysqli_query($conn, $sql)) {
      echo "New record created successfully";
} else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);
// echo	 $json_str
?>