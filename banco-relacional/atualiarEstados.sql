update estados
set nome = 'Maranhão'
WHERE sigla = 'MA';

SELECT nome FROM estados WHERE sigla = 'MA'

update estados
set  nome = 'Paraná',
     populacao = 11.32
WHERE sigla = 'PR';

SELECT nome, sigla, populacao FROM estados WHERE sigla = 'PR'

