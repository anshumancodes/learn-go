package main

import "fmt"

func main() {
	value := 0
	for i := 0; i < 10; i++ {

		value = value + i
	}
	fmt.Println(value)
}
