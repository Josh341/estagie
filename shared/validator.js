function isValidEmail(email) {
    return email.match(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/)
}
function isValidPassword(password, confirmPassword) {
    return password === confirmPassword;
}
