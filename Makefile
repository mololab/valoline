run:
	go run generateAssets.go
	mv generateAssets.go generateAssets.go.disable
	go build -o Valoline.exe
	mv generateAssets.go.disable generateAssets.go
	./Valoline

git:
	git add .
	git commit -m "$m"
	git push

prod:
	go run generateAssets.go
	mv generateAssets.go generateAssets.go.disable
	go build -o Valoline.exe -ldflags -H=windowsgui
	mv generateAssets.go.disable generateAssets.go
	./Valoline