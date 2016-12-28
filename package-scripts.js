build:
  docker build -t registry.jorgeadolfo.com/template -f docker/Dockerfile .
run:
  docker run -it -p 3000:8000 registry.jorgeadolfo.com/template
