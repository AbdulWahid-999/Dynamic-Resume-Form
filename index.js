// Wait for the DOM to load
window.addEventListener('DOMContentLoaded', function () {
    var resumeForm = document.getElementById('resume-form');
    var resumeOutput = document.getElementById('resume-output');
    // Listen for form submission
    resumeForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        // Get form data
        var formData = new FormData(resumeForm);
        var name = formData.get('name');
        var email = formData.get('email');
        var contact = formData.get('contact');
        var education = formData.get('education');
        var skills = formData.get('skills');
        var workExperience = formData.get('work-experience');
        // Dynamically update the resume display section
        resumeOutput.innerHTML = "\n        <h2>Your Generated Resume</h2>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone Number:</strong> ").concat(contact, "</p>\n        <p><strong>Education:</strong> ").concat(education, "</p>\n        <p><strong>Skills:</strong> ").concat(skills, "</p>\n        <p><strong>Work Experience:</strong> ").concat(workExperience, "</p>\n      ");
        // Display the generated resume section
        resumeOutput.style.display = 'block';
    });
});
