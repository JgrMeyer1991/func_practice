function getShortMessages(messages) {
    return messages.map(function extractMessageFromObject(messageObject) {
        return messageObject.message
    }).filter(function checkIfMessageIsShorterThan50Chars(message) {
        if (message.length < 50) {
            return message
        }
    });

}

module.exports = getShortMessages
