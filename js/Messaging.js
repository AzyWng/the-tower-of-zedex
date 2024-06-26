const MessageType = Object.freeze({
    EMPTY: -1,
    INFO: 0,
    DANGER: 1,
    ACTION: 2,
});

const MessageColor = Object.freeze({
    [MessageType.EMPTY]: "#000",
    [MessageType.INFO]: "#FFF",
    [MessageType.DANGER]: "#FF0000",
    [MessageType.ACTION]: "#41e7c3",
});

function MessagingClass() {
    this.messageQueue = [{ message: " ", type: MessageType.EMPTY, repeat: false }];
    this.consoleOutput = false;

    this.toggleConsoleOutput = (consoleOutputEnabled = true) => this.consoleOutput = consoleOutputEnabled;

    this.log = function (currentMessage, messageType = MessageType.INFO, noRepeat = false) {
        const lastMessage = this.messageQueue[this.messageQueue.length - 1];
        const messageObject = { message: currentMessage, type: messageType, repeat: false };

        if ((lastMessage.message != messageObject.message && noRepeat) || !noRepeat) {
            this.messageQueue.push(messageObject) ;
        }
        else {
            lastMessage.repeat = true;
        }

        if (this.consoleOutput) {
            console.log(messageObject.message);
        }
        return messageObject;
    };

    this.tail = function (lastNMessages = 1) {
        let n = lastNMessages;
        if (this.messageQueue.length - 1 < n) {
           n = this.messageQueue.length - 1         
        }

        const lastNMesasgeQueue = [];
        for (let i = n; i > 0; i--) {
            lastNMesasgeQueue.push(this.messageQueue[this.messageQueue.length - i]);
        }

        if (lastNMessages == 1) {
            return this.messageQueue[this.messageQueue.length - 1];
        }

        return lastNMesasgeQueue;
    };
}

var messagingSystem = new MessagingClass();
messagingSystem.toggleConsoleOutput();
