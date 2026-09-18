package main

import "fmt"

type User struct {
	name string
	age  int
}

// Setter
func (u *User) SetName(name string) {
	u.name = name
}


// Getter
func (u User) Name() string {
	return u.name
}

func main() {
	// create a user of type User
	user := User{name: "Anshuman", age: 22}
	

	fmt.Println(user.Name()) // Getter
    // this calls the setter to change the name from "Anshuman" to "Rahul"
	user.SetName("Rahul") // Setter
	fmt.Println(user.Name())
}
