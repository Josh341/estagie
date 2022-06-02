var userData
async function initialize() {
    var email = window.location.href.split("?")[1].split("=")[1].split("&")[0];
    userData = await get("profiles", email);
    document.getElementById("userName").innerHTML = userData.profile.name;
    document.getElementById("slogan").innerHTML = userData.profile.slogan ? userData.profile.slogan : "";
    document.getElementById("phone").innerHTML = userData.profile.phone ? userData.profile.phone : "";
    document.getElementById("userEmail").innerHTML = userData.profile.email;
    document.getElementById("details").innerHTML = userData.profile.details ? userData.profile.details : "";
    document.getElementById("userPfp").src = userData.profile.pfp ? userData.profile.pfp : "/assets/images/logo_usuario.jpg";
    document.getElementById("userArea").innerHTML = userData.profile.area ? userData.profile.area : "";
    document.getElementById("plan").src = userData.profile.plan.data.image
    document.getElementById("visitors").innerHTML = userData.profile.visitors != 0 ? userData.profile.visitors : 0
    var visitors = userData.profile.visitors + 1 
    userData.profile.visitors = visitors
    await put("profiles", email, userData)
}

initialize()