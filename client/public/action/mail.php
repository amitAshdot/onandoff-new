<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['fname']) && empty($_POST['email'])) die();

if ($_POST)
	{

	// set response code - 200 OK

	http_response_code(200);
	$subject = $_POST['fname'];
	$to = "amitashdot@gmail.com";
	$from = $_POST['email'];

	// data

	$msg = $_POST['number'] . $_POST['message'];

	// Headers

	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ">";
	mail($to, $subject, $msg, $headers);

	// echo json_encode( $_POST );

	echojson_encode(array(
		"sent" => true
	));
	}
  else
	{

	// tell the user about error

	echojson_encode(["sent" => false, "message" => "Something went wrong"]);
	}

?>
<!-- 
<?

//$recepient = "micha@targetcall.co.il, shimon@targetcall.co.il"; 
$recepient = "amitashdot@gmail.com"; 
$text_1 = trim($_POST["fname"]);
$text_3 = trim($_POST["email"]);

$message = " \n ליד חדש מקמפיין סלולר 012- פובליסיס \n
שם: $text_1 \nטלפון: $text_3";
$pagetitle = "פניה חדשה - 012 סלולר";
$headers = "From: 012-mobile-cellular.co.il \r\nContent-type: text/plain; charset=utf8 \r\n";
$from = "012-mobile-cellular.co.il";

 if ( mail($recepient, $pagetitle, $message, $headers,$from)) {
      echo("Email successfully sent to $to_email... $recepient");
    } else {
      echo("Email sending failed...");
    }
?> -->

