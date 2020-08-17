<?php
$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

function arselect($arr) {

	$link = mysqli_connect('n4g643522066891.db.43522066.60b.hostedresource.net:3312', 'n4g643522066891', 'f9B|/!CBF','n4g643522066891');


	foreach($arr as $key => $val) {
		  $check_dates = mysqli_query($link,"SELECT * FROM `dates` WHERE `date` = '$key'");
        if(mysqli_num_rows($check_dates) > 0){
            mysqli_query($link,"UPDATE dates set `commands` = '$val[commands]',`rate` = '$val[rate]' WHERE `date`='$key'");
        } else{
            mysqli_query($link,"INSERT INTO `dates` (`date`,`rate`, `commands`) VALUES ('$key', '$val[rate]', $val[commands])");
        }
	}
}
arselect($data);
?>