<?php
//json_encode(json_decode(file_get_contents("shipments.js"), true));
$path = 'assets/json/airports.json';
$jsonString = file_get_contents($path, true);
$jsonData = json_decode($jsonString, true);
$find_val = $_GET['search'];
$response = array();
foreach ($jsonData as $key => $value){
  //echo  $value['city']. '<br>';
	if($find_val != ''){
	   if(strtolower($value['state']) || strtolower($value['name']) == strtolower($find_val) ){
		   $response[] = array(
				"state" => $value['state'],
				"name" => $value['name'],
                "city" => $value['city'],
                "country" => $value['country'],
				'total' => count($jsonData),
				'incomplete_results' => false,
    
			);
			//echo $value['state'].' '.','.$value['city'].' , '.' '.$value['country'];
	   }
	}else{
		$response[] = array(
			"state" => $value['state'],
			"name" => $value['name'],
            "city" => $value['city'],
            "country" => $value['country'],
			'total' => count($jsonData),
			'incomplete_results' => false,
		);
	}
}

echo json_encode($response);




?>