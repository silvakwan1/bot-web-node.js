const venom = require('venom-bot');

venom
  .create({
    session: 'bot', //name of session
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    if (message.body === 'oi' && message.isGroupMsg === false) {
      client
        .sendText(message.from, "fala tu carai gai")
        .sendText(message.from, "fala tu carai gai")
    }
    if (message.body === 'Oi' && message.isGroupMsg === false) {
      client
        .sendText(message.from, 'fala carai ' + "gay")
    }
    if (message.body === 'Ou' && message.isGroupMsg === false) {
      client
        .sendText(message.from, 'fala')
    }
  
  });

}