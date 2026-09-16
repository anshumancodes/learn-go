package main

import "fmt"

type Vertex struct {
	lat, long float64
}

// mapname [key] value
var m map[string]Vertex

func main() {
	m = make(map[string]Vertex)
	// here ["Bell Labs"] is the key and Vertex{lat: 40.68433, long: -74.39967} is the value
	m["Bell Labs"] = Vertex{
		lat:  40.68433,
		long: -74.39967,
	}
	// gets us the value for the key bell labs
	// map[key]
	fmt.Println(m["Bell Labs"])

	// data manipulation with maps
	map2 := make(map[string]int)
	map2["Answer"] = 42
	fmt.Println("Answer is", map2["Answer"])

	// lets update the value for the key answer

	map2["Answer"] = 73
	fmt.Println("Answer is", map2["Answer"])
	// lets try to remove/delete the answer key
	delete(map2, "Answer")
	// it will print 0 as the value for the key answer is not present and int's default value is 0
	fmt.Println("Answer is", map2["Answer"])

	// check if a key exists in a map
	value, present := map2["Answer"]
	fmt.Println("Value is", value, "Present is", present)

	// iterate over maps

	for key, value := range m {
		fmt.Println("key value %d is %d ", key, value)
	}

	// anonymous function
	func() {
		fmt.Println("hello")
	}()

	// lets store a anonymous function in a variable
	f := func() {
		fmt.Println("hello from inside the var")
	}
	f()

	// closures in go


	positive,negative:=adder(),adder()
	for i := 0; i < 10; i++ {
		fmt.Println(
			positive(i), negative(-2*i),
		)
	}

}

func adder() func(int) int{
		sum:=0
		return func(x int) int {
			sum += x
			return sum
		}
}	
