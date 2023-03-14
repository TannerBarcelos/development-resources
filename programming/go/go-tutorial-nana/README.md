## About the Code

To keep the main file clean of massive comments while learning, I will paste the code + comments in here for studying purposed and 
keep the source file clear

```go
package main

import "fmt"

func main() {
	
    // Different ways of declaring variables in Go - the usecase dictates how we declare
	const TOTAL_CONFERENCE_TICKETS uint = 50 	// specifying a constant and data type
	conferenceName := "Go Conference" 			// := type inferrence
	var remainingTickets uint = 50 				// uint means 'unsigned int'. This will validate that this value is only ever to be unsigned (non negative) because negative ticket values makes no sense. This will validate your data 
	var username string
	var email string

	fmt.Printf("Welcome to %v booking app", conferenceName)
	fmt.Printf("There are only %v being sold for this conference.\nRemaing ticket count: %v", TOTAL_CONFERENCE_TICKETS, remainingTickets)
	
	// Using functions - 
	getUsername(&username) // & = indicates a pointer to the memory address where the variable resides
	getEmail(&email)


	printUsedTypes(TOTAL_CONFERENCE_TICKETS, conferenceName, remainingTickets, username)

}

// Get username : Accepts a pointer to username in callee to update its value without returning
func getUsername(username* string) { // * = indicates getting the value of the pointer in memory. The * is called 'dereferencing operator'
	fmt.Print("\n\nEnter a username for the conference\n")
	fmt.Scan(username) // Pointer to username in memory. By pointing to this variable in the Scanner, the value entered will become the new value of username at the memory location it resides. This is what happens for us automatically in Python or JavaScript

	// if username was local, we would pass a pointer to scan to update its value in memory but in this case, we pass username which is also a pointer but because it is typed in the 
	// argument as a pointer, we do not need to pass &
}

// Get email : Accepts a pointer to email in callee to update its value without returning
func getEmail(email* string) {
	fmt.Print("\n\nEnter your email\n")
	fmt.Scan(email) 
}

// Demonstrating how to use string interpolation and how to print the type of a variable using %T
func printUsedTypes(tct uint, cn string, rt uint, un string) {
	fmt.Printf("Variable Name: TOTAL_CONFERENCE_TICKETS; Variable Type: %T; Variable Value: %d\n", tct, tct)
	fmt.Printf("Variable Name: conferenceName; Variable Type: %T; Variable Value: %s\n", cn, cn)
	fmt.Printf("Variable Name: remainingTickets; Variable Type: %T; Variable Value: %d\n", rt, rt)
	fmt.Printf("Variable Name: username; Variable Type: %T; Variable Value: %s\n", un, un)
}
```