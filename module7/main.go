package main

import (
	"fmt"
	"time"
)

func say(s string) {
	fmt.Println(s)
	for i := 0; i < 5; i++ {
		time.Sleep(100 * time.Millisecond)
		fmt.Println(s)
	}
}
func sum(s []int, c chan int) {
	sum := 0
	for _, v := range s {
		sum += v
	}
	c <- sum
}
func main() {
	// concurrency in go
	fmt.Println("module 7")

	go say("world")
	say("hello")

	// csp in go
	ch := make(chan string)
	// this func will get executed and pass the value to ch(channel)
	go func() {
		ch <- "hello from goroutine"
	}()
	// message will be received from ch(channel)
	// this is blocking call btw not concurrent , it waits for the routine to finish
	message := <-ch
	// printed here
	fmt.Println(message)

	// another implementation

	s := []int{7, 2, 8, -9, 4, 0}
	c := make(chan int)
	go sum(s[:(len(s)/2)], c)
	go sum(s[(len(s)/2):], c)

	first := <-c
	second := <-c
	fmt.Println(first, second, first+second)

}
