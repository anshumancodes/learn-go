package greet

import "fmt"
func Hello(name string)string{
	// returns a greeting that attaches the name in the message
	message:=fmt.Sprintf("Hi,%v .welcome!",name)
	return message
}