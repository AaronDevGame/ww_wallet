console.log("WALLET HERE");
// console.log(window.cardano);

// window.cardano.isEnabled();

//popout nami wallet
window.cardano.enable();

if(window.cardano.isEnabled()) {
    console.log("\n cardano is enabled");
    
    // console.log("window.wallet_address = " + window.wallet_address);
    // window.hasOwnProperty('wallet_address');
    // +window.wallet_address

    // console.log("window cardano = " + window.cardano);
    // cardano.getUsedAddresses();
    // if(window.hasOwnProperty('wallet_address')) {
    //     console.log('ok wallet: '+window.wallet_address);
    //     console.log('ok NFT: '+window.owned_nfts);
    // }  else {
    //     console.log('no wallet: '+window.wallet_address);
    // }

} else {
    console.log("\n cardano is not enabled");
}

let x;
let y = [];
setTimeout(function () {
    if(window.hasOwnProperty('wallet_address')) {
        console.log('\n wallet address is: '+window.wallet_address);
//         x = window.owned_nfts;
//         console.log('ok NFT x = : '+ x);
//         console.log("type = " + typeof x);
//         y.push(x);
//         console.log('ok NFT y = : '+ y);

//         console.log("type = " + typeof y);
//         console.log("type 0 = " + typeof y[0]);
//         console.log("YEHEY!");
    } else {
        console.log('\n no wallet address');
    }
}, 1000);

console.log("END HERE");
