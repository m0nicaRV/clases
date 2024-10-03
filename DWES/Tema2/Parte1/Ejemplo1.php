<!-- ejemplo 1 Code tags -->
<?php echo "<br>___________________________CODE TAGS________________________________________________"?>

<?php $salida ="contenido php" ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $salida; ?></title>
</head>
<body>
    <h1> segundo Ejemplo</h1>
    <?php echo $salida ;?>
</body>
</html>

<?php echo "<br><br>___________________________ECHO & PRINT________________________________________________<br>"?>


<!-- Ejemplo 2 echo & print-->
<?php
$txt1="Learn PHP";
$txt2= "Jesuitas Logroño";
$x= 5;
$y=4;

echo "<h2>". $txt1."</h2>";
echo "Study PHP at ". $txt2."<br>";
echo $x + $y;

print "<h2>" . $txt1 . "</h2>";
print "Study PHP at ". $txt2."<br>";
print $x + $y;
?>


<?php echo "<br><br>___________________________VARIABLES________________________________________________<br>"?>
<?php
//diferentes formas de crear una variable  
    $chain= "Print";
    $month= 9;
    $a= array('name'=>'Fred', 'age' => 35, 'wife'=> 'Wilma');

//con Unset eliminaremos variables
    $white= "snow";
    $black = &$white;
    //unset($white);
    print $black."<br>";

// variables locales

function updateCounterL($counterL){
    $counterL++;
    return $counterL;
 }
  $counterL=10;
 $counterL=updateCounterL($counterL);
 echo "variable local: ".$counterL."<br>";

 //variable global
 function updateCounterG(){
    global $counterG;
    $counterG++;
 }
 $counterG= 10;
 updateCounterG();
 echo "Variable global: ".$counterG."<br>";


 //variable statica 
 function updateCounterS(){
    static $counterS=0;
    $counterS++;
    echo "Static counter is now {$counterS}\n"."<br>";
 }
 $counterS= 10;
 updateCounterS();
 updateCounterS();
 echo "Global counter is {$counterS}\n"."<br>";




 //variables como parametro, se comportan como locales

 $stdin= fopen('php://stdin','r');

 echo "ingresa tu nombre: \n";
fscanf($stdin, "%s", $nom);
echo "Hola, ".$nom;
 function nombre($name){
    echo "Hola te saludo, que tal ($name) \n";
 }
 nombre($nom);


 //PASO POR REFERENCIA

 function updateCounter( & $cont){
     $cont ++;
     echo "paso por referencia destro de f: ".$cont."<br>";
 }
 $suma= 6;
 $ref= & $suma;
 updateCounter($ref);
 echo "La suma es Paso por referencia: ", $suma. "<br>";
 echo "La ref es Paso por referencia: ".$ref."<br>";








