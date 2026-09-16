package main

import "fmt"

type Vertex struct {
	X, Y float64
}

// defin a method on Vertex
// this is a method adding the vertex's X and Y coordinates
func (v Vertex) Add() float64 {
	return (v.X + v.Y)
}
func (v *Vertex) scale(f float64) Vertex {
	v.X *= f
	v.Y *= f
	return *v
}
func main() {
	// create a Vertex
	v := Vertex{X: 3, Y: 4}
	// value of v
	fmt.Println(v)
	//and call the Add method
	fmt.Println(v.Add())
	// and call the scale method
	fmt.Println(v.scale(2))

	// now if we call add
	// the result shouldnt be the same as the scale method modifies the original vertex values with the pointer receiver
	fmt.Println(v.Add())

	// but the original vertex is modified
	fmt.Println(v)
	p := Vertex{X: 5, Y: 7}
	fmt.Println(p)
	fmt.Println(p.Add())
}
