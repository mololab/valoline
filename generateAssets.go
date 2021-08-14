package main

import "github.com/zserge/lorca"

func main() {
	// package name, generated file name, folder that contains html resources
	err := lorca.Embed("main", "assets.go", "www")
	if err != nil {
		panic(err)
	}
}
