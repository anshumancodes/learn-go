## concurrency in go
### goroutines
- A **goroutine is a lightweight thread managed by the Go runtime** that allows a function to run concurrently.
- We create a goroutine by simply using the `go` keyword before a function call.
- Goroutines are much cheaper than traditional OS threads, so we can run thousands of them.
- The Go runtime manages and schedules goroutines across available OS threads.
- Goroutines allow different tasks to **execute concurrently**, instead of waiting for one task to finish before starting another.


- the reason to use go routines is that threads are very heavy they size from 256kb to 1mb but go routines are very light in size and they are dynamic in size they dont have a fixed size , go routines starts at sizre of 2kb! 
- Because they're lightweight, Go programs can run **thousands or even millions of goroutines** depending on what they're doing and the available resources.

- with concurrency  your tasks can get executed at any order , not parrallelly dont confuse it with parrallism
- goroutines can spawn more goroutiines from them , but at the end all the go routines needs to be executed to see the desired goroutine output , all the spawened goroutines depend on the main goroutine , they cant run outside of it .

### Communicating Sequential Processes (CSP)

CSP in Go is the idea of having goroutines communicate and coordinate by passing data through channels instead of directly sharing memory.

- channels are datatypes that allow two go routines to communicate with eachother
- reciveing from a channel is a blocking execution
-
