package main

import (
	"fmt"
	"greetings/greet"
)

func main() {
	// get a greeting for my name
	message := greet.Hello("Anshuman")
	fmt.Print(message)
}
