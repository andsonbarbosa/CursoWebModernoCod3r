SELECT
    regiao as 'Região',
    sum(populacao) as Total
from estados
GROUP BY regiao
order BY Total desc

SELECT
    sum(populacao) as Total
from estados
order BY Total desc

SELECT
    avg(populacao) as Total
from estados
