package main

import (
	"fmt"
)


func main() {
	
	const TOTAL_CONFERENCE_TICKETS uint = 50 	// specifying a constant and data type

	conferenceName := "Go Conference" 			// := type inferrence
	var remainingTickets uint = 50 				// uint means 'unsigned int'. This will validate that this value is only ever to be unsigned (non negative) because negative ticket values makes no sense. This will validate your data 

	fmt.Printf("Welcome to %v booking app", conferenceName)
	fmt.Printf("There are only %v being sold for this conference.\nRemaing ticket count: %v", TOTAL_CONFERENCE_TICKETS, remainingTickets)

	// Inferring the return type as the type for username
	username := getUserDetails()

	// Using functions
	printUsedTypes(TOTAL_CONFERENCE_TICKETS, conferenceName, remainingTickets, username)

}

func getUserDetails() string {
	var username string
	fmt.Print("\n\nEnter a username for the conference\n")
	fmt.Scan(&username) // Pointer to username in memory. By pointing to this variable in the Scanner, the value entered will become the new value of username at the memory location it resides. This is what happens for us automatically in Python or JavaScript
	return username
}

// Print the types, values and names of the variable in our application
func printUsedTypes(tct uint, cn string, rt uint, un string) {
	fmt.Printf("Variable Name: TOTAL_CONFERENCE_TICKETS; Variable Type: %T; Variable Value: %d\n", tct, tct)
	fmt.Printf("Variable Name: conferenceName; Variable Type: %T; Variable Value: %s\n", cn, cn)
	fmt.Printf("Variable Name: remainingTickets; Variable Type: %T; Variable Value: %d\n", rt, rt)
	fmt.Printf("Variable Name: username; Variable Type: %T; Variable Value: %s\n", un, un)
}