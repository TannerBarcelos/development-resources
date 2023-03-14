package main

import (
	"fmt"

	"github.com/tannerbarcelos/go-tutorial-nana/internal/utils"
)

func main() {
	const TOTAL_CONFERENCE_TICKETS uint = 50
	var remainingTickets uint = 50
	var username string
	var email string
	conferenceName := "Go Conference"

	fmt.Printf("Welcome to %v", conferenceName)
	fmt.Printf("There are only %v being sold for this conference.\nRemaing ticket count: %v", TOTAL_CONFERENCE_TICKETS, remainingTickets)

	// If there are still tickets, we can process new transactions
	if remainingTickets > 0 {
		getUsername(&username)
		getEmail(&email)
		buildTicket(&username, &email, &remainingTickets)
	}else {
		print("Conference is sold out")
	}
}

func getUsername(username* string) {
	fmt.Print("\n\nEnter a username for the conference\n")
	fmt.Scan(username)
}

func getEmail(email* string) {
	fmt.Print("\n\nEnter your email\n")
	fmt.Scan(email) 
}

func buildTicket(username* string, email* string, remainingTickets* uint) {
	utils.DecreaseTicketCount(remainingTickets) // demo of using internal packages / other packages in a module (think module.exports / expor in JS)
	fmt.Printf("\nusername: %s\nemail: %s\n", *username, *email)
	fmt.Printf("\n\nWelcome to the conference! Enjoy your time.\n\nRemaining Tickets: %d", *remainingTickets)
}
