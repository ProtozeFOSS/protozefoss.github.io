var Olga2 = (function() {
    function Olga2(id, pgn, ) {
        if(!id){
            throw new Error('Olga2 Constructor requires an id');
            return;
        }
        this.id = id;
        console.log('Searching for olga instance with id:' + id);
        if(pgn) {
            console.log('Pgn: ');
            console.log(pgn);
        }
    }



    function attachEvents() {
        window.addEventListener('message', this.receiveMessage.bind(this), false);
    }



    function receiveMessage(event) {
        // get message (json)
        // decode and handle errors
        // check what the message type is, do something
            if (e.data == 'Hello world') {
                event.source.postMessage('Hello', e.origin);
            } else {
                alert(event.data);
            }
    }

    Olga2.prototype.setOlgaSettings = function(settings_obj) {
        console.log('recieved user settings:')
        console.log(setting_obj);
    }
})();