var userData
var areas = ["Selecione sua area", "Programador","Designer gráfico","Marketing Digital","Audio visual"];
var email = window.location.href.split("?")[1].split("=")[1]
async function initialize() {
    userData = await get("profiles", email);
    document.getElementById("userName").innerHTML = userData.profile.name;
    document.getElementById("slogan").innerHTML = userData.profile.slogan ? userData.profile.slogan : "Seu Slogan";
    document.getElementById("phone").innerHTML = userData.profile.phone ? userData.profile.phone : "Seu Telefone";
    document.getElementById("userEmail").innerHTML = userData.profile.email;
    document.getElementById("details").innerHTML = userData.profile.details ? userData.profile.details : "Forneça detalhes sobre você para seus visitantes!";
    document.getElementById("userPfp").src = userData.profile.pfp ? userData.profile.pfp : "/assets/images/logo_usuario.jpg";
    document.getElementById("userArea").innerHTML = userData.profile.area ? userData.profile.area : "Insira sua Area";
    document.getElementById("plan").src = userData.profile.plan.data.image
    document.getElementById("visitors").innerHTML = userData.profile.visitors 
}
function applyInfos() {
    var userName = document.getElementById("userName").value
    var slogan = document.getElementById("slogan").value
    var userEmail = document.getElementById("userEmail").value
    var phone = document.getElementById("phone").value
    var details = document.getElementById("details").value
    var pfp = document.getElementById("pfp").value
    var area = document.getElementById("selectArea").value
    if (!isValidEmail(userEmail)) {
        return;
    }
    saveUserInfo(userEmail, userName, slogan, phone, details, pfp, area);
}

function editInfos() {
    var userName = document.getElementById("userName").innerHTML;
    var slogan = document.getElementById("slogan").innerHTML;
    var userEmail = document.getElementById("userEmail").innerHTML;
    var phone = document.getElementById("phone").innerHTML;
    var details = document.getElementById("details").innerHTML;
    var pfp = document.getElementById("userPfp").src;
    var selectArea = document.getElementById("userArea").innerHTML;

    var div = document.getElementById("userInfo")
    var divbutao = document.getElementById("butao")
    var divMoreInfo = document.getElementById("moreUserInfo")

    while (div.firstChild) {
        div.removeChild(div.firstChild)
    }

    while (divbutao.firstChild) {
        divbutao.removeChild(divbutao.firstChild)
    }

    while (divMoreInfo.firstChild) {
        divMoreInfo.removeChild(divMoreInfo.firstChild)
    }

    var userNameInput = document.createElement("input")
    userNameInput.class = "contato"
    userNameInput.value = userName
    userNameInput.id = "userName"

    var sloganInput = document.createElement("input")
    sloganInput.class = "contato"
    sloganInput.value = slogan
    sloganInput.id = "slogan"

    var userEmailInput = document.createElement("input")
    userEmailInput.class = "contato"
    userEmailInput.value = userEmail
    userEmailInput.id = "userEmail"

    var phoneInput = document.createElement("input")
    phoneInput.class = "contato"
    phoneInput.value = phone
    phoneInput.id = "phone"

    var detailsInput = document.createElement("input")
    detailsInput.class = "contato"
    detailsInput.value = details
    detailsInput.id = "details"

    var pfpInput = document.createElement("input")
    pfpInput.class = "contato"
    if (pfp == "http://127.0.0.1:5501/assets/images/logo_usuario.jpg") {
        pfpInput.value = "Insira o link da sua nova imagem de perfil"
    } else {
        pfpInput.value = pfp
    }
    pfpInput.id = "pfp"

    var selectArea = document.createElement("select");
    selectArea.id = "selectArea"; 

    for (var i = 0; i < areas.length; i++) {
        var options = document.createElement("option");
        options.value = areas[i];
        options.text = areas[i];
        selectArea.appendChild(options);
    }
    

    var saveButton = document.createElement("button")
    saveButton.innerHTML = "Salvar Perfil"
    saveButton.onclick = applyInfos


    div.appendChild(userNameInput);
    div.appendChild(sloganInput);
    div.appendChild(userEmailInput);
    div.appendChild(phoneInput);
    div.appendChild(pfpInput);
    div.appendChild(selectArea);
    divMoreInfo.appendChild(detailsInput);
    divbutao.appendChild(saveButton);

}
async function saveUserInfo(email, name, slogan, phone, details, pfp, area) {

    await remove("profiles", userData.profile.email)
    await post("profiles", {
        "id": email,
        "profile": {
            "email": email,
            "name": name,
            "slogan": slogan,
            "cpf": userData.profile.cpf,
            "password": userData.profile.password,
            "phone": phone,
            "details": details,
            "pfp": pfp,
            "area": area,
            "plan" : userData.profile.plan,
            "visitors": userData.profile.visitors
        }
    })
    window.location = `../user/dashboard.html?email=${email}`
}

function seeUserPlans() {
    window.location = `../plans/professionalplans.html?email=${email}`
}

initialize()