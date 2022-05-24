select * from estados where id = 26

insert into cidades 
    (nome, area, estado_id)
values 
    ('Campinas', 795, 26);

insert into cidades 
    (nome, area, estado_id)
values (
    'Niterói', 133.9, 25);

insert into cidades
    (nome, area, estado_id)
values (
    'Caruaru',
    920.0,
    (select id from estados where sigla = 'PE')
);

insert into cidades 
    (nome, area, estado_id)
values (
    'Juazeiro do Norte',
    248.9,
    (select id from estados where sigla = 'CE')
);

select * from cidades