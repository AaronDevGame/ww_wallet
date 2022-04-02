(self["webpackChunkwallet_test"] = self["webpackChunkwallet_test"] || []).push([["src_js_wallet_buy_mjs"],{

/***/ "./src/js/wallet/buy.mjs":
/*!*******************************!*\
  !*** ./src/js/wallet/buy.mjs ***!
  \*******************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProtocolParameters": () => (/* binding */ getProtocolParameters)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! form-data */ "./node_modules/form-data/lib/browser.js");
/* harmony import */ var _coinSelection_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coinSelection.mjs */ "./src/js/wallet/coinSelection.mjs");
/* harmony import */ var _emurgo_cip14_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emurgo/cip14-js */ "./node_modules/@emurgo/cip14-js/index.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_coinSelection_mjs__WEBPACK_IMPORTED_MODULE_2__]);
_coinSelection_mjs__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var wallet_address_global = "";
var owned_nfts = [];
var S = await Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_emurgo_cardano-serialization-lib-browser_cardano_serialization_lib_js"), __webpack_require__.e("node_modules_emurgo_cardano-serialization-lib-browser_sync_recursive")]).then(__webpack_require__.bind(__webpack_require__, /*! @emurgo/cardano-serialization-lib-browser/cardano_serialization_lib.js */ "./node_modules/@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib.js")); // const S = import('@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib.js');
//const AssetFingerprint = require('@emurgo/cip14-js');


var _Buffer = (await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! buffer/ */ "./node_modules/buffer/index.js", 19))).Buffer; // const _Buffer = (import('buffer/')).Buffer;

var hexToAscii = function hexToAscii(hex) {
  // connverts hex to ascii string
  var _hex = hex.toString();

  var str = "";

  for (var i = 0; i < _hex.length && _hex.substr(i, 2) !== "00"; i += 2) {
    str += String.fromCharCode(parseInt(_hex.substr(i, 2), 16));
  }

  return str;
}; //check if connected already


var addressHex = null;

try {
  //$("#connectBtn").text('Checking Wallet...');
  console.log("Checking wallet...");
  addressHex = _Buffer.from((await cardano.getUsedAddresses())[0], "hex");
  await activateCardano();
} catch (error) {
  //$("#connectBtn").text('Connect to Wallet');
  console.log("Waiting for message to connect to wallet...");
  console.log("wallet connection error");
  console.log(error);
}

function activateCardano() {
  return _activateCardano.apply(this, arguments);
}

function _activateCardano() {
  _activateCardano = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var promise, addressHex_Con, nfts, walletAddress, rawBalance, value, balance_str_raw, multiAssets, j, policy, policyAssets, assetNames, k, policyAsset, quantity, asset, _policy, _name, nft_name;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!addressHex) {
              _context.next = 4;
              break;
            }

            //$("#connectBtn").text('Wallet Connected');
            //$("#connectBtn").attr('class', 'btn btn-success');
            console.log("Wallet connected");
            _context.next = 14;
            break;

          case 4:
            _context.next = 6;
            return cardano.enable();

          case 6:
            promise = _context.sent;
            //const walletAddress = await cardano.getUsedAddresses();
            //$("#wallet-address").text("Getting wallet address...");
            //$("#wallet-address").attr('class', 'active');
            console.log("Getting wallet address...");
            _context.t0 = _Buffer;
            _context.next = 11;
            return cardano.getUsedAddresses();

          case 11:
            _context.t1 = _context.sent[0];
            addressHex_Con = _context.t0.from.call(_context.t0, _context.t1, "hex");
            addressHex = addressHex_Con;

          case 14:
            nfts = [];

            if (!addressHex) {
              _context.next = 26;
              break;
            }

            walletAddress = S.BaseAddress.from_address(S.Address.from_bytes(addressHex)).to_address().to_bech32();
            wallet_address_global = walletAddress; //$("#wallet-address").text(walletAddress);
            //$("#wallet-address").attr('class', 'active');

            console.log("Wallet address is: " + wallet_address_global); //Get Balance and NFTs...

            $("#wallet-nft-status-text").text("Loading your worlds...");
            _context.next = 22;
            return cardano.getBalance();

          case 22:
            rawBalance = _context.sent;
            value = S.Value.from_bytes(_Buffer.from(rawBalance, 'hex'));
            balance_str_raw = parseInt(value.coin().to_str()) / 1000000;

            if (value.multiasset()) {
              //const FP = await cardano();
              multiAssets = value.multiasset().keys();

              for (j = 0; j < multiAssets.len(); j++) {
                policy = multiAssets.get(j);
                policyAssets = value.multiasset().get(policy);
                assetNames = policyAssets.keys();

                for (k = 0; k < assetNames.len(); k++) {
                  policyAsset = assetNames.get(k);
                  quantity = policyAssets.get(policyAsset);
                  asset = _Buffer.from(policy.to_bytes(), 'hex').toString('hex') + _Buffer.from(policyAsset.name(), 'hex').toString('hex');
                  _policy = asset.slice(0, 56);
                  _name = asset.slice(56);
                  /*
                  const fingerprint = new AssetFingerprint(
                  	_Buffer.from(_policy, 'hex'),
                  	_Buffer.from(_name, 'hex')
                  ).fingerprint();
                  
                  const assetFingerprint = AssetFingerprint.fromParts(
                    _Buffer.from(_policy, 'hex'),
                    _Buffer.from(_name, 'hex')
                  ).fingerprint();
                  */

                  if ("3c2cfd4f1ad33678039cfd0347cca8df363c710067d739624218abc0" == _policy) {
                    nft_name = hexToAscii(_name).replace("WorldsWithin", "");
                    nfts.push({
                      unit: asset,
                      quantity: quantity.to_str(),
                      policy: _policy,
                      name: nft_name,
                      fingerprint: null
                    });
                    owned_nfts.push(nft_name);
                  }
                }
              }
            }

          case 26:
            if (nfts.length == 0) {
              $("#wallet-nft-status-text").text("No NFT worlds found.");
            } else {
              $("#wallet-nft-status-text").text("&nbsp;");
              $("#wallet-nft-status-text").hide();
              $.each(nfts, function (key, value) {
                var numeric_name = value.name.replace("Worlds Within ", ""); // $(`<a class="my-world-link" href="/${process.env.WORLDS_PAGE}/${numeric_name}">${numeric_name}</a>`).appendTo("#wallet-nft-list");
                //$(`<p class="my-world-link" href="#">${numeric_name}</p>`).appendTo("#wallet-nft-list");

                console.log("World fetched: " + numeric_name);
              });
              /* 
              console.log("EVALUATING INSIDE BUY.MJS...");
              console.log(owned_nfts);
              console.log("[" + $("#txtsearch").val().length + "]");
              console.log("[" + owned_nfts.includes($("#txtsearch").val()) + "]");
              console.log("END EVALUATING INSIDE BUY.MJS...");
              */
            }

            window.wallet_address = wallet_address_global;
            window.owned_nfts = owned_nfts;

          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _activateCardano.apply(this, arguments);
}

function getProtocolParameters() {
  return _getProtocolParameters.apply(this, arguments);
}

function _getProtocolParameters() {
  _getProtocolParameters = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var HOST, latest_block, slotnumber, p, value;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            //var HOST = process.env.API ? process.env.API : location.origin;
            HOST = location.origin;
            /* 
            const latest_block = await fetch(HOST+'/blocks_latest', {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                method: 'GET'
            }).then((response) => response.json());
            */

            _context2.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_0__.get("https://cardano-testnet.blockfrost.io/api" + '/v0/blocks/latest', {
              headers: {
                'Content-Type': 'application/json',
                'project_id': "testnetkcYPeW0SShkGdbKynTHSmgNSOdeDNlvj"
              }
            }).then(function (res) {
              latest_block = res.data;
            })["catch"](function (error) {
              latest_block = error.response.data;
            });

          case 3:
            slotnumber = latest_block.slot;
            /* 
            const p = await fetch(`${HOST}/parameters`, {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                method: 'GET'
            }).then((response) => response.json());
            */

            _context2.next = 6;
            return axios__WEBPACK_IMPORTED_MODULE_0__.get("https://cardano-testnet.blockfrost.io/api" + '/v0/epochs/latest/parameters', {
              headers: {
                'Content-Type': 'application/json',
                'project_id': "testnetkcYPeW0SShkGdbKynTHSmgNSOdeDNlvj"
              }
            }).then(function (res) {
              p = res.data;
            })["catch"](function (error) {
              p = data = error.response.data;
            });

          case 6:
            if (!(p.status >= 400 && p.status < 600)) {
              _context2.next = 8;
              break;
            }

            throw new Error("Bad response from server");

          case 8:
            value = {
              linearFee: S.LinearFee["new"](S.BigNum.from_str(p.min_fee_a.toString()), S.BigNum.from_str(p.min_fee_b.toString())),
              minUtxo: S.BigNum.from_str(p.min_utxo),
              poolDeposit: S.BigNum.from_str(p.pool_deposit),
              keyDeposit: S.BigNum.from_str(p.key_deposit),
              maxTxSize: p.max_tx_size,
              slot: slotnumber
            };
            return _context2.abrupt("return", value);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getProtocolParameters.apply(this, arguments);
}

;

function triggerPay() {
  return _triggerPay.apply(this, arguments);
}

function _triggerPay() {
  _triggerPay = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var user, address, offer;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return cardano.getUsedAddresses();

          case 2:
            user = _context3.sent;
            address = "addr_test1qz2vkjg2c7adw580wszwtrr9naujrakfrp6sc3jfzzy7gq6w6q5u2k8ks8rvgpacxfy2x7ecy784naxfwhf2z48hkzqq7n0hrd";
            offer = 0; // parseInt($("#cardano-offer").value);

            offer = document.getElementById("cardano-offer").value; // WORKS

            _context3.next = 8;
            return pay(address, offer);

          case 8:
            return _context3.abrupt("return", _context3.sent);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _triggerPay.apply(this, arguments);
}

function pay(_x, _x2) {
  return _pay.apply(this, arguments);
}
/* 
$("#connectBtn").on('click', async () => {
    if($("#connectBtn").text() != "Wallet Connected") {
		try {
		  await activateCardano();
		} catch (e) {
		  $("#connectBtn").text('Not Connected');
		  $("#connectBtn").attr('class', 'btn btn-danger');
		  console.error(e);
		} finally {
		  console.log('We do cleanup here');
		}
	}
});
*/
//var options = {
//  cors: true
//}
//import {http} from 'http';
//const server = http.createServer();
//import {Server} from 'socket.io';
//const io = new Server(server, options);

/*

var server = require('http').createServer();
var options = {
  cors: true
}
var io = require('socket.io')(server, options);

io.on('connection', async (socket) => {
  console.log('a user connected');
  
  socket.on('initialize', async function() {
  	console.log("socket initialized");
	try {
	  await activateCardano();
	} catch (e) {
	  wallet_address_global = "";
	  console.error(e);
	} finally {
	  console.log('After initiating cardano object');
	}
	socket.emit('messagePlaycanvas', wallet_address_global);
	
	socket.on('passMessage', function(data) {
		console.log("message");
		console.log(data);
	});
	
  });
  
});

import { createServer } from "stream-http";
import { Server } from "socket.io";

*/


function _pay() {
  _pay = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(addr, adaAmount) {
    var cardano, protocolParameters, lovelace, paymentAddr, rawUtxo, utxos, outputs, MULTIASSET_SIZE, VALUE_SIZE, totalAssets, selection, inputs, txBuilder, i, utxo, change, changeMultiAssets, partialChange, partialMultiAssets, policies, makeSplit, minAda, transaction, size, witneses, signedTx, txhash;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            cardano = window.cardano;
            _context4.next = 3;
            return getProtocolParameters();

          case 3:
            protocolParameters = _context4.sent;
            lovelace = (parseFloat(adaAmount) * 1000000).toString();
            _context4.t0 = S.Address;
            _context4.t1 = _Buffer;
            _context4.next = 9;
            return cardano.getChangeAddress();

          case 9:
            _context4.t2 = _context4.sent;
            _context4.t3 = _context4.t1.from.call(_context4.t1, _context4.t2, 'hex');
            paymentAddr = _context4.t0.from_bytes.call(_context4.t0, _context4.t3).to_bech32();
            _context4.next = 14;
            return cardano.getUtxos();

          case 14:
            rawUtxo = _context4.sent;
            utxos = rawUtxo.map(function (u) {
              return S.TransactionUnspentOutput.from_bytes(_Buffer.from(u, 'hex'));
            });
            outputs = S.TransactionOutputs["new"]();
            outputs.add(S.TransactionOutput["new"](S.Address.from_bech32(addr), S.Value["new"](S.BigNum.from_str(lovelace))));
            MULTIASSET_SIZE = 5848;
            VALUE_SIZE = 5860;
            totalAssets = 0;
            _coinSelection_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].setProtocolParameters(protocolParameters.minUtxo.to_str(), protocolParameters.linearFee.coefficient().to_str(), protocolParameters.linearFee.constant().to_str(), protocolParameters.maxTxSize.toString());
            _context4.next = 24;
            return _coinSelection_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].randomImprove(utxos, outputs, 20 + totalAssets, protocolParameters.minUtxo.to_str());

          case 24:
            selection = _context4.sent;
            inputs = selection.input;
            txBuilder = S.TransactionBuilder["new"](protocolParameters.linearFee, protocolParameters.minUtxo, protocolParameters.poolDeposit, protocolParameters.keyDeposit);

            for (i = 0; i < inputs.length; i++) {
              utxo = inputs[i];
              txBuilder.add_input(utxo.output().address(), utxo.input(), utxo.output().amount());
            } // var m = S.GeneralTransactionMetadata.new()
            // m.insert(S.BigNum.from_str('0'),S.encode_json_str_to_metadatum(JSON.stringify(JSONmetaData),0))
            // var metaData = S.TransactionMetadata.new(m)
            // txBuilder.set_metadata(metaData)


            txBuilder.add_output(outputs.get(0));
            change = selection.change;
            changeMultiAssets = change.multiasset(); // check if change value is too big for single output

            if (changeMultiAssets && change.to_bytes().length * 2 > VALUE_SIZE) {
              partialChange = S.Value["new"](S.BigNum.from_str('0'));
              partialMultiAssets = S.MultiAsset["new"]();
              policies = changeMultiAssets.keys();

              makeSplit = function makeSplit() {
                for (var j = 0; j < changeMultiAssets.len(); j++) {
                  var policy = policies.get(j);
                  var policyAssets = changeMultiAssets.get(policy);
                  var assetNames = policyAssets.keys();
                  var assets = S.Assets["new"]();

                  for (var k = 0; k < assetNames.len(); k++) {
                    var policyAsset = assetNames.get(k);
                    var quantity = policyAssets.get(policyAsset);
                    assets.insert(policyAsset, quantity); //check size

                    var checkMultiAssets = S.MultiAsset.from_bytes(partialMultiAssets.to_bytes());
                    checkMultiAssets.insert(policy, assets);

                    if (checkMultiAssets.to_bytes().length * 2 >= MULTIASSET_SIZE) {
                      partialMultiAssets.insert(policy, assets);
                      return;
                    }
                  }

                  partialMultiAssets.insert(policy, assets);
                }
              };

              makeSplit();
              partialChange.set_multiasset(partialMultiAssets);
              minAda = S.min_ada_required(partialChange, protocolParameters.minUtxo);
              partialChange.set_coin(minAda);
              txBuilder.add_output(S.TransactionOutput["new"](S.Address.from_bech32(paymentAddr), partialChange));
            }

            txBuilder.add_change_if_needed(S.Address.from_bech32(paymentAddr));
            transaction = S.Transaction["new"](txBuilder.build(), S.TransactionWitnessSet["new"]() //metaData
            );
            size = transaction.to_bytes().length * 2;

            if (!(size > protocolParameters.maxTxSize)) {
              _context4.next = 37;
              break;
            }

            throw ERROR.txTooBig;

          case 37:
            _context4.next = 39;
            return cardano.signTx(_Buffer.from(transaction.to_bytes(), 'hex').toString('hex'));

          case 39:
            witneses = _context4.sent;
            signedTx = S.Transaction["new"](transaction.body(), S.TransactionWitnessSet.from_bytes(_Buffer.from(witneses, "hex"))); // ,transaction.metadata()

            _context4.next = 43;
            return cardano.submitTx(_Buffer.from(signedTx.to_bytes(), 'hex').toString('hex'));

          case 43:
            txhash = _context4.sent;
            return _context4.abrupt("return", txhash);

          case 45:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _pay.apply(this, arguments);
}

window.activateCardano = activateCardano;
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/js/wallet/coinSelection.mjs":
/*!*****************************************!*\
  !*** ./src/js/wallet/coinSelection.mjs ***!
  \*****************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var S = await Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_emurgo_cardano-serialization-lib-browser_cardano_serialization_lib_js"), __webpack_require__.e("node_modules_emurgo_cardano-serialization-lib-browser_sync_recursive")]).then(__webpack_require__.bind(__webpack_require__, /*! @emurgo/cardano-serialization-lib-browser/cardano_serialization_lib.js */ "./node_modules/@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib.js")); // const S = import('@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib.js');

