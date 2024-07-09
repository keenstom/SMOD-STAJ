let liste1, liste2, deger1,deger2;



function try1() {
    deger1 = "TRY"
}

function try2() {
    deger2 = "TRY"

    if(deger1 == "TRY")
    {
        alert("1 TRY = 1 TRY");
    }else{
        const host = 'api.frankfurter.app';
        fetch(`https://${host}/latest?amount=1&from=${deger1}&to=TRY`)
          .then(resp => resp.json())
          .then((data) => {
            alert(` 1 ${deger1} = ${data.rates.TRY} TRY`);
          });
    }
    
}

function eur1() {
    deger1 = "EUR"
}

function eur2() {
    deger2 = "EUR"
    if(deger1 == "EUR")
        {
            alert("1 EUR = 1 EUR");
        }
        else{
            const host = 'api.frankfurter.app';
            fetch(`https://${host}/latest?amount=1&from=${deger1}&to=EUR`)
              .then(resp => resp.json())
              .then((data) => {
                alert(` 1 ${deger1} = ${data.rates.EUR} EUR`);
              });
        }
}

function usd1() {
    deger1 = "USD"
}

function usd2() {
    deger2 = "USD"
    if(deger1 == "USD")
        {
            alert("1 USD = 1 USD");
        }
        else{
            const host = 'api.frankfurter.app';
            fetch(`https://${host}/latest?amount=1&from=${deger1}&to=USD`)
              .then(resp => resp.json())
              .then((data) => {
                alert(` 1 ${deger1} = ${data.rates.USD} USD`);
              });
        }
}

