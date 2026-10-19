
require('dotenv').config();

const ambiente = process.env.NODE_ENV;
const banco = process.env.DB_URL;

function conectarBanco() {
    if (ambiente === 'development') {
        console.log(
            `[MODO DESENVOLVIMENTO] Conectando ao banco local em: ${banco} com LOGS DETALHADOS.`
        );
    } else if (ambiente === 'production') {
        console.log(
            '[MODO PRODUÇÃO] Conexão segura estabelecida. Logs detalhados desativados.'
        );
    } else {
        console.log('Ambiente não configurado ou inválido.');
    }
}

conectarBanco();
