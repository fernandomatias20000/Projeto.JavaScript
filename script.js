const convertbutton = document.querySelector(".convert-button")
const currencyselect = document.querySelector(".currency-select")
const currencyselectconvert =document.querySelector(".currency-value-convert")

function convertdvalues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyvaluetoconvert = document.querySelector(".currency-value-to-convert")
    const currencyvalueconvertd = document.querySelector(".currency-value")

    console.log(currencyselect.value)
    const dolartoday = 5.46
    const eurotoday = 5.91
    const bitcointoday = 311.099
    const libratoday = 5.99
    const realtoday = 1
    const dolarpreal = 0.18
    const dolarpeuro= 1.08
    const dolarplibra = 1.28
    const dolarpbitcoin = 56.205

    if (currencyselect.value == 'dolar') {
        currencyvalueconvertd.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolartoday)

    }

    if (currencyselect.value == 'euro') {
        currencyvalueconvertd.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / eurotoday)
    }


    if (currencyselect.value == 'libra') {
        currencyvalueconvertd.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libratoday)

    }

    if (currencyselect.value == 'bitcoin') {
        currencyvalueconvertd.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcointoday)

    }

    if (currencyselect.value == 'real') {
        currencyvalueconvertd.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realtoday)

    }
 
    currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)


    if (currencyselectconvert.value == 'dolar') {
        currencyvalueconvertd.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarpreal)

    }

    if (currencyselectconvert.value == 'libra') {
        currencyvalueconvertd.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / dolarplibra)

    }

    if (currencyselectconvert.value == 'euro') {
        currencyvalueconvertd.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / dolarpeuro)

    }

    if (currencyselectconvert.value == 'bitcoin') {
        currencyvalueconvertd.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / dolarpbitcoin)

    }



}
function changecurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage =document.querySelector('.currency-img')
    const currencyNameconvert = document.getElementById("currency-name-convert")
    const currencyImageconvert =document.querySelector('.currency-img-convert')
   
    if (currencyselect.value == 'dolar') {
        currencyName.innerHTML ='Dólar Americano'
        currencyImage.src = './assets/dolar.png'
    }

    if (currencyselect.value == 'euro') {
        currencyName.innerHTML ='Euro'
        currencyImage.src ='./assets/euro.png'
    }

    if (currencyselect.value == 'libra') {
        currencyName.innerHTML ='Libra'
        currencyImage.src ='./assets/libra.png'
    }

    if (currencyselect.value == 'bitcoin') {
        currencyName.innerHTML ='Bitcoin'
        currencyImage.src ='./assets/bitcoin.png'
    }

    if (currencyselect.value == 'real') {
        currencyName.innerHTML ='Real'
        currencyImage.src ='./assets/real.png'
    }

    if (currencyselectconvert.value == 'dolar') {
        currencyNameconvert.innerHTML ='Dólar Americano'
        currencyImageconvert.src ='./assets/dolar.png'
    }

    if (currencyselectconvert.value == 'real') {
        currencyNameconvert.innerHTML ='Real'
        currencyImageconvert.src ='./assets/real.png'
    }

    if (currencyselectconvert.value == 'euro') {
        currencyNameconvert.innerHTML ='Euro'
        currencyImageconvert.src ='./assets/euro.png'
    }

    if (currencyselectconvert.value == 'libra') {
        currencyNameconvert.innerHTML ='Libra'
        currencyImageconvert.src ='./assets/libra.png'
    }

    if (currencyselectconvert.value == 'bitcoin') {
        currencyNameconvert.innerHTML ='Bitcoin'
        currencyImageconvert.src ='./assets/bitcoin.png'
    }




    
    convertdvalues()
}
currencyselect.addEventListener('change', changecurrency)
currencyselectconvert.addEventListener('change', changecurrency)
convertbutton.addEventListener('click', convertdvalues)


