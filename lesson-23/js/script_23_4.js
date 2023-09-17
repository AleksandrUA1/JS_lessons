window.onload = function () {
    let arr = ['рядок перший','рядок другий','рдк 3','rdk_frth','5']
    let reg = /[qeyuioaуеєоаіыяию]/
    for (let el of arr) {
        if (!reg.test(el)) {
            console.log(el)
        }
    }
}