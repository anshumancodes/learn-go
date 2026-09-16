### generics in go
- Generics allow us to write functions, types, and data structures that can work with different types without rewriting the same code.
- For example, instead of writing separate functions for adding integers and floats, we can write one generic function that works with both.
- code example `[T int | float64]` , now from T , `(a T, b T)` can be used in the function and we can do a+b without worrying about their types and writing 2 different functions to add float and int , refer to code in module 6
