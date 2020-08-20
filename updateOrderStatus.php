<?php
$postData = file_get_contents('php://input');
$data = json_decode($postData, true);
$order = $data['order'];

$value = json_encode($data['obj'],JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE);

$link = mysqli_connect('n4g643522066891.db.43522066.60b.hostedresource.net:3312', 'n4g643522066891', 'f9B|/!CBF','n4g643522066891');

$sql =  "UPDATE orders set  value ='$value' WHERE name='$order'";
$result = mysqli_query($link,$sql);

if($result){
echo 'OK';
} else {
echo 'Error!';}

?>