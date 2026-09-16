### interfaces in go

- An **interface defines a set of methods that a type must have** to satisfy that interface.
- Any type that has the required methods automatically satisfies the interface.
- So if the Dog type has all the methods defined in the Animal interface, Dog satisfies the Animal interface.
- It is somewhat similar to how inheritance or `extends` works in other languages, where you might have Dog extend Animal, but Go uses interfaces instead of class inheritance.
- The important thing is that **Go interfaces are implemented implicitly**. You don't need to explicitly say that Dog implements Animal.