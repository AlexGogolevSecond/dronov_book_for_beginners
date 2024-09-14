const AJAXLoader = (function () {
    function dataLoaded() {
        if (this.readyState == 4)
            if (this.status == 200)
                this.success(this.responseText);
    }
    function AJAXLoader() {
        this.ajax = new XMLHttpRequest();
        this.ajax.addEventListener('readystatechange', dataLoaded);
    }
    Object.defineProperty(AJAXLoader, 'GET', {value: 'GET', writable: false});
    Object.defineProperty(AJAXLoader, 'POST', {value: 'POST', writable: false});
    AJAXLoader.prototype.load = function (url, success) {
        this.ajax.success = success;
        this.ajax.open(AJAXLoader.GET, url, true);
        this.ajax.send();
    };
    return AJAXLoader;
})();
