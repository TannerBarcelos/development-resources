# Pull Base Image 
FROM alpine
# Download and Install dependencies and tools as needed
RUN apk add --update redis
# Tell image what to do when it is ran as a container
CMD ["redis-server"]
