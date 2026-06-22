module hello/hello

go 1.26.4

replace greetings/greet => ../greetings

require greetings/greet v0.0.0-00010101000000-000000000000 // indirect
