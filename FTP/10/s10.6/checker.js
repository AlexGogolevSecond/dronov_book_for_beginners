const rex = /^([0-9]+(px|pt|%|mm|cm|in|pc|em|vw|vh)|thin|medium|thick)$/i;
const rex2 = /^[0-9]+(px|pt|%|mm|cm|in|pc|em|vw|vh)$/i;
function checkWidth() {
    if (this.value)
        if (rex.test(this.value))
            this.setCustomValidity('');
        else
            this.setCustomValidity('Введите корректное значение');
}
function checkRadius() {
    if (this.value)
        if (rex2.test(this.value))
            this.setCustomValidity('');
        else
            this.setCustomValidity('Введите корректное значение');
}
function prepareCheckWidth(el) {
    el.addEventListener('change', checkWidth);
}
function prepareCheckRadius(el) {
    el.addEventListener('change', checkRadius);
}
