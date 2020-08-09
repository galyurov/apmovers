<?php
session_start();
setcookie('apuser','',time()-3600);
setcookie('aphash','',time()-3600);
header('Location: /');
?>