run:
	go run generateAssets.go
	mv generateAssets.go generateAssets.go.disable
	go build -o taskApp.exe
	mv generateAssets.go.disable generateAssets.go
	./taskApp