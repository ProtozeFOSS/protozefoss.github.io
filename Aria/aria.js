class Aria {
    constructor(id, iFrame = true) {
        
        let instance = null;
        if(iFrame) {
            this.element = document.getElementById(id);
            if(this.element && this.element.contentWindow['ARIA']) {
                instance = this.element.contentWindow['ARIA'];
            }
        }        
        if(!(instance && instance.aria && instance.theme && instance.layout)) {
            throw new Error('Aria Constructor did not find the element with id: ' + id);
            return;
        }
        this.id = id;
        this.aria = instance.aria;
        this.theme = instance.theme;
        this.layout = instance.layout;
    }
    setPGN(pgn) {
        this.aria.loadPGN(pgn);        
    }
    setSettings(settings) {
        this.aria.setSettings(settings);
    }
    setTheme(theme){
        this.theme.setSettings(theme);
    }

    getSettings() {
        return {theme: this.theme.settings(), aria:this.aria.settings(), layout:this.layout.settings()};
    }

    layoutChanged(data) {
        const hPx = data.height + 'px';
        console.log(data);
        if(data.height > 0 && this.element.style.height != hPx){
            this.element.style.height = hPx;
        }
    }
}
