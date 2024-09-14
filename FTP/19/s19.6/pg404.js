const PG404 = (function () {
    function PG404() {
        document.body.innerHTML = '';
        let h1 = document.createElement('h1');
        h1.textContent = 'Ошибка 404';
        document.body.appendChild(h1);
        let p = document.createElement('p');
        p.textContent = 'Запрошенная вами страница отсутствует';
        document.body.appendChild(p);
        p = document.createElement('p');
        let a = document.createElement('a');
        a.href = '';
        a.textContent = 'На фотогалерею';
        p.appendChild(a);
        document.body.appendChild(p);
        document.title = 'Ошибка 404';
        window.scrollTo(0, 0);
    }
    return PG404;
})();
