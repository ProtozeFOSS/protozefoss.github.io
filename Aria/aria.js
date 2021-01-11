<<<<<<< HEAD:olga2/olga2.js
const JSRPC = {
    setPGN: 'setPGN',
    onSettings: 'onSettings',
    getSettings: 'getSettings'
}

class Olga2 {
    static ATTACHED = false;
    #attachEvents() {
        window.addEventListener('message', this.#receiveMessage.bind(this), false);
        Olga2.ATTACHED = true;
    }
    #receiveMessage(event) {
        // get message (json)
        // decode and handle errors
        // check what the message type is, do something
        let message_obj = null;
        try {
            message_obj = JSON.parse(event.data);
        } catch (error) {
            console.log('Received parsing bad message from Olga2 frame: ' + this.id);
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
                default: { break; }
            }
        }
        // decode the message, then call the corresponding callback
    }

    constructor(id, data = null) {
        if (!id) {
            throw new Error('Olga2 Constructor requires an id');
            return;
        }
        this.instance = document.getElementById(id);
        if (data && this.instance) {
            this.id = id;
            if (!Olga2.ATTACHED) {
                this.#attachEvents();
=======
class Aria{
    constructor(id, data = null) {
        if(!id){
            throw new Error('Aria Constructor requires an id');
            return;
        }
        this.id = id;
        console.log('Searching for aria instance with id:' + id);
        if(data) {
            if(data.settings) {
                console.log(data.settings);
>>>>>>> Moving codebase to new Aria project:Aria/aria.js
            }
            if (data.pgn) {
                this.setPGN(data.pgn);
            }
        } else {
            console.log('Olga2.js: Cannot find iframe by id=' + id);
        }
    }
    setPGN(pgn) {
        let message = '';
        try {
            message = JSON.stringify({ pgn, type: JSRPC.setPGN });
        } catch {

        }
        if (message.length) {
            this.instance.contentWindow.postMessage(message);
        }
    }
    setSettings(settings) {
        let message = '';
        try {
            message = JSON.stringify({ settings, type: JSRPC.setSettings });
        } catch {
        }
        if (message.length) {
            this.instance.contentWindow.postMessage(message);
        }
    }
    getSettings() {
        let message = '';
        try {
            message = JSON.stringify({ type: JSRPC.getSettings });
        } catch {
        }
        if (message.length) {
            this.instance.contentWindow.postMessage(message);
        }
    }

    // callbacks

    onSettings = function (settings) { }
    onOpenMenu = function (data) { }
}




<<<<<<< HEAD:olga2/olga2.js
=======
    setSettings(settings_obj) {
        console.log('recieved user settings:')
        console.log(settings_obj);
    }
}
>>>>>>> Moving codebase to new Aria project:Aria/aria.js
