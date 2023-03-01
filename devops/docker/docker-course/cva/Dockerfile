FROM httpd:2.4

ADD website.tar.gz /usr/local/apache2/htdocs/

# ADD vs COPY
###
# Add supports copying of remote URL's however this is not recommended. If you want to add remotes, you should use
# RUN curl [remote_url]
# Add also supports copying of tar files
###