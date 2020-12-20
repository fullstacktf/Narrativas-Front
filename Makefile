build:
	docker build . -t narrativas-front:1.0
	docker run -p 8081:8081 -d narrativas-front:1.0 