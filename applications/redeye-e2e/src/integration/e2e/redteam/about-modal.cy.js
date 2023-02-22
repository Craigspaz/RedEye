/// <reference types="cypress" />

describe('Verify About Modal', () => {
	const camp = 'aboutmodal';
	const fileName = 'gt.redeye';

	it('About Modal in Campaign Card Screen', () => {
		cy.clickAboutOnCampaignCard();
		cy.get('[cy-test=redeye-logo]').should('exist');
		cy.get('[cy-test=about-modal-header]').should('exist');
		cy.get('[cy-test=about-modal-description]').should('exist');
		cy.get('[cy-test=about-modal-links]').should('exist');
		cy.get('[cy-test=about-modal-copyright]').should('exist');
	});

	it('About Modal in Explore Campaign', () => {
		cy.uploadCampaign(camp, fileName);
		cy.selectCampaign(camp);
		cy.clickAboutModal();
		cy.get('[cy-test=redeye-logo]').should('exist');
		cy.get('[cy-test=about-modal-header]').should('exist');
		cy.get('[cy-test=about-modal-description]').should('exist');
		cy.get('[cy-test=about-modal-links]').should('exist');
		cy.get('[cy-test=about-modal-copyright]').should('exist');
	});

	after(() => {
		cy.deleteCampaignGraphQL(camp);
	});
});
