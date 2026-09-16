package main

import "fmt"

// T here can be either int or float64
// T is a type parameter
// T is a generic type , this lets us handle both int and float64 additions without needing to write separate functions for each
func add[T int | float64](a T, b T) T {
	return a + b
}

func main() {
	fmt.Println("module 6")

	// int addition
	fmt.Println(add(1, 2))

	// float64 addition
	fmt.Println(add(1.5, 2.5))

	// lets see if we add one int to a float64
	// this will print 3.5 but in a case without generics we will get a compile error
	fmt.Println(add(1, 2.5))
}
