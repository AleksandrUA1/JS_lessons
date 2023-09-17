window.onload = function () {
    let str = '!Дано (рядок) тексту - знайти усі знаки пунктуації, які були "икористано".'
    let reg = /[-\,\.\;\ \:\?\!\"\'\“\”\‘\’\(\)\[\]\{\}\<\>]/g
    let result = str.match(reg)
    console.log(result);
}