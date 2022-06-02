async function initialize() {
    var userData = await getAllData("profiles");
    var compEmail = window.location.href.split("?")[1].split("=")[1]
    var compData = await get("companies", compEmail)
    var div = document.getElementById("allProfiles");
    userData.sort((a,b)=> b.profile.plan.id - a.profile.plan.id)
    for (var i = 0; i < compData.company.plan.data.conections; i++) {
        var userEmail = userData[i].profile.email;
        var divImage = document.createElement("a");
        divImage.setAttribute("href", `../searchUsers/takeLook.html?email=${userEmail}&comp=${compEmail}`)
        
        var divProfile = document.createElement("div");
        
        var userName = document.createElement("h3");
        userName.innerHTML = userData[i].profile.name.split(' ').slice(0, 3).join(' ');
        
        var userSlogan = document.createElement("h4");
        userSlogan.innerHTML = userData[i].profile.slogan ? userData[i].profile.slogan : ""
        
        var userArea = document.createElement("h4");
        userArea.innerHTML = userData[i].profile.area ? userData[i].profile.area : ""
       
        var userImage = document.createElement("img");
        userImage.src = userData[i].profile.pfp ? userData[i].profile.pfp : "/assets/images/logo_usuario.jpg"
       
        div.appendChild(divImage)
        divImage.appendChild(userImage)
        divImage.appendChild(divProfile)
        divProfile.appendChild(userName)
        divProfile.appendChild(userSlogan)
        divProfile.appendChild(userArea)
    }
}























initialize()