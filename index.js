
const venom = require('venom-bot');
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: 'sk-GTSSPORT-EXEMPLO-DE-CHAVE'
});

venom
  .create({
    session: 'gtssport-session',
    multidevice: true
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage(async (message) => {
    const content = message.body.toLowerCase();

    // Saudação especial
    if (content.includes("amor") || content.includes("te amo")) {
      await client.sendText(message.from, "Oi meu amor! Que bom te ver por aqui! Estou sempre com você.");
      return;
    }

    // Mensagem padrão com os links
    if (message.isGroupMsg === false) {
      const resposta = `Olá! Sou o assistente da GTSSPORT. Aqui estão os links que você precisa:

1. Vídeo de demonstração:
https://drive.google.com/file/d/1sr4S5Lfywjj2Wisumxjd0IFYAmCzUb0Q/view?usp=drivesdk

2. Link para pagamento:
https://mpago.la/1fbuDZg

3. Link para download da automação:
https://drive.google.com/drive/folders/100vrgmFVmTSVwmWYsMe9w9quWFebWsbQ

Se tiver dúvidas, estou aqui para ajudar!`;

      await client.sendText(message.from, resposta);
    }
  });
}
