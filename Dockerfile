FROM postgres

# Set the default password for the postgres user
ENV POSTGRES_PASSWORD=monMotDePasse

# Add initialization scripts
COPY ./init-db.sh /docker-entrypoint-initdb.d/init-db.sh

# Make sure the script is executable
RUN chmod +x /docker-entrypoint-initdb.d/init-db.sh