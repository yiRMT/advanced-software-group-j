test:
	docker-compose --file=docker-compose-test.yaml up
test-build:
	docker-compose --file=docker-compose-test.yaml up --build
run:
	docker-compose up
run-build:
	docker-compose up --build