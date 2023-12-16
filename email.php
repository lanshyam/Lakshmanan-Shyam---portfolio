<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $recruiterName = $_POST["recruiterName"];
    $recruiterEmail = $_POST["recruiterEmail"];
    $message = $_POST["message"];

    $to = "lan.shyam@gmail.com";
    $subject = "Recruiter Message from Portfolio";
    $headers = "From: $recruiterEmail";

    mail($to, $subject, $message, $headers);
}
?>
