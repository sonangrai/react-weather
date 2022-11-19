describe("Wrong Location Check", () => {
  it("Visit Login Page", () => {
    //Visiting login page
    cy.visit("/");

    //Getting the password input from UI and submitting
    cy.get("input[name=city]")
      .type(`asd{enter}`)
      .should(() => {
        cy.get(".MuiChip-label").should("have.text", "city not found");
      });
  });
});

export {};
