#!/bin/sh

../../../mksql/bin/mksql.maia -o resultado_pcr.sql -s "," --trim --skip 1 -t resultado_pcr -c "id,codigo,empresa,paciente,idade,sexo,raca,cep,bairro,municipio,estado,sintomas,hospitalizado,viagem_exterior,local_transmissao,contato_suspeito,unidade_saude,data_coleta,resultado" -n 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17 --dates 16 pcr.csv
