<?php
$age=12;
$age1=13;
if($age>$age1){
    print('Message 1');
}elseif(($age1++) && ($age >20)){
    print("Message 2");
}else{
    print("Message3");
}
print "Age: $age. Age1: $age1";