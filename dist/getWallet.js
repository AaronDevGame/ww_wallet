


console.log("WALET HERE");
console.log(window.cardano);

// window.cardano.isEnabled();

//popout nami wallet
window.cardano.enable();

// await activateCardano();

if(window.cardano.isEnabled()) {
    // console.log("cardano is enabled");
    
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
    console.log("cardano NOT is enabled");

}

// console.log("W - C = " + window.activateCardano);

// console.log("N - ID = " + window.wallet);
// window.cardano.enable();
// window.activateCardano();

// setInterval(function () {if(window.hasOwnProperty('wallet_address')) {console.log('wallet address is: '+window.wallet_address);} }, 5000);
let x;
let y = [];
setTimeout(function () {
    // if(window.hasOwnProperty('wallet_address')) {
        console.log('wallet address is: '+window.wallet_address);
        x = window.owned_nfts;
        console.log('ok NFT x = : '+ x);
        console.log("type = " + typeof x);
        y.push(x);
        console.log('ok NFT y = : '+ y);

        console.log("type = " + typeof y);
        console.log("type 0 = " + typeof y[0]);
        console.log("YEHEY!");
    // } 
}, 1000);

var setup = async() => {

    console.log('@@@@@@@@@@@@@@@@');

    // const S = await import('@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib.js');

// console.log("S = " + window.cardano.S);

    // const tradeDetails = Loader.Cardano.PlutusList.new();
    // console.log(typeof tradeDetails);
    // console.log(typeof Loader.tradeDetails);

    // try {
    //     return Loader.Cardano.BaseAddress.from_address(
    //       Loader.Cardano.Address.from_bytes(
    //         // fromHex((await window.cardano.selectedWallet.getUsedAddresses())[0])
    //         fromHex((await window.cardano.selectedWallet.getUsedAddresses())[0])
    //         // console.log('asdasd')
    //       )
    //     );
    //   } catch (e) {console.log("error")}
};

setup();

console.log("END HERE");
