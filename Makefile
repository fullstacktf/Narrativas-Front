build:
	docker build . -t narrativas-front:1.0
	docker run -p 80:80 -d narrativas-front:1.0 