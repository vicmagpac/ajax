<?php

$vail = array('location' => 'Vail', 
	          'boardsSold' => rand(1000, 10000), 
	          'bootsSold' => rand(1000, 10000),
	          'bindingsSold' => rand(1000, 10000));

$santaFe = array('location' => 'santa Fe', 
	          'boardsSold' => rand(1000, 10000), 
	          'bootsSold' => rand(1000, 10000),
	          'bindingsSold' => rand(1000, 10000));

$bouder = array('location' => 'Bolder', 
	          'boardsSold' => rand(1000, 10000), 
	          'bootsSold' => rand(1000, 10000),
	          'bindingsSold' => rand(1000, 10000));

$denver = array('location' => 'Denver', 
	          'boardsSold' => rand(1000, 10000), 
	          'bootsSold' => rand(1000, 10000),
	          'bindingsSold' => rand(1000, 10000));

$totals = array('totals' => array($vail, $santaFe, $bouder, $denver));
$output = json_encode($totals);
print($output);
