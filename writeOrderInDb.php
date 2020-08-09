<?php

$postData = file_get_contents('php://input');
$data = json_decode($postData, true);
$link = mysqli_connect('n4g643522066891.db.43522066.60b.hostedresource.net:3312', 'n4g643522066891', 'f9B|/!CBF','n4g643522066891');
$name = $data["searchParam"]["details-name"];
$phone =$data["searchParam"]["details-phone"];
$email =$data["searchParam"]["details-email"];
$request =$data["searchParam"]["details-request"];
$searchParams =json_decode($data["searchParam"], true);
$items =json_decode($data["choisedItems"], true);
print_r($items);
// if($link){
// 	$result = mysqli_query($link,"INSERT INTO `orders` (`name`,`email`,`phone`,`request`,`items`,`searchParams`) VALUES ('$name','$email','$phone','$request','$items','$searchParams')");
// }

	 


// $link = mysqli_connect('n4g643522066891.db.43522066.60b.hostedresource.net:3312', 'n4g643522066891', 'f9B|/!CBF','n4g643522066891');



// $result = mysqli_query($link,"INSERT INTO `users`( `login`, `pass`, `name`, `email`) VALUES ('$login' ,'$pass','$name','$email')");








// $result = mysqli_query($link,"SELECT `name`,`value` FROM `pricing`");


// $rows = array();
// while($r = mysqli_fetch_assoc($result)) {
//     $rows[$r['name']] = $r['value'];
// }
// print json_encode($rows);


?>