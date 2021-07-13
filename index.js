module.exports.startUp = (data) => {
    data.commands.sample = (message, args) => {
        data.vk.api.messages.send({
            peer_id: message.peerId,
            message: "Hello, world!",
            random_id: 0
        }).then();
    }
}