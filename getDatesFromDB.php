<?php
$link = mysqli_connect('n4g643522066891.db.43522066.60b.hostedresource.net:3312', 'n4g643522066891', 'f9B|/!CBF','n4g643522066891');
$result = mysqli_query($link,"SELECT `date`,`rate`,`commands` FROM `dates`");


$rows = array();
while($r = mysqli_fetch_assoc($result)) {
    $rows[$r['date']] = array($r['rate'],$r['commands']);
}
print json_encode($rows);


?>