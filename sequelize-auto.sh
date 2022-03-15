#!/bin/sh

./node_modules/sequelize-auto/bin/sequelize-auto -h localhost -d pcr -u coder -x W9o7l5f3 -p 3306 --dialect mysql -c config/config.json -o ./models -t resultado_pcr
