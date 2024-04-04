function showRegisterForm() {
    document.getElementById("registro-form").style.display = "block";
    document.getElementById("login-form").style.display = "none";
    document.querySelector(".options button.active").classList.remove("active");
    document.querySelector(".options button:first-child").classList.add("active");
  }
  
  function showLoginForm() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("registro-form").style.display = "none";
    document.querySelector(".options button.active").classList.remove("active");
    document.querySelector(".options button:last-child").classList.add("active");
  }
  