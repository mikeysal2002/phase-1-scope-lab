// Write your solution in this file!
var customerName = "bob";

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    return customerName;
}

function setBestCustomer(){
    bestCustomer = 'not bob';
    customerName = bestCustomer;
    return bestCustomer;

}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
    return bestCustomer;
}

const leastFavoriteCustomer = 'Ty Lue';

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'The main man';
    return leastFavoriteCustomer;
}