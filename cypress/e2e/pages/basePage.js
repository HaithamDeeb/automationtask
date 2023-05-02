/// <reference types="cypress" />
import * as Local from './../../fixtures/local.json';

export default class basePage {

    constructor(){
        this.Local = Local;
        this.language = Cypress.env('language');
    }


    //Main header locators
    countryBtn = '#country-btn'

    //Country popup locators
    countryPopupTitle = "#country-title"
    bahrainIcon = "#bh"
    ksaIcon = '#sa'
    kwIcon = '#kw'

    
    navigateWebsite(){
        cy.visit('/'+'sa-'+ Cypress.env('language'))
    }

    // This function to change and select needed country
    selectCountry(country){
        cy.get(this.countryBtn).click();
        if(country == "Saudi Arabia"){
         cy.get(this.ksaIcon).click();
        }
        else if(country == "Bahrain"){
            cy.get(this.bahrainIcon).click();
        }
        else if (country == "Kuwait"){
            cy.get(this.kwIcon).click();
        }
    }

}