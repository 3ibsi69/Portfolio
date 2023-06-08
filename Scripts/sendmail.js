function sendEmail(event) {
    event.preventDefault();
    
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('Email');
    var subjectInput = document.getElementById('subject');
    var messageInput = document.getElementById('message');
  
    // Check if all required fields are filled
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || subjectInput.value.trim() === '' || messageInput.value.trim() === '') {
      alert('Please fill in all required fields.');
      return;
    }
  
    var loader = document.getElementById('preloader');
    var btn = document.getElementById('btnid');
    var params = {
      from_name: nameInput.value,
      from_email: emailInput.value,
      from_subject: subjectInput.value,
      message: messageInput.value
    };
  
    loader.style.display = 'block';
    btn.style.display = 'none';
  
    emailjs.send('service_ttcd701', 'template_xxu4ucw', params).then(function(res) {
      loader.style.display = 'none';
      btn.style.display = 'block';
      alert('Email Sent Successfully!');
      location.reload();
    });
  }
  
  window.addEventListener('load', function() {
    var loader = document.getElementById('preloader');
    loader.style.display = 'none';
  });
  