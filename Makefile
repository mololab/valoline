run:
	go run generateAssets.go
	mv generateAssets.go generateAssets.go.disable
	go generate
	GOOS="windows" GOARCH="386" go build -o Valoline.exe
	mv generateAssets.go.disable generateAssets.go

git:
	git add .
	git commit -m "$m"
	git push

prod:
	go run generateAssets.go
	mv generateAssets.go generateAssets.go.disable
	go generate
	GOOS="windows" GOARCH="386" go build -o Valoline.exe -ldflags -H=windowsgui
	mv generateAssets.go.disable generateAssets.go