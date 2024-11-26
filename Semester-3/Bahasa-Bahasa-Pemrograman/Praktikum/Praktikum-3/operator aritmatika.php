<?php
// Operator aritmatika
$hasil1 = +11;
$hasil2 = -3;
$hasil3 = 3 + 5;
$hasil4 = 8 - 4.5;
$hasil5 = 2 * 5;
$hasil6 = 3 + 8 / 5 - 3;
$hasil7 = 10 % 4;
$hasil8 = 2 ** 4;
var_dump($hasil1);
echo "\n";
var_dump($hasil2);
echo "\n";
var_dump($hasil3);
echo "\n";
var_dump($hasil4);
echo "\n";
var_dump($hasil5);
echo "\n";
var_dump($hasil6);
echo "\n";
var_dump($hasil7);
echo "\n";
var_dump($hasil8);
echo "\n";
// PHP Warning: A non-numeric value encountered
$hasil = "17.5cm" + "1.99cm";
var_dump($hasil); echo "\n";