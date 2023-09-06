<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email_address"];
    $message = $_POST["message"];
    
    // Define your email subject and recipient
    $to = "malaz.tamim@tum.de"; // Replace with your email address
    $subject = "New contact form submission from $name";

    // Create the email message
    $message_body = "Name: $name\n";
    $message_body .= "Email: $email\n";
    $message_body .= "Message:\n$message";

    // Send the email
    $headers = "From: $email\r\n";
    $success = mail($to, $subject, $message_body, $headers);

    if ($success) {
        // Redirect to a thank you page or display a success message
        header("Location: thank_you.html");
    } else {
        // Handle the case where the email could not be sent
        echo "Error: Unable to send email.";
    }
} else {
    // Handle non-POST requests here
    echo "Invalid request method.";
}
?>
