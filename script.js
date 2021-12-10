document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function() {
        //send GET request to the URL
        fetch('http://api.exchangeratesapi.io/v1/latest?access_key=719b1418b85c9b66c0b0b50f89a7dd00&format=1')
            //Put response into json form
            .then(response => response.json()) //shorthand function
            .then(data => {
                //get currency from userinput and convert to uppercase
                const currency = document.querySelector('#currency').value.toUpperCase();
                //get rate from data
                const rate = data.rates[currency];
                //check if currnecy is valid
                if (currency !== undefined) {
                    //display currency
                    document.querySelector('#result').innerHTML = `1 USD is equal to ${rate.toFixed(3)} ${currency}.`;
                } else {
                    //display error
                    document.querySelector('#result').innerHTML = 'Invalid currency.'
                }
            })

        //Catch any errors, log to console
        .catch(error => {
            console.log('error: ', error);
        });
        return false;
    }
})