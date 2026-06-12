// Database em SQL

const Database = require('better-sqlite3')();

const db = new Database('sistema_passagens.db');

db.exec(`
//SQL para criar as tabelas    
    CREATE TABLE Companhia (
    id INTEGER,
    nome text,
    anoFundacao INTEGER
    );
    
    
    CREATE TABLE trecho(
    id 	INTEGER (PK, autoincremento)
    idCompanhia 	INTEGER (FK → Companhia)
    origem 	TEXT,
    destino 	TEXT,
    valor 	REAL,
    numeroPassagens INTEGER
    );

    CREATE TABLE cupom(
    id 	INTEGER (PK, autoincremento)
    idCompanhia 	INTEGER (FK → Companhia),
    codigo 	TEXT,
    percentualDesconto 	REAL,
    numeroCupons 	INTEGER
    );
`);

module.exports = db;
