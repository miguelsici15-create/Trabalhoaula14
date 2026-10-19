
require('dotenv').config();

// 1. Validar as variáveis obrigatórias
const obrigatorias = [
    'PAYMENT_API_KEY',
    'JWT_SECRET'
];

const faltando = obrigatorias.filter((variavel) => {
    return !process.env[variavel]?.trim();
});

// 2. Interromper a inicialização se houver erros
if (faltando.length > 0) {
    console.error(
        '\n[ERRO DE CONFIGURAÇÃO] Não foi possível iniciar a aplicação.'
    );

    console.error('Variáveis obrigatórias ausentes:');

    faltando.forEach((variavel) => {
        console.error(`- ${variavel}`);
    });

    console.error('\nVerifique o arquivo .env e tente novamente.');

    process.exit(1);
}

// 3. Centralizar as configurações
const config = {
    app: {
        port: Number(process.env.PORT) || 5000,
        ambiente: process.env.NODE_ENV || 'development'
    },

    db: {
        host: process.env.DB_HOST || '127.0.0.1',
        port: Number(process.env.DB_PORT) || 5432
    },

    payment: {
        apiKey: process.env.PAYMENT_API_KEY
    },

    auth: {
        jwtSecret: process.env.JWT_SECRET
    }
};

// 4. Exportar o objeto
module.exports = config;
