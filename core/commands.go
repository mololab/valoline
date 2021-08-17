package core

import "fmt"

func OnModeChange(mode string) {

	switch mode {
	case "offline":
		beOffline()
	case "online":
		beOnline()
	default:
		fmt.Println("wrong call")
	}

}

func beOffline() {
	fmt.Println("call offline")
}

func beOnline() {
	fmt.Println("call online")
}
