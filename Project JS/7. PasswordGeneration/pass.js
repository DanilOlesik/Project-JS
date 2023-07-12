const mainEl = document.querySelector(".main");

const passwordEl = document.createElement("input");
passwordEl.classList.add("password");
passwordEl.setAttribute("placeholder", " Сгенерировать пароль");
passwordEl.addEventListener("keypress", (e) => {
  e.preventDefault();
});
passwordEl.addEventListener("focus", (e) => {});

const copyBtn = document.createElement("button");
copyBtn.classList.add("password-button");
copyBtn.innerText = "Скопировать";
copyBtn.addEventListener("click", (e) => {
  passwordEl.select();
  passwordEl.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(passwordEl.value);
});

const generateBtn = document.createElement("button");
generateBtn.classList.add("password-button");
generateBtn.innerText = "Сгенерировать";
generateBtn.addEventListener("click", (e) => {
  let password = generatePassword(12);
  passwordEl.value = password;
});

function generatePassword(passwordLendth) {
  const numberCharts = "0123456789";
  const upperCharts = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCharts = "abcdefghijklmnopqrstuvwxyz";
  const symbolCharts = "!@#$%^&*()_+";
  const allChrats = numberCharts + upperCharts + lowerCharts + symbolCharts;

  let randomString = "";

  for (let i = 0; i < passwordLendth; i++) {
    let randomNumber = Math.floor(Math.random() * allChrats.length);
    randomString += allChrats[randomNumber];
  }

  return randomString;
}

mainEl.appendChild(passwordEl);
mainEl.appendChild(copyBtn);
mainEl.appendChild(generateBtn);
