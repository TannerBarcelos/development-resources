### Go into this dir if not already here
`cd challenge_2`

### How to build the image
`docker build . -t apache-html`

### Run the container
`docker run -dit --name apache-server -p 8080:80 apache-html`

> Open localhost:80 to see html page

### Add volume mount to get file-changes - This is the desired run command over the one above
`docker run -d -p 8080:80 --name apache-server -v "$(pwd):/usr/local/apache2/htdocs" apache-html`