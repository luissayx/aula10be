require('dotenv').config();
const express = require('express');

// Importa a ponte configurada e segura do Supabase
const supabase = require('./src/config/supabaseClient');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3016;

// Rota principal de diagnóstico de segurança e conexão
app.get('/api/laboratorio/status', (req,res) =>{
    res.status(200).json({
        projeto_numero: 16,
        sistema:"laboratrório de Análise Clínica",
        categoria:"Biotecnologia & Saúde",
        tabela_conectada:process.env.TABELA_ALVO || "amostras_exames",
        parametro_ambiente: Boolean(supabase && supabase.rest),
        confre_env_protegido: Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_KEY)
    });
});


app.listen(PORT, () => { 
    console.log(`🚀 [PROJETO #16] Laboratório de Análises Clínicas rodando em http://localhost:${PORT}/api/laboratorio/status`);
});