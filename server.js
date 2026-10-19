
require('dotenv').config();

const porta = process.env.PORT || 8080;

if (process.env.PORT) {
    console.log(`Servidor rodando na porta ${porta}.`);
} else {
    console.log('Servidor rodando na porta padrão 8080.');
}
