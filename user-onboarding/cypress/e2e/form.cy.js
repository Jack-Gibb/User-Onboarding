describe("User-Onboarding", () => {
    beforeEach(()  => {
        
        cy.visit("http://localhost:3000");
    })

    const usernameInput = () => cy.get("input[name=username]");
    const emailInput = () => cy.get("input[name=email]");
    const passwordInput = () => cy.get("input[name=password]");
    const tosBox = () => cy.get("input[name=tos]")
    const submitBtn = () => cy.get(`input[type="submit"]`)

    it('sanity test', () => {
        expect(1 + 2).to.equal(3);
    } )

    it('can type in the inputs', () => {
        
        usernameInput()
            .should('have.value', '')
            .type('Sample Name')
            .should('have.value', 'Sample Name');

        emailInput()
            .should('have.value', '')
            .type('Sample@Email')
            .should('have.value', 'Sample@Email');

        passwordInput()
            .should('have.value', '')
            .type('Password')
            .should('have.value', 'Password');
    })

    it('can check the box', () => {

        tosBox()
            .check()
            .should('be.checked')
    })
    it('can submit', () => {
        
        submitBtn()
            .click()
    })

















})

/*
- [ ]  Get the `Name` input and type a name in it.
- [ ]  Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
- [ ]  Get the `Email` input and type an email address in it
- [ ] Get the `password` input and type a password in it
- [ ]  Set up a test that will check to see if a user can check the terms of service box
- [ ] Check to see if a user can submit the form data
- [ ] Check for form validation if an input is left empty
*/