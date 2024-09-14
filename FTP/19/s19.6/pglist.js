const PGList = (function () {
    let __lastImage;
    function show(response) {
        const data = JSON.parse(response).data;
        document.body.innerHTML = '';
        let h1 = document.createElement('h1');
        h1.textContent = 'Фотогалерея';
        document.body.appendChild(h1);
        let p = document.createElement('p');
        let a = document.createElement('a');
        a.href = '#add';
        a.textContent = 'Добавить изображение';
        p.appendChild(a);
        document.body.appendChild(p);
        let section = document.createElement('section');
        section.id = 'photogallery';
        let img;
        data.forEach((el) => {
            a = document.createElement('a');
            a.href = '#get=' + el.id;
            a.id = el.id;
            img = document.createElement('img');
            img.src = el.path;
            a.appendChild(img);
            section.appendChild(a);
        });
        document.body.appendChild(section);
        document.title = 'Фотогалерея';
        if (__lastImage) {
            const li = document.getElementById(__lastImage);
            li.scrollIntoView();
        } else
            window.scrollTo(0, 0);
    }
    function PGList(lastImage) {
        __lastImage = lastImage;
        this.ajax = new AJAXLoader();
        this.ajax.load('get.php', show);
    }
    return PGList;
})();
