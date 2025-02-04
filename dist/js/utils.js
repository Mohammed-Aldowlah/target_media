// Local Storage
export function getLocalStorage(name) {
  return localStorage.getItem(name);
}
export function setLocalStorage(name, val) {
  localStorage.setItem(name, val);
}

// ==================== Service Page Utils Functions ======================== //
function hideServicesWrappers() {
  const servicesWrappers = document.querySelectorAll(".service_info");
  servicesWrappers.forEach((wrapper) => wrapper.classList.remove("active"));
}

function activeServiceWrapper(target) {
  const servicesWrappers = document.querySelectorAll(".service_info");
  servicesWrappers.forEach((wrapper) => {
    wrapper.getAttribute("id") === target
      ? wrapper.classList.add("active")
      : null;
  });
}

function setActiveServiceBtn(btn) {
  btn.classList.add("active");
}
function clearServiceActiveBtns() {
  const servicesBtns = document.querySelectorAll(".sidebar__btns button");
  servicesBtns.forEach((btn) => btn.classList.remove("active"));
}
export function servicesBtns() {
  // Get all Services Buttons
  const servicesBtns = document.querySelectorAll(".sidebar__btns button");

  // Check if There is a Service name in URL
  const urlParams = new URLSearchParams(window.location.search);
  const serviceName = urlParams.get("service");
  if (serviceName) {
    // Clear Active Service Btns and Wrappers
    clearServiceActiveBtns();
    hideServicesWrappers();

    servicesBtns.forEach((btn) => {
      if (btn.getAttribute("data-target") === serviceName) {
        // Make Both Service Button and Service Wrapper Active
        setActiveServiceBtn(btn);
        activeServiceWrapper(serviceName);
      }
    });
  }

  servicesBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      let btnTarget = btn.getAttribute("data-target");

      // Clear Active Button
      clearServiceActiveBtns();
      // Hide Services Wrappers
      hideServicesWrappers();

      // Set Active Button
      setActiveServiceBtn(btn);
      // Set Active Service Wrapper
      activeServiceWrapper(btnTarget);
    });
  });
}

// ==================== About Page Utils Functions ======================== //
function clearActivFAQ() {
  const faqElements = document.querySelectorAll(
    ".about_us__faq__wrapper .faq_question"
  );
  faqElements.forEach((elm) => elm.classList.remove("active"));
}
export function aboutFAQ() {
  const faqBtns = document.querySelectorAll(
    ".about_us__faq__wrapper .faq_question"
  );
  faqBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Clear Active FAQ
      clearActivFAQ();

      // Set Active FAQ
      btn.classList.toggle("active");
    });
  });
}
