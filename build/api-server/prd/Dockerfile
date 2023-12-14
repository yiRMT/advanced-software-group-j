FROM python:3.11 AS builder
WORKDIR /usr/src/app
COPY Pipfile Pipfile.lock ./
RUN pip install pipenv \
 && pipenv install --system

FROM python:3.11-slim
ENV PYTHONUNBUFFERED=1
COPY --from=builder /usr/local/lib/python3.11/site-packages /usr/local/lib/python3.11/site-packages
COPY ./api-server ./
EXPOSE 8080/tcp
## TODO: hostのIPは変更が必要かもしれないので要調査
CMD pipenv run uvicorn main:app --reload --host 0.0.0.0 --port 8080