function Aria(id, iFrame=true, resize=true) {
    var instance = null;
    if(iFrame) {
        this.element = document.getElementById(id);
        if(this.element && this.element.contentWindow['ARIA']) {
            instance = this.element.contentWindow['ARIA'];
        }
    }else {
        if(window['ARIA']) {
            instance = window['ARIA'];
        }
    }        
    if(!(instance && instance.aria && instance.theme && instance.layout)) {
        throw new Error('Aria Constructor did not find the element with id: ' + id);
        return;
    }
    if(resize) {
        instance.layout.layoutChanged = (width, height, state) =>{
            const hPx = height + 'px';
            const wPx = width + 'px';
            const current = this.element.style.height;
            this.element.style.height = current != hPx ? hPx:current;
        }
    }
    return instance;
}