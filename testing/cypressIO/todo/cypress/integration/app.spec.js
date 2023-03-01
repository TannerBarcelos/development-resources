describe('React TodoMVS', () => {
  it('adds a single todo', () => {
    // Visit the page
    cy.visit('http://localhost:8888');
    // 1. Grab the input box
    const inputBox = cy.get('.new-todo');

    // 2. Type a todo into this box
    inputBox.type('Go to gym{enter}');

    // Grab the todos container and assert that there is only 1 todo element (given selecting the div and then all li's returns a dom array)
    const todoContainer = cy.get('.todo-list li')
    todoContainer.should('have.length', 1);
  });
  it('adds 2 todos', () => {
    cy.visit('http://localhost:8888');
    const inputBox = cy.get('.new-todo');
    inputBox.type('Buy food{enter}').type('Get milk{enter}');
    const todoContainer = cy.get('.todo-list li');
    todoContainer.should('have.length', 2)
  })
});
