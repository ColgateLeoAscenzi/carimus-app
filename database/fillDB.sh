#!/bin/bash
# ls
# psql -U postgres -c "CREATE DATABASE carimus_db;"
# psql -U postgres -d carimus_db < '/usr/src/app/backup.sql'

# !/bin/bash
# ls
# psql -U postgres -c "CREATE TABLE workerinfo(id SERIAL PRIMARY KEY, name VARCHAR(100), position VARCHAR(100), description TEXT, image_link VARCHAR(1000));"
# psql -U postgres -c "SET CLIENT_ENCODING TO 'utf8';"
# psql -U postgres -c "\copy workerinfo(name, position, description, image_link) FROM './worker-data.csv' DELIMITER ',' CSV HEADER;"