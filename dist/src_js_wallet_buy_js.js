(self["webpackChunkwallet_test"] = self["webpackChunkwallet_test"] || []).push([["src_js_wallet_buy_js"],{

/***/ "./src/js/wallet/buy.js":
/*!******************************!*\
  !*** ./src/js/wallet/buy.js ***!
  \******************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProtocolParameters": () => (/* binding */ getProtocolParameters)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! form-data */ "./node_modules/form-data/lib/browser.js");
/* harmony import */ var _coinSelection_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coinSelection.mjs */ "./src/js/wallet/coinSelection.mjs");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'http'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io */ "./node_modules/socket.io/wrapper.mjs");
/* harmony import */ var _emurgo_cip14_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emurgo/cip14-js */ "./node_modules/@emurgo/cip14-js/index.js");
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

          case 27:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDa0IsUUFBTixFQUFoQyxDQUFYO0FBQUEsQ0FBbkIsRUFFQTs7O0FBQ0EsU0FBU3FLLEdBQVQsQ0FBYTRCLEdBQWIsRUFBa0I7QUFDaEIsU0FBT0EsR0FBRyxHQUFHLENBQU4sR0FBVUEsR0FBRyxHQUFHakUsTUFBTSxDQUFDLENBQUMsQ0FBRixDQUF0QixHQUE2QmlFLEdBQXBDO0FBQ0Q7O0FBRUQsaUVBQWU5UCxhQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2FsbGV0X3Rlc3QvLi9zcmMvanMvd2FsbGV0L2J1eS5qcyIsIndlYnBhY2s6Ly93YWxsZXRfdGVzdC8uL3NyYy9qcy93YWxsZXQvY29pblNlbGVjdGlvbi5tanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgRm9ybURhdGEgZnJvbSAnZm9ybS1kYXRhJztcclxuaW1wb3J0IENvaW5TZWxlY3Rpb24gZnJvbSAnLi9jb2luU2VsZWN0aW9uLm1qcyc7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVTZXJ2ZXIgfSBmcm9tIFwiaHR0cFwiO1xyXG5pbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tIFwic29ja2V0LmlvXCI7XHJcblxyXG52YXIgd2FsbGV0X2FkZHJlc3NfZ2xvYmFsID0gXCJcIjtcclxudmFyIG93bmVkX25mdHMgPSBbXTtcclxuXHJcblxyXG5jb25zdCBTID0gYXdhaXQgaW1wb3J0KCdAZW11cmdvL2NhcmRhbm8tc2VyaWFsaXphdGlvbi1saWItYnJvd3Nlci9jYXJkYW5vX3NlcmlhbGl6YXRpb25fbGliLmpzJyk7XHJcbi8vIGNvbnN0IFMgPSBpbXBvcnQoJ0BlbXVyZ28vY2FyZGFuby1zZXJpYWxpemF0aW9uLWxpYi1icm93c2VyL2NhcmRhbm9fc2VyaWFsaXphdGlvbl9saWIuanMnKTtcclxuXHJcbi8vY29uc3QgQXNzZXRGaW5nZXJwcmludCA9IHJlcXVpcmUoJ0BlbXVyZ28vY2lwMTQtanMnKTtcclxuaW1wb3J0IHtBc3NldEZpbmdlcnByaW50fSBmcm9tICdAZW11cmdvL2NpcDE0LWpzJztcclxuXHJcbmNvbnN0IF9CdWZmZXIgPSAoYXdhaXQgaW1wb3J0KCdidWZmZXIvJykpLkJ1ZmZlcjtcclxuLy8gY29uc3QgX0J1ZmZlciA9IChpbXBvcnQoJ2J1ZmZlci8nKSkuQnVmZmVyO1xyXG5cclxuY29uc3QgaGV4VG9Bc2NpaSA9IChoZXgpID0+IHtcclxuICAgIC8vIGNvbm52ZXJ0cyBoZXggdG8gYXNjaWkgc3RyaW5nXHJcbiAgICB2YXIgX2hleCA9IGhleC50b1N0cmluZygpO1xyXG4gICAgdmFyIHN0ciA9IFwiXCI7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IF9oZXgubGVuZ3RoICYmIF9oZXguc3Vic3RyKGksIDIpICE9PSBcIjAwXCI7IGkgKz0gMilcclxuICAgICAgICBzdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChfaGV4LnN1YnN0cihpLCAyKSwgMTYpKTtcclxuICAgIHJldHVybiBzdHI7XHJcbn07XHJcblxyXG4vL2NoZWNrIGlmIGNvbm5lY3RlZCBhbHJlYWR5XHJcbmxldCBhZGRyZXNzSGV4ID0gbnVsbDtcclxudHJ5IHtcclxuXHQvLyQoXCIjY29ubmVjdEJ0blwiKS50ZXh0KCdDaGVja2luZyBXYWxsZXQuLi4nKTtcclxuXHRjb25zb2xlLmxvZyhcIkNoZWNraW5nIHdhbGxldC4uLlwiKTtcclxuXHRhZGRyZXNzSGV4ID0gX0J1ZmZlci5mcm9tKFxyXG5cdFx0KGF3YWl0IGNhcmRhbm8uZ2V0VXNlZEFkZHJlc3NlcygpKVswXSxcclxuXHRcdFwiaGV4XCJcclxuXHQpO1x0XHJcblx0YXdhaXQgYWN0aXZhdGVDYXJkYW5vKCk7XHJcbn0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgLy8kKFwiI2Nvbm5lY3RCdG5cIikudGV4dCgnQ29ubmVjdCB0byBXYWxsZXQnKTtcclxuICBjb25zb2xlLmxvZyhcIldhaXRpbmcgZm9yIG1lc3NhZ2UgdG8gY29ubmVjdCB0byB3YWxsZXQuLi5cIik7XHJcbiAgY29uc29sZS5sb2coXCJ3YWxsZXQgY29ubmVjdGlvbiBlcnJvclwiKTtcclxuICBjb25zb2xlLmxvZyhlcnJvcilcclxufVxyXG5cclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBhY3RpdmF0ZUNhcmRhbm8oKXtcclxuXHRpZihhZGRyZXNzSGV4KSB7XHJcblx0XHQvLyQoXCIjY29ubmVjdEJ0blwiKS50ZXh0KCdXYWxsZXQgQ29ubmVjdGVkJyk7XHJcbiAgICBcdC8vJChcIiNjb25uZWN0QnRuXCIpLmF0dHIoJ2NsYXNzJywgJ2J0biBidG4tc3VjY2VzcycpO1xyXG5cdFx0Y29uc29sZS5sb2coXCJXYWxsZXQgY29ubmVjdGVkXCIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zdCBwcm9taXNlID0gYXdhaXQgY2FyZGFuby5lbmFibGUoKTtcclxuXHRcdC8vY29uc3Qgd2FsbGV0QWRkcmVzcyA9IGF3YWl0IGNhcmRhbm8uZ2V0VXNlZEFkZHJlc3NlcygpO1xyXG5cdFx0Ly8kKFwiI3dhbGxldC1hZGRyZXNzXCIpLnRleHQoXCJHZXR0aW5nIHdhbGxldCBhZGRyZXNzLi4uXCIpO1xyXG5cdFx0Ly8kKFwiI3dhbGxldC1hZGRyZXNzXCIpLmF0dHIoJ2NsYXNzJywgJ2FjdGl2ZScpO1xyXG5cdFx0Y29uc29sZS5sb2coXCJHZXR0aW5nIHdhbGxldCBhZGRyZXNzLi4uXCIpO1xyXG5cdFx0Y29uc3QgYWRkcmVzc0hleF9Db24gPSBfQnVmZmVyLmZyb20oXHJcblx0XHRcdChhd2FpdCBjYXJkYW5vLmdldFVzZWRBZGRyZXNzZXMoKSlbMF0sXHJcblx0XHRcdFwiaGV4XCJcclxuXHRcdCk7XHJcblx0XHRhZGRyZXNzSGV4ID0gYWRkcmVzc0hleF9Db247XHJcblx0fVxyXG5cdFxyXG5cdGNvbnN0IG5mdHMgPSBbXTtcclxuXHRpZihhZGRyZXNzSGV4KSB7XHJcblx0XHRjb25zdCB3YWxsZXRBZGRyZXNzID0gUy5CYXNlQWRkcmVzcy5mcm9tX2FkZHJlc3MoXHJcblx0XHRcdFx0Uy5BZGRyZXNzLmZyb21fYnl0ZXMoYWRkcmVzc0hleClcclxuXHRcdFx0KS50b19hZGRyZXNzKCkudG9fYmVjaDMyKCk7XHJcblx0XHRcclxuXHRcdHdhbGxldF9hZGRyZXNzX2dsb2JhbCA9IHdhbGxldEFkZHJlc3M7XHJcblx0XHQvLyQoXCIjd2FsbGV0LWFkZHJlc3NcIikudGV4dCh3YWxsZXRBZGRyZXNzKTtcclxuXHRcdC8vJChcIiN3YWxsZXQtYWRkcmVzc1wiKS5hdHRyKCdjbGFzcycsICdhY3RpdmUnKTtcclxuXHRcdGNvbnNvbGUubG9nKFwiV2FsbGV0IGFkZHJlc3MgaXM6IFwiK3dhbGxldF9hZGRyZXNzX2dsb2JhbCk7XHJcblx0XHRcclxuXHRcdC8vR2V0IEJhbGFuY2UgYW5kIE5GVHMuLi5cclxuXHRcdCQoXCIjd2FsbGV0LW5mdC1zdGF0dXMtdGV4dFwiKS50ZXh0KFwiTG9hZGluZyB5b3VyIHdvcmxkcy4uLlwiKTtcdFx0XHJcblx0XHRjb25zdCByYXdCYWxhbmNlID0gYXdhaXQgY2FyZGFuby5nZXRCYWxhbmNlKCk7XHJcblx0XHRsZXQgdmFsdWUgPSBTLlZhbHVlLmZyb21fYnl0ZXMoX0J1ZmZlci5mcm9tKHJhd0JhbGFuY2UsICdoZXgnKSk7XHRcclxuXHRcdGxldCBiYWxhbmNlX3N0cl9yYXcgPSBwYXJzZUludCh2YWx1ZS5jb2luKCkudG9fc3RyKCkpIC8gMTAwMDAwMDtcclxuXHRcdFxyXG5cdFx0aWYgKHZhbHVlLm11bHRpYXNzZXQoKSkge1xyXG5cdFx0XHQvL2NvbnN0IEZQID0gYXdhaXQgY2FyZGFubygpO1xyXG5cdFx0XHJcblx0XHRcdGNvbnN0IG11bHRpQXNzZXRzID0gdmFsdWUubXVsdGlhc3NldCgpLmtleXMoKTtcclxuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBtdWx0aUFzc2V0cy5sZW4oKTsgaisrKSB7XHJcblx0XHRcdFx0Y29uc3QgcG9saWN5ID0gbXVsdGlBc3NldHMuZ2V0KGopO1xyXG5cdFx0XHRcdGNvbnN0IHBvbGljeUFzc2V0cyA9IHZhbHVlLm11bHRpYXNzZXQoKS5nZXQocG9saWN5KTtcclxuXHRcdFx0XHRjb25zdCBhc3NldE5hbWVzID0gcG9saWN5QXNzZXRzLmtleXMoKTtcclxuXHRcdFx0XHRmb3IgKGxldCBrID0gMDsgayA8IGFzc2V0TmFtZXMubGVuKCk7IGsrKykge1xyXG5cdFx0XHRcdFx0Y29uc3QgcG9saWN5QXNzZXQgPSBhc3NldE5hbWVzLmdldChrKTtcclxuXHRcdFx0XHRcdGNvbnN0IHF1YW50aXR5ID0gcG9saWN5QXNzZXRzLmdldChwb2xpY3lBc3NldCk7XHJcblx0XHRcdFx0XHRjb25zdCBhc3NldCA9XHJcblx0XHRcdFx0XHRcdF9CdWZmZXIuZnJvbShwb2xpY3kudG9fYnl0ZXMoKSwgJ2hleCcpLnRvU3RyaW5nKCdoZXgnKSArXHJcblx0XHRcdFx0XHRcdF9CdWZmZXIuZnJvbShwb2xpY3lBc3NldC5uYW1lKCksICdoZXgnKS50b1N0cmluZygnaGV4Jyk7XHJcblx0XHRcdFx0XHRjb25zdCBfcG9saWN5ID0gYXNzZXQuc2xpY2UoMCwgNTYpO1xyXG5cdFx0XHRcdFx0Y29uc3QgX25hbWUgPSBhc3NldC5zbGljZSg1Nik7XHJcblx0XHRcdFx0XHQvKlxyXG5cdFx0XHRcdFx0Y29uc3QgZmluZ2VycHJpbnQgPSBuZXcgQXNzZXRGaW5nZXJwcmludChcclxuXHRcdFx0XHRcdFx0X0J1ZmZlci5mcm9tKF9wb2xpY3ksICdoZXgnKSxcclxuXHRcdFx0XHRcdFx0X0J1ZmZlci5mcm9tKF9uYW1lLCAnaGV4JylcclxuXHRcdFx0XHRcdCkuZmluZ2VycHJpbnQoKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Y29uc3QgYXNzZXRGaW5nZXJwcmludCA9IEFzc2V0RmluZ2VycHJpbnQuZnJvbVBhcnRzKFxyXG5cdFx0XHRcdFx0ICBfQnVmZmVyLmZyb20oX3BvbGljeSwgJ2hleCcpLFxyXG5cdFx0XHRcdFx0ICBfQnVmZmVyLmZyb20oX25hbWUsICdoZXgnKVxyXG5cdFx0XHRcdFx0KS5maW5nZXJwcmludCgpO1xyXG5cdFx0XHRcdFx0Ki9cclxuXHRcdFx0XHRcdGlmKHByb2Nlc3MuZW52LlBPTElDWV9JRCA9PSBfcG9saWN5KSB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IG5mdF9uYW1lID0gaGV4VG9Bc2NpaShfbmFtZSkucmVwbGFjZShcIldvcmxkc1dpdGhpblwiLCBcIlwiKTtcclxuXHRcdFx0XHRcdFx0bmZ0cy5wdXNoKHtcclxuXHRcdFx0XHRcdFx0XHR1bml0OiBhc3NldCxcclxuXHRcdFx0XHRcdFx0XHRxdWFudGl0eTogcXVhbnRpdHkudG9fc3RyKCksXHJcblx0XHRcdFx0XHRcdFx0cG9saWN5OiBfcG9saWN5LFxyXG5cdFx0XHRcdFx0XHRcdG5hbWU6IG5mdF9uYW1lLFxyXG5cdFx0XHRcdFx0XHRcdGZpbmdlcnByaW50OiBudWxsLFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0b3duZWRfbmZ0cy5wdXNoKG5mdF9uYW1lKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRcclxuXHRpZihuZnRzLmxlbmd0aCA9PSAwKSB7XHJcblx0XHQkKFwiI3dhbGxldC1uZnQtc3RhdHVzLXRleHRcIikudGV4dChcIk5vIE5GVCB3b3JsZHMgZm91bmQuXCIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQkKFwiI3dhbGxldC1uZnQtc3RhdHVzLXRleHRcIikudGV4dChcIiZuYnNwO1wiKTtcclxuXHRcdCQoXCIjd2FsbGV0LW5mdC1zdGF0dXMtdGV4dFwiKS5oaWRlKCk7XHRcdFxyXG5cdFx0JC5lYWNoKCBuZnRzLCBmdW5jdGlvbigga2V5LCB2YWx1ZSApIHtcclxuXHRcdCAgXHRsZXQgbnVtZXJpY19uYW1lID0gdmFsdWUubmFtZS5yZXBsYWNlKFwiV29ybGRzIFdpdGhpbiBcIiwgXCJcIik7XHJcblx0XHQgIFx0Ly8gJChgPGEgY2xhc3M9XCJteS13b3JsZC1saW5rXCIgaHJlZj1cIi8ke3Byb2Nlc3MuZW52LldPUkxEU19QQUdFfS8ke251bWVyaWNfbmFtZX1cIj4ke251bWVyaWNfbmFtZX08L2E+YCkuYXBwZW5kVG8oXCIjd2FsbGV0LW5mdC1saXN0XCIpO1xyXG5cdFx0XHQvLyQoYDxwIGNsYXNzPVwibXktd29ybGQtbGlua1wiIGhyZWY9XCIjXCI+JHtudW1lcmljX25hbWV9PC9wPmApLmFwcGVuZFRvKFwiI3dhbGxldC1uZnQtbGlzdFwiKTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJXb3JsZCBmZXRjaGVkOiBcIitudW1lcmljX25hbWUpO1xyXG5cdFx0fSk7XHJcblx0XHQvKiBcclxuXHRcdGNvbnNvbGUubG9nKFwiRVZBTFVBVElORyBJTlNJREUgQlVZLk1KUy4uLlwiKTtcclxuXHRcdGNvbnNvbGUubG9nKG93bmVkX25mdHMpO1xyXG5cdFx0Y29uc29sZS5sb2coXCJbXCIgKyAkKFwiI3R4dHNlYXJjaFwiKS52YWwoKS5sZW5ndGggKyBcIl1cIik7XHJcblx0XHRjb25zb2xlLmxvZyhcIltcIiArIG93bmVkX25mdHMuaW5jbHVkZXMoJChcIiN0eHRzZWFyY2hcIikudmFsKCkpICsgXCJdXCIpO1xyXG5cdFx0Y29uc29sZS5sb2coXCJFTkQgRVZBTFVBVElORyBJTlNJREUgQlVZLk1KUy4uLlwiKTtcclxuXHRcdCovXHJcblx0fVxyXG5cdFx0XHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvdG9jb2xQYXJhbWV0ZXJzKCkgeyBcclxuICAvL3ZhciBIT1NUID0gcHJvY2Vzcy5lbnYuQVBJID8gcHJvY2Vzcy5lbnYuQVBJIDogbG9jYXRpb24ub3JpZ2luO1xyXG4gIHZhciBIT1NUID0gbG9jYXRpb24ub3JpZ2luO1xyXG4gIFxyXG4gIC8qIFxyXG4gIGNvbnN0IGxhdGVzdF9ibG9jayA9IGF3YWl0IGZldGNoKEhPU1QrJy9ibG9ja3NfbGF0ZXN0Jywge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgICBtZXRob2Q6ICdHRVQnXHJcbiAgfSkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgKi9cclxuICBcclxuICB2YXIgbGF0ZXN0X2Jsb2NrO1xyXG4gIFxyXG4gIGF3YWl0IGF4aW9zLmdldChwcm9jZXNzLmVudi5BUElfVVJMICsgJy92MC9ibG9ja3MvbGF0ZXN0JywgeyBoZWFkZXJzOiB7XHJcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgJ3Byb2plY3RfaWQnOiAgcHJvY2Vzcy5lbnYuUFJPSkVDVF9JRFxyXG4gIH19KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgIGxhdGVzdF9ibG9jayA9IHJlcy5kYXRhO1xyXG4gIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgbGF0ZXN0X2Jsb2NrID0gZXJyb3IucmVzcG9uc2UuZGF0YTsgICAgXHJcbiAgfSlcclxuICBcclxuICB2YXIgc2xvdG51bWJlciA9IGxhdGVzdF9ibG9jay5zbG90O1xyXG4gIFxyXG4gIC8qIFxyXG4gIGNvbnN0IHAgPSBhd2FpdCBmZXRjaChgJHtIT1NUfS9wYXJhbWV0ZXJzYCwge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgICBtZXRob2Q6ICdHRVQnXHJcbiAgfSkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgKi9cclxuICBcclxuICB2YXIgcDtcclxuICBcclxuICBhd2FpdCBheGlvcy5nZXQocHJvY2Vzcy5lbnYuQVBJX1VSTCArICcvdjAvZXBvY2hzL2xhdGVzdC9wYXJhbWV0ZXJzJywgeyBoZWFkZXJzOiB7XHJcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgJ3Byb2plY3RfaWQnOiBwcm9jZXNzLmVudi5QUk9KRUNUX0lEXHJcbiAgfX0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgcCA9IHJlcy5kYXRhO1xyXG4gIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgcCA9IGRhdGEgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gIH0pXHJcbiAgXHJcbiAgXHJcbiAgaWYgKHAuc3RhdHVzID49IDQwMCAmJiBwLnN0YXR1cyA8IDYwMCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJCYWQgcmVzcG9uc2UgZnJvbSBzZXJ2ZXJcIik7XHJcbiAgfVxyXG4gIFxyXG4gIHZhciB2YWx1ZSA9IHtcclxuICAgICAgbGluZWFyRmVlOiBTLkxpbmVhckZlZS5uZXcoXHJcbiAgICAgIFMuQmlnTnVtLmZyb21fc3RyKHAubWluX2ZlZV9hLnRvU3RyaW5nKCkpLFxyXG4gICAgICBTLkJpZ051bS5mcm9tX3N0cihwLm1pbl9mZWVfYi50b1N0cmluZygpKVxyXG4gICAgICApLFxyXG4gICAgICBtaW5VdHhvOiBTLkJpZ051bS5mcm9tX3N0cihwLm1pbl91dHhvKSxcclxuICAgICAgcG9vbERlcG9zaXQ6IFMuQmlnTnVtLmZyb21fc3RyKHAucG9vbF9kZXBvc2l0KSxcclxuICAgICAga2V5RGVwb3NpdDogUy5CaWdOdW0uZnJvbV9zdHIocC5rZXlfZGVwb3NpdCksXHJcbiAgICAgIG1heFR4U2l6ZTogcC5tYXhfdHhfc2l6ZSxcclxuICAgICAgc2xvdDogc2xvdG51bWJlcixcclxuICB9O1xyXG4gIHJldHVybiB2YWx1ZTtcclxufTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHRyaWdnZXJQYXkoKSB7XHJcbiAgICB2YXIgdXNlcj0gYXdhaXQgY2FyZGFuby5nZXRVc2VkQWRkcmVzc2VzKCk7XHJcbiAgICB2YXIgYWRkcmVzcz1wcm9jZXNzLmVudi5SRUNJUElFTlRfQUREUkVTUztcclxuICAgIHZhciBvZmZlciA9IDAgLy8gcGFyc2VJbnQoJChcIiNjYXJkYW5vLW9mZmVyXCIpLnZhbHVlKTtcclxuXHRcclxuICAgIG9mZmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkYW5vLW9mZmVyXCIpLnZhbHVlO1xyXG4gICAgLy8gV09SS1NcclxuICAgIHJldHVybiBhd2FpdCBwYXkoYWRkcmVzcywgb2ZmZXIpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBwYXkoYWRkciwgYWRhQW1vdW50KXtcclxuXHRcclxuXHRjb25zdCBjYXJkYW5vID0gd2luZG93LmNhcmRhbm9cclxuICAgIGNvbnN0IHByb3RvY29sUGFyYW1ldGVycyA9IGF3YWl0IGdldFByb3RvY29sUGFyYW1ldGVycygpXHJcbiAgICBjb25zdCBsb3ZlbGFjZSA9IChwYXJzZUZsb2F0KGFkYUFtb3VudCkgKiAxMDAwMDAwKS50b1N0cmluZygpXHJcblx0XHJcbiAgICBjb25zdCBwYXltZW50QWRkciA9IFMuQWRkcmVzcy5mcm9tX2J5dGVzKF9CdWZmZXIuZnJvbShhd2FpdCBjYXJkYW5vLmdldENoYW5nZUFkZHJlc3MoKSwgJ2hleCcpKS50b19iZWNoMzIoKVxyXG4gICAgY29uc3QgcmF3VXR4byA9IGF3YWl0IGNhcmRhbm8uZ2V0VXR4b3MoKVxyXG4gICAgY29uc3QgdXR4b3MgPSByYXdVdHhvLm1hcCh1ID0+IFMuVHJhbnNhY3Rpb25VbnNwZW50T3V0cHV0LmZyb21fYnl0ZXMoX0J1ZmZlci5mcm9tKHUsICdoZXgnKSkpXHJcblx0XHJcbiAgICBjb25zdCBvdXRwdXRzID0gUy5UcmFuc2FjdGlvbk91dHB1dHMubmV3KClcclxuXHJcbiAgICBvdXRwdXRzLmFkZChcclxuICAgICAgICBTLlRyYW5zYWN0aW9uT3V0cHV0Lm5ldyhcclxuICAgICAgICAgICAgUy5BZGRyZXNzLmZyb21fYmVjaDMyKGFkZHIpLFxyXG4gICAgICAgICAgICBTLlZhbHVlLm5ldyhcclxuICAgICAgICAgICAgICAgIFMuQmlnTnVtLmZyb21fc3RyKGxvdmVsYWNlKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKVxyXG4gICAgKVxyXG5cclxuICAgIGNvbnN0IE1VTFRJQVNTRVRfU0laRSA9IDU4NDg7XHJcbiAgICBjb25zdCBWQUxVRV9TSVpFID0gNTg2MDtcclxuICAgIGNvbnN0IHRvdGFsQXNzZXRzID0gMFxyXG5cclxuICAgIENvaW5TZWxlY3Rpb24uc2V0UHJvdG9jb2xQYXJhbWV0ZXJzKFxyXG4gICAgICAgIHByb3RvY29sUGFyYW1ldGVycy5taW5VdHhvLnRvX3N0cigpLFxyXG4gICAgICAgIHByb3RvY29sUGFyYW1ldGVycy5saW5lYXJGZWUuY29lZmZpY2llbnQoKS50b19zdHIoKSxcclxuICAgICAgICBwcm90b2NvbFBhcmFtZXRlcnMubGluZWFyRmVlLmNvbnN0YW50KCkudG9fc3RyKCksXHJcbiAgICAgICAgcHJvdG9jb2xQYXJhbWV0ZXJzLm1heFR4U2l6ZS50b1N0cmluZygpXHJcbiAgICAgICk7XHJcblx0ICBcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IGF3YWl0IENvaW5TZWxlY3Rpb24ucmFuZG9tSW1wcm92ZShcclxuICAgICAgdXR4b3MsXHJcbiAgICAgIG91dHB1dHMsXHJcbiAgICAgIDIwICsgdG90YWxBc3NldHMsXHJcbiAgICAgIHByb3RvY29sUGFyYW1ldGVycy5taW5VdHhvLnRvX3N0cigpXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGlucHV0cyA9IHNlbGVjdGlvbi5pbnB1dDtcclxuICAgIGNvbnN0IHR4QnVpbGRlciA9IFMuVHJhbnNhY3Rpb25CdWlsZGVyLm5ldyhcclxuICAgICAgcHJvdG9jb2xQYXJhbWV0ZXJzLmxpbmVhckZlZSxcclxuICAgICAgcHJvdG9jb2xQYXJhbWV0ZXJzLm1pblV0eG8sXHJcbiAgICAgIHByb3RvY29sUGFyYW1ldGVycy5wb29sRGVwb3NpdCxcclxuICAgICAgcHJvdG9jb2xQYXJhbWV0ZXJzLmtleURlcG9zaXRcclxuICAgICk7XHJcblx0XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHV0eG8gPSBpbnB1dHNbaV07XHJcbiAgICAgICAgdHhCdWlsZGVyLmFkZF9pbnB1dChcclxuICAgICAgICAgIHV0eG8ub3V0cHV0KCkuYWRkcmVzcygpLFxyXG4gICAgICAgICAgdXR4by5pbnB1dCgpLFxyXG4gICAgICAgICAgdXR4by5vdXRwdXQoKS5hbW91bnQoKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIC8vIHZhciBtID0gUy5HZW5lcmFsVHJhbnNhY3Rpb25NZXRhZGF0YS5uZXcoKVxyXG4gICAgLy8gbS5pbnNlcnQoUy5CaWdOdW0uZnJvbV9zdHIoJzAnKSxTLmVuY29kZV9qc29uX3N0cl90b19tZXRhZGF0dW0oSlNPTi5zdHJpbmdpZnkoSlNPTm1ldGFEYXRhKSwwKSlcclxuICAgIC8vIHZhciBtZXRhRGF0YSA9IFMuVHJhbnNhY3Rpb25NZXRhZGF0YS5uZXcobSlcclxuICAgIC8vIHR4QnVpbGRlci5zZXRfbWV0YWRhdGEobWV0YURhdGEpXHJcbiAgICB0eEJ1aWxkZXIuYWRkX291dHB1dChvdXRwdXRzLmdldCgwKSk7XHJcblxyXG4gICAgY29uc3QgY2hhbmdlID0gc2VsZWN0aW9uLmNoYW5nZTtcclxuICAgIGNvbnN0IGNoYW5nZU11bHRpQXNzZXRzID0gY2hhbmdlLm11bHRpYXNzZXQoKTtcclxuXHJcbiAgICAvLyBjaGVjayBpZiBjaGFuZ2UgdmFsdWUgaXMgdG9vIGJpZyBmb3Igc2luZ2xlIG91dHB1dFxyXG4gICAgaWYgKGNoYW5nZU11bHRpQXNzZXRzICYmIGNoYW5nZS50b19ieXRlcygpLmxlbmd0aCAqIDIgPiBWQUxVRV9TSVpFKSB7XHJcbiAgICAgICAgY29uc3QgcGFydGlhbENoYW5nZSA9IFMuVmFsdWUubmV3KFxyXG4gICAgICAgICAgUy5CaWdOdW0uZnJvbV9zdHIoJzAnKVxyXG4gICAgICAgICk7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBwYXJ0aWFsTXVsdGlBc3NldHMgPSBTLk11bHRpQXNzZXQubmV3KCk7XHJcbiAgICAgICAgY29uc3QgcG9saWNpZXMgPSBjaGFuZ2VNdWx0aUFzc2V0cy5rZXlzKCk7XHJcbiAgICAgICAgY29uc3QgbWFrZVNwbGl0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjaGFuZ2VNdWx0aUFzc2V0cy5sZW4oKTsgaisrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvbGljeSA9IHBvbGljaWVzLmdldChqKTtcclxuICAgICAgICAgICAgY29uc3QgcG9saWN5QXNzZXRzID0gY2hhbmdlTXVsdGlBc3NldHMuZ2V0KHBvbGljeSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFzc2V0TmFtZXMgPSBwb2xpY3lBc3NldHMua2V5cygpO1xyXG4gICAgICAgICAgICBjb25zdCBhc3NldHMgPSBTLkFzc2V0cy5uZXcoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBhc3NldE5hbWVzLmxlbigpOyBrKyspIHtcclxuICAgICAgICAgICAgICBjb25zdCBwb2xpY3lBc3NldCA9IGFzc2V0TmFtZXMuZ2V0KGspO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5ID0gcG9saWN5QXNzZXRzLmdldChwb2xpY3lBc3NldCk7XHJcbiAgICAgICAgICAgICAgYXNzZXRzLmluc2VydChwb2xpY3lBc3NldCwgcXVhbnRpdHkpO1xyXG4gICAgICAgICAgICAgIC8vY2hlY2sgc2l6ZVxyXG4gICAgICAgICAgICAgIGNvbnN0IGNoZWNrTXVsdGlBc3NldHMgPSBTLk11bHRpQXNzZXQuZnJvbV9ieXRlcyhcclxuICAgICAgICAgICAgICAgIHBhcnRpYWxNdWx0aUFzc2V0cy50b19ieXRlcygpXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBjaGVja011bHRpQXNzZXRzLmluc2VydChwb2xpY3ksIGFzc2V0cyk7XHJcbiAgICAgICAgICAgICAgaWYgKGNoZWNrTXVsdGlBc3NldHMudG9fYnl0ZXMoKS5sZW5ndGggKiAyID49IE1VTFRJQVNTRVRfU0laRSkge1xyXG4gICAgICAgICAgICAgICAgcGFydGlhbE11bHRpQXNzZXRzLmluc2VydChwb2xpY3ksIGFzc2V0cyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBhcnRpYWxNdWx0aUFzc2V0cy5pbnNlcnQocG9saWN5LCBhc3NldHMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbWFrZVNwbGl0KCk7XHJcbiAgICAgICAgcGFydGlhbENoYW5nZS5zZXRfbXVsdGlhc3NldChwYXJ0aWFsTXVsdGlBc3NldHMpO1xyXG4gICAgICAgIGNvbnN0IG1pbkFkYSA9IFMubWluX2FkYV9yZXF1aXJlZChcclxuICAgICAgICAgIHBhcnRpYWxDaGFuZ2UsXHJcbiAgICAgICAgICBwcm90b2NvbFBhcmFtZXRlcnMubWluVXR4b1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgcGFydGlhbENoYW5nZS5zZXRfY29pbihtaW5BZGEpO1xyXG4gICAgXHJcbiAgICAgICAgdHhCdWlsZGVyLmFkZF9vdXRwdXQoXHJcbiAgICAgICAgICBTLlRyYW5zYWN0aW9uT3V0cHV0Lm5ldyhcclxuICAgICAgICAgICAgUy5BZGRyZXNzLmZyb21fYmVjaDMyKHBheW1lbnRBZGRyKSxcclxuICAgICAgICAgICAgcGFydGlhbENoYW5nZVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgdHhCdWlsZGVyLmFkZF9jaGFuZ2VfaWZfbmVlZGVkKFxyXG4gICAgICAgIFMuQWRkcmVzcy5mcm9tX2JlY2gzMihwYXltZW50QWRkcilcclxuICAgICAgKTtcclxuICAgICAgXHJcbiAgICBjb25zdCB0cmFuc2FjdGlvbiA9IFMuVHJhbnNhY3Rpb24ubmV3KFxyXG4gICAgICAgIHR4QnVpbGRlci5idWlsZCgpLFxyXG4gICAgICAgIFMuVHJhbnNhY3Rpb25XaXRuZXNzU2V0Lm5ldygpLFxyXG4gICAgICAgIC8vbWV0YURhdGFcclxuICAgICk7XHJcblxyXG4gICAgY29uc3Qgc2l6ZSA9IHRyYW5zYWN0aW9uLnRvX2J5dGVzKCkubGVuZ3RoICogMjtcclxuICAgIGlmIChzaXplID4gcHJvdG9jb2xQYXJhbWV0ZXJzLm1heFR4U2l6ZSkgdGhyb3cgRVJST1IudHhUb29CaWc7XHJcbiAgXHJcbiAgICBjb25zdCB3aXRuZXNlcyA9IGF3YWl0IGNhcmRhbm8uc2lnblR4KF9CdWZmZXIuZnJvbSh0cmFuc2FjdGlvbi50b19ieXRlcygpLCdoZXgnKS50b1N0cmluZygnaGV4JykpXHJcbiAgICBjb25zdCBzaWduZWRUeCA9IFMuVHJhbnNhY3Rpb24ubmV3KHRyYW5zYWN0aW9uLmJvZHkoKSwgUy5UcmFuc2FjdGlvbldpdG5lc3NTZXQuZnJvbV9ieXRlcyhfQnVmZmVyLmZyb20od2l0bmVzZXMsXCJoZXhcIikpKSAvLyAsdHJhbnNhY3Rpb24ubWV0YWRhdGEoKVxyXG4gICAgY29uc3QgdHhoYXNoID0gYXdhaXQgY2FyZGFuby5zdWJtaXRUeChfQnVmZmVyLmZyb20oc2lnbmVkVHgudG9fYnl0ZXMoKSwnaGV4JykudG9TdHJpbmcoJ2hleCcpKVxyXG5cclxuICAgIHJldHVybiB0eGhhc2hcclxufVxyXG5cclxuLyogXHJcbiQoXCIjY29ubmVjdEJ0blwiKS5vbignY2xpY2snLCBhc3luYyAoKSA9PiB7XHJcbiAgICBpZigkKFwiI2Nvbm5lY3RCdG5cIikudGV4dCgpICE9IFwiV2FsbGV0IENvbm5lY3RlZFwiKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0ICBhd2FpdCBhY3RpdmF0ZUNhcmRhbm8oKTtcclxuXHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdCAgJChcIiNjb25uZWN0QnRuXCIpLnRleHQoJ05vdCBDb25uZWN0ZWQnKTtcclxuXHRcdCAgJChcIiNjb25uZWN0QnRuXCIpLmF0dHIoJ2NsYXNzJywgJ2J0biBidG4tZGFuZ2VyJyk7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZSk7XHJcblx0XHR9IGZpbmFsbHkge1xyXG5cdFx0ICBjb25zb2xlLmxvZygnV2UgZG8gY2xlYW51cCBoZXJlJyk7XHJcblx0XHR9XHJcblx0fVxyXG59KTtcclxuKi9cclxuXHJcbi8vdmFyIG9wdGlvbnMgPSB7XHJcbi8vICBjb3JzOiB0cnVlXHJcbi8vfVxyXG4vL2ltcG9ydCB7aHR0cH0gZnJvbSAnaHR0cCc7XHJcbi8vY29uc3Qgc2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoKTtcclxuXHJcbi8vaW1wb3J0IHtTZXJ2ZXJ9IGZyb20gJ3NvY2tldC5pbyc7XHJcbi8vY29uc3QgaW8gPSBuZXcgU2VydmVyKHNlcnZlciwgb3B0aW9ucyk7XHJcblxyXG5cclxuLypcclxuXHJcbnZhciBzZXJ2ZXIgPSByZXF1aXJlKCdodHRwJykuY3JlYXRlU2VydmVyKCk7XHJcbnZhciBvcHRpb25zID0ge1xyXG4gIGNvcnM6IHRydWVcclxufVxyXG52YXIgaW8gPSByZXF1aXJlKCdzb2NrZXQuaW8nKShzZXJ2ZXIsIG9wdGlvbnMpO1xyXG5cclxuaW8ub24oJ2Nvbm5lY3Rpb24nLCBhc3luYyAoc29ja2V0KSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ2EgdXNlciBjb25uZWN0ZWQnKTtcclxuICBcclxuICBzb2NrZXQub24oJ2luaXRpYWxpemUnLCBhc3luYyBmdW5jdGlvbigpIHtcclxuICBcdGNvbnNvbGUubG9nKFwic29ja2V0IGluaXRpYWxpemVkXCIpO1xyXG5cdHRyeSB7XHJcblx0ICBhd2FpdCBhY3RpdmF0ZUNhcmRhbm8oKTtcclxuXHR9IGNhdGNoIChlKSB7XHJcblx0ICB3YWxsZXRfYWRkcmVzc19nbG9iYWwgPSBcIlwiO1xyXG5cdCAgY29uc29sZS5lcnJvcihlKTtcclxuXHR9IGZpbmFsbHkge1xyXG5cdCAgY29uc29sZS5sb2coJ0FmdGVyIGluaXRpYXRpbmcgY2FyZGFubyBvYmplY3QnKTtcclxuXHR9XHJcblx0c29ja2V0LmVtaXQoJ21lc3NhZ2VQbGF5Y2FudmFzJywgd2FsbGV0X2FkZHJlc3NfZ2xvYmFsKTtcclxuXHRcclxuXHRzb2NrZXQub24oJ3Bhc3NNZXNzYWdlJywgZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJtZXNzYWdlXCIpO1xyXG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0fSk7XHJcblx0XHJcbiAgfSk7XHJcbiAgXHJcbn0pO1xyXG5cclxuKi8iLCJpbXBvcnQge1xyXG4gIFRyYW5zYWN0aW9uVW5zcGVudE91dHB1dCxcclxuICBUcmFuc2FjdGlvbk91dHB1dHMsXHJcbiAgVmFsdWUsXHJcbn0gZnJvbSAnQGVtdXJnby9jYXJkYW5vLXNlcmlhbGl6YXRpb24tbGliLWJyb3dzZXIvY2FyZGFub19zZXJpYWxpemF0aW9uX2xpYi5qcyc7XHJcblxyXG5jb25zdCBTID0gYXdhaXQgaW1wb3J0KCdAZW11cmdvL2NhcmRhbm8tc2VyaWFsaXphdGlvbi1saWItYnJvd3Nlci9jYXJkYW5vX3NlcmlhbGl6YXRpb25fbGliLmpzJylcclxuLy8gY29uc3QgUyA9IGltcG9ydCgnQGVtdXJnby9jYXJkYW5vLXNlcmlhbGl6YXRpb24tbGliLWJyb3dzZXIvY2FyZGFub19zZXJpYWxpemF0aW9uX2xpYi5qcycpO1xyXG5cclxuY29uc3QgTG9hZGVyID0ge1xyXG4gIENhcmRhbm86IFNcclxufVxyXG5cclxuLyoqXHJcbiAqIEJlcnJ5UG9vbCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgX19SYW5kb20tSW1wcm92ZV9fIGNvaW4gc2VsZWN0aW9uIGFsZ29yaXRobS5cclxuICpcclxuICogPSBPdmVydmlld1xyXG4gKlxyXG4gKiBUaGUgX19SYW5kb20tSW1wcm92ZV9fIGNvaW4gc2VsZWN0aW9uIGFsZ29yaXRobSB3b3JrcyBpbiBfX3R3byBwaGFzZXNfXywgYnlcclxuICogL2ZpcnN0LyBzZWxlY3RpbmcgVVR4TyBlbnRyaWVzIC9hdCByYW5kb20vIHRvIHBheSBmb3IgZWFjaCBvZiB0aGUgZ2l2ZW5cclxuICogb3V0cHV0cywgYW5kIC90aGVuLyBhdHRlbXB0aW5nIHRvIC9pbXByb3ZlLyB1cG9uIGVhY2ggb2YgdGhlIHNlbGVjdGlvbnMuXHJcbiAqXHJcbiAqID09PSBQaGFzZSAxOiBSYW5kb20gU2VsZWN0aW9uXHJcbiAqXHJcbiAqIF9fSW4gdGhpcyBwaGFzZSwgdGhlIGFsZ29yaXRobSByYW5kb21seSBzZWxlY3RzIGEgbWluaW1hbCBzZXQgb2YgVVR4T19fXHJcbiAqIF9fZW50cmllcyB0byBwYXkgZm9yIGVhY2ggb2YgdGhlIGdpdmVuIG91dHB1dHMuX19cclxuICpcclxuICogRHVyaW5nIHRoaXMgcGhhc2UsIHRoZSBhbGdvcml0aG06XHJcbiAqXHJcbiAqICAgKiAgcHJvY2Vzc2VzIG91dHB1dHMgaW4gL2Rlc2NlbmRpbmcgb3JkZXIgb2YgY29pbiB2YWx1ZS8uXHJcbiAqXHJcbiAqICAgKiAgbWFpbnRhaW5zIGEgL3JlbWFpbmluZyBVVHhPIHNldC8sIGluaXRpYWxseSBlcXVhbCB0byB0aGUgZ2l2ZW5cclxuICogICAgICAvVVR4TyBzZXQvIHBhcmFtZXRlci5cclxuICpcclxuICogICAqICBiYXNlZCBvbiBldmVyeSBvdXRwdXQgbmF0dXJlLCBnZW5lcmF0ZSBhIC9uYXRpdmUgdG9rZW4gVVR4TyBzdWJzZXQvXHJcbiAqICAgICAgdG8gbmFycm93IGRvd24gdG8gdXNlZnVsIFVUeE9cclxuICpcclxuICogICAqICBtYWludGFpbnMgYW4gL2FjY3VtdWxhdGVkIGNvaW4gc2VsZWN0aW9uLywgd2hpY2ggaXMgaW5pdGlhbGx5IC9lbXB0eS8uXHJcbiAqXHJcbiAqIEZvciBlYWNoIG91dHB1dCBvZiB2YWx1ZSBfXy92L19fLCB0aGUgYWxnb3JpdGhtIC9yYW5kb21seS8gc2VsZWN0cyBlbnRyaWVzXHJcbiAqIGZyb20gdGhlIC9yZW1haW5pbmcgVVR4TyBzZXQvLCB1bnRpbCB0aGUgdG90YWwgdmFsdWUgb2Ygc2VsZWN0ZWQgZW50cmllcyBpc1xyXG4gKiBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gX18vdi9fXy4gVGhlIHNlbGVjdGVkIGVudHJpZXMgYXJlIHRoZW4gYXNzb2NpYXRlZFxyXG4gKiB3aXRoIHRoYXQgb3V0cHV0LCBhbmQgcmVtb3ZlZCBmcm9tIHRoZSAvcmVtYWluaW5nIFVUeE8gc2V0Ly5cclxuICpcclxuICogVGhpcyBwaGFzZSBlbmRzIHdoZW4gZXZlcnkgb3V0cHV0IGhhcyBiZWVuIGFzc29jaWF0ZWQgd2l0aCBhIHNlbGVjdGlvbiBvZlxyXG4gKiBVVHhPIGVudHJpZXMuXHJcbiAqXHJcbiAqIEhvd2V2ZXIsIGlmIHRoZSByZW1haW5pbmcgVVR4TyBzZXQgaXMgY29tcGxldGVseSBleGhhdXN0ZWQgYmVmb3JlIGFsbFxyXG4gKiBvdXRwdXRzIGNhbiBiZSBwcm9jZXNzZWQsIHRoZSBhbGdvcml0aG0gdGVybWluYXRlcyB3aXRoIGFuIGVycm9yLlxyXG4gKlxyXG4gKiA9PT0gUGhhc2UgMjogSW1wcm92ZW1lbnRcclxuICpcclxuICogX19JbiB0aGlzIHBoYXNlLCB0aGUgYWxnb3JpdGhtIGF0dGVtcHRzIHRvIGltcHJvdmUgdXBvbiBlYWNoIG9mIHRoZSBVVHhPX19cclxuICogX19zZWxlY3Rpb25zIG1hZGUgaW4gdGhlIHByZXZpb3VzIHBoYXNlLCBieSBjb25zZXJ2YXRpdmVseSBleHBhbmRpbmcgdGhlX19cclxuICogX19zZWxlY3Rpb24gbWFkZSBmb3IgZWFjaCBvdXRwdXQuX19cclxuICpcclxuICogRHVyaW5nIHRoaXMgcGhhc2UsIHRoZSBhbGdvcml0aG06XHJcbiAqXHJcbiAqICAgKiAgcHJvY2Vzc2VzIG91dHB1dHMgaW4gL2FzY2VuZGluZyBvcmRlciBvZiBjb2luIHZhbHVlLy5cclxuICpcclxuICogICAqICBjb250aW51ZXMgdG8gbWFpbnRhaW4gdGhlIC9yZW1haW5pbmcgVVR4TyBzZXQvIHByb2R1Y2VkIGJ5IHRoZSBwcmV2aW91c1xyXG4gKiAgICAgIHBoYXNlLlxyXG4gKlxyXG4gKiAgICogIG1haW50YWlucyBhbiAvYWNjdW11bGF0ZWQgY29pbiBzZWxlY3Rpb24vLCBpbml0aWF0ZWQgZnJvbSBwcmV2aW91cyBwaGFzZS5cclxuICpcclxuICogRm9yIGVhY2ggb3V0cHV0IG9mIHZhbHVlIF9fL3YvX18sIHRoZSBhbGdvcml0aG06XHJcbiAqXHJcbiAqICAxLiAgX19DYWxjdWxhdGVzIGEgL3RhcmdldCByYW5nZS9fXyBmb3IgdGhlIHRvdGFsIHZhbHVlIG9mIGlucHV0cyB1c2VkIHRvXHJcbiAqICAgICAgcGF5IGZvciB0aGF0IG91dHB1dCwgZGVmaW5lZCBieSB0aGUgdHJpcGxldDpcclxuICpcclxuICogICAgICAoL21pbmltdW0vLCAvaWRlYWwvLCAvbWF4aW11bS8pID0gKC92LywgLzJ2LywgLzN2LylcclxuICpcclxuICogIDIuICBfX0F0dGVtcHRzIHRvIC9pbXByb3ZlLyB1cG9uIHRoZSAvZXhpc3RpbmcgVVR4TyBzZWxlY3Rpb24vX18gZm9yIHRoYXRcclxuICogICAgICBvdXRwdXQsIGJ5IHJlcGVhdGVkbHkgc2VsZWN0aW5nIGFkZGl0aW9uYWwgZW50cmllcyBhdCByYW5kb20gZnJvbSB0aGVcclxuICogICAgICAvcmVtYWluaW5nIFVUeE8gc2V0Lywgc3RvcHBpbmcgd2hlbiB0aGUgc2VsZWN0aW9uIGNhbiBiZSBpbXByb3ZlZCB1cG9uXHJcbiAqICAgICAgbm8gZnVydGhlci5cclxuICpcclxuICogICAgICBBIHNlbGVjdGlvbiB3aXRoIHZhbHVlIC92MS8gaXMgY29uc2lkZXJlZCB0byBiZSBhbiAvaW1wcm92ZW1lbnQvIG92ZXIgYVxyXG4gKiAgICAgIHNlbGVjdGlvbiB3aXRoIHZhbHVlIC92MC8gaWYgX19hbGxfXyBvZiB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXHJcbiAqICAgICAgc2F0aXNmaWVkOlxyXG4gKlxyXG4gKiAgICAgICAqIF9fQ29uZGl0aW9uIDFfXzogd2UgaGF2ZSBtb3ZlZCBjbG9zZXIgdG8gdGhlIC9pZGVhbC8gdmFsdWU6XHJcbiAqXHJcbiAqICAgICAgICAgICAgIGFicyAoL2lkZWFsLyDiiJIgL3YxLykgPCBhYnMgKC9pZGVhbC8g4oiSIC92MC8pXHJcbiAqXHJcbiAqICAgICAgICogX19Db25kaXRpb24gMl9fOiB3ZSBoYXZlIG5vdCBleGNlZWRlZCB0aGUgL21heGltdW0vIHZhbHVlOlxyXG4gKlxyXG4gKiAgICAgICAgICAgICAvdjEvIOKJpCAvbWF4aW11bS9cclxuICpcclxuICogICAgICAgKiBfX0NvbmRpdGlvbiAzX186IHdoZW4gY291bnRpbmcgY3VtdWxhdGl2ZWx5IGFjcm9zcyBhbGwgb3V0cHV0c1xyXG4gKiAgICAgICBjb25zaWRlcmVkIHNvIGZhciwgd2UgaGF2ZSBub3Qgc2VsZWN0ZWQgbW9yZSB0aGFuIHRoZSAvbWF4aW11bS8gbnVtYmVyXHJcbiAqICAgICAgIG9mIFVUeE8gZW50cmllcyBzcGVjaWZpZWQgYnkgJ2xpbWl0Jy5cclxuICpcclxuICogIDMuICBfX0NyZWF0ZXMgYSAvY2hhbmdlIHZhbHVlL19fIGZvciB0aGUgb3V0cHV0LCBlcXVhbCB0byB0aGUgdG90YWwgdmFsdWVcclxuICogICAgICBvZiB0aGUgL2ZpbmFsIFVUeE8gc2VsZWN0aW9uLyBmb3IgdGhhdCBvdXRwdXQgbWludXMgdGhlIHZhbHVlIC92LyBvZlxyXG4gKiAgICAgIHRoYXQgb3V0cHV0LlxyXG4gKlxyXG4gKiAgNC4gIF9fVXBkYXRlcyB0aGUgL2FjY3VtdWxhdGVkIGNvaW4gc2VsZWN0aW9uL19fOlxyXG4gKlxyXG4gKiAgICAgICAqIEFkZHMgdGhlIC9vdXRwdXQvIHRvICdvdXRwdXRzJy5cclxuICogICAgICAgKiBBZGRzIHRoZSAvaW1wcm92ZWQgVVR4TyBzZWxlY3Rpb24vIHRvICdpbnB1dHMnLlxyXG4gKiAgICAgICAqIEFkZHMgdGhlIC9jaGFuZ2UgdmFsdWUvIHRvICdjaGFuZ2UnLlxyXG4gKlxyXG4gKiBUaGlzIHBoYXNlIGVuZHMgd2hlbiBldmVyeSBvdXRwdXQgaGFzIGJlZW4gcHJvY2Vzc2VkLCBfX29yX18gd2hlbiB0aGVcclxuICogL3JlbWFpbmluZyBVVHhPIHNldC8gaGFzIGJlZW4gZXhoYXVzdGVkLCB3aGljaGV2ZXIgb2NjdXJzIHNvb25lci5cclxuICpcclxuICogPSBUZXJtaW5hdGlvblxyXG4gKlxyXG4gKiBXaGVuIGJvdGggcGhhc2VzIGFyZSBjb21wbGV0ZSwgdGhlIGFsZ29yaXRobSB0ZXJtaW5hdGVzLlxyXG4gKlxyXG4gKiBUaGUgL2FjY3VtdWxhdGVkIGNvaW4gc2VsZWN0aW9uLyBhbmQgL3JlbWFpbmluZyBVVHhPIHNldC8gYXJlIHJldHVybmVkIHRvXHJcbiAqIHRoZSBjYWxsZXIuXHJcbiAqXHJcbiAqID09PSBGYWlsdXJlIE1vZGVzXHJcbiAqXHJcbiAqIFRoZSBhbGdvcml0aG0gdGVybWluYXRlcyB3aXRoIGFuIF9fZXJyb3JfXyBpZjpcclxuICpcclxuICogIDEuICBUaGUgL3RvdGFsIHZhbHVlLyBvZiB0aGUgaW5pdGlhbCBVVHhPIHNldCAodGhlIGFtb3VudCBvZiBtb25leVxyXG4gKiAgICAgIC9hdmFpbGFibGUvKSBpcyAvbGVzcyB0aGFuLyB0aGUgdG90YWwgdmFsdWUgb2YgdGhlIG91dHB1dCBsaXN0ICh0aGVcclxuICogICAgICBhbW91bnQgb2YgbW9uZXkgL3JlcXVpcmVkLykuXHJcbiAqXHJcbiAqICAgICAgU2VlOiBfXydJbnB1dHNFeGhhdXN0ZWRFcnJvcidfXy5cclxuICpcclxuICogIDIuICBUaGUgL251bWJlci8gb2YgVVR4TyBlbnRyaWVzIG5lZWRlZCB0byBwYXkgZm9yIHRoZSByZXF1ZXN0ZWQgb3V0cHV0c1xyXG4gKiAgICAgIHdvdWxkIC9leGNlZWQvIHRoZSB1cHBlciBsaW1pdCBzcGVjaWZpZWQgYnkgJ2xpbWl0Jy5cclxuICpcclxuICogICAgICBTZWU6IF9fJ0lucHV0TGltaXRFeGNlZWRlZEVycm9yJ19fLlxyXG4gKlxyXG4gKiA9PSBNb3RpdmF0aW5nIFByaW5jaXBsZXNcclxuICpcclxuICogVGhlcmUgYXJlIHNldmVyYWwgbW90aXZhdGluZyBwcmluY2lwbGVzIGJlaGluZCB0aGUgZGVzaWduIG9mIHRoZSBhbGdvcml0aG0uXHJcbiAqXHJcbiAqID09PSBQcmluY2lwbGUgMTogRHVzdCBNYW5hZ2VtZW50XHJcbiAqXHJcbiAqIFRoZSBwcm9iYWJpbGl0eSB0aGF0IHJhbmRvbSBzZWxlY3Rpb24gd2lsbCBjaG9vc2UgZHVzdCBlbnRyaWVzIGZyb20gYSBVVHhPXHJcbiAqIHNldCBpbmNyZWFzZXMgd2l0aCB0aGUgcHJvcG9ydGlvbiBvZiBkdXN0IGluIHRoZSBzZXQuXHJcbiAqXHJcbiAqIFRoZXJlZm9yZSwgZm9yIGEgVVR4TyBzZXQgd2l0aCBhIGxhcmdlIGFtb3VudCBvZiBkdXN0LCB0aGVyZSdzIGEgaGlnaFxyXG4gKiBwcm9iYWJpbGl0eSB0aGF0IGEgcmFuZG9tIHN1YnNldCB3aWxsIGluY2x1ZGUgYSBsYXJnZSBhbW91bnQgb2YgZHVzdC5cclxuICpcclxuICogPT09IFByaW5jaXBsZSAyOiBDaGFuZ2UgTWFuYWdlbWVudFxyXG4gKlxyXG4gKiBJZGVhbGx5LCBjb2luIHNlbGVjdGlvbiBhbGdvcml0aG1zIHNob3VsZCwgb3ZlciB0aW1lLCBjcmVhdGUgYSBVVHhPIHNldCB0aGF0XHJcbiAqIGhhcyAvdXNlZnVsLyBvdXRwdXRzOiBvdXRwdXRzIHRoYXQgd2lsbCBhbGxvdyB1cyB0byBwcm9jZXNzIGZ1dHVyZSBwYXltZW50c1xyXG4gKiB3aXRoIGEgbWluaW11bSBudW1iZXIgb2YgaW5wdXRzLlxyXG4gKlxyXG4gKiBJZiBmb3IgZWFjaCBwYXltZW50IHJlcXVlc3Qgb2YgdmFsdWUgX18vdi9fXyB3ZSBjcmVhdGUgYSBjaGFuZ2Ugb3V0cHV0IG9mXHJcbiAqIC9yb3VnaGx5LyB0aGUgc2FtZSB2YWx1ZSBfXy92L19fLCB0aGVuIHdlIHdpbGwgZW5kIHVwIHdpdGggYSBkaXN0cmlidXRpb24gb2ZcclxuICogY2hhbmdlIHZhbHVlcyB0aGF0IG1hdGNoZXMgdGhlIHR5cGljYWwgdmFsdWUgZGlzdHJpYnV0aW9uIG9mIHBheW1lbnRcclxuICogcmVxdWVzdHMuXHJcbiAqXHJcbiAqID09PSBQcmluY2lwbGUgMzogUGVyZm9ybWFuY2UgTWFuYWdlbWVudFxyXG4gKlxyXG4gKiBTZWFyY2hpbmcgdGhlIFVUeE8gc2V0IGZvciBhZGRpdGlvbmFsIGVudHJpZXMgdG8gaW1wcm92ZSBvdXIgY2hhbmdlIG91dHB1dHNcclxuICogaXMgL29ubHkvIHVzZWZ1bCBpZiB0aGUgVVR4TyBzZXQgY29udGFpbnMgZW50cmllcyB0aGF0IGFyZSBzdWZmaWNpZW50bHlcclxuICogc21hbGwgZW5vdWdoLiBCdXQgaXQgaXMgcHJlY2lzZWx5IHdoZW4gdGhlIFVUeE8gc2V0IGNvbnRhaW5zIG1hbnkgc21hbGxcclxuICogZW50cmllcyB0aGF0IGl0IGlzIGxlc3MgbGlrZWx5IGZvciBhIHJhbmRvbWx5LWNob3NlbiBVVHhPIGVudHJ5IHRvIHB1c2ggdGhlXHJcbiAqIHRvdGFsIGFib3ZlIHRoZSB1cHBlciBib3VuZC5cclxuICovXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYge1ZhbHVlW119IEFtb3VudExpc3QgLSBMaXN0IG9mICdWYWx1ZScgb2JqZWN0XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHtUcmFuc2FjdGlvblVuc3BlbnRPdXRwdXRbXX0gVVR4T0xpc3QgLSBMaXN0IG9mIFVUeE9cclxuICovXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYge09iamVjdH0gVVR4T1NlbGVjdGlvbiAtIENvaW4gU2VsZWN0aW9uIGFsZ29yaXRobSBjb3JlIG9iamVjdFxyXG4gKiBAcHJvcGVydHkge1VUeE9MaXN0fSBzZWxlY3Rpb24gLSBBY2N1bXVsYXRlZCBVVHhPIHNldC5cclxuICogQHByb3BlcnR5IHtVVHhPTGlzdH0gcmVtYWluaW5nIC0gUmVtYWluaW5nIFVUeE8gc2V0LlxyXG4gKiBAcHJvcGVydHkge1VUeE9MaXN0fSBzdWJzZXQgLSBSZW1haW5pbmcgVVR4TyBzZXQuXHJcbiAqIEBwcm9wZXJ0eSB7VmFsdWV9IGFtb3VudCAtIFVUeE8gYW1vdW50IG9mIGVhY2ggcmVxdWVzdGVkIHRva2VuXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEltcHJvdmVSYW5nZSAtIEltcHJvdmVSYW5nZVxyXG4gKiBAcHJvcGVydHkge1ZhbHVlfSBpZGVhbCAtIFJlcXVlc3RlZCBhbW91bnQgKiAyXHJcbiAqIEBwcm9wZXJ0eSB7VmFsdWV9IG1heGltdW0gLSBSZXF1ZXN0ZWQgYW1vdW50ICogM1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBTZWxlY3Rpb25SZXN1bHQgLSBDb2luIFNlbGVjdGlvbiBhbGdvcml0aG0gcmV0dXJuXHJcbiAqIEBwcm9wZXJ0eSB7VVR4T0xpc3R9IGlucHV0IC0gQWNjdW11bGF0ZWQgVVR4TyBzZXQuXHJcbiAqIEBwcm9wZXJ0eSB7T3V0cHV0TGlzdH0gb3V0cHV0IC0gUmVxdWVzdGVkIG91dHB1dHMuXHJcbiAqIEBwcm9wZXJ0eSB7VVR4T0xpc3R9IHJlbWFpbmluZyAtIFJlbWFpbmluZyBVVHhPIHNldC5cclxuICogQHByb3BlcnR5IHtWYWx1ZX0gYW1vdW50IC0gVVR4TyBhbW91bnQgb2YgZWFjaCByZXF1ZXN0ZWQgdG9rZW5cclxuICogQHByb3BlcnR5IHtWYWx1ZX0gY2hhbmdlIC0gQWNjdW11bGF0ZWQgY2hhbmdlIGFtb3VudC5cclxuICovXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYge09iamVjdH0gUHJvdG9jb2xQYXJhbWV0ZXJzXHJcbiAqIEBwcm9wZXJ0eSB7aW50fSBtaW5VVHhPXHJcbiAqIEBwcm9wZXJ0eSB7aW50fSBtaW5GZWVBXHJcbiAqIEBwcm9wZXJ0eSB7aW50fSBtaW5GZWVCXHJcbiAqIEBwcm9wZXJ0eSB7aW50fSBtYXhUeFNpemVcclxuICovXHJcblxyXG4vKipcclxuICogQHR5cGUge1Byb3RvY29sUGFyYW1ldGVyc31cclxuICovXHJcbmxldCBwcm90b2NvbFBhcmFtZXRlcnMgPSBudWxsO1xyXG5cclxuLyoqXHJcbiAqIENvaW5TZWxlY3Rpb24gTW9kdWxlLlxyXG4gKiBAbW9kdWxlIHNyYy9saWIvQ29pblNlbGVjdGlvblxyXG4gKi9cclxuY29uc3QgQ29pblNlbGVjdGlvbiA9IHtcclxuICAvKipcclxuICAgKiBTZXQgcHJvdG9jb2wgcGFyYW1ldGVycyByZXF1aXJlZCBieSB0aGUgYWxnb3JpdGhtXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1pblVUeE9cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWluRmVlQVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtaW5GZWVCXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1heFR4U2l6ZVxyXG4gICAqL1xyXG4gIHNldFByb3RvY29sUGFyYW1ldGVyczogKG1pblVUeE8sIG1pbkZlZUEsIG1pbkZlZUIsIG1heFR4U2l6ZSkgPT4ge1xyXG4gICAgcHJvdG9jb2xQYXJhbWV0ZXJzID0ge1xyXG4gICAgICBtaW5VVHhPOiBtaW5VVHhPLFxyXG4gICAgICBtaW5GZWVBOiBtaW5GZWVBLFxyXG4gICAgICBtaW5GZWVCOiBtaW5GZWVCLFxyXG4gICAgICBtYXhUeFNpemU6IG1heFR4U2l6ZSxcclxuICAgIH07XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBSYW5kb20tSW1wcm92ZSBjb2luIHNlbGVjdGlvbiBhbGdvcml0aG1cclxuICAgKiBAcGFyYW0ge1VUeE9MaXN0fSBpbnB1dHMgLSBUaGUgc2V0IG9mIGlucHV0cyBhdmFpbGFibGUgZm9yIHNlbGVjdGlvbi5cclxuICAgKiBAcGFyYW0ge1RyYW5zYWN0aW9uT3V0cHV0c30gb3V0cHV0cyAtIFRoZSBzZXQgb2Ygb3V0cHV0cyByZXF1ZXN0ZWQgZm9yIHBheW1lbnQuXHJcbiAgICogQHBhcmFtIHtpbnR9IGxpbWl0IC0gQSBsaW1pdCBvbiB0aGUgbnVtYmVyIG9mIGlucHV0cyB0aGF0IGNhbiBiZSBzZWxlY3RlZC5cclxuICAgKiBAcmV0dXJuIHtTZWxlY3Rpb25SZXN1bHR9IC0gQ29pbiBTZWxlY3Rpb24gYWxnb3JpdGhtIHJldHVyblxyXG4gICAqL1xyXG4gIHJhbmRvbUltcHJvdmU6IGFzeW5jIChpbnB1dHMsIG91dHB1dHMsIGxpbWl0KSA9PiB7XHJcbiAgICBpZiAoIXByb3RvY29sUGFyYW1ldGVycylcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICdQcm90b2NvbCBwYXJhbWV0ZXJzIG5vdCBzZXQuIFVzZSBzZXRQcm90b2NvbFBhcmFtZXRlcnMoKS4nXHJcbiAgICAgICk7XHJcblxyXG4gICAgLy8gYXdhaXQgTG9hZGVyLmxvYWQoKTtcclxuXHJcbiAgICBjb25zdCBfbWluVVR4T1ZhbHVlID1cclxuICAgICAgQmlnSW50KG91dHB1dHMubGVuKCkpICogQmlnSW50KHByb3RvY29sUGFyYW1ldGVycy5taW5VVHhPKTtcclxuXHJcbiAgICAvKiogQHR5cGUge1VUeE9TZWxlY3Rpb259ICovXHJcbiAgICBsZXQgdXR4b1NlbGVjdGlvbiA9IHtcclxuICAgICAgc2VsZWN0aW9uOiBbXSxcclxuICAgICAgcmVtYWluaW5nOiBbLi4uaW5wdXRzXSwgLy8gU2hhbGxvdyBjb3B5XHJcbiAgICAgIHN1YnNldDogW10sXHJcbiAgICAgIGFtb3VudDogTG9hZGVyLkNhcmRhbm8uVmFsdWUubmV3KExvYWRlci5DYXJkYW5vLkJpZ051bS5mcm9tX3N0cignMCcpKSxcclxuICAgIH07XHJcblxyXG4gICAgbGV0IG1lcmdlZE91dHB1dHNBbW91bnRzID0gbWVyZ2VPdXRwdXRzQW1vdW50cyhvdXRwdXRzKTtcclxuXHJcbiAgICAvLyBFeHBsb2RlIGFtb3VudCBpbiBhbiBhcnJheSBvZiB1bmlxdWUgYXNzZXQgYW1vdW50IGZvciBjb21wYXJpc29uJ3Mgc2FrZVxyXG4gICAgbGV0IHNwbGl0T3V0cHV0c0Ftb3VudHMgPSBzcGxpdEFtb3VudHMobWVyZ2VkT3V0cHV0c0Ftb3VudHMpO1xyXG5cclxuICAgIC8vIFBoYXNlIDE6IFJhbmRvbVNlbGVjdFxyXG4gICAgc3BsaXRPdXRwdXRzQW1vdW50cy5mb3JFYWNoKChvdXRwdXQpID0+IHtcclxuICAgICAgY3JlYXRlU3ViU2V0KHV0eG9TZWxlY3Rpb24sIG91dHB1dCk7IC8vIE5hcnJvdyBkb3duIGZvciBOYXRUb2tlbiBVVHhPXHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHV0eG9TZWxlY3Rpb24gPSByYW5kb21TZWxlY3QoXHJcbiAgICAgICAgICBjbG9uZVVUeE9TZWxlY3Rpb24odXR4b1NlbGVjdGlvbiksIC8vIERlZXAgY29weSBpbiBjYXNlIG9mIGZhbGxiYWNrIG5lZWRlZFxyXG4gICAgICAgICAgb3V0cHV0LFxyXG4gICAgICAgICAgbGltaXQgLSB1dHhvU2VsZWN0aW9uLnNlbGVjdGlvbi5sZW5ndGgsXHJcbiAgICAgICAgICBfbWluVVR4T1ZhbHVlXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGlmIChlLm1lc3NhZ2UgPT09ICdJTlBVVF9MSU1JVF9FWENFRURFRCcpIHtcclxuICAgICAgICAgIC8vIExpbWl0IHJlYWNoZWQgOiBGYWxsYmFjayBvbiBEZXNjT3JkQWxnb1xyXG4gICAgICAgICAgdXR4b1NlbGVjdGlvbiA9IGRlc2NTZWxlY3QoXHJcbiAgICAgICAgICAgIHV0eG9TZWxlY3Rpb24sXHJcbiAgICAgICAgICAgIG91dHB1dCxcclxuICAgICAgICAgICAgbGltaXQgLSB1dHhvU2VsZWN0aW9uLnNlbGVjdGlvbi5sZW5ndGgsXHJcbiAgICAgICAgICAgIF9taW5VVHhPVmFsdWVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRocm93IGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBQaGFzZSAyOiBJbXByb3ZlXHJcbiAgICBzcGxpdE91dHB1dHNBbW91bnRzID0gc29ydEFtb3VudExpc3Qoc3BsaXRPdXRwdXRzQW1vdW50cyk7XHJcblxyXG4gICAgc3BsaXRPdXRwdXRzQW1vdW50cy5mb3JFYWNoKChvdXRwdXQpID0+IHtcclxuICAgICAgY3JlYXRlU3ViU2V0KHV0eG9TZWxlY3Rpb24sIG91dHB1dCk7IC8vIE5hcnJvdyBkb3duIGZvciBOYXRUb2tlbiBVVHhPXHJcblxyXG4gICAgICBsZXQgcmFuZ2UgPSB7fTtcclxuICAgICAgcmFuZ2UuaWRlYWwgPSBMb2FkZXIuQ2FyZGFuby5WYWx1ZS5uZXcoXHJcbiAgICAgICAgTG9hZGVyLkNhcmRhbm8uQmlnTnVtLmZyb21fc3RyKCcwJylcclxuICAgICAgKVxyXG4gICAgICAgIC5jaGVja2VkX2FkZChvdXRwdXQpXHJcbiAgICAgICAgLmNoZWNrZWRfYWRkKG91dHB1dCk7XHJcbiAgICAgIHJhbmdlLm1heGltdW0gPSBMb2FkZXIuQ2FyZGFuby5WYWx1ZS5uZXcoXHJcbiAgICAgICAgTG9hZGVyLkNhcmRhbm8uQmlnTnVtLmZyb21fc3RyKCcwJylcclxuICAgICAgKVxyXG4gICAgICAgIC5jaGVja2VkX2FkZChyYW5nZS5pZGVhbClcclxuICAgICAgICAuY2hlY2tlZF9hZGQob3V0cHV0KTtcclxuXHJcbiAgICAgIGltcHJvdmUoXHJcbiAgICAgICAgdXR4b1NlbGVjdGlvbixcclxuICAgICAgICBvdXRwdXQsXHJcbiAgICAgICAgbGltaXQgLSB1dHhvU2VsZWN0aW9uLnNlbGVjdGlvbi5sZW5ndGgsXHJcbiAgICAgICAgcmFuZ2VcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlucHV0OiB1dHhvU2VsZWN0aW9uLnNlbGVjdGlvbixcclxuICAgICAgb3V0cHV0OiBvdXRwdXRzLFxyXG4gICAgICByZW1haW5pbmc6IHV0eG9TZWxlY3Rpb24ucmVtYWluaW5nLFxyXG4gICAgICBhbW91bnQ6IHV0eG9TZWxlY3Rpb24uYW1vdW50LFxyXG4gICAgICBjaGFuZ2U6IHV0eG9TZWxlY3Rpb24uYW1vdW50LmNoZWNrZWRfc3ViKG1lcmdlZE91dHB1dHNBbW91bnRzKSxcclxuICAgIH07XHJcbiAgfSxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSYW5kb21seSBzZWxlY3QgZW5vdWdoIFVUeE8gdG8gZnVsZmlsbCByZXF1ZXN0ZWQgb3V0cHV0c1xyXG4gKiBAcGFyYW0ge1VUeE9TZWxlY3Rpb259IHV0eG9TZWxlY3Rpb24gLSBUaGUgc2V0IG9mIHNlbGVjdGVkL2F2YWlsYWJsZSBpbnB1dHMuXHJcbiAqIEBwYXJhbSB7VmFsdWV9IG91dHB1dEFtb3VudCAtIFNpbmdsZSBjb21waWxlZCBvdXRwdXQgcXR5IHJlcXVlc3RlZCBmb3IgcGF5bWVudC5cclxuICogQHBhcmFtIHtpbnR9IGxpbWl0IC0gQSBsaW1pdCBvbiB0aGUgbnVtYmVyIG9mIGlucHV0cyB0aGF0IGNhbiBiZSBzZWxlY3RlZC5cclxuICogQHBhcmFtIHtpbnR9IG1pblVUeE9WYWx1ZSAtIE5ldHdvcmsgcHJvdG9jb2wgJ21pblVUeE9WYWx1ZScgY3VycmVudCB2YWx1ZS5cclxuICogQHRocm93cyBJTlBVVF9MSU1JVF9FWENFRURFRCBpZiB0aGUgbnVtYmVyIG9mIHJhbmRvbWx5IHBpY2tlZCBpbnB1dHMgZXhjZWVkICdsaW1pdCcgcGFyYW1ldGVyLlxyXG4gKiBAdGhyb3dzIElOUFVUU19FWEhBVVNURUQgaWYgYWxsIFVUeE8gZG9lc24ndCBob2xkIGVub3VnaCBmdW5kcyB0byBwYXkgZm9yIG91dHB1dC5cclxuICogQHRocm93cyBNSU5fVVRYT19FUlJPUiBpZiBsb3ZlbGFjZSBjaGFuZ2UgaXMgdW5kZXIgJ21pblVUeE9WYWx1ZScgcGFyYW1ldGVyLlxyXG4gKiBAcmV0dXJuIHtVVHhPU2VsZWN0aW9ufSAtIFN1Y2Nlc3NmdWwgcmFuZG9tIHV0eG8gc2VsZWN0aW9uLlxyXG4gKi9cclxuZnVuY3Rpb24gcmFuZG9tU2VsZWN0KHV0eG9TZWxlY3Rpb24sIG91dHB1dEFtb3VudCwgbGltaXQsIG1pblVUeE9WYWx1ZSkge1xyXG4gIGxldCBuYkZyZWVVVHhPID0gdXR4b1NlbGVjdGlvbi5zdWJzZXQubGVuZ3RoO1xyXG4gIC8vIElmIHF1YW50aXR5IGlzIG1ldCwgcmV0dXJuIHN1YnNldCBpbnRvIHJlbWFpbmluZyBsaXN0IGFuZCBleGl0XHJcbiAgaWYgKFxyXG4gICAgaXNRdHlGdWxmaWxsZWQob3V0cHV0QW1vdW50LCB1dHhvU2VsZWN0aW9uLmFtb3VudCwgbWluVVR4T1ZhbHVlLCBuYkZyZWVVVHhPKVxyXG4gICkge1xyXG4gICAgdXR4b1NlbGVjdGlvbi5yZW1haW5pbmcgPSBbXHJcbiAgICAgIC4uLnV0eG9TZWxlY3Rpb24ucmVtYWluaW5nLFxyXG4gICAgICAuLi51dHhvU2VsZWN0aW9uLnN1YnNldCxcclxuICAgIF07XHJcbiAgICB1dHhvU2VsZWN0aW9uLnN1YnNldCA9IFtdO1xyXG4gICAgcmV0dXJuIHV0eG9TZWxlY3Rpb247XHJcbiAgfVxyXG5cclxuICBpZiAobGltaXQgPD0gMCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdJTlBVVF9MSU1JVF9FWENFRURFRCcpO1xyXG4gIH1cclxuXHJcbiAgaWYgKG5iRnJlZVVUeE8gPD0gMCkge1xyXG4gICAgaWYgKGlzUXR5RnVsZmlsbGVkKG91dHB1dEFtb3VudCwgdXR4b1NlbGVjdGlvbi5hbW91bnQsIDAsIDApKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTUlOX1VUWE9fRVJST1InKTtcclxuICAgIH1cclxuICAgIHRocm93IG5ldyBFcnJvcignSU5QVVRTX0VYSEFVU1RFRCcpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEB0eXBlIHtUcmFuc2FjdGlvblVuc3BlbnRPdXRwdXR9IHV0eG8gKi9cclxuICBsZXQgdXR4byA9IHV0eG9TZWxlY3Rpb24uc3Vic2V0XHJcbiAgICAuc3BsaWNlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5iRnJlZVVUeE8pLCAxKVxyXG4gICAgLnBvcCgpO1xyXG5cclxuICB1dHhvU2VsZWN0aW9uLnNlbGVjdGlvbi5wdXNoKHV0eG8pO1xyXG4gIHV0eG9TZWxlY3Rpb24uYW1vdW50ID0gYWRkQW1vdW50cyhcclxuICAgIHV0eG8ub3V0cHV0KCkuYW1vdW50KCksXHJcbiAgICB1dHhvU2VsZWN0aW9uLmFtb3VudFxyXG4gICk7XHJcblxyXG4gIHJldHVybiByYW5kb21TZWxlY3QodXR4b1NlbGVjdGlvbiwgb3V0cHV0QW1vdW50LCBsaW1pdCAtIDEsIG1pblVUeE9WYWx1ZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTZWxlY3QgZW5vdWdoIFVUeE8gaW4gREVTQyBvcmRlciB0byBmdWxmaWxsIHJlcXVlc3RlZCBvdXRwdXRzXHJcbiAqIEBwYXJhbSB7VVR4T1NlbGVjdGlvbn0gdXR4b1NlbGVjdGlvbiAtIFRoZSBzZXQgb2Ygc2VsZWN0ZWQvYXZhaWxhYmxlIGlucHV0cy5cclxuICogQHBhcmFtIHtWYWx1ZX0gb3V0cHV0QW1vdW50IC0gU2luZ2xlIGNvbXBpbGVkIG91dHB1dCBxdHkgcmVxdWVzdGVkIGZvciBwYXltZW50LlxyXG4gKiBAcGFyYW0ge2ludH0gbGltaXQgLSBBIGxpbWl0IG9uIHRoZSBudW1iZXIgb2YgaW5wdXRzIHRoYXQgY2FuIGJlIHNlbGVjdGVkLlxyXG4gKiBAcGFyYW0ge2ludH0gbWluVVR4T1ZhbHVlIC0gTmV0d29yayBwcm90b2NvbCAnbWluVVR4T1ZhbHVlJyBjdXJyZW50IHZhbHVlLlxyXG4gKiBAdGhyb3dzIElOUFVUX0xJTUlUX0VYQ0VFREVEIGlmIHRoZSBudW1iZXIgb2YgcmFuZG9tbHkgcGlja2VkIGlucHV0cyBleGNlZWQgJ2xpbWl0JyBwYXJhbWV0ZXIuXHJcbiAqIEB0aHJvd3MgSU5QVVRTX0VYSEFVU1RFRCBpZiBhbGwgVVR4TyBkb2Vzbid0IGhvbGQgZW5vdWdoIGZ1bmRzIHRvIHBheSBmb3Igb3V0cHV0LlxyXG4gKiBAdGhyb3dzIE1JTl9VVFhPX0VSUk9SIGlmIGxvdmVsYWNlIGNoYW5nZSBpcyB1bmRlciAnbWluVVR4T1ZhbHVlJyBwYXJhbWV0ZXIuXHJcbiAqIEByZXR1cm4ge1VUeE9TZWxlY3Rpb259IC0gU3VjY2Vzc2Z1bCByYW5kb20gdXR4byBzZWxlY3Rpb24uXHJcbiAqL1xyXG5mdW5jdGlvbiBkZXNjU2VsZWN0KHV0eG9TZWxlY3Rpb24sIG91dHB1dEFtb3VudCwgbGltaXQsIG1pblVUeE9WYWx1ZSkge1xyXG4gIC8vIFNvcnQgVVR4TyBzdWJzZXQgaW4gREVTQyBvcmRlciBmb3IgcmVxdWlyZWQgT3V0cHV0IHVuaXQgdHlwZVxyXG4gIHV0eG9TZWxlY3Rpb24uc3Vic2V0ID0gdXR4b1NlbGVjdGlvbi5zdWJzZXQuc29ydCgodXR4b0EsIHV0eG9CKSA9PlxyXG4gICAgdXR4b0Iub3V0cHV0KCkuYW1vdW50KCkuY29tcGFyZSh1dHhvQS5vdXRwdXQoKS5hbW91bnQoKSlcclxuICApO1xyXG5cclxuICBkbyB7XHJcbiAgICBpZiAobGltaXQgPD0gMCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lOUFVUX0xJTUlUX0VYQ0VFREVEJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHV0eG9TZWxlY3Rpb24uc3Vic2V0Lmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgIGlmIChpc1F0eUZ1bGZpbGxlZChvdXRwdXRBbW91bnQsIHV0eG9TZWxlY3Rpb24uYW1vdW50LCAwLCAwKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTUlOX1VUWE9fRVJST1InKTtcclxuICAgICAgfVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lOUFVUU19FWEhBVVNURUQnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQHR5cGUge1RyYW5zYWN0aW9uVW5zcGVudE91dHB1dH0gdXR4byAqL1xyXG4gICAgbGV0IHV0eG8gPSB1dHhvU2VsZWN0aW9uLnN1YnNldC5zcGxpY2UoMCwgMSkucG9wKCk7XHJcblxyXG4gICAgdXR4b1NlbGVjdGlvbi5zZWxlY3Rpb24ucHVzaCh1dHhvKTtcclxuICAgIHV0eG9TZWxlY3Rpb24uYW1vdW50ID0gYWRkQW1vdW50cyhcclxuICAgICAgdXR4by5vdXRwdXQoKS5hbW91bnQoKSxcclxuICAgICAgdXR4b1NlbGVjdGlvbi5hbW91bnRcclxuICAgICk7XHJcblxyXG4gICAgbGltaXQtLTtcclxuICB9IHdoaWxlIChcclxuICAgICFpc1F0eUZ1bGZpbGxlZChcclxuICAgICAgb3V0cHV0QW1vdW50LFxyXG4gICAgICB1dHhvU2VsZWN0aW9uLmFtb3VudCxcclxuICAgICAgbWluVVR4T1ZhbHVlLFxyXG4gICAgICB1dHhvU2VsZWN0aW9uLnN1YnNldC5sZW5ndGggLSAxXHJcbiAgICApXHJcbiAgKTtcclxuXHJcbiAgLy8gUXVhbnRpdHkgaXMgbWV0LCByZXR1cm4gc3Vic2V0IGludG8gcmVtYWluaW5nIGxpc3QgYW5kIHJldHVybiBzZWxlY3Rpb25cclxuICB1dHhvU2VsZWN0aW9uLnJlbWFpbmluZyA9IFtcclxuICAgIC4uLnV0eG9TZWxlY3Rpb24ucmVtYWluaW5nLFxyXG4gICAgLi4udXR4b1NlbGVjdGlvbi5zdWJzZXQsXHJcbiAgXTtcclxuICB1dHhvU2VsZWN0aW9uLnN1YnNldCA9IFtdO1xyXG5cclxuICByZXR1cm4gdXR4b1NlbGVjdGlvbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRyeSB0byBpbXByb3ZlIHNlbGVjdGlvbiBieSBpbmNyZWFzaW5nIGlucHV0IGFtb3VudCBpbiBbMngsM3hdIHJhbmdlLlxyXG4gKiBAcGFyYW0ge1VUeE9TZWxlY3Rpb259IHV0eG9TZWxlY3Rpb24gLSBUaGUgc2V0IG9mIHNlbGVjdGVkL2F2YWlsYWJsZSBpbnB1dHMuXHJcbiAqIEBwYXJhbSB7VmFsdWV9IG91dHB1dEFtb3VudCAtIFNpbmdsZSBjb21waWxlZCBvdXRwdXQgcXR5IHJlcXVlc3RlZCBmb3IgcGF5bWVudC5cclxuICogQHBhcmFtIHtpbnR9IGxpbWl0IC0gQSBsaW1pdCBvbiB0aGUgbnVtYmVyIG9mIGlucHV0cyB0aGF0IGNhbiBiZSBzZWxlY3RlZC5cclxuICogQHBhcmFtIHtJbXByb3ZlUmFuZ2V9IHJhbmdlIC0gSW1wcm92ZW1lbnQgcmFuZ2UgdGFyZ2V0IHZhbHVlc1xyXG4gKi9cclxuZnVuY3Rpb24gaW1wcm92ZSh1dHhvU2VsZWN0aW9uLCBvdXRwdXRBbW91bnQsIGxpbWl0LCByYW5nZSkge1xyXG4gIGxldCBuYkZyZWVVVHhPID0gdXR4b1NlbGVjdGlvbi5zdWJzZXQubGVuZ3RoO1xyXG5cclxuICBpZiAoXHJcbiAgICB1dHhvU2VsZWN0aW9uLmFtb3VudC5jb21wYXJlKHJhbmdlLmlkZWFsKSA+PSAwIHx8XHJcbiAgICBuYkZyZWVVVHhPIDw9IDAgfHxcclxuICAgIGxpbWl0IDw9IDBcclxuICApIHtcclxuICAgIC8vIFJldHVybiBzdWJzZXQgaW4gcmVtYWluaW5nXHJcbiAgICB1dHhvU2VsZWN0aW9uLnJlbWFpbmluZyA9IFtcclxuICAgICAgLi4udXR4b1NlbGVjdGlvbi5yZW1haW5pbmcsXHJcbiAgICAgIC4uLnV0eG9TZWxlY3Rpb24uc3Vic2V0LFxyXG4gICAgXTtcclxuICAgIHV0eG9TZWxlY3Rpb24uc3Vic2V0ID0gW107XHJcblxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqIEB0eXBlIHtUcmFuc2FjdGlvblVuc3BlbnRPdXRwdXR9IHV0eG8gKi9cclxuICBjb25zdCB1dHhvID0gdXR4b1NlbGVjdGlvbi5zdWJzZXRcclxuICAgIC5zcGxpY2UoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmJGcmVlVVR4TyksIDEpXHJcbiAgICAucG9wKCk7XHJcblxyXG4gIGNvbnN0IG5ld0Ftb3VudCA9IExvYWRlci5DYXJkYW5vLlZhbHVlLm5ldyhcclxuICAgIExvYWRlci5DYXJkYW5vLkJpZ051bS5mcm9tX3N0cignMCcpXHJcbiAgKVxyXG4gICAgLmNoZWNrZWRfYWRkKHV0eG8ub3V0cHV0KCkuYW1vdW50KCkpXHJcbiAgICAuY2hlY2tlZF9hZGQob3V0cHV0QW1vdW50KTtcclxuXHJcbiAgaWYgKFxyXG4gICAgYWJzKGdldEFtb3VudFZhbHVlKHJhbmdlLmlkZWFsKSAtIGdldEFtb3VudFZhbHVlKG5ld0Ftb3VudCkpIDxcclxuICAgICAgYWJzKGdldEFtb3VudFZhbHVlKHJhbmdlLmlkZWFsKSAtIGdldEFtb3VudFZhbHVlKG91dHB1dEFtb3VudCkpICYmXHJcbiAgICBuZXdBbW91bnQuY29tcGFyZShyYW5nZS5tYXhpbXVtKSA8PSAwXHJcbiAgKSB7XHJcbiAgICB1dHhvU2VsZWN0aW9uLnNlbGVjdGlvbi5wdXNoKHV0eG8pO1xyXG4gICAgdXR4b1NlbGVjdGlvbi5hbW91bnQgPSBhZGRBbW91bnRzKFxyXG4gICAgICB1dHhvLm91dHB1dCgpLmFtb3VudCgpLFxyXG4gICAgICB1dHhvU2VsZWN0aW9uLmFtb3VudFxyXG4gICAgKTtcclxuICAgIGxpbWl0LS07XHJcbiAgfSBlbHNlIHtcclxuICAgIHV0eG9TZWxlY3Rpb24ucmVtYWluaW5nLnB1c2godXR4byk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaW1wcm92ZSh1dHhvU2VsZWN0aW9uLCBvdXRwdXRBbW91bnQsIGxpbWl0LCByYW5nZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb21waWxlIGFsbCByZXF1aXJlZCBvdXRwdXRzIHRvIGEgZmxhdCBhbW91bnRzIGxpc3RcclxuICogQHBhcmFtIHtUcmFuc2FjdGlvbk91dHB1dHN9IG91dHB1dHMgLSBUaGUgc2V0IG9mIG91dHB1dHMgcmVxdWVzdGVkIGZvciBwYXltZW50LlxyXG4gKiBAcmV0dXJuIHtWYWx1ZX0gLSBUaGUgY29tcGlsZWQgc2V0IG9mIGFtb3VudHMgcmVxdWVzdGVkIGZvciBwYXltZW50LlxyXG4gKi9cclxuZnVuY3Rpb24gbWVyZ2VPdXRwdXRzQW1vdW50cyhvdXRwdXRzKSB7XHJcbiAgbGV0IGNvbXBpbGVkQW1vdW50TGlzdCA9IExvYWRlci5DYXJkYW5vLlZhbHVlLm5ldyhcclxuICAgIExvYWRlci5DYXJkYW5vLkJpZ051bS5mcm9tX3N0cignMCcpXHJcbiAgKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdXRwdXRzLmxlbigpOyBpKyspIHtcclxuICAgIGNvbXBpbGVkQW1vdW50TGlzdCA9IGFkZEFtb3VudHMoXHJcbiAgICAgIG91dHB1dHMuZ2V0KGkpLmFtb3VudCgpLFxyXG4gICAgICBjb21waWxlZEFtb3VudExpc3RcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29tcGlsZWRBbW91bnRMaXN0O1xyXG59XHJcblxyXG4vKipcclxuICogQWRkIHVwIGFuIEFtb3VudHMgTGlzdCB2YWx1ZXMgdG8gYW5vdGhlciBBbW91bnRzIExpc3RcclxuICogQHBhcmFtIHtWYWx1ZX0gYW1vdW50cyAtIFNldCBvZiBhbW91bnRzIHRvIGJlIGFkZGVkLlxyXG4gKiBAcGFyYW0ge1ZhbHVlfSBjb21waWxlZEFtb3VudHMgLSBUaGUgY29tcGlsZWQgc2V0IG9mIGFtb3VudHMuXHJcbiAqIEByZXR1cm4ge1ZhbHVlfVxyXG4gKi9cclxuZnVuY3Rpb24gYWRkQW1vdW50cyhhbW91bnRzLCBjb21waWxlZEFtb3VudHMpIHtcclxuICByZXR1cm4gY29tcGlsZWRBbW91bnRzLmNoZWNrZWRfYWRkKGFtb3VudHMpO1xyXG59XHJcblxyXG4vKipcclxuICogU3BsaXQgYW1vdW50cyBjb250YWluZWQgaW4gYSBzaW5nbGUge1ZhbHVlfSBvYmplY3QgaW4gc2VwYXJhdGUge1ZhbHVlfSBvYmplY3RzXHJcbiAqIEBwYXJhbSB7VmFsdWV9IGFtb3VudHMgLSBTZXQgb2YgYW1vdW50cyB0byBiZSBzcGxpdC5cclxuICogQHRocm93cyBNSU5fVVRYT19FUlJPUiBpZiBsb3ZlbGFjZSBjaGFuZ2UgaXMgdW5kZXIgJ21pblVUeE9WYWx1ZScgcGFyYW1ldGVyLlxyXG4gKiBAcmV0dXJuIHtBbW91bnRMaXN0fVxyXG4gKi9cclxuZnVuY3Rpb24gc3BsaXRBbW91bnRzKGFtb3VudHMpIHtcclxuICBsZXQgc3BsaXRBbW91bnRzID0gW107XHJcblxyXG4gIGlmIChhbW91bnRzLm11bHRpYXNzZXQoKSkge1xyXG4gICAgbGV0IG1BID0gYW1vdW50cy5tdWx0aWFzc2V0KCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtQS5rZXlzKCkubGVuKCk7IGkrKykge1xyXG4gICAgICBsZXQgc2NyaXB0SGFzaCA9IG1BLmtleXMoKS5nZXQoaSk7XHJcblxyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1BLmdldChzY3JpcHRIYXNoKS5rZXlzKCkubGVuKCk7IGorKykge1xyXG4gICAgICAgIGxldCBfYXNzZXRzID0gTG9hZGVyLkNhcmRhbm8uQXNzZXRzLm5ldygpO1xyXG4gICAgICAgIGxldCBhc3NldE5hbWUgPSBtQS5nZXQoc2NyaXB0SGFzaCkua2V5cygpLmdldChqKTtcclxuXHJcbiAgICAgICAgX2Fzc2V0cy5pbnNlcnQoXHJcbiAgICAgICAgICBMb2FkZXIuQ2FyZGFuby5Bc3NldE5hbWUuZnJvbV9ieXRlcyhhc3NldE5hbWUudG9fYnl0ZXMoKSksXHJcbiAgICAgICAgICBMb2FkZXIuQ2FyZGFuby5CaWdOdW0uZnJvbV9ieXRlcyhcclxuICAgICAgICAgICAgbUEuZ2V0KHNjcmlwdEhhc2gpLmdldChhc3NldE5hbWUpLnRvX2J5dGVzKClcclxuICAgICAgICAgIClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBsZXQgX211bHRpYXNzZXQgPSBMb2FkZXIuQ2FyZGFuby5NdWx0aUFzc2V0Lm5ldygpO1xyXG4gICAgICAgIF9tdWx0aWFzc2V0Lmluc2VydChcclxuICAgICAgICAgIExvYWRlci5DYXJkYW5vLlNjcmlwdEhhc2guZnJvbV9ieXRlcyhzY3JpcHRIYXNoLnRvX2J5dGVzKCkpLFxyXG4gICAgICAgICAgX2Fzc2V0c1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGV0IF92YWx1ZSA9IExvYWRlci5DYXJkYW5vLlZhbHVlLm5ldyhcclxuICAgICAgICAgIExvYWRlci5DYXJkYW5vLkJpZ051bS5mcm9tX3N0cignMCcpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBfdmFsdWUuc2V0X211bHRpYXNzZXQoX211bHRpYXNzZXQpO1xyXG5cclxuICAgICAgICBzcGxpdEFtb3VudHMucHVzaChfdmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBPcmRlciBhc3NldHMgYnkgcXR5IERFU0NcclxuICBzcGxpdEFtb3VudHMgPSBzb3J0QW1vdW50TGlzdChzcGxpdEFtb3VudHMsICdERVNDJyk7XHJcblxyXG4gIC8vIEluc3VyZSBsb3ZlbGFjZSBpcyBsYXN0IHRvIGFjY291bnQgZm9yIG1pbiBhZGEgcmVxdWlyZW1lbnRcclxuICBzcGxpdEFtb3VudHMucHVzaChcclxuICAgIExvYWRlci5DYXJkYW5vLlZhbHVlLm5ldyhcclxuICAgICAgTG9hZGVyLkNhcmRhbm8uQmlnTnVtLmZyb21fYnl0ZXMoYW1vdW50cy5jb2luKCkudG9fYnl0ZXMoKSlcclxuICAgIClcclxuICApO1xyXG5cclxuICByZXR1cm4gc3BsaXRBbW91bnRzO1xyXG59XHJcblxyXG4vKipcclxuICogU29ydCBhIG1pc21hdGNoZWQgQW1vdW50TGlzdCBBU0MvREVTQ1xyXG4gKiBAcGFyYW0ge0Ftb3VudExpc3R9IGFtb3VudExpc3QgLSBTZXQgb2YgbWlzbWF0Y2hlZCBhbW91bnRzIHRvIGJlIHNvcnRlZC5cclxuICogQHBhcmFtIHtzdHJpbmd9IFtzb3J0T3JkZXI9QVNDXSAtIE9yZGVyXHJcbiAqIEByZXR1cm4ge0Ftb3VudExpc3R9IC0gVGhlIHNvcnRlZCBBbW91bnRMaXN0XHJcbiAqL1xyXG5mdW5jdGlvbiBzb3J0QW1vdW50TGlzdChhbW91bnRMaXN0LCBzb3J0T3JkZXIgPSAnQVNDJykge1xyXG4gIHJldHVybiBhbW91bnRMaXN0LnNvcnQoKGEsIGIpID0+IHtcclxuICAgIGxldCBzb3J0SW50ID0gc29ydE9yZGVyID09PSAnREVTQycgPyBCaWdJbnQoLTEpIDogQmlnSW50KDEpO1xyXG4gICAgcmV0dXJuIE51bWJlcigoZ2V0QW1vdW50VmFsdWUoYSkgLSBnZXRBbW91bnRWYWx1ZShiKSkgKiBzb3J0SW50KTtcclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybiBCaWdJbnQgYW1vdW50IHZhbHVlXHJcbiAqIEBwYXJhbSBhbW91bnRcclxuICogQHJldHVybiB7YmlnaW50fVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0QW1vdW50VmFsdWUoYW1vdW50KSB7XHJcbiAgbGV0IHZhbCA9IEJpZ0ludCgwKTtcclxuICBsZXQgbG92ZWxhY2UgPSBCaWdJbnQoYW1vdW50LmNvaW4oKS50b19zdHIoKSk7XHJcblxyXG4gIGlmIChsb3ZlbGFjZSA+IDApIHtcclxuICAgIHZhbCA9IGxvdmVsYWNlO1xyXG4gIH0gZWxzZSBpZiAoYW1vdW50Lm11bHRpYXNzZXQoKSAmJiBhbW91bnQubXVsdGlhc3NldCgpLmxlbigpID4gMCkge1xyXG4gICAgbGV0IHNjcmlwdEhhc2ggPSBhbW91bnQubXVsdGlhc3NldCgpLmtleXMoKS5nZXQoMCk7XHJcbiAgICBsZXQgYXNzZXROYW1lID0gYW1vdW50Lm11bHRpYXNzZXQoKS5nZXQoc2NyaXB0SGFzaCkua2V5cygpLmdldCgwKTtcclxuICAgIHZhbCA9IEJpZ0ludChhbW91bnQubXVsdGlhc3NldCgpLmdldChzY3JpcHRIYXNoKS5nZXQoYXNzZXROYW1lKS50b19zdHIoKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdmFsO1xyXG59XHJcblxyXG4vKipcclxuICogTmFycm93IGRvd24gcmVtYWluaW5nIFVUeE8gc2V0IGluIGNhc2Ugb2YgbmF0aXZlIHRva2VuLCB1c2UgZnVsbCBzZXQgZm9yIGxvdmVsYWNlXHJcbiAqIEBwYXJhbSB7VVR4T1NlbGVjdGlvbn0gdXR4b1NlbGVjdGlvbiAtIFRoZSBzZXQgb2Ygc2VsZWN0ZWQvYXZhaWxhYmxlIGlucHV0cy5cclxuICogQHBhcmFtIHtWYWx1ZX0gb3V0cHV0IC0gU2luZ2xlIGNvbXBpbGVkIG91dHB1dCBxdHkgcmVxdWVzdGVkIGZvciBwYXltZW50LlxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlU3ViU2V0KHV0eG9TZWxlY3Rpb24sIG91dHB1dCkge1xyXG4gIGlmIChCaWdJbnQob3V0cHV0LmNvaW4oKS50b19zdHIoKSkgPCBCaWdJbnQoMSkpIHtcclxuICAgIHV0eG9TZWxlY3Rpb24ucmVtYWluaW5nLmZvckVhY2goKHV0eG8sIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChvdXRwdXQuY29tcGFyZSh1dHhvLm91dHB1dCgpLmFtb3VudCgpKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdXR4b1NlbGVjdGlvbi5zdWJzZXQucHVzaChcclxuICAgICAgICAgIHV0eG9TZWxlY3Rpb24ucmVtYWluaW5nLnNwbGljZShpbmRleCwgMSkucG9wKClcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgdXR4b1NlbGVjdGlvbi5zdWJzZXQgPSB1dHhvU2VsZWN0aW9uLnJlbWFpbmluZy5zcGxpY2UoXHJcbiAgICAgIDAsXHJcbiAgICAgIHV0eG9TZWxlY3Rpb24ucmVtYWluaW5nLmxlbmd0aFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJcyBRdWFudGl0eSBGdWxmaWxsZWQgQ29uZGl0aW9uIC0gSGFuZGxlICdtaW5VVHhPVmFsdWUnIHByb3RvY29sIHBhcmFtZXRlci5cclxuICogQHBhcmFtIHtWYWx1ZX0gb3V0cHV0QW1vdW50IC0gU2luZ2xlIGNvbXBpbGVkIG91dHB1dCBxdHkgcmVxdWVzdGVkIGZvciBwYXltZW50LlxyXG4gKiBAcGFyYW0ge1ZhbHVlfSBjdW11bGF0ZWRBbW91bnQgLSBTaW5nbGUgY29tcGlsZWQgYWNjdW11bGF0ZWQgVVR4TyBxdHkuXHJcbiAqIEBwYXJhbSB7aW50fSBtaW5VVHhPVmFsdWUgLSBOZXR3b3JrIHByb3RvY29sICdtaW5VVHhPVmFsdWUnIGN1cnJlbnQgdmFsdWUuXHJcbiAqIEBwYXJhbSB7aW50fSBuYkZyZWVVVHhPIC0gTnVtYmVyIG9mIGZyZWUgVVR4TyBhdmFpbGFibGUuXHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiBpc1F0eUZ1bGZpbGxlZChcclxuICBvdXRwdXRBbW91bnQsXHJcbiAgY3VtdWxhdGVkQW1vdW50LFxyXG4gIG1pblVUeE9WYWx1ZSxcclxuICBuYkZyZWVVVHhPXHJcbikge1xyXG4gIGxldCBhbW91bnQgPSBvdXRwdXRBbW91bnQ7XHJcblxyXG4gIGlmIChtaW5VVHhPVmFsdWUgJiYgQmlnSW50KG91dHB1dEFtb3VudC5jb2luKCkudG9fc3RyKCkpID4gMCkge1xyXG4gICAgbGV0IG1pbkFtb3VudCA9IExvYWRlci5DYXJkYW5vLlZhbHVlLm5ldyhcclxuICAgICAgTG9hZGVyLkNhcmRhbm8ubWluX2FkYV9yZXF1aXJlZChcclxuICAgICAgICBjdW11bGF0ZWRBbW91bnQsXHJcbiAgICAgICAgTG9hZGVyLkNhcmRhbm8uQmlnTnVtLmZyb21fc3RyKG1pblVUeE9WYWx1ZS50b1N0cmluZygpKVxyXG4gICAgICApXHJcbiAgICApO1xyXG5cclxuICAgIC8vIExvdmVsYWNlIG1pbiBhbW91bnQgdG8gY292ZXIgYXNzZXRzIGFuZCBudW1iZXIgb2Ygb3V0cHV0IG5lZWQgdG8gYmUgbWV0XHJcbiAgICBpZiAoY3VtdWxhdGVkQW1vdW50LmNvbXBhcmUobWluQW1vdW50KSA8IDApIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAvLyBJZiByZXF1ZXN0ZWQgTG92ZWxhY2UgbG93ZXIgdGhhbiBtaW5BbW91bnQsIHBsYW4gZm9yIGNoYW5nZVxyXG4gICAgaWYgKG91dHB1dEFtb3VudC5jb21wYXJlKG1pbkFtb3VudCkgPCAwKSB7XHJcbiAgICAgIGFtb3VudCA9IG1pbkFtb3VudC5jaGVja2VkX2FkZChcclxuICAgICAgICBMb2FkZXIuQ2FyZGFuby5WYWx1ZS5uZXcoXHJcbiAgICAgICAgICBMb2FkZXIuQ2FyZGFuby5CaWdOdW0uZnJvbV9zdHIocHJvdG9jb2xQYXJhbWV0ZXJzLm1pblVUeE8pXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRyeSBjb3ZlcmluZyB0aGUgbWF4IGZlZXNcclxuICAgIGlmIChuYkZyZWVVVHhPID4gMCkge1xyXG4gICAgICBsZXQgbWF4RmVlID1cclxuICAgICAgICBCaWdJbnQocHJvdG9jb2xQYXJhbWV0ZXJzLm1pbkZlZUEpICpcclxuICAgICAgICAgIEJpZ0ludChwcm90b2NvbFBhcmFtZXRlcnMubWF4VHhTaXplKSArXHJcbiAgICAgICAgQmlnSW50KHByb3RvY29sUGFyYW1ldGVycy5taW5GZWVCKTtcclxuXHJcbiAgICAgIG1heEZlZSA9IExvYWRlci5DYXJkYW5vLlZhbHVlLm5ldyhcclxuICAgICAgICBMb2FkZXIuQ2FyZGFuby5CaWdOdW0uZnJvbV9zdHIobWF4RmVlLnRvU3RyaW5nKCkpXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBhbW91bnQgPSBhbW91bnQuY2hlY2tlZF9hZGQobWF4RmVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBjdW11bGF0ZWRBbW91bnQuY29tcGFyZShhbW91bnQpID49IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gYSBkZWVwIGNvcHkgb2YgVVR4T1NlbGVjdGlvblxyXG4gKiBAcGFyYW0ge1VUeE9TZWxlY3Rpb259IHV0eG9TZWxlY3Rpb25cclxuICogQHJldHVybiB7VVR4T1NlbGVjdGlvbn0gQ2xvbmUgLSBEZWVwIGNvcHlcclxuICovXHJcbmZ1bmN0aW9uIGNsb25lVVR4T1NlbGVjdGlvbih1dHhvU2VsZWN0aW9uKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNlbGVjdGlvbjogY2xvbmVVVHhPTGlzdCh1dHhvU2VsZWN0aW9uLnNlbGVjdGlvbiksXHJcbiAgICByZW1haW5pbmc6IGNsb25lVVR4T0xpc3QodXR4b1NlbGVjdGlvbi5yZW1haW5pbmcpLFxyXG4gICAgc3Vic2V0OiBjbG9uZVVUeE9MaXN0KHV0eG9TZWxlY3Rpb24uc3Vic2V0KSxcclxuICAgIGFtb3VudDogY2xvbmVWYWx1ZSh1dHhvU2VsZWN0aW9uLmFtb3VudCksXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybiBhIGRlZXAgY29weSBvZiBhbiBVVHhPIExpc3RcclxuICogQHBhcmFtIHtVVHhPTGlzdH0gdXR4b0xpc3RcclxuICogQHJldHVybiB7VVR4T0xpc3R9IENvbmUgLSBEZWVwIGNvcHlcclxuICovXHJcbmNvbnN0IGNsb25lVVR4T0xpc3QgPSAodXR4b0xpc3QpID0+XHJcbiAgdXR4b0xpc3QubWFwKCh1dHhvKSA9PlxyXG4gICAgTG9hZGVyLkNhcmRhbm8uVHJhbnNhY3Rpb25VbnNwZW50T3V0cHV0LmZyb21fYnl0ZXModXR4by50b19ieXRlcygpKVxyXG4gICk7XHJcblxyXG4vKipcclxuICogUmV0dXJuIGEgZGVlcCBjb3B5IG9mIGEgVmFsdWUgb2JqZWN0XHJcbiAqIEBwYXJhbSB7VmFsdWV9IHZhbHVlXHJcbiAqIEByZXR1cm4ge1ZhbHVlfSBDb25lIC0gRGVlcCBjb3B5XHJcbiAqL1xyXG5jb25zdCBjbG9uZVZhbHVlID0gKHZhbHVlKSA9PiBMb2FkZXIuQ2FyZGFuby5WYWx1ZS5mcm9tX2J5dGVzKHZhbHVlLnRvX2J5dGVzKCkpO1xyXG5cclxuLy8gSGVscGVyXHJcbmZ1bmN0aW9uIGFicyhiaWcpIHtcclxuICByZXR1cm4gYmlnIDwgMCA/IGJpZyAqIEJpZ0ludCgtMSkgOiBiaWc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvaW5TZWxlY3Rpb247XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsIkZvcm1EYXRhIiwiQ29pblNlbGVjdGlvbiIsImNyZWF0ZVNlcnZlciIsIlNlcnZlciIsIndhbGxldF9hZGRyZXNzX2dsb2JhbCIsIm93bmVkX25mdHMiLCJTIiwiQXNzZXRGaW5nZXJwcmludCIsIl9CdWZmZXIiLCJCdWZmZXIiLCJoZXhUb0FzY2lpIiwiaGV4IiwiX2hleCIsInRvU3RyaW5nIiwic3RyIiwiaSIsImxlbmd0aCIsInN1YnN0ciIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInBhcnNlSW50IiwiYWRkcmVzc0hleCIsImNvbnNvbGUiLCJsb2ciLCJmcm9tIiwiY2FyZGFubyIsImdldFVzZWRBZGRyZXNzZXMiLCJhY3RpdmF0ZUNhcmRhbm8iLCJlcnJvciIsImVuYWJsZSIsInByb21pc2UiLCJhZGRyZXNzSGV4X0NvbiIsIm5mdHMiLCJ3YWxsZXRBZGRyZXNzIiwiQmFzZUFkZHJlc3MiLCJmcm9tX2FkZHJlc3MiLCJBZGRyZXNzIiwiZnJvbV9ieXRlcyIsInRvX2FkZHJlc3MiLCJ0b19iZWNoMzIiLCIkIiwidGV4dCIsImdldEJhbGFuY2UiLCJyYXdCYWxhbmNlIiwidmFsdWUiLCJWYWx1ZSIsImJhbGFuY2Vfc3RyX3JhdyIsImNvaW4iLCJ0b19zdHIiLCJtdWx0aWFzc2V0IiwibXVsdGlBc3NldHMiLCJrZXlzIiwiaiIsImxlbiIsInBvbGljeSIsImdldCIsInBvbGljeUFzc2V0cyIsImFzc2V0TmFtZXMiLCJrIiwicG9saWN5QXNzZXQiLCJxdWFudGl0eSIsImFzc2V0IiwidG9fYnl0ZXMiLCJuYW1lIiwiX3BvbGljeSIsInNsaWNlIiwiX25hbWUiLCJwcm9jZXNzIiwiZW52IiwiUE9MSUNZX0lEIiwibmZ0X25hbWUiLCJyZXBsYWNlIiwicHVzaCIsInVuaXQiLCJmaW5nZXJwcmludCIsImhpZGUiLCJlYWNoIiwia2V5IiwibnVtZXJpY19uYW1lIiwiZ2V0UHJvdG9jb2xQYXJhbWV0ZXJzIiwiSE9TVCIsImxvY2F0aW9uIiwib3JpZ2luIiwiQVBJX1VSTCIsImhlYWRlcnMiLCJQUk9KRUNUX0lEIiwidGhlbiIsInJlcyIsImxhdGVzdF9ibG9jayIsImRhdGEiLCJyZXNwb25zZSIsInNsb3RudW1iZXIiLCJzbG90IiwicCIsInN0YXR1cyIsIkVycm9yIiwibGluZWFyRmVlIiwiTGluZWFyRmVlIiwiQmlnTnVtIiwiZnJvbV9zdHIiLCJtaW5fZmVlX2EiLCJtaW5fZmVlX2IiLCJtaW5VdHhvIiwibWluX3V0eG8iLCJwb29sRGVwb3NpdCIsInBvb2xfZGVwb3NpdCIsImtleURlcG9zaXQiLCJrZXlfZGVwb3NpdCIsIm1heFR4U2l6ZSIsIm1heF90eF9zaXplIiwidHJpZ2dlclBheSIsInVzZXIiLCJhZGRyZXNzIiwiUkVDSVBJRU5UX0FERFJFU1MiLCJvZmZlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwYXkiLCJhZGRyIiwiYWRhQW1vdW50Iiwid2luZG93IiwicHJvdG9jb2xQYXJhbWV0ZXJzIiwibG92ZWxhY2UiLCJwYXJzZUZsb2F0IiwiZ2V0Q2hhbmdlQWRkcmVzcyIsInBheW1lbnRBZGRyIiwiZ2V0VXR4b3MiLCJyYXdVdHhvIiwidXR4b3MiLCJtYXAiLCJ1IiwiVHJhbnNhY3Rpb25VbnNwZW50T3V0cHV0Iiwib3V0cHV0cyIsIlRyYW5zYWN0aW9uT3V0cHV0cyIsImFkZCIsIlRyYW5zYWN0aW9uT3V0cHV0IiwiZnJvbV9iZWNoMzIiLCJNVUxUSUFTU0VUX1NJWkUiLCJWQUxVRV9TSVpFIiwidG90YWxBc3NldHMiLCJzZXRQcm90b2NvbFBhcmFtZXRlcnMiLCJjb2VmZmljaWVudCIsImNvbnN0YW50IiwicmFuZG9tSW1wcm92ZSIsInNlbGVjdGlvbiIsImlucHV0cyIsImlucHV0IiwidHhCdWlsZGVyIiwiVHJhbnNhY3Rpb25CdWlsZGVyIiwidXR4byIsImFkZF9pbnB1dCIsIm91dHB1dCIsImFtb3VudCIsImFkZF9vdXRwdXQiLCJjaGFuZ2UiLCJjaGFuZ2VNdWx0aUFzc2V0cyIsInBhcnRpYWxDaGFuZ2UiLCJwYXJ0aWFsTXVsdGlBc3NldHMiLCJNdWx0aUFzc2V0IiwicG9saWNpZXMiLCJtYWtlU3BsaXQiLCJhc3NldHMiLCJBc3NldHMiLCJpbnNlcnQiLCJjaGVja011bHRpQXNzZXRzIiwic2V0X211bHRpYXNzZXQiLCJtaW5BZGEiLCJtaW5fYWRhX3JlcXVpcmVkIiwic2V0X2NvaW4iLCJhZGRfY2hhbmdlX2lmX25lZWRlZCIsInRyYW5zYWN0aW9uIiwiVHJhbnNhY3Rpb24iLCJidWlsZCIsIlRyYW5zYWN0aW9uV2l0bmVzc1NldCIsInNpemUiLCJFUlJPUiIsInR4VG9vQmlnIiwic2lnblR4Iiwid2l0bmVzZXMiLCJzaWduZWRUeCIsImJvZHkiLCJzdWJtaXRUeCIsInR4aGFzaCIsIkxvYWRlciIsIkNhcmRhbm8iLCJtaW5VVHhPIiwibWluRmVlQSIsIm1pbkZlZUIiLCJsaW1pdCIsIl9taW5VVHhPVmFsdWUiLCJCaWdJbnQiLCJ1dHhvU2VsZWN0aW9uIiwicmVtYWluaW5nIiwic3Vic2V0IiwibWVyZ2VkT3V0cHV0c0Ftb3VudHMiLCJtZXJnZU91dHB1dHNBbW91bnRzIiwic3BsaXRPdXRwdXRzQW1vdW50cyIsInNwbGl0QW1vdW50cyIsImZvckVhY2giLCJjcmVhdGVTdWJTZXQiLCJyYW5kb21TZWxlY3QiLCJjbG9uZVVUeE9TZWxlY3Rpb24iLCJlIiwibWVzc2FnZSIsImRlc2NTZWxlY3QiLCJzb3J0QW1vdW50TGlzdCIsInJhbmdlIiwiaWRlYWwiLCJjaGVja2VkX2FkZCIsIm1heGltdW0iLCJpbXByb3ZlIiwiY2hlY2tlZF9zdWIiLCJvdXRwdXRBbW91bnQiLCJtaW5VVHhPVmFsdWUiLCJuYkZyZWVVVHhPIiwiaXNRdHlGdWxmaWxsZWQiLCJzcGxpY2UiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwb3AiLCJhZGRBbW91bnRzIiwic29ydCIsInV0eG9BIiwidXR4b0IiLCJjb21wYXJlIiwibmV3QW1vdW50IiwiYWJzIiwiZ2V0QW1vdW50VmFsdWUiLCJjb21waWxlZEFtb3VudExpc3QiLCJhbW91bnRzIiwiY29tcGlsZWRBbW91bnRzIiwibUEiLCJzY3JpcHRIYXNoIiwiX2Fzc2V0cyIsImFzc2V0TmFtZSIsIkFzc2V0TmFtZSIsIl9tdWx0aWFzc2V0IiwiU2NyaXB0SGFzaCIsIl92YWx1ZSIsImFtb3VudExpc3QiLCJzb3J0T3JkZXIiLCJhIiwiYiIsInNvcnRJbnQiLCJOdW1iZXIiLCJ2YWwiLCJpbmRleCIsInVuZGVmaW5lZCIsImN1bXVsYXRlZEFtb3VudCIsIm1pbkFtb3VudCIsIm1heEZlZSIsImNsb25lVVR4T0xpc3QiLCJjbG9uZVZhbHVlIiwidXR4b0xpc3QiLCJiaWciXSwic291cmNlUm9vdCI6IiJ9