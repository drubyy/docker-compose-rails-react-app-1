Startup a Docker-Compose project with Rails
===========================================

This is a quickly updated version of the startup portion from https://docs.docker.com/samples/rails/

Purpose
-------

There has been confusion using the sample provided by docker-compose, so I resolved to provide an easy-to-use skeleton that can be quickly booted up.
The two main items I edited was bumping the Rails version to 6 and making the Dockerfile expecting the its directory to also be the Rails directory.

Steps
-----
1. Clone this repo
2. Run `docker-compose run --no-deps web rails new . --force --database=postgresql` within the directory. (This will setup Rails)
3. Run `docker-compose run --no-deps web chown -R 1000:1000 *` (This will reset the permissioning on the generated files so you can work on them locally)
4. Run `docker-compose build web` (This will ensure that everything is appropriate built off the Rails-generated Gemfile
5. Run `docker-compose up` (to start the service!)

Be advised that some of these commands can take 3-7 minutes, depending on your system. 
