const PGItem = (function () {
    let __id, __ajax;
    function redirect() {
        location.hash = '';
    }
    function sendData(evt) {
        const fd = new FormData();
        fd.append('image', __id);
        __ajax = new AJAXLoader();
        __ajax.loadPOST('delete.php', fd, redirect);
        evt.preventDefault();
    }
    function show(response) {
        const data = JSON.parse(response).data;
        const desc = data.description || 'Изображение';
        document.body.innerHTML = '';
        let h1 = document.createElement('h1');
        h1.textContent = desc;
        document.body.appendChild(h1);
        let section = document.createElement('section');
        section.id = 'photo';
        let img = document.createElement('img');
        img.src = data.path;
        section.appendChild(img);
        document.body.appendChild(section);
        let form = document.createElement('form');
        let p = document.createElement('p');
        let input = document.createElement('input');
        input.type = 'submit';
        input.value = 'Удалить изображение';
        p.appendChild(input);
        form.appendChild(p);
        document.body.appendChild(form);
        form.addEventListener('submit', sendData);
        p = document.createElement('p');
        let a = document.createElement('a');
        a.href = '#' + __id;;
        a.textContent = 'Назад';
        p.appendChild(a);
        document.body.appendChild(p);
        document.title = desc;
        window.scrollTo(0, 0);
    }
    function PGItem(id) {
        __id = id;
        this.ajax = new AJAXLoader();
        this.ajax.load('get.php?image=' + id, show);
    }
    return PGItem;
})();
