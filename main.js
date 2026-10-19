
const config = require('./config');

function mascarar(valor) {
    if (!valor) {
        return '[NÃO CONFIGURADO]';
    }

    if (valor.length <= 4) {
        return '*'.repeat(valor.length);
    }

    return '*'.repeat(valor.length - 4) + valor.slice(-4);
}

console.log('\n================================');
console.log(' APLICAÇÃO DE PAGAMENTOS');
console.log('================================');

console.log('Status: Configuração validada!');
console.log('Porta:', config.app.port);
console.log('Ambiente:', config.app.ambiente);

console.log('\nBanco de dados:');
console.log('Host:', config.db.host);
console.log('Porta:', config.db.port);

console.log('\nCredenciais protegidas:');
console.log(
    'Payment API Key:',
    mascarar(config.payment.apiKey)
);
console.log(
    'JWT Secret:',
    mascarar(config.auth.jwtSecret)
);

console.log('\nAplicação inicializada com sucesso!');
