const PhotoGallery = (function () {
    let lb;
    function PhotoGallery__showLB(evt) {
        lb.firstElementChild.src = this.href;
        lb.classList.add('show');
        evt.preventDefault();
    }
    function PhotoGallery(thumbnails, config) {
        if (typeof thumbnails == 'string')
            thumbnails = document.getElementById(thumbnails);
        thumbnails.classList.add('photogallery');
        let a, img;
        config.images.forEach((el) => {
            a = document.createElement('a');
            a.href = el;
            a.addEventListener('click', PhotoGallery__showLB);
            img = document.createElement('img');
            img.src = el;
            a.appendChild(img);
            thumbnails.appendChild(a);
        });
        if (!lb) {
            lb = document.createElement('div');
            lb.id = 'lightbox';
            lb.addEventListener('click', () => {
                lb.classList.remove('show');
            });
            img = document.createElement('img');
            lb.appendChild(img);
            document.body.appendChild(lb);
            window.addEventListener('keydown', (evt) => {
                if (evt.which == 27)
                    lb.classList.remove('show');
            });
        }
    }
    Object.defineProperty(PhotoGallery.prototype, 'lightboxOpened', {
        get: function () {
            return lb.classList.contains('show');
        }
    });
    return PhotoGallery;
})();
