<?php
$link = mysqli_connect('n4g643522066891.db.43522066.60b.hostedresource.net:3312', 'n4g643522066891', 'f9B|/!CBF','n4g643522066891');
$result = mysqli_query($link,"SELECT `id`,`name`,`userId`,`value`,`prices` FROM `orders`");


$rows = array();
while($r = mysqli_fetch_assoc($result)) {
    $elem = array($r['name'],$r['id'],$r['userId'],$r['value'],$r['prices']);
    array_push($rows,$elem);
}
print json_encode($rows);


?>