var Loader = {
  Cardano: S
};
/**
 * BerryPool implementation of the __Random-Improve__ coin selection algorithm.
 *
 * = Overview
 *
 * The __Random-Improve__ coin selection algorithm works in __two phases__, by
 * /first/ selecting UTxO entries /at random/ to pay for each of the given
 * outputs, and /then/ attempting to /improve/ upon each of the selections.
 *
 * === Phase 1: Random Selection
 *
 * __In this phase, the algorithm randomly selects a minimal set of UTxO__
 * __entries to pay for each of the given outputs.__
 *
 * During this phase, the algorithm:
 *
 *   *  processes outputs in /descending order of coin value/.
 *
 *   *  maintains a /remaining UTxO set/, initially equal to the given
 *      /UTxO set/ parameter.
 *
 *   *  based on every output nature, generate a /native token UTxO subset/
 *      to narrow down to useful UTxO
 *
 *   *  maintains an /accumulated coin selection/, which is initially /empty/.
 *
 * For each output of value __/v/__, the algorithm /randomly/ selects entries
 * from the /remaining UTxO set/, until the total value of selected entries is
 * greater than or equal to __/v/__. The selected entries are then associated
 * with that output, and removed from the /remaining UTxO set/.
 *
 * This phase ends when every output has been associated with a selection of
 * UTxO entries.
 *
 * However, if the remaining UTxO set is completely exhausted before all
 * outputs can be processed, the algorithm terminates with an error.
 *
 * === Phase 2: Improvement
 *
 * __In this phase, the algorithm attempts to improve upon each of the UTxO__
 * __selections made in the previous phase, by conservatively expanding the__
 * __selection made for each output.__
 *
 * During this phase, the algorithm:
 *
 *   *  processes outputs in /ascending order of coin value/.
 *
 *   *  continues to maintain the /remaining UTxO set/ produced by the previous
 *      phase.
 *
 *   *  maintains an /accumulated coin selection/, initiated from previous phase.
 *
 * For each output of value __/v/__, the algorithm:
 *
 *  1.  __Calculates a /target range/__ for the total value of inputs used to
 *      pay for that output, defined by the triplet:
 *
 *      (/minimum/, /ideal/, /maximum/) = (/v/, /2v/, /3v/)
 *
 *  2.  __Attempts to /improve/ upon the /existing UTxO selection/__ for that
 *      output, by repeatedly selecting additional entries at random from the
 *      /remaining UTxO set/, stopping when the selection can be improved upon
 *      no further.
 *
 *      A selection with value /v1/ is considered to be an /improvement/ over a
 *      selection with value /v0/ if __all__ of the following conditions are
 *      satisfied:
 *
 *       * __Condition 1__: we have moved closer to the /ideal/ value:
 *
 *             abs (/ideal/ − /v1/) < abs (/ideal/ − /v0/)
 *
 *       * __Condition 2__: we have not exceeded the /maximum/ value:
 *
 *             /v1/ ≤ /maximum/
 *
 *       * __Condition 3__: when counting cumulatively across all outputs
 *       considered so far, we have not selected more than the /maximum/ number
 *       of UTxO entries specified by 'limit'.
 *
 *  3.  __Creates a /change value/__ for the output, equal to the total value
 *      of the /final UTxO selection/ for that output minus the value /v/ of
 *      that output.
 *
 *  4.  __Updates the /accumulated coin selection/__:
 *
 *       * Adds the /output/ to 'outputs'.
 *       * Adds the /improved UTxO selection/ to 'inputs'.
 *       * Adds the /change value/ to 'change'.
 *
 * This phase ends when every output has been processed, __or__ when the
 * /remaining UTxO set/ has been exhausted, whichever occurs sooner.
 *
 * = Termination
 *
 * When both phases are complete, the algorithm terminates.
 *
 * The /accumulated coin selection/ and /remaining UTxO set/ are returned to
 * the caller.
 *
 * === Failure Modes
 *
 * The algorithm terminates with an __error__ if:
 *
 *  1.  The /total value/ of the initial UTxO set (the amount of money
 *      /available/) is /less than/ the total value of the output list (the
 *      amount of money /required/).
 *
 *      See: __'InputsExhaustedError'__.
 *
 *  2.  The /number/ of UTxO entries needed to pay for the requested outputs
 *      would /exceed/ the upper limit specified by 'limit'.
 *
 *      See: __'InputLimitExceededError'__.
 *
 * == Motivating Principles
 *
 * There are several motivating principles behind the design of the algorithm.
 *
 * === Principle 1: Dust Management
 *
 * The probability that random selection will choose dust entries from a UTxO
 * set increases with the proportion of dust in the set.
 *
 * Therefore, for a UTxO set with a large amount of dust, there's a high
 * probability that a random subset will include a large amount of dust.
 *
 * === Principle 2: Change Management
 *
 * Ideally, coin selection algorithms should, over time, create a UTxO set that
 * has /useful/ outputs: outputs that will allow us to process future payments
 * with a minimum number of inputs.
 *
 * If for each payment request of value __/v/__ we create a change output of
 * /roughly/ the same value __/v/__, then we will end up with a distribution of
 * change values that matches the typical value distribution of payment
 * requests.
 *
 * === Principle 3: Performance Management
 *
 * Searching the UTxO set for additional entries to improve our change outputs
 * is /only/ useful if the UTxO set contains entries that are sufficiently
 * small enough. But it is precisely when the UTxO set contains many small
 * entries that it is less likely for a randomly-chosen UTxO entry to push the
 * total above the upper bound.
 */

/**
 * @typedef {Value[]} AmountList - List of 'Value' object
 */

/**
 * @typedef {TransactionUnspentOutput[]} UTxOList - List of UTxO
 */

/**
 * @typedef {Object} UTxOSelection - Coin Selection algorithm core object
 * @property {UTxOList} selection - Accumulated UTxO set.
 * @property {UTxOList} remaining - Remaining UTxO set.
 * @property {UTxOList} subset - Remaining UTxO set.
 * @property {Value} amount - UTxO amount of each requested token
 */

/**
 * @typedef {Object} ImproveRange - ImproveRange
 * @property {Value} ideal - Requested amount * 2
 * @property {Value} maximum - Requested amount * 3
 */

/**
 * @typedef {Object} SelectionResult - Coin Selection algorithm return
 * @property {UTxOList} input - Accumulated UTxO set.
 * @property {OutputList} output - Requested outputs.
 * @property {UTxOList} remaining - Remaining UTxO set.
 * @property {Value} amount - UTxO amount of each requested token
 * @property {Value} change - Accumulated change amount.
 */

/**
 * @typedef {Object} ProtocolParameters
 * @property {int} minUTxO
 * @property {int} minFeeA
 * @property {int} minFeeB
 * @property {int} maxTxSize
 */

/**
 * @type {ProtocolParameters}
 */

var protocolParameters = null;
/**
 * CoinSelection Module.
 * @module src/lib/CoinSelection
 */

