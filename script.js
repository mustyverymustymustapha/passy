function checkPassword() {
    const password = document.getElementById("passwordInput").value;
    const length = password.length;
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*()_+{}\[\]:;<>,.?~\-\/\\]/.test(password);
    const hasCapital = /[A-Z]/.test(password);

    if (length < 8 || !hasLetters) {
        document.getElementById("result").textContent = "Not secure";
    } else if (length >= 8 && hasLetters && !hasCapital) {
        document.getElementById("result").textContent = "Not very secure";
    } else if (length >= 8 && hasLetters && hasCapital && !hasSymbols) {
        document.getElementById("result").textContent = "Secure";
    } else if (length >= 8 && hasLetters && hasCapital && hasSymbols) {
        document.getElementById("result").textContent = "Very secure";
    } else if (length >= 15 && hasLetters && hasCapital && hasSymbols) {
        document.getElementById("result").textContent = "Very secure";
    }
}
