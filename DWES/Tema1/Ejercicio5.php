<?php
$str="2 years";
$str_int=(int)$str;
$var=20 + $str_int;

print_r($var);
echo "<br>";
var_dump($var);
echo "<br>";

$str1="years";
$str1_int=(int)$str1;
$var1=20 + $str1_int;

print_r($var1);
echo "<br>";
var_dump($var1);
echo "<br>";

define('IVA', 21);
echo IVA;

echo "<br>";
$a= array(1, 2, array("a", "b", "c"));
var_dump($a);
echo "<br>";
print_r($a);

$frase1= "sola";
$frase2= "";
$num1=0; 
$num2=5;
$numfrase=(int)$frase1; //0
$bol1=(bool)$frase1; //true
$bol2=(bool)$frase2; //false
$bol1=(bool)$num1; //false
$bol2=(bool)$num2; //true
$bol1=(bool)$numfrase; //false

$var4= "20"+15;


