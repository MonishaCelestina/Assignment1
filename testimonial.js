// testimonial.js attempt number 1239
// this is to display feedback on the testimonials page
function displayFeedback() {
  console.log("Attempting to find testimonialsection..."); // this is to see if this is whats causing the error
  const testimonialSection = document.getElementById("testimonialsection");

  if (testimonialSection) {
    console.log("Testimonial section found.");

    // Retrieve feedback data from localStorage
    const feedbackData = JSON.parse(localStorage.getItem("feedback")) || [];

    // Display feedback on the testimonials page
    feedbackData.forEach((feedback) => {
      const testimonialCard = document.createElement("div");
      testimonialCard.classList.add("testimonial-card");

      const messageParagraph = document.createElement("p");
      messageParagraph.classList.add("testimonial-message");
      messageParagraph.textContent = `"${feedback.message}"`;

      const detailsParagraph = document.createElement("p");
      detailsParagraph.classList.add("testimonial-details");
      detailsParagraph.textContent = ` - ${feedback.firstName} ${feedback.lastName}, ${feedback.role}`;

      testimonialCard.appendChild(messageParagraph);
      testimonialCard.appendChild(detailsParagraph);

      testimonialSection.appendChild(testimonialCard);
    });
  } else {
    console.error("Element with ID 'testimonialsection' not found."); // checking for error again
  }
}

// this is for submitting feedback
function submitFeedbackAndRedirect() {
  // Retrieve form values
  const firstName = document.getElementById("fname").value;
  const lastName = document.getElementById("lname").value;
  const role = document.getElementById("role").value;
  const message = document.getElementById("message").value;

  // create a feedback object
  const feedbackData = {
    firstName,
    lastName,
    role,
    message,
  };

  // to get existing feedback array from localStorage
  const existingFeedback = JSON.parse(localStorage.getItem("feedback")) || [];

  // Add new feedback to the array
  existingFeedback.push(feedbackData);

  // Saving to local storage
  localStorage.setItem("feedback", JSON.stringify(existingFeedback));

  // To tell user if the feedback has been submitted
  alert("Feedback submitted successfully!");

  // Redirect to the testimonials page
  window.location.href = "testimonials.html";
}

// Use DOM event to ensure the script runs after HTML is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  displayFeedback();
});
