- go has like 5 reference types i.e; pointers , slices, functions,channel,map
- reference types basically means they dont have data inherently with themeselves but they refer/depend on to the place that got the data

### pointers

* * operater is used to do deference the value of adress and acess the value
* pointers can change the value of the variable it is pointing to
* a pointer in go can point at more than 1 or multiple variables but one at a time (i guess)
### struct
- `struct` (structure)** is ==a user-defined, composite data type that allows you to group together zero or more fields of different types into a single record==
its basically like a object of js
-  fields of a sturct has to be capital

### arrays 
 

- arrays in go are of fixed size they cant be resized btw , also onky one type of values can be assigned like it in c
- arrays arent much freq in go code due its limition and how much it can vbe modified


### slices 

A **slice is a small descriptor that refers to an underlying array**, either the whole array or a portion of it.

- slice has 3 properties: **length, capacity, and pointer**
- **length** is equal to the `start:end` index difference
- **capacity** of a slice is from the starting index of the slice to the end of the underlying array
- **pointer** points to the starting element of the slice in the underlying array
- you can create slices from struct and other slices as well
- slices dont need size declaration
- when value of the array is changed by one slice the value changes for all slices
-
