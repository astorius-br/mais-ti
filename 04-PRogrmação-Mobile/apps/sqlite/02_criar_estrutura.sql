CREATE TABLE autores (
 id_autor INTEGER PRIMARY KEY,
 nome TEXT NOT NULL,
 nacionalidade TEXT
);

CREATE TABLE alunos (
 id_aluno INTEGER PRIMARY KEY,
 nome TEXT NOT NULL,
 turma TEXT NOT NULL,
 email TEXT UNIQUE
);

CREATE TABLE livros (
 id_livro INTEGER PRIMARY KEY,
 titulo TEXT NOT NULL,
 isbn TEXT NOT NULL UNIQUE,
 ano_publicacao INTEGER
 CHECK (ano_publicacao BETWEEN 1400 AND 2100),
 categoria TEXT NOT NULL,
 quantidade_total INTEGER NOT NULL DEFAULT 1
 CHECK (quantidade_total >= 0),
 id_autor INTEGER NOT NULL,
 FOREIGN KEY (id_autor)
 REFERENCES autores(id_autor)
 ON UPDATE CASCADE
 ON DELETE RESTRICT
);

CREATE TABLE emprestimos (
 id_emprestimo INTEGER PRIMARY KEY,
 id_aluno INTEGER NOT NULL,
 id_livro INTEGER NOT NULL,
 data_emprestimo TEXT NOT NULL,
 data_prevista TEXT NOT NULL,
 data_devolucao TEXT,
 status TEXT NOT NULL DEFAULT 'ABERTO'
 CHECK (status IN ('ABERTO', 'DEVOLVIDO', 'ATRASADO')),
 CHECK (data_prevista >= data_emprestimo),
 FOREIGN KEY (id_aluno) REFERENCES alunos(id_aluno),
 FOREIGN KEY (id_livro) REFERENCES livros(id_livro)
);