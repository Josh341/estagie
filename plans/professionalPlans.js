var email = window.location.href.split("?")[1].split("=")[1];

async function choosePlanPremium() {
    var plan = await get("plans", 3)
    setPlan(plan)
}

async function setPlan(plan) {
    var userData = await get("profiles", email)
    userData.profile.plan = plan
    await put("profiles", email, userData)
    window.location = `../user/dashboard.html?email=${email}`
}