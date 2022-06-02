async function signUpUser() {
    var name = document.getElementById("nameInput").value;
    var cpf = document.getElementById("cpfInput").value;
    var email = document.getElementById("emailInput").value.toString().toLowerCase().trim();
    var password = document.getElementById("passwordInput").value;
    var confirmPassword = document.getElementById("confirmPasswordInput").value;
    if (!isValidEmail(email)) {
        return;
    }
    if (!isValidPassword(password, confirmPassword)) {
        return;
    }
    await post("profiles", {
        "id": email,
        "profile": {
            "email": email,
            "name": name,
            "cpf": cpf,
            "password": password,
            "visitors": 0,
            "plan": {
                "id": 0,
                "data": {
                    "name": "free",
                    "conections": 5,
                    "image": "https://www.promoview.com.br/uploads/2019/07/images/08.07.2019/DIL_MOTA_DE_GRATIS.bmp",
                    "coursesQuantity": 0
                }
            }
        }
    })
    window.location = `../user/dashboard.html?email=${email}`
}
async function signUpComp() {
    var name = document.getElementById("nameInput").value;
    var cnpj = document.getElementById("cnpjInput").value;
    var email = document.getElementById("emailInput").value.toString().toLowerCase().trim();
    var password = document.getElementById("passwordInput").value;
    var confirmPassword = document.getElementById("confirmPasswordInput").value;
    if (!isValidEmail(email)) {
        return;
    }
    if (!isValidPassword(password, confirmPassword)) {
        return;
    }
    await post("companies", {
        "id": email,
        "company": {
            "email": email,
            "name": name,
            "cnpj": cnpj,
            "password": password,
            "plan": {
                "id": 0,
                "data": {
                    "name": "free",
                    "conections": 5,
                    "image": "https://www.promoview.com.br/uploads/2019/07/images/08.07.2019/DIL_MOTA_DE_GRATIS.bmp",
                    "coursesQuantity": 0
                }
            }
        }
    })
    window.location = `../company/dashboard.html?email=${email}`
}


