<?php

$name = $_REQUEST['name'];
$size = $_REQUEST['size'];
$beverage = $_REQUEST['beverage'];
$coffeemaker = $_REQUEST['coffeemaker'];

for ($i = 0; $i < 5; $i++) {
  sleep($i);
}

echo $coffeemaker . $name;
?>
