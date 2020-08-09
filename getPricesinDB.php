<?php
$link = mysqli_connect('n4g643522066891.db.43522066.60b.hostedresource.net:3312', 'n4g643522066891', 'f9B|/!CBF','n4g643522066891');
$result = mysqli_query($link,"SELECT `name`,`value` FROM `pricing`");


$rows = array();
while($r = mysqli_fetch_assoc($result)) {
    $rows[$r['name']] = $r['value'];
}
print json_encode($rows);


?>