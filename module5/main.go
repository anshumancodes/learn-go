package main

import "fmt"

type Animal interface {
	Name() string
	Speak() string
}

// Any type that has a Speak() string & Name() string method automatically satisfies the Animal interface.
// so what the below says is if Dog and Cat have Speak() string & Name() string methods, they automatically satisfy the Animal interface.
// basically dog and cat are both Animal types because they have Speak() string & Name() string methods.
// or it extends the Animal interface.
type Dog struct{}

func (d Dog) Speak() string {
	return "Woof"
}

func (d Dog) Name() string {
	return "Dog"
}

type Cat struct{}

func (c Cat) Speak() string {
	return "Meow"
}

func (c Cat) Name() string {
	return "Cat"
}

func main() {
	fmt.Println("module 5")
	var dog Animal = Dog{}
	var cat Animal = Cat{}
	fmt.Println(dog.Speak())
	fmt.Println(cat.Speak())

}

// check note-5.md
