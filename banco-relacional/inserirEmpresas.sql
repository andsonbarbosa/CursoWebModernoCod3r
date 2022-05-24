alter table empresas modify cnpj varchar(14);

INSERT INTO empresas 
    (nome, cnpj)
values  ('Bradesco', 89238903128735),
        ('Vale', 72345754758590),
        ('Cielo', 41235687126389);

desc empresas;
desc prefeitos;
select * from empresas;
select * from cidades;

INSERT INTO empresas_unidades 
    (empresa_id, cidade_id, sede)
VALUES
    (1,1,1),
    (1,2,0),
    (2,1,0),
    (2,2,1);