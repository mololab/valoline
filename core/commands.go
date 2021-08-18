package core

import (
	"fmt"
	"os/exec"

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

	err := runCommand(true)

	if err != nil {
		fmt.Println("Error while being offline.")
		isError(ui)
		return
	}

	fmt.Println("Successfully offline.")
	isSuccess(ui)
}

func beOnline(ui *lorca.UI) {

	err := runCommand(false)

	if err != nil {
		fmt.Println("Error while being offline.")
		isError(ui)
		return
	}

	fmt.Println("call online")
	isSuccess(ui)
}

func isSuccess(ui *lorca.UI) {
	(*ui).Eval(fmt.Sprintln(`onSuccess();`))
}

func isError(ui *lorca.UI) {
	(*ui).Eval(fmt.Sprintln(`onError();`))
}

func runCommand(is_offline bool) error {

	var script []string

	if is_offline {
		script = offline
	} else {
		script = online
	}

	// seperate name and args
	cmd := exec.Command(script[0], script[1:]...)
	err := cmd.Run()

	return err
}