var CoinSelection = {
  /**
   * Set protocol parameters required by the algorithm
   * @param {string} minUTxO
   * @param {string} minFeeA
   * @param {string} minFeeB
   * @param {string} maxTxSize
   */
  setProtocolParameters: function setProtocolParameters(minUTxO, minFeeA, minFeeB, maxTxSize) {
    protocolParameters = {
      minUTxO: minUTxO,
      minFeeA: minFeeA,
      minFeeB: minFeeB,
      maxTxSize: maxTxSize
    };
  },

  /**
   * Random-Improve coin selection algorithm
   * @param {UTxOList} inputs - The set of inputs available for selection.
   * @param {TransactionOutputs} outputs - The set of outputs requested for payment.
   * @param {int} limit - A limit on the number of inputs that can be selected.
   * @return {SelectionResult} - Coin Selection algorithm return
   */
  randomImprove: function () {
    var _randomImprove = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(inputs, outputs, limit) {
      var _minUTxOValue, utxoSelection, mergedOutputsAmounts, splitOutputsAmounts;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (protocolParameters) {
                _context.next = 2;
                break;
              }

              throw new Error('Protocol parameters not set. Use setProtocolParameters().');

            case 2:
              // await Loader.load();
              _minUTxOValue = BigInt(outputs.len()) * BigInt(protocolParameters.minUTxO);
              /** @type {UTxOSelection} */

              utxoSelection = {
                selection: [],
                remaining: _toConsumableArray(inputs),
                // Shallow copy
                subset: [],
                amount: Loader.Cardano.Value["new"](Loader.Cardano.BigNum.from_str('0'))
              };
              mergedOutputsAmounts = mergeOutputsAmounts(outputs); // Explode amount in an array of unique asset amount for comparison's sake

              splitOutputsAmounts = splitAmounts(mergedOutputsAmounts); // Phase 1: RandomSelect

              splitOutputsAmounts.forEach(function (output) {
                createSubSet(utxoSelection, output); // Narrow down for NatToken UTxO

                try {
                  utxoSelection = randomSelect(cloneUTxOSelection(utxoSelection), // Deep copy in case of fallback needed
                  output, limit - utxoSelection.selection.length, _minUTxOValue);
                } catch (e) {
                  if (e.message === 'INPUT_LIMIT_EXCEEDED') {
                    // Limit reached : Fallback on DescOrdAlgo
                    utxoSelection = descSelect(utxoSelection, output, limit - utxoSelection.selection.length, _minUTxOValue);
                  } else {
                    throw e;
                  }
                }
              }); // Phase 2: Improve

              splitOutputsAmounts = sortAmountList(splitOutputsAmounts);
              splitOutputsAmounts.forEach(function (output) {
                createSubSet(utxoSelection, output); // Narrow down for NatToken UTxO

                var range = {};
                range.ideal = Loader.Cardano.Value["new"](Loader.Cardano.BigNum.from_str('0')).checked_add(output).checked_add(output);
                range.maximum = Loader.Cardano.Value["new"](Loader.Cardano.BigNum.from_str('0')).checked_add(range.ideal).checked_add(output);
                improve(utxoSelection, output, limit - utxoSelection.selection.length, range);
              });
              return _context.abrupt("return", {
                input: utxoSelection.selection,
                output: outputs,
                remaining: utxoSelection.remaining,
                amount: utxoSelection.amount,
                change: utxoSelection.amount.checked_sub(mergedOutputsAmounts)
              });

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function randomImprove(_x, _x2, _x3) {
      return _randomImprove.apply(this, arguments);
    }

    return randomImprove;
  }()
};
/**
 * Randomly select enough UTxO to fulfill requested outputs
 * @param {UTxOSelection} utxoSelection - The set of selected/available inputs.
 * @param {Value} outputAmount - Single compiled output qty requested for payment.
 * @param {int} limit - A limit on the number of inputs that can be selected.
 * @param {int} minUTxOValue - Network protocol 'minUTxOValue' current value.
 * @throws INPUT_LIMIT_EXCEEDED if the number of randomly picked inputs exceed 'limit' parameter.
 * @throws INPUTS_EXHAUSTED if all UTxO doesn't hold enough funds to pay for output.
 * @throws MIN_UTXO_ERROR if lovelace change is under 'minUTxOValue' parameter.
 * @return {UTxOSelection} - Successful random utxo selection.
 */

function randomSelect(utxoSelection, outputAmount, limit, minUTxOValue) {
  var nbFreeUTxO = utxoSelection.subset.length; // If quantity is met, return subset into remaining list and exit

  if (isQtyFulfilled(outputAmount, utxoSelection.amount, minUTxOValue, nbFreeUTxO)) {
    utxoSelection.remaining = [].concat(_toConsumableArray(utxoSelection.remaining), _toConsumableArray(utxoSelection.subset));
    utxoSelection.subset = [];
    return utxoSelection;
  }

  if (limit <= 0) {
    throw new Error('INPUT_LIMIT_EXCEEDED');
  }

  if (nbFreeUTxO <= 0) {
    if (isQtyFulfilled(outputAmount, utxoSelection.amount, 0, 0)) {
      throw new Error('MIN_UTXO_ERROR');
    }

    throw new Error('INPUTS_EXHAUSTED');
  }
  /** @type {TransactionUnspentOutput} utxo */


  var utxo = utxoSelection.subset.splice(Math.floor(Math.random() * nbFreeUTxO), 1).pop();
  utxoSelection.selection.push(utxo);
  utxoSelection.amount = addAmounts(utxo.output().amount(), utxoSelection.amount);
  return randomSelect(utxoSelection, outputAmount, limit - 1, minUTxOValue);
}
/**
 * Select enough UTxO in DESC order to fulfill requested outputs
 * @param {UTxOSelection} utxoSelection - The set of selected/available inputs.
 * @param {Value} outputAmount - Single compiled output qty requested for payment.
 * @param {int} limit - A limit on the number of inputs that can be selected.
 * @param {int} minUTxOValue - Network protocol 'minUTxOValue' current value.
 * @throws INPUT_LIMIT_EXCEEDED if the number of randomly picked inputs exceed 'limit' parameter.
 * @throws INPUTS_EXHAUSTED if all UTxO doesn't hold enough funds to pay for output.
 * @throws MIN_UTXO_ERROR if lovelace change is under 'minUTxOValue' parameter.
 * @return {UTxOSelection} - Successful random utxo selection.
 */


function descSelect(utxoSelection, outputAmount, limit, minUTxOValue) {
  // Sort UTxO subset in DESC order for required Output unit type
  utxoSelection.subset = utxoSelection.subset.sort(function (utxoA, utxoB) {
    return utxoB.output().amount().compare(utxoA.output().amount());
  });

  do {
    if (limit <= 0) {
      throw new Error('INPUT_LIMIT_EXCEEDED');
    }

    if (utxoSelection.subset.length <= 0) {
      if (isQtyFulfilled(outputAmount, utxoSelection.amount, 0, 0)) {
        throw new Error('MIN_UTXO_ERROR');
      }

      throw new Error('INPUTS_EXHAUSTED');
    }
    /** @type {TransactionUnspentOutput} utxo */


    var utxo = utxoSelection.subset.splice(0, 1).pop();
    utxoSelection.selection.push(utxo);
    utxoSelection.amount = addAmounts(utxo.output().amount(), utxoSelection.amount);
    limit--;
  } while (!isQtyFulfilled(outputAmount, utxoSelection.amount, minUTxOValue, utxoSelection.subset.length - 1)); // Quantity is met, return subset into remaining list and return selection


  utxoSelection.remaining = [].concat(_toConsumableArray(utxoSelection.remaining), _toConsumableArray(utxoSelection.subset));
  utxoSelection.subset = [];
  return utxoSelection;
}
/**
 * Try to improve selection by increasing input amount in [2x,3x] range.
 * @param {UTxOSelection} utxoSelection - The set of selected/available inputs.
 * @param {Value} outputAmount - Single compiled output qty requested for payment.
 * @param {int} limit - A limit on the number of inputs that can be selected.
 * @param {ImproveRange} range - Improvement range target values
 */


function improve(utxoSelection, outputAmount, limit, range) {
  var nbFreeUTxO = utxoSelection.subset.length;

  if (utxoSelection.amount.compare(range.ideal) >= 0 || nbFreeUTxO <= 0 || limit <= 0) {
    // Return subset in remaining
    utxoSelection.remaining = [].concat(_toConsumableArray(utxoSelection.remaining), _toConsumableArray(utxoSelection.subset));
    utxoSelection.subset = [];
    return;
  }
  /** @type {TransactionUnspentOutput} utxo */


  var utxo = utxoSelection.subset.splice(Math.floor(Math.random() * nbFreeUTxO), 1).pop();
  var newAmount = Loader.Cardano.Value["new"](Loader.Cardano.BigNum.from_str('0')).checked_add(utxo.output().amount()).checked_add(outputAmount);

  if (abs(getAmountValue(range.ideal) - getAmountValue(newAmount)) < abs(getAmountValue(range.ideal) - getAmountValue(outputAmount)) && newAmount.compare(range.maximum) <= 0) {
    utxoSelection.selection.push(utxo);
    utxoSelection.amount = addAmounts(utxo.output().amount(), utxoSelection.amount);
    limit--;
  } else {
    utxoSelection.remaining.push(utxo);
  }

  return improve(utxoSelection, outputAmount, limit, range);
}
/**
 * Compile all required outputs to a flat amounts list
 * @param {TransactionOutputs} outputs - The set of outputs requested for payment.
 * @return {Value} - The compiled set of amounts requested for payment.
 */


function mergeOutputsAmounts(outputs) {
  var compiledAmountList = Loader.Cardano.Value["new"](Loader.Cardano.BigNum.from_str('0'));

  for (var i = 0; i < outputs.len(); i++) {
    compiledAmountList = addAmounts(outputs.get(i).amount(), compiledAmountList);
  }

  return compiledAmountList;
}
/**
 * Add up an Amounts List values to another Amounts List
 * @param {Value} amounts - Set of amounts to be added.
 * @param {Value} compiledAmounts - The compiled set of amounts.
 * @return {Value}
 */


function addAmounts(amounts, compiledAmounts) {
  return compiledAmounts.checked_add(amounts);
}
/**
 * Split amounts contained in a single {Value} object in separate {Value} objects
 * @param {Value} amounts - Set of amounts to be split.
 * @throws MIN_UTXO_ERROR if lovelace change is under 'minUTxOValue' parameter.
 * @return {AmountList}
 */


function splitAmounts(amounts) {
  var splitAmounts = [];

  if (amounts.multiasset()) {
    var mA = amounts.multiasset();

    for (var i = 0; i < mA.keys().len(); i++) {
      var scriptHash = mA.keys().get(i);

      for (var j = 0; j < mA.get(scriptHash).keys().len(); j++) {
        var _assets = Loader.Cardano.Assets["new"]();

        var assetName = mA.get(scriptHash).keys().get(j);

        _assets.insert(Loader.Cardano.AssetName.from_bytes(assetName.to_bytes()), Loader.Cardano.BigNum.from_bytes(mA.get(scriptHash).get(assetName).to_bytes()));

        var _multiasset = Loader.Cardano.MultiAsset["new"]();

        _multiasset.insert(Loader.Cardano.ScriptHash.from_bytes(scriptHash.to_bytes()), _assets);

        var _value = Loader.Cardano.Value["new"](Loader.Cardano.BigNum.from_str('0'));

        _value.set_multiasset(_multiasset);

        splitAmounts.push(_value);
      }
    }
  } // Order assets by qty DESC


  splitAmounts = sortAmountList(splitAmounts, 'DESC'); // Insure lovelace is last to account for min ada requirement

  splitAmounts.push(Loader.Cardano.Value["new"](Loader.Cardano.BigNum.from_bytes(amounts.coin().to_bytes())));
  return splitAmounts;
}
/**
 * Sort a mismatched AmountList ASC/DESC
 * @param {AmountList} amountList - Set of mismatched amounts to be sorted.
 * @param {string} [sortOrder=ASC] - Order
 * @return {AmountList} - The sorted AmountList
 */


function sortAmountList(amountList) {
  var sortOrder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ASC';
  return amountList.sort(function (a, b) {
    var sortInt = sortOrder === 'DESC' ? BigInt(-1) : BigInt(1);
    return Number((getAmountValue(a) - getAmountValue(b)) * sortInt);
  });
}
/**
 * Return BigInt amount value
 * @param amount
 * @return {bigint}
 */


function getAmountValue(amount) {
  var val = BigInt(0);
  var lovelace = BigInt(amount.coin().to_str());

  if (lovelace > 0) {
    val = lovelace;
  } else if (amount.multiasset() && amount.multiasset().len() > 0) {
    var scriptHash = amount.multiasset().keys().get(0);
    var assetName = amount.multiasset().get(scriptHash).keys().get(0);
    val = BigInt(amount.multiasset().get(scriptHash).get(assetName).to_str());
  }

  return val;
}
/**
 * Narrow down remaining UTxO set in case of native token, use full set for lovelace
 * @param {UTxOSelection} utxoSelection - The set of selected/available inputs.
 * @param {Value} output - Single compiled output qty requested for payment.
 */


function createSubSet(utxoSelection, output) {
  if (BigInt(output.coin().to_str()) < BigInt(1)) {
    utxoSelection.remaining.forEach(function (utxo, index) {
      if (output.compare(utxo.output().amount()) !== undefined) {
        utxoSelection.subset.push(utxoSelection.remaining.splice(index, 1).pop());
      }
    });
  } else {
    utxoSelection.subset = utxoSelection.remaining.splice(0, utxoSelection.remaining.length);
  }
}
/**
 * Is Quantity Fulfilled Condition - Handle 'minUTxOValue' protocol parameter.
 * @param {Value} outputAmount - Single compiled output qty requested for payment.
 * @param {Value} cumulatedAmount - Single compiled accumulated UTxO qty.
 * @param {int} minUTxOValue - Network protocol 'minUTxOValue' current value.
 * @param {int} nbFreeUTxO - Number of free UTxO available.
 * @return {boolean}
 */


function isQtyFulfilled(outputAmount, cumulatedAmount, minUTxOValue, nbFreeUTxO) {
  var amount = outputAmount;

  if (minUTxOValue && BigInt(outputAmount.coin().to_str()) > 0) {
    var minAmount = Loader.Cardano.Value["new"](Loader.Cardano.min_ada_required(cumulatedAmount, Loader.Cardano.BigNum.from_str(minUTxOValue.toString()))); // Lovelace min amount to cover assets and number of output need to be met

    if (cumulatedAmount.compare(minAmount) < 0) return false; // If requested Lovelace lower than minAmount, plan for change

    if (outputAmount.compare(minAmount) < 0) {
      amount = minAmount.checked_add(Loader.Cardano.Value["new"](Loader.Cardano.BigNum.from_str(protocolParameters.minUTxO)));
    } // Try covering the max fees


    if (nbFreeUTxO > 0) {
      var maxFee = BigInt(protocolParameters.minFeeA) * BigInt(protocolParameters.maxTxSize) + BigInt(protocolParameters.minFeeB);
      maxFee = Loader.Cardano.Value["new"](Loader.Cardano.BigNum.from_str(maxFee.toString()));
      amount = amount.checked_add(maxFee);
    }
  }

  return cumulatedAmount.compare(amount) >= 0;
}
/**
 * Return a deep copy of UTxOSelection
 * @param {UTxOSelection} utxoSelection
 * @return {UTxOSelection} Clone - Deep copy
 */


function cloneUTxOSelection(utxoSelection) {
  return {
    selection: cloneUTxOList(utxoSelection.selection),
    remaining: cloneUTxOList(utxoSelection.remaining),
    subset: cloneUTxOList(utxoSelection.subset),
    amount: cloneValue(utxoSelection.amount)
  };
}
/**
 * Return a deep copy of an UTxO List
 * @param {UTxOList} utxoList
 * @return {UTxOList} Cone - Deep copy
 */


var cloneUTxOList = function cloneUTxOList(utxoList) {
  return utxoList.map(function (utxo) {
    return Loader.Cardano.TransactionUnspentOutput.from_bytes(utxo.to_bytes());
  });
};
/**
 * Return a deep copy of a Value object
 * @param {Value} value
 * @return {Value} Cone - Deep copy
 */


var cloneValue = function cloneValue(value) {
  return Loader.Cardano.Value.from_bytes(value.to_bytes());
}; // Helper


function abs(big) {
  return big < 0 ? big * BigInt(-1) : big;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoinSelection);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TCxFQUFuRCxDQURXO0FBQUEsR0FBYixDQURvQjtBQUFBLENBQXRCO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBTWdNLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNsTixLQUFEO0FBQUEsU0FBVzRJLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlNUksS0FBZixDQUFxQlIsVUFBckIsQ0FBZ0NPLEtBQUssQ0FBQ2tCLFFBQU4sRUFBaEMsQ0FBWDtBQUFBLENBQW5CLEVBRUE7OztBQUNBLFNBQVNzSyxHQUFULENBQWE0QixHQUFiLEVBQWtCO0FBQ2hCLFNBQU9BLEdBQUcsR0FBRyxDQUFOLEdBQVVBLEdBQUcsR0FBR2pFLE1BQU0sQ0FBQyxDQUFDLENBQUYsQ0FBdEIsR0FBNkJpRSxHQUFwQztBQUNEOztBQUVELGlFQUFlN1AsYUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3dhbGxldF90ZXN0Ly4vc3JjL2pzL3dhbGxldC9idXkubWpzIiwid2VicGFjazovL3dhbGxldF90ZXN0Ly4vc3JjL2pzL3dhbGxldC9jb2luU2VsZWN0aW9uLm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBGb3JtRGF0YSBmcm9tICdmb3JtLWRhdGEnO1xyXG5pbXBvcnQgQ29pblNlbGVjdGlvbiBmcm9tICcuL2NvaW5TZWxlY3Rpb24ubWpzJztcclxuXHJcbnZhciB3YWxsZXRfYWRkcmVzc19nbG9iYWwgPSBcIlwiO1xyXG52YXIgb3duZWRfbmZ0cyA9IFtdO1xyXG5cclxuXHJcbmNvbnN0IFMgPSBhd2FpdCBpbXBvcnQoJ0BlbXVyZ28vY2FyZGFuby1zZXJpYWxpemF0aW9uLWxpYi1icm93c2VyL2NhcmRhbm9fc2VyaWFsaXphdGlvbl9saWIuanMnKTtcclxuLy8gY29uc3QgUyA9IGltcG9ydCgnQGVtdXJnby9jYXJkYW5vLXNlcmlhbGl6YXRpb24tbGliLWJyb3dzZXIvY2FyZGFub19zZXJpYWxpemF0aW9uX2xpYi5qcycpO1xyXG5cclxuLy9jb25zdCBBc3NldEZpbmdlcnByaW50ID0gcmVxdWlyZSgnQGVtdXJnby9jaXAxNC1qcycpO1xyXG5pbXBvcnQge0Fzc2V0RmluZ2VycHJpbnR9IGZyb20gJ0BlbXVyZ28vY2lwMTQtanMnO1xyXG5cclxuY29uc3QgX0J1ZmZlciA9IChhd2FpdCBpbXBvcnQoJ2J1ZmZlci8nKSkuQnVmZmVyO1xyXG4vLyBjb25zdCBfQnVmZmVyID0gKGltcG9ydCgnYnVmZmVyLycpKS5CdWZmZXI7XHJcblxyXG5jb25zdCBoZXhUb0FzY2lpID0gKGhleCkgPT4ge1xyXG4gICAgLy8gY29ubnZlcnRzIGhleCB0byBhc2NpaSBzdHJpbmdcclxuICAgIHZhciBfaGV4ID0gaGV4LnRvU3RyaW5nKCk7XHJcbiAgICB2YXIgc3RyID0gXCJcIjtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX2hleC5sZW5ndGggJiYgX2hleC5zdWJzdHIoaSwgMikgIT09IFwiMDBcIjsgaSArPSAyKVxyXG4gICAgICAgIHN0ciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KF9oZXguc3Vic3RyKGksIDIpLCAxNikpO1xyXG4gICAgcmV0dXJuIHN0cjtcclxufTtcclxuXHJcbi8vY2hlY2sgaWYgY29ubmVjdGVkIGFscmVhZHlcclxubGV0IGFkZHJlc3NIZXggPSBudWxsO1xyXG50cnkge1xyXG5cdC8vJChcIiNjb25uZWN0QnRuXCIpLnRleHQoJ0NoZWNraW5nIFdhbGxldC4uLicpO1xyXG5cdGNvbnNvbGUubG9nKFwiQ2hlY2tpbmcgd2FsbGV0Li4uXCIpO1xyXG5cdGFkZHJlc3NIZXggPSBfQnVmZmVyLmZyb20oXHJcblx0XHQoYXdhaXQgY2FyZGFuby5nZXRVc2VkQWRkcmVzc2VzKCkpWzBdLFxyXG5cdFx0XCJoZXhcIlxyXG5cdCk7XHRcclxuXHRhd2FpdCBhY3RpdmF0ZUNhcmRhbm8oKTtcclxufSBjYXRjaCAoZXJyb3IpIHtcclxuICAvLyQoXCIjY29ubmVjdEJ0blwiKS50ZXh0KCdDb25uZWN0IHRvIFdhbGxldCcpO1xyXG4gIGNvbnNvbGUubG9nKFwiV2FpdGluZyBmb3IgbWVzc2FnZSB0byBjb25uZWN0IHRvIHdhbGxldC4uLlwiKTtcclxuICBjb25zb2xlLmxvZyhcIndhbGxldCBjb25uZWN0aW9uIGVycm9yXCIpO1xyXG4gIGNvbnNvbGUubG9nKGVycm9yKVxyXG59XHJcblxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFjdGl2YXRlQ2FyZGFubygpe1xyXG5cdGlmKGFkZHJlc3NIZXgpIHtcclxuXHRcdC8vJChcIiNjb25uZWN0QnRuXCIpLnRleHQoJ1dhbGxldCBDb25uZWN0ZWQnKTtcclxuICAgIFx0Ly8kKFwiI2Nvbm5lY3RCdG5cIikuYXR0cignY2xhc3MnLCAnYnRuIGJ0bi1zdWNjZXNzJyk7XHJcblx0XHRjb25zb2xlLmxvZyhcIldhbGxldCBjb25uZWN0ZWRcIik7XHJcblx0fSBlbHNlIHtcclxuXHRcdGNvbnN0IHByb21pc2UgPSBhd2FpdCBjYXJkYW5vLmVuYWJsZSgpO1xyXG5cdFx0Ly9jb25zdCB3YWxsZXRBZGRyZXNzID0gYXdhaXQgY2FyZGFuby5nZXRVc2VkQWRkcmVzc2VzKCk7XHJcblx0XHQvLyQoXCIjd2FsbGV0LWFkZHJlc3NcIikudGV4dChcIkdldHRpbmcgd2FsbGV0IGFkZHJlc3MuLi5cIik7XHJcblx0XHQvLyQoXCIjd2FsbGV0LWFkZHJlc3NcIikuYXR0cignY2xhc3MnLCAnYWN0aXZlJyk7XHJcblx0XHRjb25zb2xlLmxvZyhcIkdldHRpbmcgd2FsbGV0IGFkZHJlc3MuLi5cIik7XHJcblx0XHRjb25zdCBhZGRyZXNzSGV4X0NvbiA9IF9CdWZmZXIuZnJvbShcclxuXHRcdFx0KGF3YWl0IGNhcmRhbm8uZ2V0VXNlZEFkZHJlc3NlcygpKVswXSxcclxuXHRcdFx0XCJoZXhcIlxyXG5cdFx0KTtcclxuXHRcdGFkZHJlc3NIZXggPSBhZGRyZXNzSGV4X0NvbjtcclxuXHR9XHJcblx0XHJcblx0Y29uc3QgbmZ0cyA9IFtdO1xyXG5cdGlmKGFkZHJlc3NIZXgpIHtcclxuXHRcdGNvbnN0IHdhbGxldEFkZHJlc3MgPSBTLkJhc2VBZGRyZXNzLmZyb21fYWRkcmVzcyhcclxuXHRcdFx0XHRTLkFkZHJlc3MuZnJvbV9ieXRlcyhhZGRyZXNzSGV4KVxyXG5cdFx0XHQpLnRvX2FkZHJlc3MoKS50b19iZWNoMzIoKTtcclxuXHRcdFxyXG5cdFx0d2FsbGV0X2FkZHJlc3NfZ2xvYmFsID0gd2FsbGV0QWRkcmVzcztcclxuXHRcdC8vJChcIiN3YWxsZXQtYWRkcmVzc1wiKS50ZXh0KHdhbGxldEFkZHJlc3MpO1xyXG5cdFx0Ly8kKFwiI3dhbGxldC1hZGRyZXNzXCIpLmF0dHIoJ2NsYXNzJywgJ2FjdGl2ZScpO1xyXG5cdFx0Y29uc29sZS5sb2coXCJXYWxsZXQgYWRkcmVzcyBpczogXCIrd2FsbGV0X2FkZHJlc3NfZ2xvYmFsKTtcclxuXHRcdFxyXG5cdFx0Ly9HZXQgQmFsYW5jZSBhbmQgTkZUcy4uLlxyXG5cdFx0JChcIiN3YWxsZXQtbmZ0LXN0YXR1cy10ZXh0XCIpLnRleHQoXCJMb2FkaW5nIHlvdXIgd29ybGRzLi4uXCIpO1x0XHRcclxuXHRcdGNvbnN0IHJhd0JhbGFuY2UgPSBhd2FpdCBjYXJkYW5vLmdldEJhbGFuY2UoKTtcclxuXHRcdGxldCB2YWx1ZSA9IFMuVmFsdWUuZnJvbV9ieXRlcyhfQnVmZmVyLmZyb20ocmF3QmFsYW5jZSwgJ2hleCcpKTtcdFxyXG5cdFx0bGV0IGJhbGFuY2Vfc3RyX3JhdyA9IHBhcnNlSW50KHZhbHVlLmNvaW4oKS50b19zdHIoKSkgLyAxMDAwMDAwO1xyXG5cdFx0XHJcblx0XHRpZiAodmFsdWUubXVsdGlhc3NldCgpKSB7XHJcblx0XHRcdC8vY29uc3QgRlAgPSBhd2FpdCBjYXJkYW5vKCk7XHJcblx0XHRcclxuXHRcdFx0Y29uc3QgbXVsdGlBc3NldHMgPSB2YWx1ZS5tdWx0aWFzc2V0KCkua2V5cygpO1xyXG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IG11bHRpQXNzZXRzLmxlbigpOyBqKyspIHtcclxuXHRcdFx0XHRjb25zdCBwb2xpY3kgPSBtdWx0aUFzc2V0cy5nZXQoaik7XHJcblx0XHRcdFx0Y29uc3QgcG9saWN5QXNzZXRzID0gdmFsdWUubXVsdGlhc3NldCgpLmdldChwb2xpY3kpO1xyXG5cdFx0XHRcdGNvbnN0IGFzc2V0TmFtZXMgPSBwb2xpY3lBc3NldHMua2V5cygpO1xyXG5cdFx0XHRcdGZvciAobGV0IGsgPSAwOyBrIDwgYXNzZXROYW1lcy5sZW4oKTsgaysrKSB7XHJcblx0XHRcdFx0XHRjb25zdCBwb2xpY3lBc3NldCA9IGFzc2V0TmFtZXMuZ2V0KGspO1xyXG5cdFx0XHRcdFx0Y29uc3QgcXVhbnRpdHkgPSBwb2xpY3lBc3NldHMuZ2V0KHBvbGljeUFzc2V0KTtcclxuXHRcdFx0XHRcdGNvbnN0IGFzc2V0ID1cclxuXHRcdFx0XHRcdFx0X0J1ZmZlci5mcm9tKHBvbGljeS50b19ieXRlcygpLCAnaGV4JykudG9TdHJpbmcoJ2hleCcpICtcclxuXHRcdFx0XHRcdFx0X0J1ZmZlci5mcm9tKHBvbGljeUFzc2V0Lm5hbWUoKSwgJ2hleCcpLnRvU3RyaW5nKCdoZXgnKTtcclxuXHRcdFx0XHRcdGNvbnN0IF9wb2xpY3kgPSBhc3NldC5zbGljZSgwLCA1Nik7XHJcblx0XHRcdFx0XHRjb25zdCBfbmFtZSA9IGFzc2V0LnNsaWNlKDU2KTtcclxuXHRcdFx0XHRcdC8qXHJcblx0XHRcdFx0XHRjb25zdCBmaW5nZXJwcmludCA9IG5ldyBBc3NldEZpbmdlcnByaW50KFxyXG5cdFx0XHRcdFx0XHRfQnVmZmVyLmZyb20oX3BvbGljeSwgJ2hleCcpLFxyXG5cdFx0XHRcdFx0XHRfQnVmZmVyLmZyb20oX25hbWUsICdoZXgnKVxyXG5cdFx0XHRcdFx0KS5maW5nZXJwcmludCgpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRjb25zdCBhc3NldEZpbmdlcnByaW50ID0gQXNzZXRGaW5nZXJwcmludC5mcm9tUGFydHMoXHJcblx0XHRcdFx0XHQgIF9CdWZmZXIuZnJvbShfcG9saWN5LCAnaGV4JyksXHJcblx0XHRcdFx0XHQgIF9CdWZmZXIuZnJvbShfbmFtZSwgJ2hleCcpXHJcblx0XHRcdFx0XHQpLmZpbmdlcnByaW50KCk7XHJcblx0XHRcdFx0XHQqL1xyXG5cdFx0XHRcdFx0aWYocHJvY2Vzcy5lbnYuUE9MSUNZX0lEID09IF9wb2xpY3kpIHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgbmZ0X25hbWUgPSBoZXhUb0FzY2lpKF9uYW1lKS5yZXBsYWNlKFwiV29ybGRzV2l0aGluXCIsIFwiXCIpO1xyXG5cdFx0XHRcdFx0XHRuZnRzLnB1c2goe1xyXG5cdFx0XHRcdFx0XHRcdHVuaXQ6IGFzc2V0LFxyXG5cdFx0XHRcdFx0XHRcdHF1YW50aXR5OiBxdWFudGl0eS50b19zdHIoKSxcclxuXHRcdFx0XHRcdFx0XHRwb2xpY3k6IF9wb2xpY3ksXHJcblx0XHRcdFx0XHRcdFx0bmFtZTogbmZ0X25hbWUsXHJcblx0XHRcdFx0XHRcdFx0ZmluZ2VycHJpbnQ6IG51bGwsXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRvd25lZF9uZnRzLnB1c2gobmZ0X25hbWUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdFxyXG5cdGlmKG5mdHMubGVuZ3RoID09IDApIHtcclxuXHRcdCQoXCIjd2FsbGV0LW5mdC1zdGF0dXMtdGV4dFwiKS50ZXh0KFwiTm8gTkZUIHdvcmxkcyBmb3VuZC5cIik7XHJcblx0fSBlbHNlIHtcclxuXHRcdCQoXCIjd2FsbGV0LW5mdC1zdGF0dXMtdGV4dFwiKS50ZXh0KFwiJm5ic3A7XCIpO1xyXG5cdFx0JChcIiN3YWxsZXQtbmZ0LXN0YXR1cy10ZXh0XCIpLmhpZGUoKTtcdFx0XHJcblx0XHQkLmVhY2goIG5mdHMsIGZ1bmN0aW9uKCBrZXksIHZhbHVlICkge1xyXG5cdFx0ICBcdGxldCBudW1lcmljX25hbWUgPSB2YWx1ZS5uYW1lLnJlcGxhY2UoXCJXb3JsZHMgV2l0aGluIFwiLCBcIlwiKTtcclxuXHRcdCAgXHQvLyAkKGA8YSBjbGFzcz1cIm15LXdvcmxkLWxpbmtcIiBocmVmPVwiLyR7cHJvY2Vzcy5lbnYuV09STERTX1BBR0V9LyR7bnVtZXJpY19uYW1lfVwiPiR7bnVtZXJpY19uYW1lfTwvYT5gKS5hcHBlbmRUbyhcIiN3YWxsZXQtbmZ0LWxpc3RcIik7XHJcblx0XHRcdC8vJChgPHAgY2xhc3M9XCJteS13b3JsZC1saW5rXCIgaHJlZj1cIiNcIj4ke251bWVyaWNfbmFtZX08L3A+YCkuYXBwZW5kVG8oXCIjd2FsbGV0LW5mdC1saXN0XCIpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIldvcmxkIGZldGNoZWQ6IFwiK251bWVyaWNfbmFtZSk7XHJcblx0XHR9KTtcclxuXHRcdC8qIFxyXG5cdFx0Y29uc29sZS5sb2coXCJFVkFMVUFUSU5HIElOU0lERSBCVVkuTUpTLi4uXCIpO1xyXG5cdFx0Y29uc29sZS5sb2cob3duZWRfbmZ0cyk7XHJcblx0XHRjb25zb2xlLmxvZyhcIltcIiArICQoXCIjdHh0c2VhcmNoXCIpLnZhbCgpLmxlbmd0aCArIFwiXVwiKTtcclxuXHRcdGNvbnNvbGUubG9nKFwiW1wiICsgb3duZWRfbmZ0cy5pbmNsdWRlcygkKFwiI3R4dHNlYXJjaFwiKS52YWwoKSkgKyBcIl1cIik7XHJcblx0XHRjb25zb2xlLmxvZyhcIkVORCBFVkFMVUFUSU5HIElOU0lERSBCVVkuTUpTLi4uXCIpO1xyXG5cdFx0Ki9cclxuXHR9XHJcblx0XHJcblx0d2luZG93LndhbGxldF9hZGRyZXNzID0gd2FsbGV0X2FkZHJlc3NfZ2xvYmFsO1xyXG5cdHdpbmRvdy5vd25lZF9uZnRzID0gb3duZWRfbmZ0cztcclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm90b2NvbFBhcmFtZXRlcnMoKSB7IFxyXG4gIC8vdmFyIEhPU1QgPSBwcm9jZXNzLmVudi5BUEkgPyBwcm9jZXNzLmVudi5BUEkgOiBsb2NhdGlvbi5vcmlnaW47XHJcbiAgdmFyIEhPU1QgPSBsb2NhdGlvbi5vcmlnaW47XHJcbiAgXHJcbiAgLyogXHJcbiAgY29uc3QgbGF0ZXN0X2Jsb2NrID0gYXdhaXQgZmV0Y2goSE9TVCsnL2Jsb2Nrc19sYXRlc3QnLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIG1ldGhvZDogJ0dFVCdcclxuICB9KS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuICAqL1xyXG4gIFxyXG4gIHZhciBsYXRlc3RfYmxvY2s7XHJcbiAgXHJcbiAgYXdhaXQgYXhpb3MuZ2V0KHByb2Nlc3MuZW52LkFQSV9VUkwgKyAnL3YwL2Jsb2Nrcy9sYXRlc3QnLCB7IGhlYWRlcnM6IHtcclxuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAncHJvamVjdF9pZCc6ICBwcm9jZXNzLmVudi5QUk9KRUNUX0lEXHJcbiAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgbGF0ZXN0X2Jsb2NrID0gcmVzLmRhdGE7XHJcbiAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICBsYXRlc3RfYmxvY2sgPSBlcnJvci5yZXNwb25zZS5kYXRhOyAgICBcclxuICB9KVxyXG4gIFxyXG4gIHZhciBzbG90bnVtYmVyID0gbGF0ZXN0X2Jsb2NrLnNsb3Q7XHJcbiAgXHJcbiAgLyogXHJcbiAgY29uc3QgcCA9IGF3YWl0IGZldGNoKGAke0hPU1R9L3BhcmFtZXRlcnNgLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIG1ldGhvZDogJ0dFVCdcclxuICB9KS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuICAqL1xyXG4gIFxyXG4gIHZhciBwO1xyXG4gIFxyXG4gIGF3YWl0IGF4aW9zLmdldChwcm9jZXNzLmVudi5BUElfVVJMICsgJy92MC9lcG9jaHMvbGF0ZXN0L3BhcmFtZXRlcnMnLCB7IGhlYWRlcnM6IHtcclxuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAncHJvamVjdF9pZCc6IHByb2Nlc3MuZW52LlBST0pFQ1RfSURcclxuICB9fSkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICBwID0gcmVzLmRhdGE7XHJcbiAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICBwID0gZGF0YSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgfSlcclxuICBcclxuICBcclxuICBpZiAocC5zdGF0dXMgPj0gNDAwICYmIHAuc3RhdHVzIDwgNjAwKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkJhZCByZXNwb25zZSBmcm9tIHNlcnZlclwiKTtcclxuICB9XHJcbiAgXHJcbiAgdmFyIHZhbHVlID0ge1xyXG4gICAgICBsaW5lYXJGZWU6IFMuTGluZWFyRmVlLm5ldyhcclxuICAgICAgUy5CaWdOdW0uZnJvbV9zdHIocC5taW5fZmVlX2EudG9TdHJpbmcoKSksXHJcbiAgICAgIFMuQmlnTnVtLmZyb21fc3RyKHAubWluX2ZlZV9iLnRvU3RyaW5nKCkpXHJcbiAgICAgICksXHJcbiAgICAgIG1pblV0eG86IFMuQmlnTnVtLmZyb21fc3RyKHAubWluX3V0eG8pLFxyXG4gICAgICBwb29sRGVwb3NpdDogUy5CaWdOdW0uZnJvbV9zdHIocC5wb29sX2RlcG9zaXQpLFxyXG4gICAgICBrZXlEZXBvc2l0OiBTLkJpZ051bS5mcm9tX3N0cihwLmtleV9kZXBvc2l0KSxcclxuICAgICAgbWF4VHhTaXplOiBwLm1heF90eF9zaXplLFxyXG4gICAgICBzbG90OiBzbG90bnVtYmVyLFxyXG4gIH07XHJcbiAgcmV0dXJuIHZhbHVlO1xyXG59O1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gdHJpZ2dlclBheSgpIHtcclxuICAgIHZhciB1c2VyPSBhd2FpdCBjYXJkYW5vLmdldFVzZWRBZGRyZXNzZXMoKTtcclxuICAgIHZhciBhZGRyZXNzPXByb2Nlc3MuZW52LlJFQ0lQSUVOVF9BRERSRVNTO1xyXG4gICAgdmFyIG9mZmVyID0gMCAvLyBwYXJzZUludCgkKFwiI2NhcmRhbm8tb2ZmZXJcIikudmFsdWUpO1xyXG5cdFxyXG4gICAgb2ZmZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmRhbm8tb2ZmZXJcIikudmFsdWU7XHJcbiAgICAvLyBXT1JLU1xyXG4gICAgcmV0dXJuIGF3YWl0IHBheShhZGRyZXNzLCBvZmZlcik7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHBheShhZGRyLCBhZGFBbW91bnQpe1xyXG5cdFxyXG5cdGNvbnN0IGNhcmRhbm8gPSB3aW5kb3cuY2FyZGFub1xyXG4gICAgY29uc3QgcHJvdG9jb2xQYXJhbWV0ZXJzID0gYXdhaXQgZ2V0UHJvdG9jb2xQYXJhbWV0ZXJzKClcclxuICAgIGNvbnN0IGxvdmVsYWNlID0gKHBhcnNlRmxvYXQoYWRhQW1vdW50KSAqIDEwMDAwMDApLnRvU3RyaW5nKClcclxuXHRcclxuICAgIGNvbnN0IHBheW1lbnRBZGRyID0gUy5BZGRyZXNzLmZyb21fYnl0ZXMoX0J1ZmZlci5mcm9tKGF3YWl0IGNhcmRhbm8uZ2V0Q2hhbmdlQWRkcmVzcygpLCAnaGV4JykpLnRvX2JlY2gzMigpXHJcbiAgICBjb25zdCByYXdVdHhvID0gYXdhaXQgY2FyZGFuby5nZXRVdHhvcygpXHJcbiAgICBjb25zdCB1dHhvcyA9IHJhd1V0eG8ubWFwKHUgPT4gUy5UcmFuc2FjdGlvblVuc3BlbnRPdXRwdXQuZnJvbV9ieXRlcyhfQnVmZmVyLmZyb20odSwgJ2hleCcpKSlcclxuXHRcclxuICAgIGNvbnN0IG91dHB1dHMgPSBTLlRyYW5zYWN0aW9uT3V0cHV0cy5uZXcoKVxyXG5cclxuICAgIG91dHB1dHMuYWRkKFxyXG4gICAgICAgIFMuVHJhbnNhY3Rpb25PdXRwdXQubmV3KFxyXG4gICAgICAgICAgICBTLkFkZHJlc3MuZnJvbV9iZWNoMzIoYWRkciksXHJcbiAgICAgICAgICAgIFMuVmFsdWUubmV3KFxyXG4gICAgICAgICAgICAgICAgUy5CaWdOdW0uZnJvbV9zdHIobG92ZWxhY2UpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApXHJcbiAgICApXHJcblxyXG4gICAgY29uc3QgTVVMVElBU1NFVF9TSVpFID0gNTg0ODtcclxuICAgIGNvbnN0IFZBTFVFX1NJWkUgPSA1ODYwO1xyXG4gICAgY29uc3QgdG90YWxBc3NldHMgPSAwXHJcblxyXG4gICAgQ29pblNlbGVjdGlvbi5zZXRQcm90b2NvbFBhcmFtZXRlcnMoXHJcbiAgICAgICAgcHJvdG9jb2xQYXJhbWV0ZXJzLm1pblV0eG8udG9fc3RyKCksXHJcbiAgICAgICAgcHJvdG9jb2xQYXJhbWV0ZXJzLmxpbmVhckZlZS5jb2VmZmljaWVudCgpLnRvX3N0cigpLFxyXG4gICAgICAgIHByb3RvY29sUGFyYW1ldGVycy5saW5lYXJGZWUuY29uc3RhbnQoKS50b19zdHIoKSxcclxuICAgICAgICBwcm90b2NvbFBhcmFtZXRlcnMubWF4VHhTaXplLnRvU3RyaW5nKClcclxuICAgICAgKTtcclxuXHQgIFxyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gYXdhaXQgQ29pblNlbGVjdGlvbi5yYW5kb21JbXByb3ZlKFxyXG4gICAgICB1dHhvcyxcclxuICAgICAgb3V0cHV0cyxcclxuICAgICAgMjAgKyB0b3RhbEFzc2V0cyxcclxuICAgICAgcHJvdG9jb2xQYXJhbWV0ZXJzLm1pblV0eG8udG9fc3RyKClcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgaW5wdXRzID0gc2VsZWN0aW9uLmlucHV0O1xyXG4gICAgY29uc3QgdHhCdWlsZGVyID0gUy5UcmFuc2FjdGlvbkJ1aWxkZXIubmV3KFxyXG4gICAgICBwcm90b2NvbFBhcmFtZXRlcnMubGluZWFyRmVlLFxyXG4gICAgICBwcm90b2NvbFBhcmFtZXRlcnMubWluVXR4byxcclxuICAgICAgcHJvdG9jb2xQYXJhbWV0ZXJzLnBvb2xEZXBvc2l0LFxyXG4gICAgICBwcm90b2NvbFBhcmFtZXRlcnMua2V5RGVwb3NpdFxyXG4gICAgKTtcclxuXHRcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgdXR4byA9IGlucHV0c1tpXTtcclxuICAgICAgICB0eEJ1aWxkZXIuYWRkX2lucHV0KFxyXG4gICAgICAgICAgdXR4by5vdXRwdXQoKS5hZGRyZXNzKCksXHJcbiAgICAgICAgICB1dHhvLmlucHV0KCksXHJcbiAgICAgICAgICB1dHhvLm91dHB1dCgpLmFtb3VudCgpXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgLy8gdmFyIG0gPSBTLkdlbmVyYWxUcmFuc2FjdGlvbk1ldGFkYXRhLm5ldygpXHJcbiAgICAvLyBtLmluc2VydChTLkJpZ051bS5mcm9tX3N0cignMCcpLFMuZW5jb2RlX2pzb25fc3RyX3RvX21ldGFkYXR1bShKU09OLnN0cmluZ2lmeShKU09ObWV0YURhdGEpLDApKVxyXG4gICAgLy8gdmFyIG1ldGFEYXRhID0gUy5UcmFuc2FjdGlvbk1ldGFkYXRhLm5ldyhtKVxyXG4gICAgLy8gdHhCdWlsZGVyLnNldF9tZXRhZGF0YShtZXRhRGF0YSlcclxuICAgIHR4QnVpbGRlci5hZGRfb3V0cHV0KG91dHB1dHMuZ2V0KDApKTtcclxuXHJcbiAgICBjb25zdCBjaGFuZ2UgPSBzZWxlY3Rpb24uY2hhbmdlO1xyXG4gICAgY29uc3QgY2hhbmdlTXVsdGlBc3NldHMgPSBjaGFuZ2UubXVsdGlhc3NldCgpO1xyXG5cclxuICAgIC8vIGNoZWNrIGlmIGNoYW5nZSB2YWx1ZSBpcyB0b28gYmlnIGZvciBzaW5nbGUgb3V0cHV0XHJcbiAgICBpZiAoY2hhbmdlTXVsdGlBc3NldHMgJiYgY2hhbmdlLnRvX2J5dGVzKCkubGVuZ3RoICogMiA+IFZBTFVFX1NJWkUpIHtcclxuICAgICAgICBjb25zdCBwYXJ0aWFsQ2hhbmdlID0gUy5WYWx1ZS5uZXcoXHJcbiAgICAgICAgICBTLkJpZ051bS5mcm9tX3N0cignMCcpXHJcbiAgICAgICAgKTtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IHBhcnRpYWxNdWx0aUFzc2V0cyA9IFMuTXVsdGlBc3NldC5uZXcoKTtcclxuICAgICAgICBjb25zdCBwb2xpY2llcyA9IGNoYW5nZU11bHRpQXNzZXRzLmtleXMoKTtcclxuICAgICAgICBjb25zdCBtYWtlU3BsaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNoYW5nZU11bHRpQXNzZXRzLmxlbigpOyBqKyspIHtcclxuICAgICAgICAgICAgY29uc3QgcG9saWN5ID0gcG9saWNpZXMuZ2V0KGopO1xyXG4gICAgICAgICAgICBjb25zdCBwb2xpY3lBc3NldHMgPSBjaGFuZ2VNdWx0aUFzc2V0cy5nZXQocG9saWN5KTtcclxuICAgICAgICAgICAgY29uc3QgYXNzZXROYW1lcyA9IHBvbGljeUFzc2V0cy5rZXlzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFzc2V0cyA9IFMuQXNzZXRzLm5ldygpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGFzc2V0TmFtZXMubGVuKCk7IGsrKykge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHBvbGljeUFzc2V0ID0gYXNzZXROYW1lcy5nZXQoayk7XHJcbiAgICAgICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBwb2xpY3lBc3NldHMuZ2V0KHBvbGljeUFzc2V0KTtcclxuICAgICAgICAgICAgICBhc3NldHMuaW5zZXJ0KHBvbGljeUFzc2V0LCBxdWFudGl0eSk7XHJcbiAgICAgICAgICAgICAgLy9jaGVjayBzaXplXHJcbiAgICAgICAgICAgICAgY29uc3QgY2hlY2tNdWx0aUFzc2V0cyA9IFMuTXVsdGlBc3NldC5mcm9tX2J5dGVzKFxyXG4gICAgICAgICAgICAgICAgcGFydGlhbE11bHRpQXNzZXRzLnRvX2J5dGVzKClcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGNoZWNrTXVsdGlBc3NldHMuaW5zZXJ0KHBvbGljeSwgYXNzZXRzKTtcclxuICAgICAgICAgICAgICBpZiAoY2hlY2tNdWx0aUFzc2V0cy50b19ieXRlcygpLmxlbmd0aCAqIDIgPj0gTVVMVElBU1NFVF9TSVpFKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJ0aWFsTXVsdGlBc3NldHMuaW5zZXJ0KHBvbGljeSwgYXNzZXRzKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGFydGlhbE11bHRpQXNzZXRzLmluc2VydChwb2xpY3ksIGFzc2V0cyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBtYWtlU3BsaXQoKTtcclxuICAgICAgICBwYXJ0aWFsQ2hhbmdlLnNldF9tdWx0aWFzc2V0KHBhcnRpYWxNdWx0aUFzc2V0cyk7XHJcbiAgICAgICAgY29uc3QgbWluQWRhID0gUy5taW5fYWRhX3JlcXVpcmVkKFxyXG4gICAgICAgICAgcGFydGlhbENoYW5nZSxcclxuICAgICAgICAgIHByb3RvY29sUGFyYW1ldGVycy5taW5VdHhvXHJcbiAgICAgICAgKTtcclxuICAgICAgICBwYXJ0aWFsQ2hhbmdlLnNldF9jb2luKG1pbkFkYSk7XHJcbiAgICBcclxuICAgICAgICB0eEJ1aWxkZXIuYWRkX291dHB1dChcclxuICAgICAgICAgIFMuVHJhbnNhY3Rpb25PdXRwdXQubmV3KFxyXG4gICAgICAgICAgICBTLkFkZHJlc3MuZnJvbV9iZWNoMzIocGF5bWVudEFkZHIpLFxyXG4gICAgICAgICAgICBwYXJ0aWFsQ2hhbmdlXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB0eEJ1aWxkZXIuYWRkX2NoYW5nZV9pZl9uZWVkZWQoXHJcbiAgICAgICAgUy5BZGRyZXNzLmZyb21fYmVjaDMyKHBheW1lbnRBZGRyKVxyXG4gICAgICApO1xyXG4gICAgICBcclxuICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gUy5UcmFuc2FjdGlvbi5uZXcoXHJcbiAgICAgICAgdHhCdWlsZGVyLmJ1aWxkKCksXHJcbiAgICAgICAgUy5UcmFuc2FjdGlvbldpdG5lc3NTZXQubmV3KCksXHJcbiAgICAgICAgLy9tZXRhRGF0YVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBzaXplID0gdHJhbnNhY3Rpb24udG9fYnl0ZXMoKS5sZW5ndGggKiAyO1xyXG4gICAgaWYgKHNpemUgPiBwcm90b2NvbFBhcmFtZXRlcnMubWF4VHhTaXplKSB0aHJvdyBFUlJPUi50eFRvb0JpZztcclxuICBcclxuICAgIGNvbnN0IHdpdG5lc2VzID0gYXdhaXQgY2FyZGFuby5zaWduVHgoX0J1ZmZlci5mcm9tKHRyYW5zYWN0aW9uLnRvX2J5dGVzKCksJ2hleCcpLnRvU3RyaW5nKCdoZXgnKSlcclxuICAgIGNvbnN0IHNpZ25lZFR4ID0gUy5UcmFuc2FjdGlvbi5uZXcodHJhbnNhY3Rpb24uYm9keSgpLCBTLlRyYW5zYWN0aW9uV2l0bmVzc1NldC5mcm9tX2J5dGVzKF9CdWZmZXIuZnJvbSh3aXRuZXNlcyxcImhleFwiKSkpIC8vICx0cmFuc2FjdGlvbi5tZXRhZGF0YSgpXHJcbiAgICBjb25zdCB0eGhhc2ggPSBhd2FpdCBjYXJkYW5vLnN1Ym1pdFR4KF9CdWZmZXIuZnJvbShzaWduZWRUeC50b19ieXRlcygpLCdoZXgnKS50b1N0cmluZygnaGV4JykpXHJcblxyXG4gICAgcmV0dXJuIHR4aGFzaFxyXG59XHJcblxyXG4vKiBcclxuJChcIiNjb25uZWN0QnRuXCIpLm9uKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICAgIGlmKCQoXCIjY29ubmVjdEJ0blwiKS50ZXh0KCkgIT0gXCJXYWxsZXQgQ29ubmVjdGVkXCIpIHtcclxuXHRcdHRyeSB7XHJcblx0XHQgIGF3YWl0IGFjdGl2YXRlQ2FyZGFubygpO1xyXG5cdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0ICAkKFwiI2Nvbm5lY3RCdG5cIikudGV4dCgnTm90IENvbm5lY3RlZCcpO1xyXG5cdFx0ICAkKFwiI2Nvbm5lY3RCdG5cIikuYXR0cignY2xhc3MnLCAnYnRuIGJ0bi1kYW5nZXInKTtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlKTtcclxuXHRcdH0gZmluYWxseSB7XHJcblx0XHQgIGNvbnNvbGUubG9nKCdXZSBkbyBjbGVhbnVwIGhlcmUnKTtcclxuXHRcdH1cclxuXHR9XHJcbn0pO1xyXG4qL1xyXG5cclxuLy92YXIgb3B0aW9ucyA9IHtcclxuLy8gIGNvcnM6IHRydWVcclxuLy99XHJcbi8vaW1wb3J0IHtodHRwfSBmcm9tICdodHRwJztcclxuLy9jb25zdCBzZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcigpO1xyXG5cclxuLy9pbXBvcnQge1NlcnZlcn0gZnJvbSAnc29ja2V0LmlvJztcclxuLy9jb25zdCBpbyA9IG5ldyBTZXJ2ZXIoc2VydmVyLCBvcHRpb25zKTtcclxuXHJcblxyXG4vKlxyXG5cclxudmFyIHNlcnZlciA9IHJlcXVpcmUoJ2h0dHAnKS5jcmVhdGVTZXJ2ZXIoKTtcclxudmFyIG9wdGlvbnMgPSB7XHJcbiAgY29yczogdHJ1ZVxyXG59XHJcbnZhciBpbyA9IHJlcXVpcmUoJ3NvY2tldC5pbycpKHNlcnZlciwgb3B0aW9ucyk7XHJcblxyXG5pby5vbignY29ubmVjdGlvbicsIGFzeW5jIChzb2NrZXQpID0+IHtcclxuICBjb25zb2xlLmxvZygnYSB1c2VyIGNvbm5lY3RlZCcpO1xyXG4gIFxyXG4gIHNvY2tldC5vbignaW5pdGlhbGl6ZScsIGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gIFx0Y29uc29sZS5sb2coXCJzb2NrZXQgaW5pdGlhbGl6ZWRcIik7XHJcblx0dHJ5IHtcclxuXHQgIGF3YWl0IGFjdGl2YXRlQ2FyZGFubygpO1xyXG5cdH0gY2F0Y2ggKGUpIHtcclxuXHQgIHdhbGxldF9hZGRyZXNzX2dsb2JhbCA9IFwiXCI7XHJcblx0ICBjb25zb2xlLmVycm9yKGUpO1xyXG5cdH0gZmluYWxseSB7XHJcblx0ICBjb25zb2xlLmxvZygnQWZ0ZXIgaW5pdGlhdGluZyBjYXJkYW5vIG9iamVjdCcpO1xyXG5cdH1cclxuXHRzb2NrZXQuZW1pdCgnbWVzc2FnZVBsYXljYW52YXMnLCB3YWxsZXRfYWRkcmVzc19nbG9iYWwpO1xyXG5cdFxyXG5cdHNvY2tldC5vbigncGFzc01lc3NhZ2UnLCBmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIm1lc3NhZ2VcIik7XHJcblx0XHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHR9KTtcclxuXHRcclxuICB9KTtcclxuICBcclxufSk7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVTZXJ2ZXIgfSBmcm9tIFwic3RyZWFtLWh0dHBcIjtcclxuaW1wb3J0IHsgU2VydmVyIH0gZnJvbSBcInNvY2tldC5pb1wiO1xyXG5cclxuKi9cclxuXHJcbndpbmRvdy5hY3RpdmF0ZUNhcmRhbm8gPSBhY3RpdmF0ZUNhcmRhbm87IiwiaW1wb3J0IHtcclxuICBUcmFuc2FjdGlvblVuc3BlbnRPdXRwdXQsXHJcbiAgVHJhbnNhY3Rpb25PdXRwdXRzLFxyXG4gIFZhbHVlLFxyXG59IGZyb20gJ0BlbXVyZ28vY2FyZGFuby1zZXJpYWxpemF0aW9uLWxpYi1icm93c2VyL2NhcmRhbm9fc2VyaWFsaXphdGlvbl9saWIuanMnO1xyXG5cclxuY29uc3QgUyA9IGF3YWl0IGltcG9ydCgnQGVtdXJnby9jYXJkYW5vLXNlcmlhbGl6YXRpb24tbGliLWJyb3dzZXIvY2FyZGFub19zZXJpYWxpemF0aW9uX2xpYi5qcycpXHJcbi8vIGNvbnN0IFMgPSBpbXBvcnQoJ0BlbXVyZ28vY2FyZGFuby1zZXJpYWxpemF0aW9uLWxpYi1icm93c2VyL2NhcmRhbm9fc2VyaWFsaXphdGlvbl9saWIuanMnKTtcclxuXHJcbmNvbnN0IExvYWRlciA9IHtcclxuICBDYXJkYW5vOiBTXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBCZXJyeVBvb2wgaW1wbGVtZW50YXRpb24gb2YgdGhlIF9fUmFuZG9tLUltcHJvdmVfXyBjb2luIHNlbGVjdGlvbiBhbGdvcml0aG0uXHJcbiAqXHJcbiAqID0gT3ZlcnZpZXdcclxuICpcclxuICogVGhlIF9fUmFuZG9tLUltcHJvdmVfXyBjb2luIHNlbGVjdGlvbiBhbGdvcml0aG0gd29ya3MgaW4gX190d28gcGhhc2VzX18sIGJ5XHJcbiAqIC9maXJzdC8gc2VsZWN0aW5nIFVUeE8gZW50cmllcyAvYXQgcmFuZG9tLyB0byBwYXkgZm9yIGVhY2ggb2YgdGhlIGdpdmVuXHJcbiAqIG91dHB1dHMsIGFuZCAvdGhlbi8gYXR0ZW1wdGluZyB0byAvaW1wcm92ZS8gdXBvbiBlYWNoIG9mIHRoZSBzZWxlY3Rpb25zLlxyXG4gKlxyXG4gKiA9PT0gUGhhc2UgMTogUmFuZG9tIFNlbGVjdGlvblxyXG4gKlxyXG4gKiBfX0luIHRoaXMgcGhhc2UsIHRoZSBhbGdvcml0aG0gcmFuZG9tbHkgc2VsZWN0cyBhIG1pbmltYWwgc2V0IG9mIFVUeE9fX1xyXG4gKiBfX2VudHJpZXMgdG8gcGF5IGZvciBlYWNoIG9mIHRoZSBnaXZlbiBvdXRwdXRzLl9fXHJcbiAqXHJcbiAqIER1cmluZyB0aGlzIHBoYXNlLCB0aGUgYWxnb3JpdGhtOlxyXG4gKlxyXG4gKiAgICogIHByb2Nlc3NlcyBvdXRwdXRzIGluIC9kZXNjZW5kaW5nIG9yZGVyIG9mIGNvaW4gdmFsdWUvLlxyXG4gKlxyXG4gKiAgICogIG1haW50YWlucyBhIC9yZW1haW5pbmcgVVR4TyBzZXQvLCBpbml0aWFsbHkgZXF1YWwgdG8gdGhlIGdpdmVuXHJcbiAqICAgICAgL1VUeE8gc2V0LyBwYXJhbWV0ZXIuXHJcbiAqXHJcbiAqICAgKiAgYmFzZWQgb24gZXZlcnkgb3V0cHV0IG5hdHVyZSwgZ2VuZXJhdGUgYSAvbmF0aXZlIHRva2VuIFVUeE8gc3Vic2V0L1xyXG4gKiAgICAgIHRvIG5hcnJvdyBkb3duIHRvIHVzZWZ1bCBVVHhPXHJcbiAqXHJcbiAqICAgKiAgbWFpbnRhaW5zIGFuIC9hY2N1bXVsYXRlZCBjb2luIHNlbGVjdGlvbi8sIHdoaWNoIGlzIGluaXRpYWxseSAvZW1wdHkvLlxyXG4gKlxyXG4gKiBGb3IgZWFjaCBvdXRwdXQgb2YgdmFsdWUgX18vdi9fXywgdGhlIGFsZ29yaXRobSAvcmFuZG9tbHkvIHNlbGVjdHMgZW50cmllc1xyXG4gKiBmcm9tIHRoZSAvcmVtYWluaW5nIFVUeE8gc2V0LywgdW50aWwgdGhlIHRvdGFsIHZhbHVlIG9mIHNlbGVjdGVkIGVudHJpZXMgaXNcclxuICogZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIF9fL3YvX18uIFRoZSBzZWxlY3RlZCBlbnRyaWVzIGFyZSB0aGVuIGFzc29jaWF0ZWRcclxuICogd2l0aCB0aGF0IG91dHB1dCwgYW5kIHJlbW92ZWQgZnJvbSB0aGUgL3JlbWFpbmluZyBVVHhPIHNldC8uXHJcbiAqXHJcbiAqIFRoaXMgcGhhc2UgZW5kcyB3aGVuIGV2ZXJ5IG91dHB1dCBoYXMgYmVlbiBhc3NvY2lhdGVkIHdpdGggYSBzZWxlY3Rpb24gb2ZcclxuICogVVR4TyBlbnRyaWVzLlxyXG4gKlxyXG4gKiBIb3dldmVyLCBpZiB0aGUgcmVtYWluaW5nIFVUeE8gc2V0IGlzIGNvbXBsZXRlbHkgZXhoYXVzdGVkIGJlZm9yZSBhbGxcclxuICogb3V0cHV0cyBjYW4gYmUgcHJvY2Vzc2VkLCB0aGUgYWxnb3JpdGhtIHRlcm1pbmF0ZXMgd2l0aCBhbiBlcnJvci5cclxuICpcclxuICogPT09IFBoYXNlIDI6IEltcHJvdmVtZW50XHJcbiAqXHJcbiAqIF9fSW4gdGhpcyBwaGFzZSwgdGhlIGFsZ29yaXRobSBhdHRlbXB0cyB0byBpbXByb3ZlIHVwb24gZWFjaCBvZiB0aGUgVVR4T19fXHJcbiAqIF9fc2VsZWN0aW9ucyBtYWRlIGluIHRoZSBwcmV2aW91cyBwaGFzZSwgYnkgY29uc2VydmF0aXZlbHkgZXhwYW5kaW5nIHRoZV9fXHJcbiAqIF9fc2VsZWN0aW9uIG1hZGUgZm9yIGVhY2ggb3V0cHV0Ll9fXHJcbiAqXHJcbiAqIER1cmluZyB0aGlzIHBoYXNlLCB0aGUgYWxnb3JpdGhtOlxyXG4gKlxyXG4gKiAgICogIHByb2Nlc3NlcyBvdXRwdXRzIGluIC9hc2NlbmRpbmcgb3JkZXIgb2YgY29pbiB2YWx1ZS8uXHJcbiAqXHJcbiAqICAgKiAgY29udGludWVzIHRvIG1haW50YWluIHRoZSAvcmVtYWluaW5nIFVUeE8gc2V0LyBwcm9kdWNlZCBieSB0aGUgcHJldmlvdXNcclxuICogICAgICBwaGFzZS5cclxuICpcclxuICogICAqICBtYWludGFpbnMgYW4gL2FjY3VtdWxhdGVkIGNvaW4gc2VsZWN0aW9uLywgaW5pdGlhdGVkIGZyb20gcHJldmlvdXMgcGhhc2UuXHJcbiAqXHJcbiAqIEZvciBlYWNoIG91dHB1dCBvZiB2YWx1ZSBfXy92L19fLCB0aGUgYWxnb3JpdGhtOlxyXG4gKlxyXG4gKiAgMS4gIF9fQ2FsY3VsYXRlcyBhIC90YXJnZXQgcmFuZ2UvX18gZm9yIHRoZSB0b3RhbCB2YWx1ZSBvZiBpbnB1dHMgdXNlZCB0b1xyXG4gKiAgICAgIHBheSBmb3IgdGhhdCBvdXRwdXQsIGRlZmluZWQgYnkgdGhlIHRyaXBsZXQ6XHJcbiAqXHJcbiAqICAgICAgKC9taW5pbXVtLywgL2lkZWFsLywgL21heGltdW0vKSA9ICgvdi8sIC8ydi8sIC8zdi8pXHJcbiAqXHJcbiAqICAyLiAgX19BdHRlbXB0cyB0byAvaW1wcm92ZS8gdXBvbiB0aGUgL2V4aXN0aW5nIFVUeE8gc2VsZWN0aW9uL19fIGZvciB0aGF0XHJcbiAqICAgICAgb3V0cHV0LCBieSByZXBlYXRlZGx5IHNlbGVjdGluZyBhZGRpdGlvbmFsIGVudHJpZXMgYXQgcmFuZG9tIGZyb20gdGhlXHJcbiAqICAgICAgL3JlbWFpbmluZyBVVHhPIHNldC8sIHN0b3BwaW5nIHdoZW4gdGhlIHNlbGVjdGlvbiBjYW4gYmUgaW1wcm92ZWQgdXBvblxyXG4gKiAgICAgIG5vIGZ1cnRoZXIuXHJcbiAqXHJcbiAqICAgICAgQSBzZWxlY3Rpb24gd2l0aCB2YWx1ZSAvdjEvIGlzIGNvbnNpZGVyZWQgdG8gYmUgYW4gL2ltcHJvdmVtZW50LyBvdmVyIGFcclxuICogICAgICBzZWxlY3Rpb24gd2l0aCB2YWx1ZSAvdjAvIGlmIF9fYWxsX18gb2YgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZVxyXG4gKiAgICAgIHNhdGlzZmllZDpcclxuICpcclxuICogICAgICAgKiBfX0NvbmRpdGlvbiAxX186IHdlIGhhdmUgbW92ZWQgY2xvc2VyIHRvIHRoZSAvaWRlYWwvIHZhbHVlOlxyXG4gKlxyXG4gKiAgICAgICAgICAgICBhYnMgKC9pZGVhbC8g4oiSIC92MS8pIDwgYWJzICgvaWRlYWwvIOKIkiAvdjAvKVxyXG4gKlxyXG4gKiAgICAgICAqIF9fQ29uZGl0aW9uIDJfXzogd2UgaGF2ZSBub3QgZXhjZWVkZWQgdGhlIC9tYXhpbXVtLyB2YWx1ZTpcclxuICpcclxuICogICAgICAgICAgICAgL3YxLyDiiaQgL21heGltdW0vXHJcbiAqXHJcbiAqICAgICAgICogX19Db25kaXRpb24gM19fOiB3aGVuIGNvdW50aW5nIGN1bXVsYXRpdmVseSBhY3Jvc3MgYWxsIG91dHB1dHNcclxuICogICAgICAgY29uc2lkZXJlZCBzbyBmYXIsIHdlIGhhdmUgbm90IHNlbGVjdGVkIG1vcmUgdGhhbiB0aGUgL21heGltdW0vIG51bWJlclxyXG4gKiAgICAgICBvZiBVVHhPIGVudHJpZXMgc3BlY2lmaWVkIGJ5ICdsaW1pdCcuXHJcbiAqXHJcbiAqICAzLiAgX19DcmVhdGVzIGEgL2NoYW5nZSB2YWx1ZS9fXyBmb3IgdGhlIG91dHB1dCwgZXF1YWwgdG8gdGhlIHRvdGFsIHZhbHVlXHJcbiAqICAgICAgb2YgdGhlIC9maW5hbCBVVHhPIHNlbGVjdGlvbi8gZm9yIHRoYXQgb3V0cHV0IG1pbnVzIHRoZSB2YWx1ZSAvdi8gb2ZcclxuICogICAgICB0aGF0IG91dHB1dC5cclxuICpcclxuICogIDQuICBfX1VwZGF0ZXMgdGhlIC9hY2N1bXVsYXRlZCBjb2luIHNlbGVjdGlvbi9fXzpcclxuICpcclxuICogICAgICAgKiBBZGRzIHRoZSAvb3V0cHV0LyB0byAnb3V0cHV0cycuXHJcbiAqICAgICAgICogQWRkcyB0aGUgL2ltcHJvdmVkIFVUeE8gc2VsZWN0aW9uLyB0byAnaW5wdXRzJy5cclxuICogICAgICAgKiBBZGRzIHRoZSAvY2hhbmdlIHZhbHVlLyB0byAnY2hhbmdlJy5cclxuICpcclxuICogVGhpcyBwaGFzZSBlbmRzIHdoZW4gZXZlcnkgb3V0cHV0IGhhcyBiZWVuIHByb2Nlc3NlZCwgX19vcl9fIHdoZW4gdGhlXHJcbiAqIC9yZW1haW5pbmcgVVR4TyBzZXQvIGhhcyBiZWVuIGV4aGF1c3RlZCwgd2hpY2hldmVyIG9jY3VycyBzb29uZXIuXHJcbiAqXHJcbiAqID0gVGVybWluYXRpb25cclxuICpcclxuICogV2hlbiBib3RoIHBoYXNlcyBhcmUgY29tcGxldGUsIHRoZSBhbGdvcml0aG0gdGVybWluYXRlcy5cclxuICpcclxuICogVGhlIC9hY2N1bXVsYXRlZCBjb2luIHNlbGVjdGlvbi8gYW5kIC9yZW1haW5pbmcgVVR4TyBzZXQvIGFyZSByZXR1cm5lZCB0b1xyXG4gKiB0aGUgY2FsbGVyLlxyXG4gKlxyXG4gKiA9PT0gRmFpbHVyZSBNb2Rlc1xyXG4gKlxyXG4gKiBUaGUgYWxnb3JpdGhtIHRlcm1pbmF0ZXMgd2l0aCBhbiBfX2Vycm9yX18gaWY6XHJcbiAqXHJcbiAqICAxLiAgVGhlIC90b3RhbCB2YWx1ZS8gb2YgdGhlIGluaXRpYWwgVVR4TyBzZXQgKHRoZSBhbW91bnQgb2YgbW9uZXlcclxuICogICAgICAvYXZhaWxhYmxlLykgaXMgL2xlc3MgdGhhbi8gdGhlIHRvdGFsIHZhbHVlIG9mIHRoZSBvdXRwdXQgbGlzdCAodGhlXHJcbiAqICAgICAgYW1vdW50IG9mIG1vbmV5IC9yZXF1aXJlZC8pLlxyXG4gKlxyXG4gKiAgICAgIFNlZTogX18nSW5wdXRzRXhoYXVzdGVkRXJyb3InX18uXHJcbiAqXHJcbiAqICAyLiAgVGhlIC9udW1iZXIvIG9mIFVUeE8gZW50cmllcyBuZWVkZWQgdG8gcGF5IGZvciB0aGUgcmVxdWVzdGVkIG91dHB1dHNcclxuICogICAgICB3b3VsZCAvZXhjZWVkLyB0aGUgdXBwZXIgbGltaXQgc3BlY2lmaWVkIGJ5ICdsaW1pdCcuXHJcbiAqXHJcbiAqICAgICAgU2VlOiBfXydJbnB1dExpbWl0RXhjZWVkZWRFcnJvcidfXy5cclxuICpcclxuICogPT0gTW90aXZhdGluZyBQcmluY2lwbGVzXHJcbiAqXHJcbiAqIFRoZXJlIGFyZSBzZXZlcmFsIG1vdGl2YXRpbmcgcHJpbmNpcGxlcyBiZWhpbmQgdGhlIGRlc2lnbiBvZiB0aGUgYWxnb3JpdGhtLlxyXG4gKlxyXG4gKiA9PT0gUHJpbmNpcGxlIDE6IER1c3QgTWFuYWdlbWVudFxyXG4gKlxyXG4gKiBUaGUgcHJvYmFiaWxpdHkgdGhhdCByYW5kb20gc2VsZWN0aW9uIHdpbGwgY2hvb3NlIGR1c3QgZW50cmllcyBmcm9tIGEgVVR4T1xyXG4gKiBzZXQgaW5jcmVhc2VzIHdpdGggdGhlIHByb3BvcnRpb24gb2YgZHVzdCBpbiB0aGUgc2V0LlxyXG4gKlxyXG4gKiBUaGVyZWZvcmUsIGZvciBhIFVUeE8gc2V0IHdpdGggYSBsYXJnZSBhbW91bnQgb2YgZHVzdCwgdGhlcmUncyBhIGhpZ2hcclxuICogcHJvYmFiaWxpdHkgdGhhdCBhIHJhbmRvbSBzdWJzZXQgd2lsbCBpbmNsdWRlIGEgbGFyZ2UgYW1vdW50IG9mIGR1c3QuXHJcbiAqXHJcbiAqID09PSBQcmluY2lwbGUgMjogQ2hhbmdlIE1hbmFnZW1lbnRcclxuICpcclxuICogSWRlYWxseSwgY29pbiBzZWxlY3Rpb24gYWxnb3JpdGhtcyBzaG91bGQsIG92ZXIgdGltZSwgY3JlYXRlIGEgVVR4TyBzZXQgdGhhdFxyXG4gKiBoYXMgL3VzZWZ1bC8gb3V0cHV0czogb3V0cHV0cyB0aGF0IHdpbGwgYWxsb3cgdXMgdG8gcHJvY2VzcyBmdXR1cmUgcGF5bWVudHNcclxuICogd2l0aCBhIG1pbmltdW0gbnVtYmVyIG9mIGlucHV0cy5cclxuICpcclxuICogSWYgZm9yIGVhY2ggcGF5bWVudCByZXF1ZXN0IG9mIHZhbHVlIF9fL3YvX18gd2UgY3JlYXRlIGEgY2hhbmdlIG91dHB1dCBvZlxyXG4gKiAvcm91Z2hseS8gdGhlIHNhbWUgdmFsdWUgX18vdi9fXywgdGhlbiB3ZSB3aWxsIGVuZCB1cCB3aXRoIGEgZGlzdHJpYnV0aW9uIG9mXHJcbiAqIGNoYW5nZSB2YWx1ZXMgdGhhdCBtYXRjaGVzIHRoZSB0eXBpY2FsIHZhbHVlIGRpc3RyaWJ1dGlvbiBvZiBwYXltZW50XHJcbiAqIHJlcXVlc3RzLlxyXG4gKlxyXG4gKiA9PT0gUHJpbmNpcGxlIDM6IFBlcmZvcm1hbmNlIE1hbmFnZW1lbnRcclxuICpcclxuICogU2VhcmNoaW5nIHRoZSBVVHhPIHNldCBmb3IgYWRkaXRpb25hbCBlbnRyaWVzIHRvIGltcHJvdmUgb3VyIGNoYW5nZSBvdXRwdXRzXHJcbiAqIGlzIC9vbmx5LyB1c2VmdWwgaWYgdGhlIFVUeE8gc2V0IGNvbnRhaW5zIGVudHJpZXMgdGhhdCBhcmUgc3VmZmljaWVudGx5XHJcbiAqIHNtYWxsIGVub3VnaC4gQnV0IGl0IGlzIHByZWNpc2VseSB3aGVuIHRoZSBVVHhPIHNldCBjb250YWlucyBtYW55IHNtYWxsXHJcbiAqIGVudHJpZXMgdGhhdCBpdCBpcyBsZXNzIGxpa2VseSBmb3IgYSByYW5kb21seS1jaG9zZW4gVVR4TyBlbnRyeSB0byBwdXNoIHRoZVxyXG4gKiB0b3RhbCBhYm92ZSB0aGUgdXBwZXIgYm91bmQuXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHtWYWx1ZVtdfSBBbW91bnRMaXN0IC0gTGlzdCBvZiAnVmFsdWUnIG9iamVjdFxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdHlwZWRlZiB7VHJhbnNhY3Rpb25VbnNwZW50T3V0cHV0W119IFVUeE9MaXN0IC0gTGlzdCBvZiBVVHhPXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFVUeE9TZWxlY3Rpb24gLSBDb2luIFNlbGVjdGlvbiBhbGdvcml0aG0gY29yZSBvYmplY3RcclxuICogQHByb3BlcnR5IHtVVHhPTGlzdH0gc2VsZWN0aW9uIC0gQWNjdW11bGF0ZWQgVVR4TyBzZXQuXHJcbiAqIEBwcm9wZXJ0eSB7VVR4T0xpc3R9IHJlbWFpbmluZyAtIFJlbWFpbmluZyBVVHhPIHNldC5cclxuICogQHByb3BlcnR5IHtVVHhPTGlzdH0gc3Vic2V0IC0gUmVtYWluaW5nIFVUeE8gc2V0LlxyXG4gKiBAcHJvcGVydHkge1ZhbHVlfSBhbW91bnQgLSBVVHhPIGFtb3VudCBvZiBlYWNoIHJlcXVlc3RlZCB0b2tlblxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBJbXByb3ZlUmFuZ2UgLSBJbXByb3ZlUmFuZ2VcclxuICogQHByb3BlcnR5IHtWYWx1ZX0gaWRlYWwgLSBSZXF1ZXN0ZWQgYW1vdW50ICogMlxyXG4gKiBAcHJvcGVydHkge1ZhbHVlfSBtYXhpbXVtIC0gUmVxdWVzdGVkIGFtb3VudCAqIDNcclxuICovXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYge09iamVjdH0gU2VsZWN0aW9uUmVzdWx0IC0gQ29pbiBTZWxlY3Rpb24gYWxnb3JpdGhtIHJldHVyblxyXG4gKiBAcHJvcGVydHkge1VUeE9MaXN0fSBpbnB1dCAtIEFjY3VtdWxhdGVkIFVUeE8gc2V0LlxyXG4gKiBAcHJvcGVydHkge091dHB1dExpc3R9IG91dHB1dCAtIFJlcXVlc3RlZCBvdXRwdXRzLlxyXG4gKiBAcHJvcGVydHkge1VUeE9MaXN0fSByZW1haW5pbmcgLSBSZW1haW5pbmcgVVR4TyBzZXQuXHJcbiAqIEBwcm9wZXJ0eSB7VmFsdWV9IGFtb3VudCAtIFVUeE8gYW1vdW50IG9mIGVhY2ggcmVxdWVzdGVkIHRva2VuXHJcbiAqIEBwcm9wZXJ0eSB7VmFsdWV9IGNoYW5nZSAtIEFjY3VtdWxhdGVkIGNoYW5nZSBhbW91bnQuXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFByb3RvY29sUGFyYW1ldGVyc1xyXG4gKiBAcHJvcGVydHkge2ludH0gbWluVVR4T1xyXG4gKiBAcHJvcGVydHkge2ludH0gbWluRmVlQVxyXG4gKiBAcHJvcGVydHkge2ludH0gbWluRmVlQlxyXG4gKiBAcHJvcGVydHkge2ludH0gbWF4VHhTaXplXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlIHtQcm90b2NvbFBhcmFtZXRlcnN9XHJcbiAqL1xyXG5sZXQgcHJvdG9jb2xQYXJhbWV0ZXJzID0gbnVsbDtcclxuXHJcbi8qKlxyXG4gKiBDb2luU2VsZWN0aW9uIE1vZHVsZS5cclxuICogQG1vZHVsZSBzcmMvbGliL0NvaW5TZWxlY3Rpb25cclxuICovXHJcbmNvbnN0IENvaW5TZWxlY3Rpb24gPSB7XHJcbiAgLyoqXHJcbiAgICogU2V0IHByb3RvY29sIHBhcmFtZXRlcnMgcmVxdWlyZWQgYnkgdGhlIGFsZ29yaXRobVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtaW5VVHhPXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1pbkZlZUFcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWluRmVlQlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtYXhUeFNpemVcclxuICAgKi9cclxuICBzZXRQcm90b2NvbFBhcmFtZXRlcnM6IChtaW5VVHhPLCBtaW5GZWVBLCBtaW5GZWVCLCBtYXhUeFNpemUpID0+IHtcclxuICAgIHByb3RvY29sUGFyYW1ldGVycyA9IHtcclxuICAgICAgbWluVVR4TzogbWluVVR4TyxcclxuICAgICAgbWluRmVlQTogbWluRmVlQSxcclxuICAgICAgbWluRmVlQjogbWluRmVlQixcclxuICAgICAgbWF4VHhTaXplOiBtYXhUeFNpemUsXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogUmFuZG9tLUltcHJvdmUgY29pbiBzZWxlY3Rpb24gYWxnb3JpdGhtXHJcbiAgICogQHBhcmFtIHtVVHhPTGlzdH0gaW5wdXRzIC0gVGhlIHNldCBvZiBpbnB1dHMgYXZhaWxhYmxlIGZvciBzZWxlY3Rpb24uXHJcbiAgICogQHBhcmFtIHtUcmFuc2FjdGlvbk91dHB1dHN9IG91dHB1dHMgLSBUaGUgc2V0IG9mIG91dHB1dHMgcmVxdWVzdGVkIGZvciBwYXltZW50LlxyXG4gICAqIEBwYXJhbSB7aW50fSBsaW1pdCAtIEEgbGltaXQgb24gdGhlIG51bWJlciBvZiBpbnB1dHMgdGhhdCBjYW4gYmUgc2VsZWN0ZWQuXHJcbiAgICogQHJldHVybiB7U2VsZWN0aW9uUmVzdWx0fSAtIENvaW4gU2VsZWN0aW9uIGFsZ29yaXRobSByZXR1cm5cclxuICAgKi9cclxuICByYW5kb21JbXByb3ZlOiBhc3luYyAoaW5wdXRzLCBvdXRwdXRzLCBsaW1pdCkgPT4ge1xyXG4gICAgaWYgKCFwcm90b2NvbFBhcmFtZXRlcnMpXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAnUHJvdG9jb2wgcGFyYW1ldGVycyBub3Qgc2V0LiBVc2Ugc2V0UHJvdG9jb2xQYXJhbWV0ZXJzKCkuJ1xyXG4gICAgICApO1xyXG5cclxuICAgIC8vIGF3YWl0IExvYWRlci5sb2FkKCk7XHJcblxyXG4gICAgY29uc3QgX21pblVUeE9WYWx1ZSA9XHJcbiAgICAgIEJpZ0ludChvdXRwdXRzLmxlbigpKSAqIEJpZ0ludChwcm90b2NvbFBhcmFtZXRlcnMubWluVVR4Tyk7XHJcblxyXG4gICAgLyoqIEB0eXBlIHtVVHhPU2VsZWN0aW9ufSAqL1xyXG4gICAgbGV0IHV0eG9TZWxlY3Rpb24gPSB7XHJcbiAgICAgIHNlbGVjdGlvbjogW10sXHJcbiAgICAgIHJlbWFpbmluZzogWy4uLmlucHV0c10sIC8vIFNoYWxsb3cgY29weVxyXG4gICAgICBzdWJzZXQ6IFtdLFxyXG4gICAgICBhbW91bnQ6IExvYWRlci5DYXJkYW5vLlZhbHVlLm5ldyhMb2FkZXIuQ2FyZGFuby5CaWdOdW0uZnJvbV9zdHIoJzAnKSksXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBtZXJnZWRPdXRwdXRzQW1vdW50cyA9IG1lcmdlT3V0cHV0c0Ftb3VudHMob3V0cHV0cyk7XHJcblxyXG4gICAgLy8gRXhwbG9kZSBhbW91bnQgaW4gYW4gYXJyYXkgb2YgdW5pcXVlIGFzc2V0IGFtb3VudCBmb3IgY29tcGFyaXNvbidzIHNha2VcclxuICAgIGxldCBzcGxpdE91dHB1dHNBbW91bnRzID0gc3BsaXRBbW91bnRzKG1lcmdlZE91dHB1dHNBbW91bnRzKTtcclxuXHJcbiAgICAvLyBQaGFzZSAxOiBSYW5kb21TZWxlY3RcclxuICAgIHNwbGl0T3V0cHV0c0Ftb3VudHMuZm9yRWFjaCgob3V0cHV0KSA9PiB7XHJcbiAgICAgIGNyZWF0ZVN1YlNldCh1dHhvU2VsZWN0aW9uLCBvdXRwdXQpOyAvLyBOYXJyb3cgZG93biBmb3IgTmF0VG9rZW4gVVR4T1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICB1dHhvU2VsZWN0aW9uID0gcmFuZG9tU2VsZWN0KFxyXG4gICAgICAgICAgY2xvbmVVVHhPU2VsZWN0aW9uKHV0eG9TZWxlY3Rpb24pLCAvLyBEZWVwIGNvcHkgaW4gY2FzZSBvZiBmYWxsYmFjayBuZWVkZWRcclxuICAgICAgICAgIG91dHB1dCxcclxuICAgICAgICAgIGxpbWl0IC0gdXR4b1NlbGVjdGlvbi5zZWxlY3Rpb24ubGVuZ3RoLFxyXG4gICAgICAgICAgX21pblVUeE9WYWx1ZVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBpZiAoZS5tZXNzYWdlID09PSAnSU5QVVRfTElNSVRfRVhDRUVERUQnKSB7XHJcbiAgICAgICAgICAvLyBMaW1pdCByZWFjaGVkIDogRmFsbGJhY2sgb24gRGVzY09yZEFsZ29cclxuICAgICAgICAgIHV0eG9TZWxlY3Rpb24gPSBkZXNjU2VsZWN0KFxyXG4gICAgICAgICAgICB1dHhvU2VsZWN0aW9uLFxyXG4gICAgICAgICAgICBvdXRwdXQsXHJcbiAgICAgICAgICAgIGxpbWl0IC0gdXR4b1NlbGVjdGlvbi5zZWxlY3Rpb24ubGVuZ3RoLFxyXG4gICAgICAgICAgICBfbWluVVR4T1ZhbHVlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aHJvdyBlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gUGhhc2UgMjogSW1wcm92ZVxyXG4gICAgc3BsaXRPdXRwdXRzQW1vdW50cyA9IHNvcnRBbW91bnRMaXN0KHNwbGl0T3V0cHV0c0Ftb3VudHMpO1xyXG5cclxuICAgIHNwbGl0T3V0cHV0c0Ftb3VudHMuZm9yRWFjaCgob3V0cHV0KSA9PiB7XHJcbiAgICAgIGNyZWF0ZVN1YlNldCh1dHhvU2VsZWN0aW9uLCBvdXRwdXQpOyAvLyBOYXJyb3cgZG93biBmb3IgTmF0VG9rZW4gVVR4T1xyXG5cclxuICAgICAgbGV0IHJhbmdlID0ge307XHJcbiAgICAgIHJhbmdlLmlkZWFsID0gTG9hZGVyLkNhcmRhbm8uVmFsdWUubmV3KFxyXG4gICAgICAgIExvYWRlci5DYXJkYW5vLkJpZ051bS5mcm9tX3N0cignMCcpXHJcbiAgICAgIClcclxuICAgICAgICAuY2hlY2tlZF9hZGQob3V0cHV0KVxyXG4gICAgICAgIC5jaGVja2VkX2FkZChvdXRwdXQpO1xyXG4gICAgICByYW5nZS5tYXhpbXVtID0gTG9hZGVyLkNhcmRhbm8uVmFsdWUubmV3KFxyXG4gICAgICAgIExvYWRlci5DYXJkYW5vLkJpZ051bS5mcm9tX3N0cignMCcpXHJcbiAgICAgIClcclxuICAgICAgICAuY2hlY2tlZF9hZGQocmFuZ2UuaWRlYWwpXHJcbiAgICAgICAgLmNoZWNrZWRfYWRkKG91dHB1dCk7XHJcblxyXG4gICAgICBpbXByb3ZlKFxyXG4gICAgICAgIHV0eG9TZWxlY3Rpb24sXHJcbiAgICAgICAgb3V0cHV0LFxyXG4gICAgICAgIGxpbWl0IC0gdXR4b1NlbGVjdGlvbi5zZWxlY3Rpb24ubGVuZ3RoLFxyXG4gICAgICAgIHJhbmdlXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpbnB1dDogdXR4b1NlbGVjdGlvbi5zZWxlY3Rpb24sXHJcbiAgICAgIG91dHB1dDogb3V0cHV0cyxcclxuICAgICAgcmVtYWluaW5nOiB1dHhvU2VsZWN0aW9uLnJlbWFpbmluZyxcclxuICAgICAgYW1vdW50OiB1dHhvU2VsZWN0aW9uLmFtb3VudCxcclxuICAgICAgY2hhbmdlOiB1dHhvU2VsZWN0aW9uLmFtb3VudC5jaGVja2VkX3N1YihtZXJnZWRPdXRwdXRzQW1vdW50cyksXHJcbiAgICB9O1xyXG4gIH0sXHJcbn07XHJcblxyXG4vKipcclxuICogUmFuZG9tbHkgc2VsZWN0IGVub3VnaCBVVHhPIHRvIGZ1bGZpbGwgcmVxdWVzdGVkIG91dHB1dHNcclxuICogQHBhcmFtIHtVVHhPU2VsZWN0aW9ufSB1dHhvU2VsZWN0aW9uIC0gVGhlIHNldCBvZiBzZWxlY3RlZC9hdmFpbGFibGUgaW5wdXRzLlxyXG4gKiBAcGFyYW0ge1ZhbHVlfSBvdXRwdXRBbW91bnQgLSBTaW5nbGUgY29tcGlsZWQgb3V0cHV0IHF0eSByZXF1ZXN0ZWQgZm9yIHBheW1lbnQuXHJcbiAqIEBwYXJhbSB7aW50fSBsaW1pdCAtIEEgbGltaXQgb24gdGhlIG51bWJlciBvZiBpbnB1dHMgdGhhdCBjYW4gYmUgc2VsZWN0ZWQuXHJcbiAqIEBwYXJhbSB7aW50fSBtaW5VVHhPVmFsdWUgLSBOZXR3b3JrIHByb3RvY29sICdtaW5VVHhPVmFsdWUnIGN1cnJlbnQgdmFsdWUuXHJcbiAqIEB0aHJvd3MgSU5QVVRfTElNSVRfRVhDRUVERUQgaWYgdGhlIG51bWJlciBvZiByYW5kb21seSBwaWNrZWQgaW5wdXRzIGV4Y2VlZCAnbGltaXQnIHBhcmFtZXRlci5cclxuICogQHRocm93cyBJTlBVVFNfRVhIQVVTVEVEIGlmIGFsbCBVVHhPIGRvZXNuJ3QgaG9sZCBlbm91Z2ggZnVuZHMgdG8gcGF5IGZvciBvdXRwdXQuXHJcbiAqIEB0aHJvd3MgTUlOX1VUWE9fRVJST1IgaWYgbG92ZWxhY2UgY2hhbmdlIGlzIHVuZGVyICdtaW5VVHhPVmFsdWUnIHBhcmFtZXRlci5cclxuICogQHJldHVybiB7VVR4T1NlbGVjdGlvbn0gLSBTdWNjZXNzZnVsIHJhbmRvbSB1dHhvIHNlbGVjdGlvbi5cclxuICovXHJcbmZ1bmN0aW9uIHJhbmRvbVNlbGVjdCh1dHhvU2VsZWN0aW9uLCBvdXRwdXRBbW91bnQsIGxpbWl0LCBtaW5VVHhPVmFsdWUpIHtcclxuICBsZXQgbmJGcmVlVVR4TyA9IHV0eG9TZWxlY3Rpb24uc3Vic2V0Lmxlbmd0aDtcclxuICAvLyBJZiBxdWFudGl0eSBpcyBtZXQsIHJldHVybiBzdWJzZXQgaW50byByZW1haW5pbmcgbGlzdCBhbmQgZXhpdFxyXG4gIGlmIChcclxuICAgIGlzUXR5RnVsZmlsbGVkKG91dHB1dEFtb3VudCwgdXR4b1NlbGVjdGlvbi5hbW91bnQsIG1pblVUeE9WYWx1ZSwgbmJGcmVlVVR4TylcclxuICApIHtcclxuICAgIHV0eG9TZWxlY3Rpb24ucmVtYWluaW5nID0gW1xyXG4gICAgICAuLi51dHhvU2VsZWN0aW9uLnJlbWFpbmluZyxcclxuICAgICAgLi4udXR4b1NlbGVjdGlvbi5zdWJzZXQsXHJcbiAgICBdO1xyXG4gICAgdXR4b1NlbGVjdGlvbi5zdWJzZXQgPSBbXTtcclxuICAgIHJldHVybiB1dHhvU2VsZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgaWYgKGxpbWl0IDw9IDApIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignSU5QVVRfTElNSVRfRVhDRUVERUQnKTtcclxuICB9XHJcblxyXG4gIGlmIChuYkZyZWVVVHhPIDw9IDApIHtcclxuICAgIGlmIChpc1F0eUZ1bGZpbGxlZChvdXRwdXRBbW91bnQsIHV0eG9TZWxlY3Rpb24uYW1vdW50LCAwLCAwKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01JTl9VVFhPX0VSUk9SJyk7XHJcbiAgICB9XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0lOUFVUU19FWEhBVVNURUQnKTtcclxuICB9XHJcblxyXG4gIC8qKiBAdHlwZSB7VHJhbnNhY3Rpb25VbnNwZW50T3V0cHV0fSB1dHhvICovXHJcbiAgbGV0IHV0eG8gPSB1dHhvU2VsZWN0aW9uLnN1YnNldFxyXG4gICAgLnNwbGljZShNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuYkZyZWVVVHhPKSwgMSlcclxuICAgIC5wb3AoKTtcclxuXHJcbiAgdXR4b1NlbGVjdGlvbi5zZWxlY3Rpb24ucHVzaCh1dHhvKTtcclxuICB1dHhvU2VsZWN0aW9uLmFtb3VudCA9IGFkZEFtb3VudHMoXHJcbiAgICB1dHhvLm91dHB1dCgpLmFtb3VudCgpLFxyXG4gICAgdXR4b1NlbGVjdGlvbi5hbW91bnRcclxuICApO1xyXG5cclxuICByZXR1cm4gcmFuZG9tU2VsZWN0KHV0eG9TZWxlY3Rpb24sIG91dHB1dEFtb3VudCwgbGltaXQgLSAxLCBtaW5VVHhPVmFsdWUpO1xyXG59XHJcblxyXG4vKipcclxuICogU2VsZWN0IGVub3VnaCBVVHhPIGluIERFU0Mgb3JkZXIgdG8gZnVsZmlsbCByZXF1ZXN0ZWQgb3V0cHV0c1xyXG4gKiBAcGFyYW0ge1VUeE9TZWxlY3Rpb259IHV0eG9TZWxlY3Rpb24gLSBUaGUgc2V0IG9mIHNlbGVjdGVkL2F2YWlsYWJsZSBpbnB1dHMuXHJcbiAqIEBwYXJhbSB7VmFsdWV9IG91dHB1dEFtb3VudCAtIFNpbmdsZSBjb21waWxlZCBvdXRwdXQgcXR5IHJlcXVlc3RlZCBmb3IgcGF5bWVudC5cclxuICogQHBhcmFtIHtpbnR9IGxpbWl0IC0gQSBsaW1pdCBvbiB0aGUgbnVtYmVyIG9mIGlucHV0cyB0aGF0IGNhbiBiZSBzZWxlY3RlZC5cclxuICogQHBhcmFtIHtpbnR9IG1pblVUeE9WYWx1ZSAtIE5ldHdvcmsgcHJvdG9jb2wgJ21pblVUeE9WYWx1ZScgY3VycmVudCB2YWx1ZS5cclxuICogQHRocm93cyBJTlBVVF9MSU1JVF9FWENFRURFRCBpZiB0aGUgbnVtYmVyIG9mIHJhbmRvbWx5IHBpY2tlZCBpbnB1dHMgZXhjZWVkICdsaW1pdCcgcGFyYW1ldGVyLlxyXG4gKiBAdGhyb3dzIElOUFVUU19FWEhBVVNURUQgaWYgYWxsIFVUeE8gZG9lc24ndCBob2xkIGVub3VnaCBmdW5kcyB0byBwYXkgZm9yIG91dHB1dC5cclxuICogQHRocm93cyBNSU5fVVRYT19FUlJPUiBpZiBsb3ZlbGFjZSBjaGFuZ2UgaXMgdW5kZXIgJ21pblVUeE9WYWx1ZScgcGFyYW1ldGVyLlxyXG4gKiBAcmV0dXJuIHtVVHhPU2VsZWN0aW9ufSAtIFN1Y2Nlc3NmdWwgcmFuZG9tIHV0eG8gc2VsZWN0aW9uLlxyXG4gKi9cclxuZnVuY3Rpb24gZGVzY1NlbGVjdCh1dHhvU2VsZWN0aW9uLCBvdXRwdXRBbW91bnQsIGxpbWl0LCBtaW5VVHhPVmFsdWUpIHtcclxuICAvLyBTb3J0IFVUeE8gc3Vic2V0IGluIERFU0Mgb3JkZXIgZm9yIHJlcXVpcmVkIE91dHB1dCB1bml0IHR5cGVcclxuICB1dHhvU2VsZWN0aW9uLnN1YnNldCA9IHV0eG9TZWxlY3Rpb24uc3Vic2V0LnNvcnQoKHV0eG9BLCB1dHhvQikgPT5cclxuICAgIHV0eG9CLm91dHB1dCgpLmFtb3VudCgpLmNvbXBhcmUodXR4b0Eub3V0cHV0KCkuYW1vdW50KCkpXHJcbiAgKTtcclxuXHJcbiAgZG8ge1xyXG4gICAgaWYgKGxpbWl0IDw9IDApIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJTlBVVF9MSU1JVF9FWENFRURFRCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh1dHhvU2VsZWN0aW9uLnN1YnNldC5sZW5ndGggPD0gMCkge1xyXG4gICAgICBpZiAoaXNRdHlGdWxmaWxsZWQob3V0cHV0QW1vdW50LCB1dHhvU2VsZWN0aW9uLmFtb3VudCwgMCwgMCkpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01JTl9VVFhPX0VSUk9SJyk7XHJcbiAgICAgIH1cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJTlBVVFNfRVhIQVVTVEVEJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEB0eXBlIHtUcmFuc2FjdGlvblVuc3BlbnRPdXRwdXR9IHV0eG8gKi9cclxuICAgIGxldCB1dHhvID0gdXR4b1NlbGVjdGlvbi5zdWJzZXQuc3BsaWNlKDAsIDEpLnBvcCgpO1xyXG5cclxuICAgIHV0eG9TZWxlY3Rpb24uc2VsZWN0aW9uLnB1c2godXR4byk7XHJcbiAgICB1dHhvU2VsZWN0aW9uLmFtb3VudCA9IGFkZEFtb3VudHMoXHJcbiAgICAgIHV0eG8ub3V0cHV0KCkuYW1vdW50KCksXHJcbiAgICAgIHV0eG9TZWxlY3Rpb24uYW1vdW50XHJcbiAgICApO1xyXG5cclxuICAgIGxpbWl0LS07XHJcbiAgfSB3aGlsZSAoXHJcbiAgICAhaXNRdHlGdWxmaWxsZWQoXHJcbiAgICAgIG91dHB1dEFtb3VudCxcclxuICAgICAgdXR4b1NlbGVjdGlvbi5hbW91bnQsXHJcbiAgICAgIG1pblVUeE9WYWx1ZSxcclxuICAgICAgdXR4b1NlbGVjdGlvbi5zdWJzZXQubGVuZ3RoIC0gMVxyXG4gICAgKVxyXG4gICk7XHJcblxyXG4gIC8vIFF1YW50aXR5IGlzIG1ldCwgcmV0dXJuIHN1YnNldCBpbnRvIHJlbWFpbmluZyBsaXN0IGFuZCByZXR1cm4gc2VsZWN0aW9uXHJcbiAgdXR4b1NlbGVjdGlvbi5yZW1haW5pbmcgPSBbXHJcbiAgICAuLi51dHhvU2VsZWN0aW9uLnJlbWFpbmluZyxcclxuICAgIC4uLnV0eG9TZWxlY3Rpb24uc3Vic2V0LFxyXG4gIF07XHJcbiAgdXR4b1NlbGVjdGlvbi5zdWJzZXQgPSBbXTtcclxuXHJcbiAgcmV0dXJuIHV0eG9TZWxlY3Rpb247XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUcnkgdG8gaW1wcm92ZSBzZWxlY3Rpb24gYnkgaW5jcmVhc2luZyBpbnB1dCBhbW91bnQgaW4gWzJ4LDN4XSByYW5nZS5cclxuICogQHBhcmFtIHtVVHhPU2VsZWN0aW9ufSB1dHhvU2VsZWN0aW9uIC0gVGhlIHNldCBvZiBzZWxlY3RlZC9hdmFpbGFibGUgaW5wdXRzLlxyXG4gKiBAcGFyYW0ge1ZhbHVlfSBvdXRwdXRBbW91bnQgLSBTaW5nbGUgY29tcGlsZWQgb3V0cHV0IHF0eSByZXF1ZXN0ZWQgZm9yIHBheW1lbnQuXHJcbiAqIEBwYXJhbSB7aW50fSBsaW1pdCAtIEEgbGltaXQgb24gdGhlIG51bWJlciBvZiBpbnB1dHMgdGhhdCBjYW4gYmUgc2VsZWN0ZWQuXHJcbiAqIEBwYXJhbSB7SW1wcm92ZVJhbmdlfSByYW5nZSAtIEltcHJvdmVtZW50IHJhbmdlIHRhcmdldCB2YWx1ZXNcclxuICovXHJcbmZ1bmN0aW9uIGltcHJvdmUodXR4b1NlbGVjdGlvbiwgb3V0cHV0QW1vdW50LCBsaW1pdCwgcmFuZ2UpIHtcclxuICBsZXQgbmJGcmVlVVR4TyA9IHV0eG9TZWxlY3Rpb24uc3Vic2V0Lmxlbmd0aDtcclxuXHJcbiAgaWYgKFxyXG4gICAgdXR4b1NlbGVjdGlvbi5hbW91bnQuY29tcGFyZShyYW5nZS5pZGVhbCkgPj0gMCB8fFxyXG4gICAgbmJGcmVlVVR4TyA8PSAwIHx8XHJcbiAgICBsaW1pdCA8PSAwXHJcbiAgKSB7XHJcbiAgICAvLyBSZXR1cm4gc3Vic2V0IGluIHJlbWFpbmluZ1xyXG4gICAgdXR4b1NlbGVjdGlvbi5yZW1haW5pbmcgPSBbXHJcbiAgICAgIC4uLnV0eG9TZWxlY3Rpb24ucmVtYWluaW5nLFxyXG4gICAgICAuLi51dHhvU2VsZWN0aW9uLnN1YnNldCxcclxuICAgIF07XHJcbiAgICB1dHhvU2VsZWN0aW9uLnN1YnNldCA9IFtdO1xyXG5cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKiBAdHlwZSB7VHJhbnNhY3Rpb25VbnNwZW50T3V0cHV0fSB1dHhvICovXHJcbiAgY29uc3QgdXR4byA9IHV0eG9TZWxlY3Rpb24uc3Vic2V0XHJcbiAgICAuc3BsaWNlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5iRnJlZVVUeE8pLCAxKVxyXG4gICAgLnBvcCgpO1xyXG5cclxuICBjb25zdCBuZXdBbW91bnQgPSBMb2FkZXIuQ2FyZGFuby5WYWx1ZS5uZXcoXHJcbiAgICBMb2FkZXIuQ2FyZGFuby5CaWdOdW0uZnJvbV9zdHIoJzAnKVxyXG4gIClcclxuICAgIC5jaGVja2VkX2FkZCh1dHhvLm91dHB1dCgpLmFtb3VudCgpKVxyXG4gICAgLmNoZWNrZWRfYWRkKG91dHB1dEFtb3VudCk7XHJcblxyXG4gIGlmIChcclxuICAgIGFicyhnZXRBbW91bnRWYWx1ZShyYW5nZS5pZGVhbCkgLSBnZXRBbW91bnRWYWx1ZShuZXdBbW91bnQpKSA8XHJcbiAgICAgIGFicyhnZXRBbW91bnRWYWx1ZShyYW5nZS5pZGVhbCkgLSBnZXRBbW91bnRWYWx1ZShvdXRwdXRBbW91bnQpKSAmJlxyXG4gICAgbmV3QW1vdW50LmNvbXBhcmUocmFuZ2UubWF4aW11bSkgPD0gMFxyXG4gICkge1xyXG4gICAgdXR4b1NlbGVjdGlvbi5zZWxlY3Rpb24ucHVzaCh1dHhvKTtcclxuICAgIHV0eG9TZWxlY3Rpb24uYW1vdW50ID0gYWRkQW1vdW50cyhcclxuICAgICAgdXR4by5vdXRwdXQoKS5hbW91bnQoKSxcclxuICAgICAgdXR4b1NlbGVjdGlvbi5hbW91bnRcclxuICAgICk7XHJcbiAgICBsaW1pdC0tO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB1dHhvU2VsZWN0aW9uLnJlbWFpbmluZy5wdXNoKHV0eG8pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGltcHJvdmUodXR4b1NlbGVjdGlvbiwgb3V0cHV0QW1vdW50LCBsaW1pdCwgcmFuZ2UpO1xyXG59XHJcblxyXG4vKipcclxuICogQ29tcGlsZSBhbGwgcmVxdWlyZWQgb3V0cHV0cyB0byBhIGZsYXQgYW1vdW50cyBsaXN0XHJcbiAqIEBwYXJhbSB7VHJhbnNhY3Rpb25PdXRwdXRzfSBvdXRwdXRzIC0gVGhlIHNldCBvZiBvdXRwdXRzIHJlcXVlc3RlZCBmb3IgcGF5bWVudC5cclxuICogQHJldHVybiB7VmFsdWV9IC0gVGhlIGNvbXBpbGVkIHNldCBvZiBhbW91bnRzIHJlcXVlc3RlZCBmb3IgcGF5bWVudC5cclxuICovXHJcbmZ1bmN0aW9uIG1lcmdlT3V0cHV0c0Ftb3VudHMob3V0cHV0cykge1xyXG4gIGxldCBjb21waWxlZEFtb3VudExpc3QgPSBMb2FkZXIuQ2FyZGFuby5WYWx1ZS5uZXcoXHJcbiAgICBMb2FkZXIuQ2FyZGFuby5CaWdOdW0uZnJvbV9zdHIoJzAnKVxyXG4gICk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb3V0cHV0cy5sZW4oKTsgaSsrKSB7XHJcbiAgICBjb21waWxlZEFtb3VudExpc3QgPSBhZGRBbW91bnRzKFxyXG4gICAgICBvdXRwdXRzLmdldChpKS5hbW91bnQoKSxcclxuICAgICAgY29tcGlsZWRBbW91bnRMaXN0XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbXBpbGVkQW1vdW50TGlzdDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZCB1cCBhbiBBbW91bnRzIExpc3QgdmFsdWVzIHRvIGFub3RoZXIgQW1vdW50cyBMaXN0XHJcbiAqIEBwYXJhbSB7VmFsdWV9IGFtb3VudHMgLSBTZXQgb2YgYW1vdW50cyB0byBiZSBhZGRlZC5cclxuICogQHBhcmFtIHtWYWx1ZX0gY29tcGlsZWRBbW91bnRzIC0gVGhlIGNvbXBpbGVkIHNldCBvZiBhbW91bnRzLlxyXG4gKiBAcmV0dXJuIHtWYWx1ZX1cclxuICovXHJcbmZ1bmN0aW9uIGFkZEFtb3VudHMoYW1vdW50cywgY29tcGlsZWRBbW91bnRzKSB7XHJcbiAgcmV0dXJuIGNvbXBpbGVkQW1vdW50cy5jaGVja2VkX2FkZChhbW91bnRzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNwbGl0IGFtb3VudHMgY29udGFpbmVkIGluIGEgc2luZ2xlIHtWYWx1ZX0gb2JqZWN0IGluIHNlcGFyYXRlIHtWYWx1ZX0gb2JqZWN0c1xyXG4gKiBAcGFyYW0ge1ZhbHVlfSBhbW91bnRzIC0gU2V0IG9mIGFtb3VudHMgdG8gYmUgc3BsaXQuXHJcbiAqIEB0aHJvd3MgTUlOX1VUWE9fRVJST1IgaWYgbG92ZWxhY2UgY2hhbmdlIGlzIHVuZGVyICdtaW5VVHhPVmFsdWUnIHBhcmFtZXRlci5cclxuICogQHJldHVybiB7QW1vdW50TGlzdH1cclxuICovXHJcbmZ1bmN0aW9uIHNwbGl0QW1vdW50cyhhbW91bnRzKSB7XHJcbiAgbGV0IHNwbGl0QW1vdW50cyA9IFtdO1xyXG5cclxuICBpZiAoYW1vdW50cy5tdWx0aWFzc2V0KCkpIHtcclxuICAgIGxldCBtQSA9IGFtb3VudHMubXVsdGlhc3NldCgpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbUEua2V5cygpLmxlbigpOyBpKyspIHtcclxuICAgICAgbGV0IHNjcmlwdEhhc2ggPSBtQS5rZXlzKCkuZ2V0KGkpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtQS5nZXQoc2NyaXB0SGFzaCkua2V5cygpLmxlbigpOyBqKyspIHtcclxuICAgICAgICBsZXQgX2Fzc2V0cyA9IExvYWRlci5DYXJkYW5vLkFzc2V0cy5uZXcoKTtcclxuICAgICAgICBsZXQgYXNzZXROYW1lID0gbUEuZ2V0KHNjcmlwdEhhc2gpLmtleXMoKS5nZXQoaik7XHJcblxyXG4gICAgICAgIF9hc3NldHMuaW5zZXJ0KFxyXG4gICAgICAgICAgTG9hZGVyLkNhcmRhbm8uQXNzZXROYW1lLmZyb21fYnl0ZXMoYXNzZXROYW1lLnRvX2J5dGVzKCkpLFxyXG4gICAgICAgICAgTG9hZGVyLkNhcmRhbm8uQmlnTnVtLmZyb21fYnl0ZXMoXHJcbiAgICAgICAgICAgIG1BLmdldChzY3JpcHRIYXNoKS5nZXQoYXNzZXROYW1lKS50b19ieXRlcygpXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgbGV0IF9tdWx0aWFzc2V0ID0gTG9hZGVyLkNhcmRhbm8uTXVsdGlBc3NldC5uZXcoKTtcclxuICAgICAgICBfbXVsdGlhc3NldC5pbnNlcnQoXHJcbiAgICAgICAgICBMb2FkZXIuQ2FyZGFuby5TY3JpcHRIYXNoLmZyb21fYnl0ZXMoc2NyaXB0SGFzaC50b19ieXRlcygpKSxcclxuICAgICAgICAgIF9hc3NldHNcclxuICAgICAgICApO1xyXG4gICAgICAgIGxldCBfdmFsdWUgPSBMb2FkZXIuQ2FyZGFuby5WYWx1ZS5uZXcoXHJcbiAgICAgICAgICBMb2FkZXIuQ2FyZGFuby5CaWdOdW0uZnJvbV9zdHIoJzAnKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgX3ZhbHVlLnNldF9tdWx0aWFzc2V0KF9tdWx0aWFzc2V0KTtcclxuXHJcbiAgICAgICAgc3BsaXRBbW91bnRzLnB1c2goX3ZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gT3JkZXIgYXNzZXRzIGJ5IHF0eSBERVNDXHJcbiAgc3BsaXRBbW91bnRzID0gc29ydEFtb3VudExpc3Qoc3BsaXRBbW91bnRzLCAnREVTQycpO1xyXG5cclxuICAvLyBJbnN1cmUgbG92ZWxhY2UgaXMgbGFzdCB0byBhY2NvdW50IGZvciBtaW4gYWRhIHJlcXVpcmVtZW50XHJcbiAgc3BsaXRBbW91bnRzLnB1c2goXHJcbiAgICBMb2FkZXIuQ2FyZGFuby5WYWx1ZS5uZXcoXHJcbiAgICAgIExvYWRlci5DYXJkYW5vLkJpZ051bS5mcm9tX2J5dGVzKGFtb3VudHMuY29pbigpLnRvX2J5dGVzKCkpXHJcbiAgICApXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHNwbGl0QW1vdW50cztcclxufVxyXG5cclxuLyoqXHJcbiAqIFNvcnQgYSBtaXNtYXRjaGVkIEFtb3VudExpc3QgQVNDL0RFU0NcclxuICogQHBhcmFtIHtBbW91bnRMaXN0fSBhbW91bnRMaXN0IC0gU2V0IG9mIG1pc21hdGNoZWQgYW1vdW50cyB0byBiZSBzb3J0ZWQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc29ydE9yZGVyPUFTQ10gLSBPcmRlclxyXG4gKiBAcmV0dXJuIHtBbW91bnRMaXN0fSAtIFRoZSBzb3J0ZWQgQW1vdW50TGlzdFxyXG4gKi9cclxuZnVuY3Rpb24gc29ydEFtb3VudExpc3QoYW1vdW50TGlzdCwgc29ydE9yZGVyID0gJ0FTQycpIHtcclxuICByZXR1cm4gYW1vdW50TGlzdC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICBsZXQgc29ydEludCA9IHNvcnRPcmRlciA9PT0gJ0RFU0MnID8gQmlnSW50KC0xKSA6IEJpZ0ludCgxKTtcclxuICAgIHJldHVybiBOdW1iZXIoKGdldEFtb3VudFZhbHVlKGEpIC0gZ2V0QW1vdW50VmFsdWUoYikpICogc29ydEludCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gQmlnSW50IGFtb3VudCB2YWx1ZVxyXG4gKiBAcGFyYW0gYW1vdW50XHJcbiAqIEByZXR1cm4ge2JpZ2ludH1cclxuICovXHJcbmZ1bmN0aW9uIGdldEFtb3VudFZhbHVlKGFtb3VudCkge1xyXG4gIGxldCB2YWwgPSBCaWdJbnQoMCk7XHJcbiAgbGV0IGxvdmVsYWNlID0gQmlnSW50KGFtb3VudC5jb2luKCkudG9fc3RyKCkpO1xyXG5cclxuICBpZiAobG92ZWxhY2UgPiAwKSB7XHJcbiAgICB2YWwgPSBsb3ZlbGFjZTtcclxuICB9IGVsc2UgaWYgKGFtb3VudC5tdWx0aWFzc2V0KCkgJiYgYW1vdW50Lm11bHRpYXNzZXQoKS5sZW4oKSA+IDApIHtcclxuICAgIGxldCBzY3JpcHRIYXNoID0gYW1vdW50Lm11bHRpYXNzZXQoKS5rZXlzKCkuZ2V0KDApO1xyXG4gICAgbGV0IGFzc2V0TmFtZSA9IGFtb3VudC5tdWx0aWFzc2V0KCkuZ2V0KHNjcmlwdEhhc2gpLmtleXMoKS5nZXQoMCk7XHJcbiAgICB2YWwgPSBCaWdJbnQoYW1vdW50Lm11bHRpYXNzZXQoKS5nZXQoc2NyaXB0SGFzaCkuZ2V0KGFzc2V0TmFtZSkudG9fc3RyKCkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHZhbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIE5hcnJvdyBkb3duIHJlbWFpbmluZyBVVHhPIHNldCBpbiBjYXNlIG9mIG5hdGl2ZSB0b2tlbiwgdXNlIGZ1bGwgc2V0IGZvciBsb3ZlbGFjZVxyXG4gKiBAcGFyYW0ge1VUeE9TZWxlY3Rpb259IHV0eG9TZWxlY3Rpb24gLSBUaGUgc2V0IG9mIHNlbGVjdGVkL2F2YWlsYWJsZSBpbnB1dHMuXHJcbiAqIEBwYXJhbSB7VmFsdWV9IG91dHB1dCAtIFNpbmdsZSBjb21waWxlZCBvdXRwdXQgcXR5IHJlcXVlc3RlZCBmb3IgcGF5bWVudC5cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVN1YlNldCh1dHhvU2VsZWN0aW9uLCBvdXRwdXQpIHtcclxuICBpZiAoQmlnSW50KG91dHB1dC5jb2luKCkudG9fc3RyKCkpIDwgQmlnSW50KDEpKSB7XHJcbiAgICB1dHhvU2VsZWN0aW9uLnJlbWFpbmluZy5mb3JFYWNoKCh1dHhvLCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAob3V0cHV0LmNvbXBhcmUodXR4by5vdXRwdXQoKS5hbW91bnQoKSkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHV0eG9TZWxlY3Rpb24uc3Vic2V0LnB1c2goXHJcbiAgICAgICAgICB1dHhvU2VsZWN0aW9uLnJlbWFpbmluZy5zcGxpY2UoaW5kZXgsIDEpLnBvcCgpXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHV0eG9TZWxlY3Rpb24uc3Vic2V0ID0gdXR4b1NlbGVjdGlvbi5yZW1haW5pbmcuc3BsaWNlKFxyXG4gICAgICAwLFxyXG4gICAgICB1dHhvU2VsZWN0aW9uLnJlbWFpbmluZy5sZW5ndGhcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogSXMgUXVhbnRpdHkgRnVsZmlsbGVkIENvbmRpdGlvbiAtIEhhbmRsZSAnbWluVVR4T1ZhbHVlJyBwcm90b2NvbCBwYXJhbWV0ZXIuXHJcbiAqIEBwYXJhbSB7VmFsdWV9IG91dHB1dEFtb3VudCAtIFNpbmdsZSBjb21waWxlZCBvdXRwdXQgcXR5IHJlcXVlc3RlZCBmb3IgcGF5bWVudC5cclxuICogQHBhcmFtIHtWYWx1ZX0gY3VtdWxhdGVkQW1vdW50IC0gU2luZ2xlIGNvbXBpbGVkIGFjY3VtdWxhdGVkIFVUeE8gcXR5LlxyXG4gKiBAcGFyYW0ge2ludH0gbWluVVR4T1ZhbHVlIC0gTmV0d29yayBwcm90b2NvbCAnbWluVVR4T1ZhbHVlJyBjdXJyZW50IHZhbHVlLlxyXG4gKiBAcGFyYW0ge2ludH0gbmJGcmVlVVR4TyAtIE51bWJlciBvZiBmcmVlIFVUeE8gYXZhaWxhYmxlLlxyXG4gKiBAcmV0dXJuIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gaXNRdHlGdWxmaWxsZWQoXHJcbiAgb3V0cHV0QW1vdW50LFxyXG4gIGN1bXVsYXRlZEFtb3VudCxcclxuICBtaW5VVHhPVmFsdWUsXHJcbiAgbmJGcmVlVVR4T1xyXG4pIHtcclxuICBsZXQgYW1vdW50ID0gb3V0cHV0QW1vdW50O1xyXG5cclxuICBpZiAobWluVVR4T1ZhbHVlICYmIEJpZ0ludChvdXRwdXRBbW91bnQuY29pbigpLnRvX3N0cigpKSA+IDApIHtcclxuICAgIGxldCBtaW5BbW91bnQgPSBMb2FkZXIuQ2FyZGFuby5WYWx1ZS5uZXcoXHJcbiAgICAgIExvYWRlci5DYXJkYW5vLm1pbl9hZGFfcmVxdWlyZWQoXHJcbiAgICAgICAgY3VtdWxhdGVkQW1vdW50LFxyXG4gICAgICAgIExvYWRlci5DYXJkYW5vLkJpZ051bS5mcm9tX3N0cihtaW5VVHhPVmFsdWUudG9TdHJpbmcoKSlcclxuICAgICAgKVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBMb3ZlbGFjZSBtaW4gYW1vdW50IHRvIGNvdmVyIGFzc2V0cyBhbmQgbnVtYmVyIG9mIG91dHB1dCBuZWVkIHRvIGJlIG1ldFxyXG4gICAgaWYgKGN1bXVsYXRlZEFtb3VudC5jb21wYXJlKG1pbkFtb3VudCkgPCAwKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgLy8gSWYgcmVxdWVzdGVkIExvdmVsYWNlIGxvd2VyIHRoYW4gbWluQW1vdW50LCBwbGFuIGZvciBjaGFuZ2VcclxuICAgIGlmIChvdXRwdXRBbW91bnQuY29tcGFyZShtaW5BbW91bnQpIDwgMCkge1xyXG4gICAgICBhbW91bnQgPSBtaW5BbW91bnQuY2hlY2tlZF9hZGQoXHJcbiAgICAgICAgTG9hZGVyLkNhcmRhbm8uVmFsdWUubmV3KFxyXG4gICAgICAgICAgTG9hZGVyLkNhcmRhbm8uQmlnTnVtLmZyb21fc3RyKHByb3RvY29sUGFyYW1ldGVycy5taW5VVHhPKVxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUcnkgY292ZXJpbmcgdGhlIG1heCBmZWVzXHJcbiAgICBpZiAobmJGcmVlVVR4TyA+IDApIHtcclxuICAgICAgbGV0IG1heEZlZSA9XHJcbiAgICAgICAgQmlnSW50KHByb3RvY29sUGFyYW1ldGVycy5taW5GZWVBKSAqXHJcbiAgICAgICAgICBCaWdJbnQocHJvdG9jb2xQYXJhbWV0ZXJzLm1heFR4U2l6ZSkgK1xyXG4gICAgICAgIEJpZ0ludChwcm90b2NvbFBhcmFtZXRlcnMubWluRmVlQik7XHJcblxyXG4gICAgICBtYXhGZWUgPSBMb2FkZXIuQ2FyZGFuby5WYWx1ZS5uZXcoXHJcbiAgICAgICAgTG9hZGVyLkNhcmRhbm8uQmlnTnVtLmZyb21fc3RyKG1heEZlZS50b1N0cmluZygpKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgYW1vdW50ID0gYW1vdW50LmNoZWNrZWRfYWRkKG1heEZlZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY3VtdWxhdGVkQW1vdW50LmNvbXBhcmUoYW1vdW50KSA+PSAwO1xyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJuIGEgZGVlcCBjb3B5IG9mIFVUeE9TZWxlY3Rpb25cclxuICogQHBhcmFtIHtVVHhPU2VsZWN0aW9ufSB1dHhvU2VsZWN0aW9uXHJcbiAqIEByZXR1cm4ge1VUeE9TZWxlY3Rpb259IENsb25lIC0gRGVlcCBjb3B5XHJcbiAqL1xyXG5mdW5jdGlvbiBjbG9uZVVUeE9TZWxlY3Rpb24odXR4b1NlbGVjdGlvbikge1xyXG4gIHJldHVybiB7XHJcbiAgICBzZWxlY3Rpb246IGNsb25lVVR4T0xpc3QodXR4b1NlbGVjdGlvbi5zZWxlY3Rpb24pLFxyXG4gICAgcmVtYWluaW5nOiBjbG9uZVVUeE9MaXN0KHV0eG9TZWxlY3Rpb24ucmVtYWluaW5nKSxcclxuICAgIHN1YnNldDogY2xvbmVVVHhPTGlzdCh1dHhvU2VsZWN0aW9uLnN1YnNldCksXHJcbiAgICBhbW91bnQ6IGNsb25lVmFsdWUodXR4b1NlbGVjdGlvbi5hbW91bnQpLFxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gYSBkZWVwIGNvcHkgb2YgYW4gVVR4TyBMaXN0XHJcbiAqIEBwYXJhbSB7VVR4T0xpc3R9IHV0eG9MaXN0XHJcbiAqIEByZXR1cm4ge1VUeE9MaXN0fSBDb25lIC0gRGVlcCBjb3B5XHJcbiAqL1xyXG5jb25zdCBjbG9uZVVUeE9MaXN0ID0gKHV0eG9MaXN0KSA9PlxyXG4gIHV0eG9MaXN0Lm1hcCgodXR4bykgPT5cclxuICAgIExvYWRlci5DYXJkYW5vLlRyYW5zYWN0aW9uVW5zcGVudE91dHB1dC5mcm9tX2J5dGVzKHV0eG8udG9fYnl0ZXMoKSlcclxuICApO1xyXG5cclxuLyoqXHJcbiAqIFJldHVybiBhIGRlZXAgY29weSBvZiBhIFZhbHVlIG9iamVjdFxyXG4gKiBAcGFyYW0ge1ZhbHVlfSB2YWx1ZVxyXG4gKiBAcmV0dXJuIHtWYWx1ZX0gQ29uZSAtIERlZXAgY29weVxyXG4gKi9cclxuY29uc3QgY2xvbmVWYWx1ZSA9ICh2YWx1ZSkgPT4gTG9hZGVyLkNhcmRhbm8uVmFsdWUuZnJvbV9ieXRlcyh2YWx1ZS50b19ieXRlcygpKTtcclxuXHJcbi8vIEhlbHBlclxyXG5mdW5jdGlvbiBhYnMoYmlnKSB7XHJcbiAgcmV0dXJuIGJpZyA8IDAgPyBiaWcgKiBCaWdJbnQoLTEpIDogYmlnO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2luU2VsZWN0aW9uO1xyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJGb3JtRGF0YSIsIkNvaW5TZWxlY3Rpb24iLCJ3YWxsZXRfYWRkcmVzc19nbG9iYWwiLCJvd25lZF9uZnRzIiwiUyIsIkFzc2V0RmluZ2VycHJpbnQiLCJfQnVmZmVyIiwiQnVmZmVyIiwiaGV4VG9Bc2NpaSIsImhleCIsIl9oZXgiLCJ0b1N0cmluZyIsInN0ciIsImkiLCJsZW5ndGgiLCJzdWJzdHIiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJwYXJzZUludCIsImFkZHJlc3NIZXgiLCJjb25zb2xlIiwibG9nIiwiZnJvbSIsImNhcmRhbm8iLCJnZXRVc2VkQWRkcmVzc2VzIiwiYWN0aXZhdGVDYXJkYW5vIiwiZXJyb3IiLCJlbmFibGUiLCJwcm9taXNlIiwiYWRkcmVzc0hleF9Db24iLCJuZnRzIiwid2FsbGV0QWRkcmVzcyIsIkJhc2VBZGRyZXNzIiwiZnJvbV9hZGRyZXNzIiwiQWRkcmVzcyIsImZyb21fYnl0ZXMiLCJ0b19hZGRyZXNzIiwidG9fYmVjaDMyIiwiJCIsInRleHQiLCJnZXRCYWxhbmNlIiwicmF3QmFsYW5jZSIsInZhbHVlIiwiVmFsdWUiLCJiYWxhbmNlX3N0cl9yYXciLCJjb2luIiwidG9fc3RyIiwibXVsdGlhc3NldCIsIm11bHRpQXNzZXRzIiwia2V5cyIsImoiLCJsZW4iLCJwb2xpY3kiLCJnZXQiLCJwb2xpY3lBc3NldHMiLCJhc3NldE5hbWVzIiwiayIsInBvbGljeUFzc2V0IiwicXVhbnRpdHkiLCJhc3NldCIsInRvX2J5dGVzIiwibmFtZSIsIl9wb2xpY3kiLCJzbGljZSIsIl9uYW1lIiwicHJvY2VzcyIsImVudiIsIlBPTElDWV9JRCIsIm5mdF9uYW1lIiwicmVwbGFjZSIsInB1c2giLCJ1bml0IiwiZmluZ2VycHJpbnQiLCJoaWRlIiwiZWFjaCIsImtleSIsIm51bWVyaWNfbmFtZSIsIndpbmRvdyIsIndhbGxldF9hZGRyZXNzIiwiZ2V0UHJvdG9jb2xQYXJhbWV0ZXJzIiwiSE9TVCIsImxvY2F0aW9uIiwib3JpZ2luIiwiQVBJX1VSTCIsImhlYWRlcnMiLCJQUk9KRUNUX0lEIiwidGhlbiIsInJlcyIsImxhdGVzdF9ibG9jayIsImRhdGEiLCJyZXNwb25zZSIsInNsb3RudW1iZXIiLCJzbG90IiwicCIsInN0YXR1cyIsIkVycm9yIiwibGluZWFyRmVlIiwiTGluZWFyRmVlIiwiQmlnTnVtIiwiZnJvbV9zdHIiLCJtaW5fZmVlX2EiLCJtaW5fZmVlX2IiLCJtaW5VdHhvIiwibWluX3V0eG8iLCJwb29sRGVwb3NpdCIsInBvb2xfZGVwb3NpdCIsImtleURlcG9zaXQiLCJrZXlfZGVwb3NpdCIsIm1heFR4U2l6ZSIsIm1heF90eF9zaXplIiwidHJpZ2dlclBheSIsInVzZXIiLCJhZGRyZXNzIiwiUkVDSVBJRU5UX0FERFJFU1MiLCJvZmZlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwYXkiLCJhZGRyIiwiYWRhQW1vdW50IiwicHJvdG9jb2xQYXJhbWV0ZXJzIiwibG92ZWxhY2UiLCJwYXJzZUZsb2F0IiwiZ2V0Q2hhbmdlQWRkcmVzcyIsInBheW1lbnRBZGRyIiwiZ2V0VXR4b3MiLCJyYXdVdHhvIiwidXR4b3MiLCJtYXAiLCJ1IiwiVHJhbnNhY3Rpb25VbnNwZW50T3V0cHV0Iiwib3V0cHV0cyIsIlRyYW5zYWN0aW9uT3V0cHV0cyIsImFkZCIsIlRyYW5zYWN0aW9uT3V0cHV0IiwiZnJvbV9iZWNoMzIiLCJNVUxUSUFTU0VUX1NJWkUiLCJWQUxVRV9TSVpFIiwidG90YWxBc3NldHMiLCJzZXRQcm90b2NvbFBhcmFtZXRlcnMiLCJjb2VmZmljaWVudCIsImNvbnN0YW50IiwicmFuZG9tSW1wcm92ZSIsInNlbGVjdGlvbiIsImlucHV0cyIsImlucHV0IiwidHhCdWlsZGVyIiwiVHJhbnNhY3Rpb25CdWlsZGVyIiwidXR4byIsImFkZF9pbnB1dCIsIm91dHB1dCIsImFtb3VudCIsImFkZF9vdXRwdXQiLCJjaGFuZ2UiLCJjaGFuZ2VNdWx0aUFzc2V0cyIsInBhcnRpYWxDaGFuZ2UiLCJwYXJ0aWFsTXVsdGlBc3NldHMiLCJNdWx0aUFzc2V0IiwicG9saWNpZXMiLCJtYWtlU3BsaXQiLCJhc3NldHMiLCJBc3NldHMiLCJpbnNlcnQiLCJjaGVja011bHRpQXNzZXRzIiwic2V0X211bHRpYXNzZXQiLCJtaW5BZGEiLCJtaW5fYWRhX3JlcXVpcmVkIiwic2V0X2NvaW4iLCJhZGRfY2hhbmdlX2lmX25lZWRlZCIsInRyYW5zYWN0aW9uIiwiVHJhbnNhY3Rpb24iLCJidWlsZCIsIlRyYW5zYWN0aW9uV2l0bmVzc1NldCIsInNpemUiLCJFUlJPUiIsInR4VG9vQmlnIiwic2lnblR4Iiwid2l0bmVzZXMiLCJzaWduZWRUeCIsImJvZHkiLCJzdWJtaXRUeCIsInR4aGFzaCIsIkxvYWRlciIsIkNhcmRhbm8iLCJtaW5VVHhPIiwibWluRmVlQSIsIm1pbkZlZUIiLCJsaW1pdCIsIl9taW5VVHhPVmFsdWUiLCJCaWdJbnQiLCJ1dHhvU2VsZWN0aW9uIiwicmVtYWluaW5nIiwic3Vic2V0IiwibWVyZ2VkT3V0cHV0c0Ftb3VudHMiLCJtZXJnZU91dHB1dHNBbW91bnRzIiwic3BsaXRPdXRwdXRzQW1vdW50cyIsInNwbGl0QW1vdW50cyIsImZvckVhY2giLCJjcmVhdGVTdWJTZXQiLCJyYW5kb21TZWxlY3QiLCJjbG9uZVVUeE9TZWxlY3Rpb24iLCJlIiwibWVzc2FnZSIsImRlc2NTZWxlY3QiLCJzb3J0QW1vdW50TGlzdCIsInJhbmdlIiwiaWRlYWwiLCJjaGVja2VkX2FkZCIsIm1heGltdW0iLCJpbXByb3ZlIiwiY2hlY2tlZF9zdWIiLCJvdXRwdXRBbW91bnQiLCJtaW5VVHhPVmFsdWUiLCJuYkZyZWVVVHhPIiwiaXNRdHlGdWxmaWxsZWQiLCJzcGxpY2UiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwb3AiLCJhZGRBbW91bnRzIiwic29ydCIsInV0eG9BIiwidXR4b0IiLCJjb21wYXJlIiwibmV3QW1vdW50IiwiYWJzIiwiZ2V0QW1vdW50VmFsdWUiLCJjb21waWxlZEFtb3VudExpc3QiLCJhbW91bnRzIiwiY29tcGlsZWRBbW91bnRzIiwibUEiLCJzY3JpcHRIYXNoIiwiX2Fzc2V0cyIsImFzc2V0TmFtZSIsIkFzc2V0TmFtZSIsIl9tdWx0aWFzc2V0IiwiU2NyaXB0SGFzaCIsIl92YWx1ZSIsImFtb3VudExpc3QiLCJzb3J0T3JkZXIiLCJhIiwiYiIsInNvcnRJbnQiLCJOdW1iZXIiLCJ2YWwiLCJpbmRleCIsInVuZGVmaW5lZCIsImN1bXVsYXRlZEFtb3VudCIsIm1pbkFtb3VudCIsIm1heEZlZSIsImNsb25lVVR4T0xpc3QiLCJjbG9uZVZhbHVlIiwidXR4b0xpc3QiLCJiaWciXSwic291cmNlUm9vdCI6IiJ9