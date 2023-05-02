/// <reference types="cypress" />

import BasePage from "./basePage";

export default class subscriptionPage extends BasePage{

    // Validate plan title, price and currency for each country
    validatePlanTitlePriceCurrency(plan, price, country) {
        const packageType = this.Local.Subscription_Package_Type[plan][this.language].toLowerCase();
        const packageCurrency = this.Local.Subscription_Package_Currency[country][this.language];
      
        cy.get(`#name-${packageType}`).should('have.text', this.Local.Subscription_Package_Type[plan][this.language]);
        cy.get(`#currency-${packageType}`).find('b').should('have.text', price);
        cy.get(`#currency-${packageType}`).find('i').should('include.text', packageCurrency);
      }
}