test:
	docker-compose --file=docker-compose-test.yaml up
test-build:
	docker-compose --file=docker-compose-test.yaml up --build
run:
	sh ./get-local-ip-addr.sh
	docker-compose up -d
run-build:
	sh ./get-local-ip-addr.sh
	docker-compose up --build -d