<?php 

function data($name, $email, $message, $send_date, $send_hour){

// Email data
  $data = "
  <!DOCTYPE html>
  <html>
  <head>
  	<title>Portfolio - Contact</title>
  	<style type='text/css'>
		  body {
		  margin:0px;
		  font-family:Verdane;
		  font-size:14px;
		  color: #666666;
		  }
		  a{
		  color: #666666;
		  text-decoration: none;
		  }
		  a:hover {
		  color: #FF0000;
		  text-decoration: none;
		  }
	  </style>
  </head>
  <body>

	  <table width='510' border='1' cellpadding='1' cellspacing='1' bgcolor='#fff'>
	    <tr>
	      <td>
					<tr>
	         <td width='500'>name: $name</td>
	        </tr>
	        <tr>
	          <td width='320'>E-mail: <b>$email</b></td>
						</tr>
	        <tr>
	          <td width='320'>message: $message</td>
	        </tr>
		    </td>
		  </tr>  
		  <tr>
		    <td>Este e-mail foi enviado em <b>$send_date</b> às <b>$send_hour</b></td>
		  </tr>
		</table>
  
  </body>
  </html>
  ";

  return $data;
}

 ?>