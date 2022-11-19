/// <reference types="cypress" />

describe("Wrong Location Check", () => {
  it("Visit Top Page", () => {
    //Visiting top page
    cy.visit("/");

    //Getting the password input from UI and submitting
    cy.get("input[name=city]")
      .type(`asd{enter}`)
      .should(() => {
        cy.get(".MuiChip-label").should("have.text", "city not found");
      });
  });
});
