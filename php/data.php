<?php
 
/*Устанавливаем подключение к БД*/
require 'db.php';
 
/*
*Запрашиваем все данные из таблички books и 
*записываем их в переменную books
*/
$result = mysql_query("SELECT * FROM test");
$books = mysql_fetch_all($result, MYSQLI_ASSOC);
 
/*возвращаем переменную в формате JSON*/
exit(json_encode($books));