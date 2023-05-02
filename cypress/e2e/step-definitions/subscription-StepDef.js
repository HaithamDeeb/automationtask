import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

import basePage from '../pages/basePage';
import subscriptionPage from '../pages/subscriptionPage';


const BasePage = new basePage();
const SubscriptionPage = new subscriptionPage();


Given('User navigates to URL',()=>{
    BasePage.navigateWebsite();
})
When('User selects {string} from countries popup',(country)=>{
    BasePage.selectCountry(country);
})
Then('User should see {string} plan with {string} of {string} currency',(plan,price,country)=>{
    SubscriptionPage.validatePlanTitlePriceCurrency(plan,price,country)
})