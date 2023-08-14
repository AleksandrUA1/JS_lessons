function findTravelCost() {
    let totalSum = 0
    const typeAutoList = document.querySelectorAll('option')
    for (const typeAuto of typeAutoList) {
        if (typeAuto.selected) totalSum += parseInt(typeAuto.value)
    }
    const mealList = document.getElementsByClassName('meal')
    for (const meal of mealList) {
        if (meal.checked) totalSum += parseInt(meal.value)
    }
    const guidesList = document.getElementsByClassName('guide')
    for (const guide of guidesList) {
        if (guide.checked) totalSum += parseInt(guide.value)
    }
    document.getElementById('result').value = `${totalSum} грн`
}
document.getElementById('travelCost').onclick = findTravelCost