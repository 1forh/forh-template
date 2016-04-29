<?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $subject = "Message from contact form on http://projects.zacharyminner.com/php-form";
    $sendto = "someemail@gmail.com";
    // $carbonCopy = "someotheremail@gmail.com";

    //Do not edit below this line//
    $name = strip_tags($_POST["name"]);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = strip_tags($_POST["message"]);
    // Check that data was sent to the mailer.
    if ( empty($name) OR empty($message) ) {
      // Set a 400 (bad request) response code and exit.
      http_response_code(400);
      echo "Oops! There was a problem with your submission. Please complete the form and try again.";
      exit;
    } else if ( !filter_var($email, FILTER_VALIDATE_EMAIL) ) {
      // Set a 400 (bad request) response code and exit.
      http_response_code(400);
      echo "Oops! Please enter a valid email address and submit the form again.";
      exit;
    }
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: ". $email . "\r\n";
    // $headers .= "CC: " . $carbonCopy . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
    $emailContents = "<html><body>";
    $emailContents .= "<p>Full Name: " . $name . "</p>";
    $emailContents .= "<p>Email Address: " . $email . "</p>";
    $emailContents .= "<p>Message: " . $message . "</p>";
    $emailContents .= "</body></html>";

    $send = mail($sendto, $subject, $emailContents, $headers);
    if ($send) {
      http_response_code(200);
      echo "Your message has been sent.\r\n";
    } else {
      // Set a 500 (internal server error) response code.
      http_response_code(500);
      echo "There was a problem sending the email.\r\n";
    }
  } else {
    // Not a POST request, set a 403 (forbidden) response code.
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
  }
