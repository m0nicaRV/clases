<?php 
function selection($name, $num){
    echo"<select name='$name'>";
    $cont=0;
    while($cont<=10){
        echo "<option value='$cont'>$name $cont</option>";

        $cont++;
    }
    echo"</select>";
}
 selection("people", 10);
?>

