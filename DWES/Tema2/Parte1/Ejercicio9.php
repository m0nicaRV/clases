<!DOCTYPE html>
<html lang="en">
<head>
    <title>Activity 2 Lesson 3</title>
</head>
<body>
    <?php
        $code=0;
        $result=match($code){
            0 => 'You have chosen 0',
            1 => 'You have chosen 1',
            2 => 'You have chosen 2',
            3 => 'You have chosen 3',
            default => 'I do not know which one you selected',

        };
        echo $result;
    ?>
</body>
</html>