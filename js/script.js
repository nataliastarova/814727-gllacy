
  var link = document.querySelector(".feedback-button");

  var popup = document.querySelector(".modal-feedback");
  var close = popup.querySelector(".modal-close");

  var form = popup.querySelector(".feedback-form");
  var login = popup.querySelector("[name=user-name]");
  var email = popup.querySelector("[name=user-email]");
  var feedback = popup.querySelector("[name=feedback]");

  var isStorageSupport = true;
  var storageLogin = "";
  var storageEmail = "";
  var storageFeedback = "";

  try {
    storageLogin = localStorage.getItem("login");
    storageEmail = localStorage.getItem("email");
    storageFeedback = localStorage.getItem("feedback");
  } catch (err) {
    isStorageSupport = false;
  }

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    if (storageLogin && storageEmail) {
      login.value = storageLogin;
      email.value = storageEmail;
      feedback.focus();
    } else {
      if (storageLogin) {
        login.value = storageLogin;
        email.focus();
      } else {
        login.focus();
      }
    }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });

  form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value || !feedback.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("feedback", feedback.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });
