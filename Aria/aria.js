const JSRPC = {
    setPGN: 'setPGN',
    onSettings: 'onSettings',
    getSettings: 'getSettings',
    layoutChanged: 'layoutChanged',
    setSize: 'setSize'
}

class Aria {
    static ATTACHED = false;
    #attachEvents() {
        window.addEventListener('message', this.#receiveMessage.bind(this), false);
        Aria.ATTACHED = true;
    }
    #receiveMessage(event) {
        // get message (json)
        // decode and handle errors
        // check what the message type is, do something
        let message_obj = null;
        try {
            message_obj = JSON.parse(event.data);
        } catch (error) {
            console.log('Received parsing bad message from Aria frame: ' + this.id);
            console.log(error);
            console.log('Errored on Event:');
            console.log(event);
        }
        if (message_obj && message_obj.type) {
            switch (message_obj.type) {
                case JSRPC.onSettings: {
                    if (message_obj.data) {
                        this.onSettings(message_obj.data);
                    }
                    break;
                }
                case JSRPC.layoutChanged: {
                    if (message_obj.data && this.layoutChanged !== null) {
                        this.layoutChanged(message_obj.data);
                    }
                    break;
                }
                default: { break; }
            }
        }
        // decode the message, then call the corresponding callback
    }

    constructor(id) {

        this.element = document.getElementById(id);
        let instance = null;
        if(this.element.contentWindow['ARIA']) {
            instance = this.element.contentWindow['ARIA'];
        }
        if(!(instance.aria && instance.theme && instance.layout)) {
            throw new Error('Aria Constructor requires an id');
            return;
        }
        if (instance) {
            this.id = id;
            this.aria = instance.aria;
            this.theme = instance.theme;
            this.layout = instance.layout;
            if (!Aria.ATTACHED) {
                this.#attachEvents();
            }
        } else {
            console.log('aria.js: Cannot find iframe by id=' + id);
        }
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

    // callbacks

    onSettings = function (settings) { }
    onOpenMenu = function (data) { }
    layoutChanged(data) {
        const hPx = data.height + 'px';
        console.log(data);
        if(data.height > 0 && this.element.style.height != hPx){
            this.element.style.height = hPx;
        }
    }
}
