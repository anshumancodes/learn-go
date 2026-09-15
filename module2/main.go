// find notes for this in notes/note-2.md
package main

import "fmt"

func main() {
	i, j := 42, 2701
	p := &i
	fmt.Println(*p) // point to i
	*p = 10         // setting value of i through pointer
	fmt.Println(*p) // point to i
	q := &j
	*q = 17         // setting value of j through pointer
	fmt.Println(*q) // point to j

	// struct in go
	//
	type Person struct {
		Name string
		Age  int
	}

	person := Person{Name: "John", Age: 30}
	fmt.Println(person.Name, person.Age)

	// using pointers with structs
	pointer := &person
	pointer.Name = "Jane"
	fmt.Println(pointer.Name, pointer.Age)

	// Arrays in Go
	var arr [5]int
	arr[0] = 1
	arr[1] = 2
	arr[2] = 3
	arr[3] = 4
	arr[4] = 5
	fmt.Println(arr)
	// another way of writing arryas
	nums := [5]int{1, 2, 3, 4, 5}
	fmt.Println(nums)
	// slices in Go
	slice := arr[0:3]
	fmt.Println(slice)

	// directly invoke a slice
	// no number length is speicifed for the size in a slice
	d := []int{1, 2, 3, 4, 5, 6}
	fmt.Println(d)
	e := []bool{true, false, true, false}
	fmt.Println(e)
	// slices with structs
	s := []struct {
		Name string
		Age  int
	}{
		{Name: "John", Age: 30},
		{Name: "Jane", Age: 25},
	}
	fmt.Println(s)
	// create a slice with a slice
	newSlice := d[0:2]
	fmt.Println("Slice from the slice d", newSlice)
}
