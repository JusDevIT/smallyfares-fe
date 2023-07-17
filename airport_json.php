<?php
//json_encode(json_decode(file_get_contents("shipments.js"), true));
$path = 'assets/json/airports.json';
$jsonString = file_get_contents($path, true);
$jsonData = json_decode($jsonString, true);
$searchTerms = $_GET['term'];
$response = array();

foreach ($jsonData as $key => $value){
	   if (stripos($value['state'], $searchTerms) !== false){
		   $response[] = array(
				"id" => $value['name'],
				"text"=> $value['name'].' '.$value['city'].' '.$value['state'].', '.$value['country']
			);
	   }
	}

echo json_encode($response);




?>