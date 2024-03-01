let btc = document.getElementById("bitcoin")
let eth = document.getElementById("ethereum")
let doge = document.getElementById("dogecoin")

// let settings={
//     "async" : true,
//     "scrossDomain" : true,
//     "url" : "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=inr",
//     "method" : "GET",
//     "headers" : {}
// }
// $.ajax(settings).done((res)=>{
//     const indianStyle=(num)=>{
//         const value=num.toLocaleString('en-IN',{
//             style: 'currency',
//             currency: 'INR'
//         }).replace(/\.00$/,'');
//         return value;
//     }
//     btc.innerHTML=indianStyle(res.bitcoin.inr);
//     eth.innerHTML=indianStyle(res.ethereum.inr);
//     doge.innerHTML=indianStyle(res.dogecoin.inr);
// })

//+++++++++ Doing with fetch api +++++++++++
const url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=inr"

fetch(url)
    .then((res) => {
        if (!res.ok) {
            throw new Error("Network response was not ok");
        }
        return res.json();
    })
    .then((data) => {
        const indianStyle = (num) => {
            const value = num.toLocaleString('en-IN', {
                style: 'currency',
                currency: 'INR'
            }).replace(/\.00$/, '');
            return value;
        }
        btc.innerHTML = indianStyle(data.bitcoin.inr);
        eth.innerHTML = indianStyle(data.ethereum.inr);
        doge.innerHTML = indianStyle(data.dogecoin.inr);
    })
    .catch((err) => {
        console.error("There was an error while fetching your api: ", err);
    })

