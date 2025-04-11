document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    if (!form) {
      console.error("Form not found!");
      return;
    }
  
    // Create styled notification message
    const successMsg = document.createElement("div");
    successMsg.textContent = "✅ Your message has been sent. We will get back to you shortly!";
    successMsg.style.display = "none";
    successMsg.style.padding = "1rem";
    successMsg.style.backgroundColor = "#d4edda";
    successMsg.style.color = "#155724";
    successMsg.style.border = "1px solid #c3e6cb";
    successMsg.style.borderRadius = "8px";
    successMsg.style.marginTop = "1rem";
    successMsg.style.fontWeight = "500";
    successMsg.style.textAlign = "center";
    successMsg.style.transition = "all 0.4s ease-in-out";
    form.after(successMsg);
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = form.querySelector("#name").value.trim();
      const email = form.querySelector("#email").value.trim();
      const phone = form.querySelector("#phone").value.trim();
      const message = form.querySelector("#message").value.trim();
  
      if (!name || !email || !phone || !message) {
        alert("Please complete all fields before submitting.");
        return;
      }
  
      // Show message
      successMsg.style.display = "block";
      successMsg.style.opacity = "0";
      successMsg.style.transform = "translateY(10px)";
      setTimeout(() => {
        successMsg.style.opacity = "1";
        successMsg.style.transform = "translateY(0)";
      }, 100);
  
      // Reset form
      form.reset();
  
      // Auto-hide message after 5 seconds
      setTimeout(() => {
        successMsg.style.opacity = "0";
        successMsg.style.transform = "translateY(10px)";
        setTimeout(() => {
          successMsg.style.display = "none";
        }, 400);
      }, 5000);
    });
  });