FROM python:3.11 AS builder

WORKDIR /app
COPY /src/api-server .
RUN pip install pipenv \
  && pipenv install --system
EXPOSE 8080
ENTRYPOINT pipenv run uvicorn main:app --reload --host 0.0.0.0 --port 8080