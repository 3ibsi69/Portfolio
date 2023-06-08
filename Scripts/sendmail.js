function sendEmail(event){
    event.preventDefault();
    var params={
        from_name:document.getElementById('name').value,
        from_email:document.getElementById('Email').value,
        from_subject:document.getElementById('subject').value,
        message:document.getElementById('message').value
    }
    emailjs.send("service_ttcd701","template_xxu4ucw",params).then(function(res){
        alert("Email Sent Successfully!");
        location.reload();
})
}