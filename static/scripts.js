document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    if (!targetId) return;
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      document
        .querySelectorAll("nav a")
        .forEach((link) => link.classList.remove("active"));
      this.classList.add("active");
    }
  });
});


const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = this.querySelector("#name").value.trim();
    const email = this.querySelector("#email").value.trim();
    const message = this.querySelector("#message").value.trim();

    document.querySelectorAll(".error").forEach((el) => el.remove());

    let hasError = false;

    if (!name) {
      showError(this.querySelector("#name"), "Le nom est requis");
      hasError = true;
    }

    if (!email) {
      showError(this.querySelector("#email"), "L'email est requis");
      hasError = true;
    } else if (!isValidEmail(email)) {
      showError(this.querySelector("#email"), "L'email n'est pas valide");
      hasError = true;
    }

    if (!message) {
      showError(this.querySelector("#message"), "Le message est requis");
      hasError = true;
    }

    if (!hasError) {
      this.submit();
    }
  });
}

function showError(element, message) {
  const errorDiv = document.createElement("div");
  errorDiv.className = "error";
  errorDiv.style.color = "red";
  errorDiv.style.fontSize = "0.8rem";
  errorDiv.style.marginTop = "0.25rem";
  errorDiv.textContent = message;
  element.parentNode.appendChild(errorDiv);
}

function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function setupModal(modalId, triggerSelectors) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  const closeBtn = modal.querySelector(".close-modal");
  if (!closeBtn) return;

  document.querySelectorAll(triggerSelectors).forEach((trigger) => {
    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      modal.classList.add("active");
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const developmentModal = document.getElementById("development-modal");
  const openDevelopmentModal = document.getElementById("open-development-modal");
  const closeDevelopmentModal = developmentModal.querySelector(".close-modal");

  openDevelopmentModal.addEventListener("click", function (e) {
    e.preventDefault();
    developmentModal.classList.add("active");
  });

  closeDevelopmentModal.addEventListener("click", function () {
    developmentModal.classList.remove("active");
  });

  developmentModal.addEventListener("click", function (e) {
    if (e.target === developmentModal) {
      developmentModal.classList.remove("active");
    }
  });
});



setupModal("development-modal", "#open-development-modal");
setupModal("legal-modal", ".mentions-legales");


document.addEventListener("DOMContentLoaded", function () {
  setupModal("development-modal", "#open-development-modal");
  setupModal("design-modal", "#open-design-modal");
  setupModal("community-modal", "#open-community-modal");
  setupModal("assistant-modal", "#open-assistant-modal");
  setupModal("recruitment-modal", "#open-recruitment-modal");
  setupModal("vip-modal", "#open-vip-modal");
});

