package core

var offline []string = []string{"netsh", "advfirewall", "firewall", "add", "rule", `name=\"lolchat\"`, "dir=out", "remoteport=5223", "protocol=TCP", "action=block"}

var online []string = []string{"netsh", "advfirewall", "firewall", "delete", "rule", `name=\"lolchat\"`}
