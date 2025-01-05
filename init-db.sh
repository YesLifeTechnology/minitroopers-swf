#!/bin/bash
set -e

# Create a role
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE ROLE "eternaltwin.dev.admin" WITH LOGIN PASSWORD 'dev' SUPERUSER;
EOSQL

# Create a database with the specified owner
createdb -U "$POSTGRES_USER" --owner="eternaltwin.dev.admin" eternaltwin.dev

# Connect to the database and alter the schema owner
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" -d eternaltwin.dev <<-EOSQL
    ALTER SCHEMA public OWNER TO "eternaltwin.dev.admin";
EOSQL