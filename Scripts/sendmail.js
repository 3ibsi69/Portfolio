function sendEmail(event) {
    event.preventDefault();
    
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('Email');
    var subjectInput = document.getElementById('subject');
    var messageInput = document.getElementById('message');
    
    var params = {
      from_name: nameInput.value,
      from_email: emailInput.value,
      from_subject: subjectInput.value,
      message: messageInput.value
    };
    
    emailjs.send("service_ttcd701", "template_xxu4ucw", params)
      .then(function(res) {
        alert("Email Sent Successfully!");
        location.reload();
      })
      .catch(function(error) {
        console.error('Error sending email:', error);
        alert("An error occurred while sending the email. Please try again later.");
      });
  }
  