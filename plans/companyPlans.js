var email = window.location.href.split("?")[1].split("=")[1];

async function choosePlanBoost() {
    var plan = await get("plans", 1)
    setPlan(plan)
}

async function choosePlanPlus() {
    var plan = await get("plans", 2)
    setPlan(plan)
}

async function choosePlanPremium() {
    var plan = await get("plans", 3)
    setPlan(plan)
}

async function setPlan(plan) {
    var compData = await get("companies", email)
    compData.company.plan = plan
    await put("companies", email, compData)
    window.location = `../company/dashboard.html?email=${email}`
}