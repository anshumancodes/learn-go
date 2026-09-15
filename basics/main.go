package main

import (
	"fmt"
	"math/rand"
)

func main() {
	var i=10
	fmt.Print(i)
	fmt.Println("initilising a shardcache!",rand.Int())
	var z int32=2
	var zInt int = int(z)
	fmt.Print(i+zInt)
}
