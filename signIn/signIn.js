async function signIn() {
    var email = document.getElementById("emailInput").value.toString().toLowerCase().trim();
    var password = document.getElementById("passwordInput").value;
    var result = await get("profiles", email)
 
    if (result.profile) {
        if (result.profile.password == password) {
            window.location = `../user/dashboard.html?email=${email}`
        }
    }
    else {
        result = await get("companies", email)
        if (result.company) {
            if (result.company.password == password) {
                window.location = `../company/dashboard.html?email=${email}`
            }
        }
    }
}