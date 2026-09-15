package main

import (
	"fmt"
	"math/rand"
	"runtime"
	"time"
)

func main() {
	// variables
	var i = 10
	j := 6
	// using variables & fmt package
	fmt.Print(i)
	fmt.Print(j)
	fmt.Println("initilising a shardcache!", rand.Int())
	// type conversion & arithmetic
	var z int32 = 2
	var zInt int = int(z)
	fmt.Printf("%v\n", i+zInt)

	// loop
	// go has only for loop

	sum := 0
	for y := 0; y < 10; y++ {
		sum += y
	}
	fmt.Println(sum)

	// switch case in go
	//
	switch os := runtime.GOOS; os {
	case "darwin":
		fmt.Println("mac")
	case "linux":
		fmt.Println("linux")
	default:
		fmt.Println("unknown")
		fmt.Printf("%s.\n", os)
	}
	// another pattern of switch case
	t := time.Now()
	fmt.Println(t.Hour())
	switch {
	case t.Hour() < 12:
		fmt.Println(" good morning!")
	case t.Hour() < 17:
		fmt.Println("good afternoon!")
	default:
		fmt.Println("good evening!")
	}
}
