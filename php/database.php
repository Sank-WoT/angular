<?php
 
$db = mysqli_connect('localhost', 'root', '', 'catalog') 
    or die('Ошибка подключения');
mysqli_set_charset($db, "utf8")
    or die('Ошибка кодировки');