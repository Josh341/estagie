var userData
var email = window.location.href.split("?")[1].split("=")[1];
async function initialize() {
    userData = await get("companies", email);
    document.getElementById("compName").innerHTML = userData.company.name;
    document.getElementById("compSetor").innerHTML = userData.company.setor ? userData.company.setor : "Insira o setor da empresa";
    document.getElementById("phone").innerHTML = userData.company.phone ? userData.company.phone : "Insira o numero de telefone da empresa";
    document.getElementById("compEmail").innerHTML = userData.company.email;
    document.getElementById("details").innerHTML = userData.company.details ? userData.company.details : "Forneça detalhes da sua empresa para seus visitantes!"
    document.getElementById("compPfp").src = userData.company.pfp ? userData.company.pfp : "/assets/images/logo_usuario.jpg"
    document.getElementById("plan").src = userData.company.plan.data.image
    var coursesSection = document.getElementById("coursesSection")
    if (userData.company.plan.id == 2 || userData.company.plan.id == 3) {
        if (userData.company.course != null) {
            var course = document.createElement("embed")
            course.id = "course"
            course.src = userData.company.course != null ? userData.company.course : null
            coursesSection.appendChild(course)
            if (userData.company.secondCourse != null) {
                var secondCourse = document.createElement("embed")
                secondCourse.id = "secondCourse"
                secondCourse.src = userData.company.secondCourse != null ? userData.company.secondCourse : null
                coursesSection.appendChild(secondCourse)
            }
        }
        else if (userData.company.secondCourse != null) {
            var secondCourse = document.createElement("embed")
            secondCourse.id = "secondCourse"
            secondCourse.src = userData.company.secondCourse != null ? userData.company.secondCourse : null
            coursesSection.appendChild(secondCourse)

        }
    }
    else {
        var course = document.createElement("a")
        course.id = "coursesSectionLink"
        course.innerHTML = "Adquira um Plano Standard ou Premium agora mesmo, e adicione seus cursos diretamente no site!"
        course.setAttribute("href", `../plans/companyplans.html?email=${email}`)
        coursesSection.appendChild(course)
    }
}
function applyInfos() {
    var compName = document.getElementById("compName").value
    var compSetor = document.getElementById("compSetor").value
    var phone = document.getElementById("phone").value
    var compEmail = document.getElementById("compEmail").value
    var details = document.getElementById("details").value
    var pfp = document.getElementById("pfp").value
    var course = document.getElementById("course") != null ? document.getElementById("course").value: null;
    var secondCourse = document.getElementById("secondCourse") != null ? document.getElementById("secondCourse").value : null;
    console.log(course)
    if (!isValidEmail(compEmail)) {
        return;
    }
    if(course == `Insira o codigo de incorporação do seu video. Ex:https://www.youtube.com/embed/xxxxx`) {
        course = null
    }
    if(secondCourse == `Insira o codigo de incorporação do seu video. Ex:https://www.youtube.com/embed/xxxxx`) {
        secondCourse = null
    }
    saveCompanyInfo(compEmail, compName, compSetor, phone, details, pfp, course, secondCourse);
}

function editInfos() {
    var compName = document.getElementById("compName").innerHTML;
    var compSetor = document.getElementById("compSetor").innerHTML;
    var phone = document.getElementById("phone").innerHTML;
    var compEmail = document.getElementById("compEmail").innerHTML;
    var details = document.getElementById("details").innerHTML;
    var pfp = document.getElementById("compPfp").src;
    var course = document.getElementById("course") != null ? document.getElementById("course").src : null;
    var secondCourse = document.getElementById("secondCourse") != null ? document.getElementById("secondCourse").src : null;;
    console.log(document.getElementById("course"))
    var div = document.getElementById("compInfo")
    var divButao = document.getElementById("butao")
    var divMoreInfo = document.getElementById("moreCompInfo")
    var coursesSection = document.getElementById("coursesSection")

    while (div.firstChild) {
        div.removeChild(div.firstChild)
    }

    while (divButao.firstChild) {
        divButao.removeChild(divButao.firstChild)
    }

    while (divMoreInfo.firstChild) {
        divMoreInfo.removeChild(divMoreInfo.firstChild)
    }

    while (coursesSection.firstChild) {
        coursesSection.removeChild(coursesSection.firstChild)
    }


    var compNameInput = document.createElement("input")
    compNameInput.class = "nome-setor"
    compNameInput.value = compName
    compNameInput.id = "compName"

    var compSetorInput = document.createElement("input")
    compSetorInput.class = "nome-setor"
    compSetorInput.value = compSetor
    compSetorInput.id = "compSetor"

    var compEmailInput = document.createElement("input")
    compEmailInput.class = "nome-setor"
    compEmailInput.value = compEmail
    compEmailInput.id = "compEmail"

    var phoneInput = document.createElement("input")
    phoneInput.class = "nome-setor"
    phoneInput.value = phone
    phoneInput.id = "phone"

    var detailsInput = document.createElement("input")
    detailsInput.class = "nome-setor"
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

    if (userData.company.plan.data.name == "standard") {
        var courseInput = document.createElement("input")
        courseInput.value = course ? course : `Insira o codigo de incorporação do seu video. Ex:https://www.youtube.com/embed/xxxxx`
        courseInput.id = "course"
        coursesSection.appendChild(courseInput);
    }

    if (userData.company.plan.data.name == "premium") {
        var firstDivDetach = document.createElement("div")
        firstDivDetach.id = "firstDivDetach"
        
        var courseInput = document.createElement("input")
        courseInput.value = course ? course : `Insira o codigo de incorporação do seu video. Ex:https://www.youtube.com/embed/xxxxx`
        courseInput.id = "course"

        var secondDivDetach = document.createElement("div")
        secondDivDetach.id = "secondDivDetach"
        var secondCourseInput = document.createElement("input")
        secondCourseInput.value = secondCourse ? secondCourse : `Insira o codigo de incorporação do seu video. Ex:https://www.youtube.com/embed/xxxxx`;
        secondCourseInput.id = "secondCourse"

        coursesSection.appendChild(firstDivDetach);
        coursesSection.appendChild(secondDivDetach);
        firstDivDetach.appendChild(courseInput);
        secondDivDetach.appendChild(secondCourseInput);
    }

    var saveButton = document.createElement("button")
    saveButton.innerHTML = "Salvar Perfil"
    saveButton.onclick = applyInfos

    div.appendChild(compNameInput);
    div.appendChild(compSetorInput);
    div.appendChild(phoneInput);
    div.appendChild(compEmailInput);
    div.appendChild(pfpInput);
    divMoreInfo.appendChild(detailsInput);
    divButao.appendChild(saveButton);

}
async function saveCompanyInfo(email, name, setor, phone, details, pfp, course, secondCourse) {

    await remove("companies", userData.company.email)
    await post("companies", {
        "id": email,
        "company": {
            "email": email,
            "name": name,
            "setor": setor,
            "cnpj": userData.company.cnpj,
            "password": userData.company.password,
            "phone": phone,
            "details": details,
            "pfp": pfp,
            "plan": userData.company.plan,
            "course": course,
            "secondCourse": secondCourse
        }
    })
    window.location = `../company/dashboard.html?email=${email}`
}

async function searchCurriculum() {
    var email = window.location.href.split("?")[1].split("=")[1];
    window.location = `../searchUsers/searchUsers.html?email=${email}`
}
function seeCompanyPlans() {
    window.location = `../plans/companyplans.html?email=${email}`
}
initialize()
