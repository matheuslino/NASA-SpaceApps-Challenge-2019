<?php

header('Access-Control-Allow-Origin: *');

include_once "emailBody.php";

// aquisicao dos dados via GET
if (isset($_REQUEST["mail"])){

	//Email information
	$name = (isset($_REQUEST["name"])) ? $_REQUEST["name"] : '';
	$email = (isset($_REQUEST["email"])) ? $_REQUEST["email"] : '';
	$message = (isset($_REQUEST["message"])) ? $_REQUEST["message"] : '';
	$send_date = date('d/m/Y');
	$send_hour = date('H:i:s');

// Get Data
	$data = data($name, $email, $message, $send_date, $send_hour);

  // emails para quem será enviado o formulário
	$admin_email = "matheus_araujolino@hotmail.com";
	$subject = "Portfolio - Contact";

   // Headers
  $headers  = "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
  $headers .= "From: $email";

	 //send email
	$sendEmail = mail($admin_email, "$subject", $data, $headers);
	$sendEmail = true;
	if($sendEmail){
		$obj = array("status" => "success");
		// echo " <meta http-equiv='refresh' content='10;URL=contato.php'>";
	}
	else{
		$obj = array("status" => "failed");
	}
	echo json_encode($obj);
}

?>