<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $message = trim($_POST["message"]);

    if ($name === "" || $email === "" || $message === "") {
        echo "Please fill out everything";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Please enter a valid email address.";
        exit;
    }

    $to = "YOUR_EMAIL_HERE"; 

    $subject = "Someone has emailed you through your portfolio";

    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    mail($to, $subject, $body);

    echo "Thanks you! Your message has been sent and you will get a reply within 24 hours!";
}
?>
