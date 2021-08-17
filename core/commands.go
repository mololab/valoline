package core

import (
	"fmt"

	"github.com/zserge/lorca"
)

func OnModeChange(mode string, ui *lorca.UI) {

	switch mode {
	case "offline":
		beOffline(ui)
	case "online":
		beOnline(ui)
	default:
		fmt.Println("wrong call")
	}

}

func beOffline(ui *lorca.UI) {
	fmt.Println("call offline")
	isSuccess(ui)
}

func beOnline(ui *lorca.UI) {
	fmt.Println("call online")
	isError(ui)
}

func isSuccess(ui *lorca.UI) {
	(*ui).Eval(fmt.Sprintln(`onSuccess();`))
}

func isError(ui *lorca.UI) {
	(*ui).Eval(fmt.Sprintln(`onError();`))
}
