
function getShortMessages(messages) {
    function extractMessagesFromObjects(input){
        return input.message;
    }
    function filterMessagesShorterThan50Chars(message) {
        if(message.length < 50)
            return message;
    }
    return messages
        .map(extractMessagesFromObjects)
        .filter(filterMessagesShorterThan50Chars);


}

module.exports = getShortMessages;
