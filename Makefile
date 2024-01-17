prd:
	sh ./get-local-ip-addr.sh
	docker-compose --file=docker-compose-prd.yaml up
prd-build:
	sh ./get-local-ip-addr.sh
	docker-compose --file=docker-compose-prd.yaml up --build
dev:
	sh ./get-local-ip-addr.sh
	docker-compose --file=docker-compose.yaml up -d
dev-build:
	sh ./get-local-ip-addr.sh
	docker-compose --file=docker-compose.yaml up --build -d