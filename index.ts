// Wait for the DOM to load
window.addEventListener('DOMContentLoaded', () => {
    const resumeForm = document.getElementById('resume-form') as HTMLFormElement;
    const resumeOutput = document.getElementById('resume-output') as HTMLDivElement;
  
    // Listen for form submission
    resumeForm.addEventListener('submit', function(event: Event) {
      event.preventDefault(); // Prevent form submission
  
      // Get form data
      const formData = new FormData(resumeForm);
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const contact = formData.get('contact') as string;
      const education = formData.get('education') as string;
      const skills = formData.get('skills') as string;
      const workExperience = formData.get('work-experience') as string;
  
      // Dynamically update the resume display section
      resumeOutput.innerHTML = `
        <h2>Your Generated Resume</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${contact}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Skills:</strong> ${skills}</p>
        <p><strong>Work Experience:</strong> ${workExperience}</p>
      `;
  
      // Display the generated resume section
      resumeOutput.style.display = 'block';
    });
  });
  