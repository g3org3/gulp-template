FROM python:2.7-alpine

RUN mkdir /app
COPY ./dist /app
WORKDIR /app
ENTRYPOINT ["python", "-m", "SimpleHTTPServer"]
