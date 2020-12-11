export default class Olga2{
    constructor(id, data = null) {
        if(!id){
            throw new Error('Olga2 Constructor requires an id');
            return;
        }
        this.id = id;
        console.log('Searching for olga instance with id:' + id);
        if(data) {
            if(data.settings) {
                console.log(data.settings);
            }
            if(data.pgn) {
                console.log('Pgn: ');
                console.log(pgn);
            }
        }
    }



    #attachEvents() {
        window.addEventListener('message', this.receiveMessage.bind(this), false);
    }



    #receiveMessage(event) {
        // get message (json)
        // decode and handle errors
        // check what the message type is, do something
            if (e.data == 'Hello world') {
                event.source.postMessage('Hello', e.origin);
            } else {
                alert(event.data);
            }
    }

    setOlgaSettings(settings_obj) {
        console.log('recieved user settings:')
        console.log(settings_obj);
    }
}