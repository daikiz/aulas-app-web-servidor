-- EXEMPLO 1: Transacao que confirma (COMMIT) as alterações
-- inserir registros usando uma transação
START TRANSACTION; -- inicia a transaçao
INSERT INTO tb_pessoa ( senha, nome, data_nascimento, login, cpf, rg, email, genero ) 
VALUES (
  'minhaSenha6', 'Marcelo Bezerra6', date( NOW() ), 'login6', 70723069, '2112176', 'email6@gmail.com', 'Masculino'
);

INSERT INTO tb_pessoa ( senha, nome, data_nascimento, login, cpf, rg, email, genero ) 
VALUES (
  'minhaSenha5', 'Marcelo Bezerra5', date( NOW() ), 'login5', 70723059, '2112175', 'email5@gmail.com', 'Masculino'
);

COMMIT; -- confirma as alterações da transação atual pendente

-- EXEMPLO 2: Transacao que desfaz (ROLLBACK) as alterações
-- inserir registros usando uma transação
START TRANSACTION; -- inicia a transaçao
INSERT INTO tb_pessoa ( senha, nome, data_nascimento, login, cpf, rg, email, genero ) 
VALUES (
  'minhaSenha6', 'Marcelo Bezerra6', date( NOW() ), 'login6', 70723069, '2112176', 'email6@gmail.com', 'Masculino'
);

INSERT INTO tb_pessoa ( senha, nome, data_nascimento, login, cpf, rg, email, genero ) 
VALUES (
  'minhaSenha5', 'Marcelo Bezerra5', date( NOW() ), 'login5', 70723059, '2112175', 'email5@gmail.com', 'Masculino'
);

ROLLBACK; -- desfaz as alterações da transação atual pendente