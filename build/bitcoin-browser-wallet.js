// I18N

var i18n = {

    // EN
    'en': {
        'button': {
            'decrypt': 'DECRYPT',
            'cancel': 'CANCEL',
            'ok': 'OK',
            'confirm': 'CONFIRM'
        },
        'setup': {
            'generateNewAddress': ' Generate new Address',
            'importPrivateKey':  ' Import Private Key',
            'button': {
                'create': 'CREATE',
            },
            'error': {
                'runtime': {
                    'title': ' Error'
                },
                'passwordMismatch': {
                    'title': ' Password mismatch!',
                    'text': 'Make also sure to choose a secure password and remember it well.'
                },
                'invalidKey': {
                    'title': ' Invalid Private Key!',
                    'text': 'Your private key field is either empty or not a valid private key.'
                }
            },
            'info': {
                'setupHint': {
                    'title1': ' Key',
                    'text1': 'The private key will be encrypted using your password and stored in the Chrome sync storage (When you activated sync in Chrome\'s preferences, otherwise locally).',
                    'title2': 'Transactions',
                    'text2': 'Transactions will be send using the <a href="https://blockchain.info/en/api/blockchain_wallet_api" target="_blank">Blockchain Wallet API</a>, therefor your private key will be send to the blockchain.info server over HTTPS when making a payment.',
                    'title3': 'Note',
                    'text3': 'I recommend using this wallet only with small amounts of Bitcoin for day to day payments.'
                }
            }
        },
        'wallet': {
            'yourAddress': 'Your Address<br>',
            'availableAddresses': 'This website contains the following addresses',
            'button': {
                'send': 'SEND'
            },
            'error': {
                'invalidAddress': {
                    'title': ' Invalid Address',
                    'text': 'The receiving address doesn\'t seem to be a valid bitcoin address.'
                },
                'invalidAmount': {
                    'title': ' Invalid Amount',
                    'text': 'The amount you want to send must be a number and greater zero.<br>And use \'.\' as decimal separator.'
                },
                'transactionFailed': {
                    'title': ' Transaction failed',
                    'text': 'Your transaction could not be processed.'
                },
                'transactionRequestFailed': {
                    'title': ' Transaction request failed',
                    'text': 'The blockchain.info server couldn\'t be reached, please try again later.'
                },
                'passwordWrong': {
                    'title': ' Password Wrong!',
                    'text': 'The password you entered was wrong, please try again.'
                }
            },
            'info': {
                'noTransaction': {
                    'title': ' You didn\'t send any transaction yet!',
                    'text': 'Why not sending a donation for this project and see how it works?<br><a href="#" class="donate">17gH3YynN34VVRhwwrnEjfc31LnpP7rcTm</a>'
                },
                'noFunds': {
                    'title': ' Your Wallet is empty!',
                    'text1': 'Send some (milli) Bitcoin to your address to get started:<br><a href="#" class="walletAddress" target="_blank"></a>',
                    'text2': 'I recommend using this wallet not for your savings. Just add 10-100 USD which you will need for every day use.',
                    'text3': 'To change your balance to USD just click on the balance.'
                }
            }
        },
        'settings': {
            'credits': 'Copyright by Fabian Vogelsteller [<a href="http://frozeman.de" target="_blank">frozeman.de</a>]<br>This software is open source and licensed under MIT license.<br><br>'+
                        'Feedback: <a href="mailto:bitcoin@frozeman.de">bitcoin@frozeman.de</a><br>'+
                        'Bugs: <a href="http://github.com/frozeman/bitcoin-browser-wallet/issues" target="_blank">Github</a><br><br>'+
                        'To support this project please send some (milli) Bitcoin to <a href="#" class="donate">17gH3YynN34VVRhwwrnEjfc31LnpP7rcTm</a><br><br>'+
                        'This Wallet uses Google Analytics which are publicised so everybody can see its usage: <a href="http://www.seethestats.com/site/bitcoin-browser-wallet.com" target="_blank">seethestats.com</a><br>'+
                        '<i>The tracking code sits in the background script of this extension and can\'t access your wallet popup.</i>',

            'walletWillNotBeDeleted': 'Your wallet will <strong>not</strong> be deleted, yet.<br>First enter your password to decrypt your private key.',
            'decryptYourPrivateKey': 'Enter your password to decrypt your private key.',
            'privateKeyInfo': 'This is the important key of your wallet keep it safe and don\'t share it with anybody!',
            'deleteWalletInfoText': '<strong>This will permanently delete your public and private Wallet key!</strong><br>'+
                                    'Write down your private key for use with another wallet,<br>'+
                                    ' or move all your funds to another address before confirming!',
            'button': {
                'showPrivateKey': ' Show Privatekey',
                'deleteWallet': ' Delete/Reset Wallet',
            },
            'error': {
                'deletionFailed': {
                    'title': ' Wallet couldn\'t be deleted'
                }
            }
        },
        'sendConfirm': {
            'sendText': 'Send <span class="amount">0.0</span> to', // dont change the <span class="amount"></span>
            'feeHint': '0.0001 transaction fee will be add (required by the network).'
        },
        'success': {
            'transactionId': 'Transaction ID:'
        }
    },

    // DE
    'de': {
        'button': {
            'decrypt': 'ENTSCHLÜSSELN',
            'cancel': 'ABBRECHEN',
            'ok': 'OK',
            'confirm': 'BESTÄTIGEN'
        },
        'setup': {
            'generateNewAddress': ' Generiere neue Adresse',
            'importPrivateKey':  ' Importiere privaten Schlüssel',
            'button': {
                'create': 'ERSTELLEN',
            },
            'error': {
                'runtime': {
                    'title': ' Fehler'
                },
                'passwordMismatch': {
                    'title': ' Passwörter stimmen nicht überein!',
                    'text': 'Wähle außerdem eine sicheres Passwort und merke es dir gut.'
                },
                'invalidKey': {
                    'title': ' Ungültiger privater Schlüssel!',
                    'text': 'Dein privater Schlüssel ist entweder leer oder nicht gültig.'
                }
            },
            'info': {
                'setupHint': {
                    'title1': ' Schlüssel',
                    'text1': 'Dein privater Schlüssel wird mit Hilfe deines Passworts verschlüsselt in der Chrome Cloud gespeichert (D.h wenn du Chromes Sync-Feature in den Einstellungen eingeschaltet hast, ansonsten lokal).',
                    'title2': 'Überweisungen',
                    'text2': 'Überweisungen werden mit Hilfe der <a href="https://blockchain.info/en/api/blockchain_wallet_api" target="_blank">Blockchain Wallet API</a> gesendet. Aus diesem Grund wird dein privater Schlüssel über HTTPS an die blockchain.info server gesendet wenn du eine Überweisungen machst.',
                    'title3': 'Bemerkung',
                    'text3': 'Ich empfehle dieses Portemonnaie nicht deine Ersparnisse zu verwenden, sondern nur für kleinere Beträge die du für alltägliche Zwecke brauchst.'
                }
            }
        },
        'wallet': {
            'yourAddress': 'Deine Adresse<br>',
            'availableAddresses': 'Diese Webseite enthält folgende Adressen',
            'button': {
                'send': 'SENDEN'
            },
            'error': {
                'invalidAddress': {
                    'title': ' Ungültige Adresse',
                    'text': 'Die empfänger Adresse scheint keine gültige bitcoin Adresse zu sein.'
                },
                'invalidAmount': {
                    'title': ' Ungültiger Betrag',
                    'text': 'Der Betrag muss eine Zahl und größer als 0 sein.'
                },
                'transactionFailed': {
                    'title': ' Überweisung fehlgeschlagen',
                    'text': 'Deine Überweisung konnte nicht gesendet werden.'
                },
                'transactionRequestFailed': {
                    'title': ' Überweisungs Anfrage fehlgeschlagen',
                    'text': 'Der blockchain.info Server konnte nicht erreicht werden, bitte versuche es später noch einmal.'
                },
                'passwordWrong': {
                    'title': ' Passwort falsch!',
                    'text': 'Das Passwort welches du eingegeben hast ist falsch, bitte versuche es noch einmal.'
                }
            },
            'info': {
                'noTransaction': {
                    'title': ' Du hast bisher keine Überweisung gesendet!',
                    'text': 'Warum sendest du nicht einfach eine Spende an dieses Projekt, um zu sehen wie es funktioniert?<br><a href="#" class="donate">17gH3YynN34VVRhwwrnEjfc31LnpP7rcTm</a>'
                },
                'noFunds': {
                    'title': ' Dein Portemonnaie ist leer!',
                    'text1': 'Überweise ein paar (milli) Bitcoin an deine Adresse um anzufangen:<br><a href="#" class="walletAddress" target="_blank"></a>',
                    'text2': 'Ich empfehle diese Addresse nicht für deine Ersparnisse zu verwenden. Am besten du sendest nur soviel wie du auch in deinem Portemonnaie tragen würdest.',
                    'text3': 'Um deinen Kontostand in USD anzuzeigen klicke einfach darauf.'
                }
            }
        },
        'settings': {
            'credits': 'Copyright by Fabian Vogelsteller [<a href="http://frozeman.de" target="_blank">frozeman.de</a>]<br>This software is open source and licensed under MIT license.<br><br>'+
                        'Feedback: <a href="mailto:bitcoin@frozeman.de">bitcoin@frozeman.de</a><br>'+
                        'Bugs: <a href="http://github.com/frozeman/bitcoin-browser-wallet/issues" target="_blank">Github</a><br><br>'+
                        'Um dieses Projekt zu unterstützen sende einfach ein paar (milli) Bitcoin an <a href="#" class="donate">17gH3YynN34VVRhwwrnEjfc31LnpP7rcTm</a>'+
                        'Diese Software verwendet Google Analytics welche öffentlich zugänglich sind: <a href="http://www.seethestats.com/site/bitcoin-browser-wallet.com" target="_blank">seethestats.com</a>'+
                        '<i>Der Tracking-Code sitzt im background script der Erweiterung und kann nicht auf dein Wallet Popup zugreifen.</i>',
            
            'walletWillNotBeDeleted': 'Deine Schlüssel werden <strong>noch nicht</strong> gelöscht.<br>Entschlüssle bitte erst deinen privaten Schlüssel.',
            'decryptYourPrivateKey': 'Gib dein Passwort ein um deinen privaten Schlüssel zu entschlüsseln.',
            'privateKeyInfo': 'Dies ist der wichtigste Schlüssel deines Portemonnaies, passe gut darauf auf und zeige ihn zu niemanden!',
            'deleteWalletInfoText': '<strong>Dies wird deinen öffentlichen und privaten Schlüssel permanent löschen!</strong><br>'+
                                    'Schreibe deinen privaten Schlüssel auf um ihn mit einem anderen Portemonnaie zu verwenden,<br>'+
                                    ' oder sende alle Bitcoins zuerst zu einer anderen Adresse bevor du bestätigst!',
            'button': {
                'showPrivateKey': ' Zeige privaten Schlüssel',
                'deleteWallet': ' Lösche/Reset Portemonnaie',
            },
            'error': {
                'deletionFailed': {
                    'title': ' Portemonnaie konnte nicht gelöscht werden.'
                }
            }
        },
        'sendConfirm': {
            'sendText': 'Sende <span class="amount">0.0</span> an', // dont change the <span class="amount"></span>
            'feeHint': '0.0001 Transaktionsgebühr wird zudem hinzugefügt (vom Netzwerk benötigt).'
        },
        'success': {
            'transactionId': 'Transaktions ID:'
        }
    }
};;/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS=CryptoJS||function(u,p){var d={},l=d.lib={},s=function(){},t=l.Base={extend:function(a){s.prototype=this;var c=new s;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
r=l.WordArray=t.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=p?c:4*a.length},toString:function(a){return(a||v).stringify(this)},concat:function(a){var c=this.words,e=a.words,j=this.sigBytes;a=a.sigBytes;this.clamp();if(j%4)for(var k=0;k<a;k++)c[j+k>>>2]|=(e[k>>>2]>>>24-8*(k%4)&255)<<24-8*((j+k)%4);else if(65535<e.length)for(k=0;k<a;k+=4)c[j+k>>>2]=e[k>>>2];else c.push.apply(c,e);this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<
32-8*(c%4);a.length=u.ceil(c/4)},clone:function(){var a=t.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],e=0;e<a;e+=4)c.push(4294967296*u.random()|0);return new r.init(c,a)}}),w=d.enc={},v=w.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var e=[],j=0;j<a;j++){var k=c[j>>>2]>>>24-8*(j%4)&255;e.push((k>>>4).toString(16));e.push((k&15).toString(16))}return e.join("")},parse:function(a){for(var c=a.length,e=[],j=0;j<c;j+=2)e[j>>>3]|=parseInt(a.substr(j,
2),16)<<24-4*(j%8);return new r.init(e,c/2)}},b=w.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var e=[],j=0;j<a;j++)e.push(String.fromCharCode(c[j>>>2]>>>24-8*(j%4)&255));return e.join("")},parse:function(a){for(var c=a.length,e=[],j=0;j<c;j++)e[j>>>2]|=(a.charCodeAt(j)&255)<<24-8*(j%4);return new r.init(e,c)}},x=w.Utf8={stringify:function(a){try{return decodeURIComponent(escape(b.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data");}},parse:function(a){return b.parse(unescape(encodeURIComponent(a)))}},
q=l.BufferedBlockAlgorithm=t.extend({reset:function(){this._data=new r.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=x.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var c=this._data,e=c.words,j=c.sigBytes,k=this.blockSize,b=j/(4*k),b=a?u.ceil(b):u.max((b|0)-this._minBufferSize,0);a=b*k;j=u.min(4*a,j);if(a){for(var q=0;q<a;q+=k)this._doProcessBlock(e,q);q=e.splice(0,a);c.sigBytes-=j}return new r.init(q,j)},clone:function(){var a=t.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});l.Hasher=q.extend({cfg:t.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){q.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(b,e){return(new a.init(e)).finalize(b)}},_createHmacHelper:function(a){return function(b,e){return(new n.HMAC.init(a,
e)).finalize(b)}}});var n=d.algo={};return d}(Math);
(function(){var u=CryptoJS,p=u.lib.WordArray;u.enc.Base64={stringify:function(d){var l=d.words,p=d.sigBytes,t=this._map;d.clamp();d=[];for(var r=0;r<p;r+=3)for(var w=(l[r>>>2]>>>24-8*(r%4)&255)<<16|(l[r+1>>>2]>>>24-8*((r+1)%4)&255)<<8|l[r+2>>>2]>>>24-8*((r+2)%4)&255,v=0;4>v&&r+0.75*v<p;v++)d.push(t.charAt(w>>>6*(3-v)&63));if(l=t.charAt(64))for(;d.length%4;)d.push(l);return d.join("")},parse:function(d){var l=d.length,s=this._map,t=s.charAt(64);t&&(t=d.indexOf(t),-1!=t&&(l=t));for(var t=[],r=0,w=0;w<
l;w++)if(w%4){var v=s.indexOf(d.charAt(w-1))<<2*(w%4),b=s.indexOf(d.charAt(w))>>>6-2*(w%4);t[r>>>2]|=(v|b)<<24-8*(r%4);r++}return p.create(t,r)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}})();
(function(u){function p(b,n,a,c,e,j,k){b=b+(n&a|~n&c)+e+k;return(b<<j|b>>>32-j)+n}function d(b,n,a,c,e,j,k){b=b+(n&c|a&~c)+e+k;return(b<<j|b>>>32-j)+n}function l(b,n,a,c,e,j,k){b=b+(n^a^c)+e+k;return(b<<j|b>>>32-j)+n}function s(b,n,a,c,e,j,k){b=b+(a^(n|~c))+e+k;return(b<<j|b>>>32-j)+n}for(var t=CryptoJS,r=t.lib,w=r.WordArray,v=r.Hasher,r=t.algo,b=[],x=0;64>x;x++)b[x]=4294967296*u.abs(u.sin(x+1))|0;r=r.MD5=v.extend({_doReset:function(){this._hash=new w.init([1732584193,4023233417,2562383102,271733878])},
_doProcessBlock:function(q,n){for(var a=0;16>a;a++){var c=n+a,e=q[c];q[c]=(e<<8|e>>>24)&16711935|(e<<24|e>>>8)&4278255360}var a=this._hash.words,c=q[n+0],e=q[n+1],j=q[n+2],k=q[n+3],z=q[n+4],r=q[n+5],t=q[n+6],w=q[n+7],v=q[n+8],A=q[n+9],B=q[n+10],C=q[n+11],u=q[n+12],D=q[n+13],E=q[n+14],x=q[n+15],f=a[0],m=a[1],g=a[2],h=a[3],f=p(f,m,g,h,c,7,b[0]),h=p(h,f,m,g,e,12,b[1]),g=p(g,h,f,m,j,17,b[2]),m=p(m,g,h,f,k,22,b[3]),f=p(f,m,g,h,z,7,b[4]),h=p(h,f,m,g,r,12,b[5]),g=p(g,h,f,m,t,17,b[6]),m=p(m,g,h,f,w,22,b[7]),
f=p(f,m,g,h,v,7,b[8]),h=p(h,f,m,g,A,12,b[9]),g=p(g,h,f,m,B,17,b[10]),m=p(m,g,h,f,C,22,b[11]),f=p(f,m,g,h,u,7,b[12]),h=p(h,f,m,g,D,12,b[13]),g=p(g,h,f,m,E,17,b[14]),m=p(m,g,h,f,x,22,b[15]),f=d(f,m,g,h,e,5,b[16]),h=d(h,f,m,g,t,9,b[17]),g=d(g,h,f,m,C,14,b[18]),m=d(m,g,h,f,c,20,b[19]),f=d(f,m,g,h,r,5,b[20]),h=d(h,f,m,g,B,9,b[21]),g=d(g,h,f,m,x,14,b[22]),m=d(m,g,h,f,z,20,b[23]),f=d(f,m,g,h,A,5,b[24]),h=d(h,f,m,g,E,9,b[25]),g=d(g,h,f,m,k,14,b[26]),m=d(m,g,h,f,v,20,b[27]),f=d(f,m,g,h,D,5,b[28]),h=d(h,f,
m,g,j,9,b[29]),g=d(g,h,f,m,w,14,b[30]),m=d(m,g,h,f,u,20,b[31]),f=l(f,m,g,h,r,4,b[32]),h=l(h,f,m,g,v,11,b[33]),g=l(g,h,f,m,C,16,b[34]),m=l(m,g,h,f,E,23,b[35]),f=l(f,m,g,h,e,4,b[36]),h=l(h,f,m,g,z,11,b[37]),g=l(g,h,f,m,w,16,b[38]),m=l(m,g,h,f,B,23,b[39]),f=l(f,m,g,h,D,4,b[40]),h=l(h,f,m,g,c,11,b[41]),g=l(g,h,f,m,k,16,b[42]),m=l(m,g,h,f,t,23,b[43]),f=l(f,m,g,h,A,4,b[44]),h=l(h,f,m,g,u,11,b[45]),g=l(g,h,f,m,x,16,b[46]),m=l(m,g,h,f,j,23,b[47]),f=s(f,m,g,h,c,6,b[48]),h=s(h,f,m,g,w,10,b[49]),g=s(g,h,f,m,
E,15,b[50]),m=s(m,g,h,f,r,21,b[51]),f=s(f,m,g,h,u,6,b[52]),h=s(h,f,m,g,k,10,b[53]),g=s(g,h,f,m,B,15,b[54]),m=s(m,g,h,f,e,21,b[55]),f=s(f,m,g,h,v,6,b[56]),h=s(h,f,m,g,x,10,b[57]),g=s(g,h,f,m,t,15,b[58]),m=s(m,g,h,f,D,21,b[59]),f=s(f,m,g,h,z,6,b[60]),h=s(h,f,m,g,C,10,b[61]),g=s(g,h,f,m,j,15,b[62]),m=s(m,g,h,f,A,21,b[63]);a[0]=a[0]+f|0;a[1]=a[1]+m|0;a[2]=a[2]+g|0;a[3]=a[3]+h|0},_doFinalize:function(){var b=this._data,n=b.words,a=8*this._nDataBytes,c=8*b.sigBytes;n[c>>>5]|=128<<24-c%32;var e=u.floor(a/
4294967296);n[(c+64>>>9<<4)+15]=(e<<8|e>>>24)&16711935|(e<<24|e>>>8)&4278255360;n[(c+64>>>9<<4)+14]=(a<<8|a>>>24)&16711935|(a<<24|a>>>8)&4278255360;b.sigBytes=4*(n.length+1);this._process();b=this._hash;n=b.words;for(a=0;4>a;a++)c=n[a],n[a]=(c<<8|c>>>24)&16711935|(c<<24|c>>>8)&4278255360;return b},clone:function(){var b=v.clone.call(this);b._hash=this._hash.clone();return b}});t.MD5=v._createHelper(r);t.HmacMD5=v._createHmacHelper(r)})(Math);
(function(){var u=CryptoJS,p=u.lib,d=p.Base,l=p.WordArray,p=u.algo,s=p.EvpKDF=d.extend({cfg:d.extend({keySize:4,hasher:p.MD5,iterations:1}),init:function(d){this.cfg=this.cfg.extend(d)},compute:function(d,r){for(var p=this.cfg,s=p.hasher.create(),b=l.create(),u=b.words,q=p.keySize,p=p.iterations;u.length<q;){n&&s.update(n);var n=s.update(d).finalize(r);s.reset();for(var a=1;a<p;a++)n=s.finalize(n),s.reset();b.concat(n)}b.sigBytes=4*q;return b}});u.EvpKDF=function(d,l,p){return s.create(p).compute(d,
l)}})();
CryptoJS.lib.Cipher||function(u){var p=CryptoJS,d=p.lib,l=d.Base,s=d.WordArray,t=d.BufferedBlockAlgorithm,r=p.enc.Base64,w=p.algo.EvpKDF,v=d.Cipher=t.extend({cfg:l.extend(),createEncryptor:function(e,a){return this.create(this._ENC_XFORM_MODE,e,a)},createDecryptor:function(e,a){return this.create(this._DEC_XFORM_MODE,e,a)},init:function(e,a,b){this.cfg=this.cfg.extend(b);this._xformMode=e;this._key=a;this.reset()},reset:function(){t.reset.call(this);this._doReset()},process:function(e){this._append(e);return this._process()},
finalize:function(e){e&&this._append(e);return this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(e){return{encrypt:function(b,k,d){return("string"==typeof k?c:a).encrypt(e,b,k,d)},decrypt:function(b,k,d){return("string"==typeof k?c:a).decrypt(e,b,k,d)}}}});d.StreamCipher=v.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var b=p.mode={},x=function(e,a,b){var c=this._iv;c?this._iv=u:c=this._prevBlock;for(var d=0;d<b;d++)e[a+d]^=
c[d]},q=(d.BlockCipherMode=l.extend({createEncryptor:function(e,a){return this.Encryptor.create(e,a)},createDecryptor:function(e,a){return this.Decryptor.create(e,a)},init:function(e,a){this._cipher=e;this._iv=a}})).extend();q.Encryptor=q.extend({processBlock:function(e,a){var b=this._cipher,c=b.blockSize;x.call(this,e,a,c);b.encryptBlock(e,a);this._prevBlock=e.slice(a,a+c)}});q.Decryptor=q.extend({processBlock:function(e,a){var b=this._cipher,c=b.blockSize,d=e.slice(a,a+c);b.decryptBlock(e,a);x.call(this,
e,a,c);this._prevBlock=d}});b=b.CBC=q;q=(p.pad={}).Pkcs7={pad:function(a,b){for(var c=4*b,c=c-a.sigBytes%c,d=c<<24|c<<16|c<<8|c,l=[],n=0;n<c;n+=4)l.push(d);c=s.create(l,c);a.concat(c)},unpad:function(a){a.sigBytes-=a.words[a.sigBytes-1>>>2]&255}};d.BlockCipher=v.extend({cfg:v.cfg.extend({mode:b,padding:q}),reset:function(){v.reset.call(this);var a=this.cfg,b=a.iv,a=a.mode;if(this._xformMode==this._ENC_XFORM_MODE)var c=a.createEncryptor;else c=a.createDecryptor,this._minBufferSize=1;this._mode=c.call(a,
this,b&&b.words)},_doProcessBlock:function(a,b){this._mode.processBlock(a,b)},_doFinalize:function(){var a=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){a.pad(this._data,this.blockSize);var b=this._process(!0)}else b=this._process(!0),a.unpad(b);return b},blockSize:4});var n=d.CipherParams=l.extend({init:function(a){this.mixIn(a)},toString:function(a){return(a||this.formatter).stringify(this)}}),b=(p.format={}).OpenSSL={stringify:function(a){var b=a.ciphertext;a=a.salt;return(a?s.create([1398893684,
1701076831]).concat(a).concat(b):b).toString(r)},parse:function(a){a=r.parse(a);var b=a.words;if(1398893684==b[0]&&1701076831==b[1]){var c=s.create(b.slice(2,4));b.splice(0,4);a.sigBytes-=16}return n.create({ciphertext:a,salt:c})}},a=d.SerializableCipher=l.extend({cfg:l.extend({format:b}),encrypt:function(a,b,c,d){d=this.cfg.extend(d);var l=a.createEncryptor(c,d);b=l.finalize(b);l=l.cfg;return n.create({ciphertext:b,key:c,iv:l.iv,algorithm:a,mode:l.mode,padding:l.padding,blockSize:a.blockSize,formatter:d.format})},
decrypt:function(a,b,c,d){d=this.cfg.extend(d);b=this._parse(b,d.format);return a.createDecryptor(c,d).finalize(b.ciphertext)},_parse:function(a,b){return"string"==typeof a?b.parse(a,this):a}}),p=(p.kdf={}).OpenSSL={execute:function(a,b,c,d){d||(d=s.random(8));a=w.create({keySize:b+c}).compute(a,d);c=s.create(a.words.slice(b),4*c);a.sigBytes=4*b;return n.create({key:a,iv:c,salt:d})}},c=d.PasswordBasedCipher=a.extend({cfg:a.cfg.extend({kdf:p}),encrypt:function(b,c,d,l){l=this.cfg.extend(l);d=l.kdf.execute(d,
b.keySize,b.ivSize);l.iv=d.iv;b=a.encrypt.call(this,b,c,d.key,l);b.mixIn(d);return b},decrypt:function(b,c,d,l){l=this.cfg.extend(l);c=this._parse(c,l.format);d=l.kdf.execute(d,b.keySize,b.ivSize,c.salt);l.iv=d.iv;return a.decrypt.call(this,b,c,d.key,l)}})}();
(function(){for(var u=CryptoJS,p=u.lib.BlockCipher,d=u.algo,l=[],s=[],t=[],r=[],w=[],v=[],b=[],x=[],q=[],n=[],a=[],c=0;256>c;c++)a[c]=128>c?c<<1:c<<1^283;for(var e=0,j=0,c=0;256>c;c++){var k=j^j<<1^j<<2^j<<3^j<<4,k=k>>>8^k&255^99;l[e]=k;s[k]=e;var z=a[e],F=a[z],G=a[F],y=257*a[k]^16843008*k;t[e]=y<<24|y>>>8;r[e]=y<<16|y>>>16;w[e]=y<<8|y>>>24;v[e]=y;y=16843009*G^65537*F^257*z^16843008*e;b[k]=y<<24|y>>>8;x[k]=y<<16|y>>>16;q[k]=y<<8|y>>>24;n[k]=y;e?(e=z^a[a[a[G^z]]],j^=a[a[j]]):e=j=1}var H=[0,1,2,4,8,
16,32,64,128,27,54],d=d.AES=p.extend({_doReset:function(){for(var a=this._key,c=a.words,d=a.sigBytes/4,a=4*((this._nRounds=d+6)+1),e=this._keySchedule=[],j=0;j<a;j++)if(j<d)e[j]=c[j];else{var k=e[j-1];j%d?6<d&&4==j%d&&(k=l[k>>>24]<<24|l[k>>>16&255]<<16|l[k>>>8&255]<<8|l[k&255]):(k=k<<8|k>>>24,k=l[k>>>24]<<24|l[k>>>16&255]<<16|l[k>>>8&255]<<8|l[k&255],k^=H[j/d|0]<<24);e[j]=e[j-d]^k}c=this._invKeySchedule=[];for(d=0;d<a;d++)j=a-d,k=d%4?e[j]:e[j-4],c[d]=4>d||4>=j?k:b[l[k>>>24]]^x[l[k>>>16&255]]^q[l[k>>>
8&255]]^n[l[k&255]]},encryptBlock:function(a,b){this._doCryptBlock(a,b,this._keySchedule,t,r,w,v,l)},decryptBlock:function(a,c){var d=a[c+1];a[c+1]=a[c+3];a[c+3]=d;this._doCryptBlock(a,c,this._invKeySchedule,b,x,q,n,s);d=a[c+1];a[c+1]=a[c+3];a[c+3]=d},_doCryptBlock:function(a,b,c,d,e,j,l,f){for(var m=this._nRounds,g=a[b]^c[0],h=a[b+1]^c[1],k=a[b+2]^c[2],n=a[b+3]^c[3],p=4,r=1;r<m;r++)var q=d[g>>>24]^e[h>>>16&255]^j[k>>>8&255]^l[n&255]^c[p++],s=d[h>>>24]^e[k>>>16&255]^j[n>>>8&255]^l[g&255]^c[p++],t=
d[k>>>24]^e[n>>>16&255]^j[g>>>8&255]^l[h&255]^c[p++],n=d[n>>>24]^e[g>>>16&255]^j[h>>>8&255]^l[k&255]^c[p++],g=q,h=s,k=t;q=(f[g>>>24]<<24|f[h>>>16&255]<<16|f[k>>>8&255]<<8|f[n&255])^c[p++];s=(f[h>>>24]<<24|f[k>>>16&255]<<16|f[n>>>8&255]<<8|f[g&255])^c[p++];t=(f[k>>>24]<<24|f[n>>>16&255]<<16|f[g>>>8&255]<<8|f[h&255])^c[p++];n=(f[n>>>24]<<24|f[g>>>16&255]<<16|f[h>>>8&255]<<8|f[k&255])^c[p++];a[b]=q;a[b+1]=s;a[b+2]=t;a[b+3]=n},keySize:8});u.AES=p._createHelper(d)})();
;/**
 * BitcoinJS-lib v0.1.0-default
 * Copyright (c) 2011 BitcoinJS Project
 * 
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the MIT license.
 */
(function(){var base64map="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Crypto=window.Crypto={},util=Crypto.util={rotl:function(n,b){return n<<b|n>>>32-b},rotr:function(n,b){return n<<32-b|n>>>b},endian:function(n){if(n.constructor==Number)return util.rotl(n,8)&16711935|util.rotl(n,24)&4278255360;for(var i=0;i<n.length;i++)n[i]=util.endian(n[i]);return n},randomBytes:function(n){var bytes=new Uint8Array(n),bs;crypto.getRandomValues(bytes);for(var bs=[];n>0;n--)bs.push(bytes[n-1]);return bs},bytesToWords:function(bytes){for(var words=[],i=0,b=0;i<bytes.length;i++,b+=8)words[b>>>5]|=bytes[i]<<24-b%32;return words},wordsToBytes:function(words){for(var bytes=[],b=0;b<words.length*32;b+=8)bytes.push(words[b>>>5]>>>24-b%32&255);return bytes},bytesToHex:function(bytes){for(var hex=[],i=0;i<bytes.length;i++)hex.push((bytes[i]>>>4).toString(16)),hex.push((bytes[i]&15).toString(16));return hex.join("")},hexToBytes:function(hex){for(var bytes=[],c=0;c<hex.length;c+=2)bytes.push(parseInt(hex.substr(c,2),16));return bytes},bytesToBase64:function(bytes){if(typeof btoa=="function")return btoa(Binary.bytesToString(bytes));for(var base64=[],i=0;i<bytes.length;i+=3){var triplet=bytes[i]<<16|bytes[i+1]<<8|bytes[i+2];for(var j=0;j<4;j++)i*8+j*6<=bytes.length*8?base64.push(base64map.charAt(triplet>>>6*(3-j)&63)):base64.push("=")}return base64.join("")},base64ToBytes:function(base64){if(typeof atob=="function")return Binary.stringToBytes(atob(base64));base64=base64.replace(/[^A-Z0-9+\/]/ig,"");for(var bytes=[],i=0,imod4=0;i<base64.length;imod4=++i%4){if(imod4==0)continue;bytes.push((base64map.indexOf(base64.charAt(i-1))&Math.pow(2,-2*imod4+8)-1)<<imod4*2|base64map.indexOf(base64.charAt(i))>>>6-imod4*2)}return bytes}};Crypto.mode={};var charenc=Crypto.charenc={},UTF8=charenc.UTF8={stringToBytes:function(str){return Binary.stringToBytes(unescape(encodeURIComponent(str)))},bytesToString:function(bytes){return decodeURIComponent(escape(Binary.bytesToString(bytes)))}},Binary=charenc.Binary={stringToBytes:function(str){for(var bytes=[],i=0;i<str.length;i++)bytes.push(str.charCodeAt(i));return bytes},bytesToString:function(bytes){for(var str=[],i=0;i<bytes.length;i++)str.push(String.fromCharCode(bytes[i]));return str.join("")}}})();
(function(){var C=Crypto,util=C.util,charenc=C.charenc,UTF8=charenc.UTF8,Binary=charenc.Binary,K=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],SHA256=C.SHA256=function(message,options){var digestbytes=util.wordsToBytes(SHA256._sha256(message));return options&&options.asBytes?digestbytes:options&&options.asString?Binary.bytesToString(digestbytes):util.bytesToHex(digestbytes)};SHA256._sha256=function(message){message.constructor==String&&(message=UTF8.stringToBytes(message));var m=util.bytesToWords(message),l=message.length*8,H=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],w=[],a,b,c,d,e,f,g,h,i,j,t1,t2;m[l>>5]|=128<<24-l%32,m[(l+64>>9<<4)+15]=l;for(var i=0;i<m.length;i+=16){a=H[0],b=H[1],c=H[2],d=H[3],e=H[4],f=H[5],g=H[6],h=H[7];for(var j=0;j<64;j++){if(j<16)w[j]=m[j+i];else{var gamma0x=w[j-15],gamma1x=w[j-2],gamma0=(gamma0x<<25|gamma0x>>>7)^(gamma0x<<14|gamma0x>>>18)^gamma0x>>>3,gamma1=(gamma1x<<15|gamma1x>>>17)^(gamma1x<<13|gamma1x>>>19)^gamma1x>>>10;w[j]=gamma0+(w[j-7]>>>0)+gamma1+(w[j-16]>>>0)}var ch=e&f^~e&g,maj=a&b^a&c^b&c,sigma0=(a<<30|a>>>2)^(a<<19|a>>>13)^(a<<10|a>>>22),sigma1=(e<<26|e>>>6)^(e<<21|e>>>11)^(e<<7|e>>>25);t1=(h>>>0)+sigma1+ch+K[j]+(w[j]>>>0),t2=sigma0+maj,h=g,g=f,f=e,e=d+t1,d=c,c=b,b=a,a=t1+t2}H[0]+=a,H[1]+=b,H[2]+=c,H[3]+=d,H[4]+=e,H[5]+=f,H[6]+=g,H[7]+=h}return H},SHA256._blocksize=16})();
(function(){function rmd160_f(j,x,y,z){return 0<=j&&j<=15?x^y^z:16<=j&&j<=31?x&y|~x&z:32<=j&&j<=47?(x|~y)^z:48<=j&&j<=63?x&z|y&~z:64<=j&&j<=79?x^(y|~z):"rmd160_f: j out of range"}function rmd160_K1(j){return 0<=j&&j<=15?0:16<=j&&j<=31?1518500249:32<=j&&j<=47?1859775393:48<=j&&j<=63?2400959708:64<=j&&j<=79?2840853838:"rmd160_K1: j out of range"}function rmd160_K2(j){return 0<=j&&j<=15?1352829926:16<=j&&j<=31?1548603684:32<=j&&j<=47?1836072691:48<=j&&j<=63?2053994217:64<=j&&j<=79?0:"rmd160_K2: j out of range"}function safe_add(x,y){var lsw=(x&65535)+(y&65535),msw=(x>>16)+(y>>16)+(lsw>>16);return msw<<16|lsw&65535}function bit_rol(num,cnt){return num<<cnt|num>>>32-cnt}var C=Crypto,util=C.util,charenc=C.charenc,UTF8=charenc.UTF8,Binary=charenc.Binary;util.bytesToLWords=function(bytes){var output=Array(bytes.length>>2);for(var i=0;i<output.length;i++)output[i]=0;for(var i=0;i<bytes.length*8;i+=8)output[i>>5]|=(bytes[i/8]&255)<<i%32;return output},util.lWordsToBytes=function(words){var output=[];for(var i=0;i<words.length*32;i+=8)output.push(words[i>>5]>>>i%32&255);return output};var RIPEMD160=C.RIPEMD160=function(message,options){var digestbytes=util.lWordsToBytes(RIPEMD160._rmd160(message));return options&&options.asBytes?digestbytes:options&&options.asString?Binary.bytesToString(digestbytes):util.bytesToHex(digestbytes)};RIPEMD160._rmd160=function(message){message.constructor==String&&(message=UTF8.stringToBytes(message));var x=util.bytesToLWords(message),len=message.length*8;x[len>>5]|=128<<len%32,x[(len+64>>>9<<4)+14]=len;var h0=1732584193,h1=4023233417,h2=2562383102,h3=271733878,h4=3285377520;for(var i=0;i<x.length;i+=16){var T,A1=h0,B1=h1,C1=h2,D1=h3,E1=h4,A2=h0,B2=h1,C2=h2,D2=h3,E2=h4;for(var j=0;j<=79;++j)T=safe_add(A1,rmd160_f(j,B1,C1,D1)),T=safe_add(T,x[i+rmd160_r1[j]]),T=safe_add(T,rmd160_K1(j)),T=safe_add(bit_rol(T,rmd160_s1[j]),E1),A1=E1,E1=D1,D1=bit_rol(C1,10),C1=B1,B1=T,T=safe_add(A2,rmd160_f(79-j,B2,C2,D2)),T=safe_add(T,x[i+rmd160_r2[j]]),T=safe_add(T,rmd160_K2(j)),T=safe_add(bit_rol(T,rmd160_s2[j]),E2),A2=E2,E2=D2,D2=bit_rol(C2,10),C2=B2,B2=T;T=safe_add(h1,safe_add(C1,D2)),h1=safe_add(h2,safe_add(D1,E2)),h2=safe_add(h3,safe_add(E1,A2)),h3=safe_add(h4,safe_add(A1,B2)),h4=safe_add(h0,safe_add(B1,C2)),h0=T}return[h0,h1,h2,h3,h4]};var rmd160_r1=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],rmd160_r2=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],rmd160_s1=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],rmd160_s2=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]})();
function Arcfour(){this.i=0,this.j=0,this.S=new Array}function ARC4init(key){var i,j,t;for(i=0;i<256;++i)this.S[i]=i;j=0;for(i=0;i<256;++i)j=j+this.S[i]+key[i%key.length]&255,t=this.S[i],this.S[i]=this.S[j],this.S[j]=t;this.i=0,this.j=0}function ARC4next(){var t;return this.i=this.i+1&255,this.j=this.j+this.S[this.i]&255,t=this.S[this.i],this.S[this.i]=this.S[this.j],this.S[this.j]=t,this.S[t+this.S[this.i]&255]}function prng_newstate(){return new Arcfour}Arcfour.prototype.init=ARC4init,Arcfour.prototype.next=ARC4next;var rng_psize=256;
function rng_seed_int(x){rng_pool[rng_pptr++]^=x&255,rng_pool[rng_pptr++]^=x>>8&255,rng_pool[rng_pptr++]^=x>>16&255,rng_pool[rng_pptr++]^=x>>24&255,rng_pptr>=rng_psize&&(rng_pptr-=rng_psize)}function rng_seed_time(){rng_seed_int((new Date).getTime())}function rng_get_byte(){if(rng_state==null){rng_seed_time(),rng_state=prng_newstate(),rng_state.init(rng_pool);for(rng_pptr=0;rng_pptr<rng_pool.length;++rng_pptr)rng_pool[rng_pptr]=0;rng_pptr=0}return rng_state.next()}function rng_get_bytes(ba){var i;for(i=0;i<ba.length;++i)ba[i]=rng_get_byte()}function SecureRandom(){}var rng_state,rng_pool,rng_pptr;if(rng_pool==null){rng_pool=new Array,rng_pptr=0;var t;if(navigator.appName=="Netscape"&&navigator.appVersion<"5"&&window.crypto){var z=window.crypto.random(32);for(t=0;t<z.length;++t)rng_pool[rng_pptr++]=z.charCodeAt(t)&255}while(rng_pptr<rng_psize)t=Math.floor(65536*Math.random()),rng_pool[rng_pptr++]=t>>>8,rng_pool[rng_pptr++]=t&255;rng_pptr=0,rng_seed_time()}SecureRandom.prototype.nextBytes=rng_get_bytes;
function BigInteger(a,b,c){a!=null&&("number"==typeof a?this.fromNumber(a,b,c):b==null&&"string"!=typeof a?this.fromString(a,256):this.fromString(a,b))}function nbi(){return new BigInteger(null)}function am1(i,x,w,j,c,n){while(--n>=0){var v=x*this[i++]+w[j]+c;c=Math.floor(v/67108864),w[j++]=v&67108863}return c}function am2(i,x,w,j,c,n){var xl=x&32767,xh=x>>15;while(--n>=0){var l=this[i]&32767,h=this[i++]>>15,m=xh*l+h*xl;l=xl*l+((m&32767)<<15)+w[j]+(c&1073741823),c=(l>>>30)+(m>>>15)+xh*h+(c>>>30),w[j++]=l&1073741823}return c}function am3(i,x,w,j,c,n){var xl=x&16383,xh=x>>14;while(--n>=0){var l=this[i]&16383,h=this[i++]>>14,m=xh*l+h*xl;l=xl*l+((m&16383)<<14)+w[j]+c,c=(l>>28)+(m>>14)+xh*h,w[j++]=l&268435455}return c}function int2char(n){return BI_RM.charAt(n)}function intAt(s,i){var c=BI_RC[s.charCodeAt(i)];return c==null?-1:c}function bnpCopyTo(r){for(var i=this.t-1;i>=0;--i)r[i]=this[i];r.t=this.t,r.s=this.s}function bnpFromInt(x){this.t=1,this.s=x<0?-1:0,x>0?this[0]=x:x<-1?this[0]=x+DV:this.t=0}function nbv(i){var r=nbi();return r.fromInt(i),r}function bnpFromString(s,b){var k;if(b==16)k=4;else if(b==8)k=3;else if(b==256)k=8;else if(b==2)k=1;else if(b==32)k=5;else{if(b!=4){this.fromRadix(s,b);return}k=2}this.t=0,this.s=0;var i=s.length,mi=!1,sh=0;while(--i>=0){var x=k==8?s[i]&255:intAt(s,i);if(x<0){s.charAt(i)=="-"&&(mi=!0);continue}mi=!1,sh==0?this[this.t++]=x:sh+k>this.DB?(this[this.t-1]|=(x&(1<<this.DB-sh)-1)<<sh,this[this.t++]=x>>this.DB-sh):this[this.t-1]|=x<<sh,sh+=k,sh>=this.DB&&(sh-=this.DB)}k==8&&(s[0]&128)!=0&&(this.s=-1,sh>0&&(this[this.t-1]|=(1<<this.DB-sh)-1<<sh)),this.clamp(),mi&&BigInteger.ZERO.subTo(this,this)}function bnpClamp(){var c=this.s&this.DM;while(this.t>0&&this[this.t-1]==c)--this.t}function bnToString(b){if(this.s<0)return"-"+this.negate().toString(b);var k;if(b==16)k=4;else if(b==8)k=3;else if(b==2)k=1;else if(b==32)k=5;else{if(b!=4)return this.toRadix(b);k=2}var km=(1<<k)-1,d,m=!1,r="",i=this.t,p=this.DB-i*this.DB%k;if(i-->0){p<this.DB&&(d=this[i]>>p)>0&&(m=!0,r=int2char(d));while(i>=0)p<k?(d=(this[i]&(1<<p)-1)<<k-p,d|=this[--i]>>(p+=this.DB-k)):(d=this[i]>>(p-=k)&km,p<=0&&(p+=this.DB,--i)),d>0&&(m=!0),m&&(r+=int2char(d))}return m?r:"0"}function bnNegate(){var r=nbi();return BigInteger.ZERO.subTo(this,r),r}function bnAbs(){return this.s<0?this.negate():this}function bnCompareTo(a){var r=this.s-a.s;if(r!=0)return r;var i=this.t;r=i-a.t;if(r!=0)return r;while(--i>=0)if((r=this[i]-a[i])!=0)return r;return 0}function nbits(x){var r=1,t;return(t=x>>>16)!=0&&(x=t,r+=16),(t=x>>8)!=0&&(x=t,r+=8),(t=x>>4)!=0&&(x=t,r+=4),(t=x>>2)!=0&&(x=t,r+=2),(t=x>>1)!=0&&(x=t,r+=1),r}function bnBitLength(){return this.t<=0?0:this.DB*(this.t-1)+nbits(this[this.t-1]^this.s&this.DM)}function bnpDLShiftTo(n,r){var i;for(i=this.t-1;i>=0;--i)r[i+n]=this[i];for(i=n-1;i>=0;--i)r[i]=0;r.t=this.t+n,r.s=this.s}function bnpDRShiftTo(n,r){for(var i=n;i<this.t;++i)r[i-n]=this[i];r.t=Math.max(this.t-n,0),r.s=this.s}function bnpLShiftTo(n,r){var bs=n%this.DB,cbs=this.DB-bs,bm=(1<<cbs)-1,ds=Math.floor(n/this.DB),c=this.s<<bs&this.DM,i;for(i=this.t-1;i>=0;--i)r[i+ds+1]=this[i]>>cbs|c,c=(this[i]&bm)<<bs;for(i=ds-1;i>=0;--i)r[i]=0;r[ds]=c,r.t=this.t+ds+1,r.s=this.s,r.clamp()}function bnpRShiftTo(n,r){r.s=this.s;var ds=Math.floor(n/this.DB);if(ds>=this.t){r.t=0;return}var bs=n%this.DB,cbs=this.DB-bs,bm=(1<<bs)-1;r[0]=this[ds]>>bs;for(var i=ds+1;i<this.t;++i)r[i-ds-1]|=(this[i]&bm)<<cbs,r[i-ds]=this[i]>>bs;bs>0&&(r[this.t-ds-1]|=(this.s&bm)<<cbs),r.t=this.t-ds,r.clamp()}function bnpSubTo(a,r){var i=0,c=0,m=Math.min(a.t,this.t);while(i<m)c+=this[i]-a[i],r[i++]=c&this.DM,c>>=this.DB;if(a.t<this.t){c-=a.s;while(i<this.t)c+=this[i],r[i++]=c&this.DM,c>>=this.DB;c+=this.s}else{c+=this.s;while(i<a.t)c-=a[i],r[i++]=c&this.DM,c>>=this.DB;c-=a.s}r.s=c<0?-1:0,c<-1?r[i++]=this.DV+c:c>0&&(r[i++]=c),r.t=i,r.clamp()}function bnpMultiplyTo(a,r){var x=this.abs(),y=a.abs(),i=x.t;r.t=i+y.t;while(--i>=0)r[i]=0;for(i=0;i<y.t;++i)r[i+x.t]=x.am(0,y[i],r,i,0,x.t);r.s=0,r.clamp(),this.s!=a.s&&BigInteger.ZERO.subTo(r,r)}function bnpSquareTo(r){var x=this.abs(),i=r.t=2*x.t;while(--i>=0)r[i]=0;for(i=0;i<x.t-1;++i){var c=x.am(i,x[i],r,2*i,0,1);(r[i+x.t]+=x.am(i+1,2*x[i],r,2*i+1,c,x.t-i-1))>=x.DV&&(r[i+x.t]-=x.DV,r[i+x.t+1]=1)}r.t>0&&(r[r.t-1]+=x.am(i,x[i],r,2*i,0,1)),r.s=0,r.clamp()}function bnpDivRemTo(m,q,r){var pm=m.abs();if(pm.t<=0)return;var pt=this.abs();if(pt.t<pm.t){q!=null&&q.fromInt(0),r!=null&&this.copyTo(r);return}r==null&&(r=nbi());var y=nbi(),ts=this.s,ms=m.s,nsh=this.DB-nbits(pm[pm.t-1]);nsh>0?(pm.lShiftTo(nsh,y),pt.lShiftTo(nsh,r)):(pm.copyTo(y),pt.copyTo(r));var ys=y.t,y0=y[ys-1];if(y0==0)return;var yt=y0*(1<<this.F1)+(ys>1?y[ys-2]>>this.F2:0),d1=this.FV/yt,d2=(1<<this.F1)/yt,e=1<<this.F2,i=r.t,j=i-ys,t=q==null?nbi():q;y.dlShiftTo(j,t),r.compareTo(t)>=0&&(r[r.t++]=1,r.subTo(t,r)),BigInteger.ONE.dlShiftTo(ys,t),t.subTo(y,y);while(y.t<ys)y[y.t++]=0;while(--j>=0){var qd=r[--i]==y0?this.DM:Math.floor(r[i]*d1+(r[i-1]+e)*d2);if((r[i]+=y.am(0,qd,r,j,0,ys))<qd){y.dlShiftTo(j,t),r.subTo(t,r);while(r[i]<--qd)r.subTo(t,r)}}q!=null&&(r.drShiftTo(ys,q),ts!=ms&&BigInteger.ZERO.subTo(q,q)),r.t=ys,r.clamp(),nsh>0&&r.rShiftTo(nsh,r),ts<0&&BigInteger.ZERO.subTo(r,r)}function bnMod(a){var r=nbi();return this.abs().divRemTo(a,null,r),this.s<0&&r.compareTo(BigInteger.ZERO)>0&&a.subTo(r,r),r}function Classic(m){this.m=m}function cConvert(x){return x.s<0||x.compareTo(this.m)>=0?x.mod(this.m):x}function cRevert(x){return x}function cReduce(x){x.divRemTo(this.m,null,x)}function cMulTo(x,y,r){x.multiplyTo(y,r),this.reduce(r)}function cSqrTo(x,r){x.squareTo(r),this.reduce(r)}function bnpInvDigit(){if(this.t<1)return 0;var x=this[0];if((x&1)==0)return 0;var y=x&3;return y=y*(2-(x&15)*y)&15,y=y*(2-(x&255)*y)&255,y=y*(2-((x&65535)*y&65535))&65535,y=y*(2-x*y%this.DV)%this.DV,y>0?this.DV-y:-y}function Montgomery(m){this.m=m,this.mp=m.invDigit(),this.mpl=this.mp&32767,this.mph=this.mp>>15,this.um=(1<<m.DB-15)-1,this.mt2=2*m.t}function montConvert(x){var r=nbi();return x.abs().dlShiftTo(this.m.t,r),r.divRemTo(this.m,null,r),x.s<0&&r.compareTo(BigInteger.ZERO)>0&&this.m.subTo(r,r),r}function montRevert(x){var r=nbi();return x.copyTo(r),this.reduce(r),r}function montReduce(x){while(x.t<=this.mt2)x[x.t++]=0;for(var i=0;i<this.m.t;++i){var j=x[i]&32767,u0=j*this.mpl+((j*this.mph+(x[i]>>15)*this.mpl&this.um)<<15)&x.DM;j=i+this.m.t,x[j]+=this.m.am(0,u0,x,i,0,this.m.t);while(x[j]>=x.DV)x[j]-=x.DV,x[++j]++}x.clamp(),x.drShiftTo(this.m.t,x),x.compareTo(this.m)>=0&&x.subTo(this.m,x)}function montSqrTo(x,r){x.squareTo(r),this.reduce(r)}function montMulTo(x,y,r){x.multiplyTo(y,r),this.reduce(r)}function bnpIsEven(){return(this.t>0?this[0]&1:this.s)==0}function bnpExp(e,z){if(e>4294967295||e<1)return BigInteger.ONE;var r=nbi(),r2=nbi(),g=z.convert(this),i=nbits(e)-1;g.copyTo(r);while(--i>=0){z.sqrTo(r,r2);if((e&1<<i)>0)z.mulTo(r2,g,r);else{var t=r;r=r2,r2=t}}return z.revert(r)}function bnModPowInt(e,m){var z;return e<256||m.isEven()?z=new Classic(m):z=new Montgomery(m),this.exp(e,z)}var dbits,canary=0xdeadbeefcafe,j_lm=(canary&16777215)==15715070;j_lm&&navigator.appName=="Microsoft Internet Explorer"?(BigInteger.prototype.am=am2,dbits=30):j_lm&&navigator.appName!="Netscape"?(BigInteger.prototype.am=am1,dbits=26):(BigInteger.prototype.am=am3,dbits=28),BigInteger.prototype.DB=dbits,BigInteger.prototype.DM=(1<<dbits)-1,BigInteger.prototype.DV=1<<dbits;var BI_FP=52;BigInteger.prototype.FV=Math.pow(2,BI_FP),BigInteger.prototype.F1=BI_FP-dbits,BigInteger.prototype.F2=2*dbits-BI_FP;var BI_RM="0123456789abcdefghijklmnopqrstuvwxyz",BI_RC=new Array,rr,vv;rr="0".charCodeAt(0);for(vv=0;vv<=9;++vv)BI_RC[rr++]=vv;rr="a".charCodeAt(0);for(vv=10;vv<36;++vv)BI_RC[rr++]=vv;rr="A".charCodeAt(0);for(vv=10;vv<36;++vv)BI_RC[rr++]=vv;Classic.prototype.convert=cConvert,Classic.prototype.revert=cRevert,Classic.prototype.reduce=cReduce,Classic.prototype.mulTo=cMulTo,Classic.prototype.sqrTo=cSqrTo,Montgomery.prototype.convert=montConvert,Montgomery.prototype.revert=montRevert,Montgomery.prototype.reduce=montReduce,Montgomery.prototype.mulTo=montMulTo,Montgomery.prototype.sqrTo=montSqrTo,BigInteger.prototype.copyTo=bnpCopyTo,BigInteger.prototype.fromInt=bnpFromInt,BigInteger.prototype.fromString=bnpFromString,BigInteger.prototype.clamp=bnpClamp,BigInteger.prototype.dlShiftTo=bnpDLShiftTo,BigInteger.prototype.drShiftTo=bnpDRShiftTo,BigInteger.prototype.lShiftTo=bnpLShiftTo,BigInteger.prototype.rShiftTo=bnpRShiftTo,BigInteger.prototype.subTo=bnpSubTo,BigInteger.prototype.multiplyTo=bnpMultiplyTo,BigInteger.prototype.squareTo=bnpSquareTo,BigInteger.prototype.divRemTo=bnpDivRemTo,BigInteger.prototype.invDigit=bnpInvDigit,BigInteger.prototype.isEven=bnpIsEven,BigInteger.prototype.exp=bnpExp,BigInteger.prototype.toString=bnToString,BigInteger.prototype.negate=bnNegate,BigInteger.prototype.abs=bnAbs,BigInteger.prototype.compareTo=bnCompareTo,BigInteger.prototype.bitLength=bnBitLength,BigInteger.prototype.mod=bnMod,BigInteger.prototype.modPowInt=bnModPowInt,BigInteger.ZERO=nbv(0),BigInteger.ONE=nbv(1);
function bnClone(){var r=nbi();return this.copyTo(r),r}function bnIntValue(){if(this.s<0){if(this.t==1)return this[0]-this.DV;if(this.t==0)return-1}else{if(this.t==1)return this[0];if(this.t==0)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function bnByteValue(){return this.t==0?this.s:this[0]<<24>>24}function bnShortValue(){return this.t==0?this.s:this[0]<<16>>16}function bnpChunkSize(r){return Math.floor(Math.LN2*this.DB/Math.log(r))}function bnSigNum(){return this.s<0?-1:this.t<=0||this.t==1&&this[0]<=0?0:1}function bnpToRadix(b){b==null&&(b=10);if(this.signum()==0||b<2||b>36)return"0";var cs=this.chunkSize(b),a=Math.pow(b,cs),d=nbv(a),y=nbi(),z=nbi(),r="";this.divRemTo(d,y,z);while(y.signum()>0)r=(a+z.intValue()).toString(b).substr(1)+r,y.divRemTo(d,y,z);return z.intValue().toString(b)+r}function bnpFromRadix(s,b){this.fromInt(0),b==null&&(b=10);var cs=this.chunkSize(b),d=Math.pow(b,cs),mi=!1,j=0,w=0;for(var i=0;i<s.length;++i){var x=intAt(s,i);if(x<0){s.charAt(i)=="-"&&this.signum()==0&&(mi=!0);continue}w=b*w+x,++j>=cs&&(this.dMultiply(d),this.dAddOffset(w,0),j=0,w=0)}j>0&&(this.dMultiply(Math.pow(b,j)),this.dAddOffset(w,0)),mi&&BigInteger.ZERO.subTo(this,this)}function bnpFromNumber(a,b,c){if("number"==typeof b)if(a<2)this.fromInt(1);else{this.fromNumber(a,c),this.testBit(a-1)||this.bitwiseTo(BigInteger.ONE.shiftLeft(a-1),op_or,this),this.isEven()&&this.dAddOffset(1,0);while(!this.isProbablePrime(b))this.dAddOffset(2,0),this.bitLength()>a&&this.subTo(BigInteger.ONE.shiftLeft(a-1),this)}else{var x=new Array,t=a&7;x.length=(a>>3)+1,b.nextBytes(x),t>0?x[0]&=(1<<t)-1:x[0]=0,this.fromString(x,256)}}function bnToByteArray(){var i=this.t,r=new Array;r[0]=this.s;var p=this.DB-i*this.DB%8,d,k=0;if(i-->0){p<this.DB&&(d=this[i]>>p)!=(this.s&this.DM)>>p&&(r[k++]=d|this.s<<this.DB-p);while(i>=0){p<8?(d=(this[i]&(1<<p)-1)<<8-p,d|=this[--i]>>(p+=this.DB-8)):(d=this[i]>>(p-=8)&255,p<=0&&(p+=this.DB,--i)),(d&128)!=0&&(d|=-256),k==0&&(this.s&128)!=(d&128)&&++k;if(k>0||d!=this.s)r[k++]=d}}return r}function bnEquals(a){return this.compareTo(a)==0}function bnMin(a){return this.compareTo(a)<0?this:a}function bnMax(a){return this.compareTo(a)>0?this:a}function bnpBitwiseTo(a,op,r){var i,f,m=Math.min(a.t,this.t);for(i=0;i<m;++i)r[i]=op(this[i],a[i]);if(a.t<this.t){f=a.s&this.DM;for(i=m;i<this.t;++i)r[i]=op(this[i],f);r.t=this.t}else{f=this.s&this.DM;for(i=m;i<a.t;++i)r[i]=op(f,a[i]);r.t=a.t}r.s=op(this.s,a.s),r.clamp()}function op_and(x,y){return x&y}function bnAnd(a){var r=nbi();return this.bitwiseTo(a,op_and,r),r}function op_or(x,y){return x|y}function bnOr(a){var r=nbi();return this.bitwiseTo(a,op_or,r),r}function op_xor(x,y){return x^y}function bnXor(a){var r=nbi();return this.bitwiseTo(a,op_xor,r),r}function op_andnot(x,y){return x&~y}function bnAndNot(a){var r=nbi();return this.bitwiseTo(a,op_andnot,r),r}function bnNot(){var r=nbi();for(var i=0;i<this.t;++i)r[i]=this.DM&~this[i];return r.t=this.t,r.s=~this.s,r}function bnShiftLeft(n){var r=nbi();return n<0?this.rShiftTo(-n,r):this.lShiftTo(n,r),r}function bnShiftRight(n){var r=nbi();return n<0?this.lShiftTo(-n,r):this.rShiftTo(n,r),r}function lbit(x){if(x==0)return-1;var r=0;return(x&65535)==0&&(x>>=16,r+=16),(x&255)==0&&(x>>=8,r+=8),(x&15)==0&&(x>>=4,r+=4),(x&3)==0&&(x>>=2,r+=2),(x&1)==0&&++r,r}function bnGetLowestSetBit(){for(var i=0;i<this.t;++i)if(this[i]!=0)return i*this.DB+lbit(this[i]);return this.s<0?this.t*this.DB:-1}function cbit(x){var r=0;while(x!=0)x&=x-1,++r;return r}function bnBitCount(){var r=0,x=this.s&this.DM;for(var i=0;i<this.t;++i)r+=cbit(this[i]^x);return r}function bnTestBit(n){var j=Math.floor(n/this.DB);return j>=this.t?this.s!=0:(this[j]&1<<n%this.DB)!=0}function bnpChangeBit(n,op){var r=BigInteger.ONE.shiftLeft(n);return this.bitwiseTo(r,op,r),r}function bnSetBit(n){return this.changeBit(n,op_or)}function bnClearBit(n){return this.changeBit(n,op_andnot)}function bnFlipBit(n){return this.changeBit(n,op_xor)}function bnpAddTo(a,r){var i=0,c=0,m=Math.min(a.t,this.t);while(i<m)c+=this[i]+a[i],r[i++]=c&this.DM,c>>=this.DB;if(a.t<this.t){c+=a.s;while(i<this.t)c+=this[i],r[i++]=c&this.DM,c>>=this.DB;c+=this.s}else{c+=this.s;while(i<a.t)c+=a[i],r[i++]=c&this.DM,c>>=this.DB;c+=a.s}r.s=c<0?-1:0,c>0?r[i++]=c:c<-1&&(r[i++]=this.DV+c),r.t=i,r.clamp()}function bnAdd(a){var r=nbi();return this.addTo(a,r),r}function bnSubtract(a){var r=nbi();return this.subTo(a,r),r}function bnMultiply(a){var r=nbi();return this.multiplyTo(a,r),r}function bnSquare(){var r=nbi();return this.squareTo(r),r}function bnDivide(a){var r=nbi();return this.divRemTo(a,r,null),r}function bnRemainder(a){var r=nbi();return this.divRemTo(a,null,r),r}function bnDivideAndRemainder(a){var q=nbi(),r=nbi();return this.divRemTo(a,q,r),new Array(q,r)}function bnpDMultiply(n){this[this.t]=this.am(0,n-1,this,0,0,this.t),++this.t,this.clamp()}function bnpDAddOffset(n,w){if(n==0)return;while(this.t<=w)this[this.t++]=0;this[w]+=n;while(this[w]>=this.DV)this[w]-=this.DV,++w>=this.t&&(this[this.t++]=0),++this[w]}function NullExp(){}function nNop(x){return x}function nMulTo(x,y,r){x.multiplyTo(y,r)}function nSqrTo(x,r){x.squareTo(r)}function bnPow(e){return this.exp(e,new NullExp)}function bnpMultiplyLowerTo(a,n,r){var i=Math.min(this.t+a.t,n);r.s=0,r.t=i;while(i>0)r[--i]=0;var j;for(j=r.t-this.t;i<j;++i)r[i+this.t]=this.am(0,a[i],r,i,0,this.t);for(j=Math.min(a.t,n);i<j;++i)this.am(0,a[i],r,i,0,n-i);r.clamp()}function bnpMultiplyUpperTo(a,n,r){--n;var i=r.t=this.t+a.t-n;r.s=0;while(--i>=0)r[i]=0;for(i=Math.max(n-this.t,0);i<a.t;++i)r[this.t+i-n]=this.am(n-i,a[i],r,0,0,this.t+i-n);r.clamp(),r.drShiftTo(1,r)}function Barrett(m){this.r2=nbi(),this.q3=nbi(),BigInteger.ONE.dlShiftTo(2*m.t,this.r2),this.mu=this.r2.divide(m),this.m=m}function barrettConvert(x){if(x.s<0||x.t>2*this.m.t)return x.mod(this.m);if(x.compareTo(this.m)<0)return x;var r=nbi();return x.copyTo(r),this.reduce(r),r}function barrettRevert(x){return x}function barrettReduce(x){x.drShiftTo(this.m.t-1,this.r2),x.t>this.m.t+1&&(x.t=this.m.t+1,x.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);while(x.compareTo(this.r2)<0)x.dAddOffset(1,this.m.t+1);x.subTo(this.r2,x);while(x.compareTo(this.m)>=0)x.subTo(this.m,x)}function barrettSqrTo(x,r){x.squareTo(r),this.reduce(r)}function barrettMulTo(x,y,r){x.multiplyTo(y,r),this.reduce(r)}function bnModPow(e,m){var i=e.bitLength(),k,r=nbv(1),z;if(i<=0)return r;i<18?k=1:i<48?k=3:i<144?k=4:i<768?k=5:k=6,i<8?z=new Classic(m):m.isEven()?z=new Barrett(m):z=new Montgomery(m);var g=new Array,n=3,k1=k-1,km=(1<<k)-1;g[1]=z.convert(this);if(k>1){var g2=nbi();z.sqrTo(g[1],g2);while(n<=km)g[n]=nbi(),z.mulTo(g2,g[n-2],g[n]),n+=2}var j=e.t-1,w,is1=!0,r2=nbi(),t;i=nbits(e[j])-1;while(j>=0){i>=k1?w=e[j]>>i-k1&km:(w=(e[j]&(1<<i+1)-1)<<k1-i,j>0&&(w|=e[j-1]>>this.DB+i-k1)),n=k;while((w&1)==0)w>>=1,--n;(i-=n)<0&&(i+=this.DB,--j);if(is1)g[w].copyTo(r),is1=!1;else{while(n>1)z.sqrTo(r,r2),z.sqrTo(r2,r),n-=2;n>0?z.sqrTo(r,r2):(t=r,r=r2,r2=t),z.mulTo(r2,g[w],r)}while(j>=0&&(e[j]&1<<i)==0)z.sqrTo(r,r2),t=r,r=r2,r2=t,--i<0&&(i=this.DB-1,--j)}return z.revert(r)}function bnGCD(a){var x=this.s<0?this.negate():this.clone(),y=a.s<0?a.negate():a.clone();if(x.compareTo(y)<0){var t=x;x=y,y=t}var i=x.getLowestSetBit(),g=y.getLowestSetBit();if(g<0)return x;i<g&&(g=i),g>0&&(x.rShiftTo(g,x),y.rShiftTo(g,y));while(x.signum()>0)(i=x.getLowestSetBit())>0&&x.rShiftTo(i,x),(i=y.getLowestSetBit())>0&&y.rShiftTo(i,y),x.compareTo(y)>=0?(x.subTo(y,x),x.rShiftTo(1,x)):(y.subTo(x,y),y.rShiftTo(1,y));return g>0&&y.lShiftTo(g,y),y}function bnpModInt(n){if(n<=0)return 0;var d=this.DV%n,r=this.s<0?n-1:0;if(this.t>0)if(d==0)r=this[0]%n;else for(var i=this.t-1;i>=0;--i)r=(d*r+this[i])%n;return r}function bnModInverse(m){var ac=m.isEven();if(this.isEven()&&ac||m.signum()==0)return BigInteger.ZERO;var u=m.clone(),v=this.clone(),a=nbv(1),b=nbv(0),c=nbv(0),d=nbv(1);while(u.signum()!=0){while(u.isEven()){u.rShiftTo(1,u);if(ac){if(!a.isEven()||!b.isEven())a.addTo(this,a),b.subTo(m,b);a.rShiftTo(1,a)}else b.isEven()||b.subTo(m,b);b.rShiftTo(1,b)}while(v.isEven()){v.rShiftTo(1,v);if(ac){if(!c.isEven()||!d.isEven())c.addTo(this,c),d.subTo(m,d);c.rShiftTo(1,c)}else d.isEven()||d.subTo(m,d);d.rShiftTo(1,d)}u.compareTo(v)>=0?(u.subTo(v,u),ac&&a.subTo(c,a),b.subTo(d,b)):(v.subTo(u,v),ac&&c.subTo(a,c),d.subTo(b,d))}return v.compareTo(BigInteger.ONE)!=0?BigInteger.ZERO:d.compareTo(m)>=0?d.subtract(m):d.signum()<0?(d.addTo(m,d),d.signum()<0?d.add(m):d):d}function bnIsProbablePrime(t){var i,x=this.abs();if(x.t==1&&x[0]<=lowprimes[lowprimes.length-1]){for(i=0;i<lowprimes.length;++i)if(x[0]==lowprimes[i])return!0;return!1}if(x.isEven())return!1;i=1;while(i<lowprimes.length){var m=lowprimes[i],j=i+1;while(j<lowprimes.length&&m<lplim)m*=lowprimes[j++];m=x.modInt(m);while(i<j)if(m%lowprimes[i++]==0)return!1}return x.millerRabin(t)}function bnpMillerRabin(t){var n1=this.subtract(BigInteger.ONE),k=n1.getLowestSetBit();if(k<=0)return!1;var r=n1.shiftRight(k);t=t+1>>1,t>lowprimes.length&&(t=lowprimes.length);var a=nbi();for(var i=0;i<t;++i){a.fromInt(lowprimes[Math.floor(Math.random()*lowprimes.length)]);var y=a.modPow(r,this);if(y.compareTo(BigInteger.ONE)!=0&&y.compareTo(n1)!=0){var j=1;while(j++<k&&y.compareTo(n1)!=0){y=y.modPowInt(2,this);if(y.compareTo(BigInteger.ONE)==0)return!1}if(y.compareTo(n1)!=0)return!1}}return!0}NullExp.prototype.convert=nNop,NullExp.prototype.revert=nNop,NullExp.prototype.mulTo=nMulTo,NullExp.prototype.sqrTo=nSqrTo,Barrett.prototype.convert=barrettConvert,Barrett.prototype.revert=barrettRevert,Barrett.prototype.reduce=barrettReduce,Barrett.prototype.mulTo=barrettMulTo,Barrett.prototype.sqrTo=barrettSqrTo;var lowprimes=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],lplim=(1<<26)/lowprimes[lowprimes.length-1];BigInteger.prototype.chunkSize=bnpChunkSize,BigInteger.prototype.toRadix=bnpToRadix,BigInteger.prototype.fromRadix=bnpFromRadix,BigInteger.prototype.fromNumber=bnpFromNumber,BigInteger.prototype.bitwiseTo=bnpBitwiseTo,BigInteger.prototype.changeBit=bnpChangeBit,BigInteger.prototype.addTo=bnpAddTo,BigInteger.prototype.dMultiply=bnpDMultiply,BigInteger.prototype.dAddOffset=bnpDAddOffset,BigInteger.prototype.multiplyLowerTo=bnpMultiplyLowerTo,BigInteger.prototype.multiplyUpperTo=bnpMultiplyUpperTo,BigInteger.prototype.modInt=bnpModInt,BigInteger.prototype.millerRabin=bnpMillerRabin,BigInteger.prototype.clone=bnClone,BigInteger.prototype.intValue=bnIntValue,BigInteger.prototype.byteValue=bnByteValue,BigInteger.prototype.shortValue=bnShortValue,BigInteger.prototype.signum=bnSigNum,BigInteger.prototype.toByteArray=bnToByteArray,BigInteger.prototype.equals=bnEquals,BigInteger.prototype.min=bnMin,BigInteger.prototype.max=bnMax,BigInteger.prototype.and=bnAnd,BigInteger.prototype.or=bnOr,BigInteger.prototype.xor=bnXor,BigInteger.prototype.andNot=bnAndNot,BigInteger.prototype.not=bnNot,BigInteger.prototype.shiftLeft=bnShiftLeft,BigInteger.prototype.shiftRight=bnShiftRight,BigInteger.prototype.getLowestSetBit=bnGetLowestSetBit,BigInteger.prototype.bitCount=bnBitCount,BigInteger.prototype.testBit=bnTestBit,BigInteger.prototype.setBit=bnSetBit,BigInteger.prototype.clearBit=bnClearBit,BigInteger.prototype.flipBit=bnFlipBit,BigInteger.prototype.add=bnAdd,BigInteger.prototype.subtract=bnSubtract,BigInteger.prototype.multiply=bnMultiply,BigInteger.prototype.divide=bnDivide,BigInteger.prototype.remainder=bnRemainder,BigInteger.prototype.divideAndRemainder=bnDivideAndRemainder,BigInteger.prototype.modPow=bnModPow,BigInteger.prototype.modInverse=bnModInverse,BigInteger.prototype.pow=bnPow,BigInteger.prototype.gcd=bnGCD,BigInteger.prototype.isProbablePrime=bnIsProbablePrime,BigInteger.prototype.square=bnSquare;
function ECFieldElementFp(q,x){this.x=x,this.q=q}function feFpEquals(other){return other==this?!0:this.q.equals(other.q)&&this.x.equals(other.x)}function feFpToBigInteger(){return this.x}function feFpNegate(){return new ECFieldElementFp(this.q,this.x.negate().mod(this.q))}function feFpAdd(b){return new ECFieldElementFp(this.q,this.x.add(b.toBigInteger()).mod(this.q))}function feFpSubtract(b){return new ECFieldElementFp(this.q,this.x.subtract(b.toBigInteger()).mod(this.q))}function feFpMultiply(b){return new ECFieldElementFp(this.q,this.x.multiply(b.toBigInteger()).mod(this.q))}function feFpSquare(){return new ECFieldElementFp(this.q,this.x.square().mod(this.q))}function feFpDivide(b){return new ECFieldElementFp(this.q,this.x.multiply(b.toBigInteger().modInverse(this.q)).mod(this.q))}function ECPointFp(curve,x,y,z){this.curve=curve,this.x=x,this.y=y,z==null?this.z=BigInteger.ONE:this.z=z,this.zinv=null}function pointFpGetX(){return this.zinv==null&&(this.zinv=this.z.modInverse(this.curve.q)),this.curve.fromBigInteger(this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q))}function pointFpGetY(){return this.zinv==null&&(this.zinv=this.z.modInverse(this.curve.q)),this.curve.fromBigInteger(this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q))}function pointFpEquals(other){if(other==this)return!0;if(this.isInfinity())return other.isInfinity();if(other.isInfinity())return this.isInfinity();var u,v;return u=other.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(other.z)).mod(this.curve.q),u.equals(BigInteger.ZERO)?(v=other.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(other.z)).mod(this.curve.q),v.equals(BigInteger.ZERO)):!1}function pointFpIsInfinity(){return this.x==null&&this.y==null?!0:this.z.equals(BigInteger.ZERO)&&!this.y.toBigInteger().equals(BigInteger.ZERO)}function pointFpNegate(){return new ECPointFp(this.curve,this.x,this.y.negate(),this.z)}function pointFpAdd(b){if(this.isInfinity())return b;if(b.isInfinity())return this;var u=b.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(b.z)).mod(this.curve.q),v=b.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(b.z)).mod(this.curve.q);if(BigInteger.ZERO.equals(v))return BigInteger.ZERO.equals(u)?this.twice():this.curve.getInfinity();var THREE=new BigInteger("3"),x1=this.x.toBigInteger(),y1=this.y.toBigInteger(),x2=b.x.toBigInteger(),y2=b.y.toBigInteger(),v2=v.square(),v3=v2.multiply(v),x1v2=x1.multiply(v2),zu2=u.square().multiply(this.z),x3=zu2.subtract(x1v2.shiftLeft(1)).multiply(b.z).subtract(v3).multiply(v).mod(this.curve.q),y3=x1v2.multiply(THREE).multiply(u).subtract(y1.multiply(v3)).subtract(zu2.multiply(u)).multiply(b.z).add(u.multiply(v3)).mod(this.curve.q),z3=v3.multiply(this.z).multiply(b.z).mod(this.curve.q);return new ECPointFp(this.curve,this.curve.fromBigInteger(x3),this.curve.fromBigInteger(y3),z3)}function pointFpTwice(){if(this.isInfinity())return this;if(this.y.toBigInteger().signum()==0)return this.curve.getInfinity();var THREE=new BigInteger("3"),x1=this.x.toBigInteger(),y1=this.y.toBigInteger(),y1z1=y1.multiply(this.z),y1sqz1=y1z1.multiply(y1).mod(this.curve.q),a=this.curve.a.toBigInteger(),w=x1.square().multiply(THREE);BigInteger.ZERO.equals(a)||(w=w.add(this.z.square().multiply(a))),w=w.mod(this.curve.q);var x3=w.square().subtract(x1.shiftLeft(3).multiply(y1sqz1)).shiftLeft(1).multiply(y1z1).mod(this.curve.q),y3=w.multiply(THREE).multiply(x1).subtract(y1sqz1.shiftLeft(1)).shiftLeft(2).multiply(y1sqz1).subtract(w.square().multiply(w)).mod(this.curve.q),z3=y1z1.square().multiply(y1z1).shiftLeft(3).mod(this.curve.q);return new ECPointFp(this.curve,this.curve.fromBigInteger(x3),this.curve.fromBigInteger(y3),z3)}function pointFpMultiply(k){if(this.isInfinity())return this;if(k.signum()==0)return this.curve.getInfinity();var e=k,h=e.multiply(new BigInteger("3")),neg=this.negate(),R=this,i;for(i=h.bitLength()-2;i>0;--i){R=R.twice();var hBit=h.testBit(i),eBit=e.testBit(i);hBit!=eBit&&(R=R.add(hBit?this:neg))}return R}function pointFpMultiplyTwo(j,x,k){var i;j.bitLength()>k.bitLength()?i=j.bitLength()-1:i=k.bitLength()-1;var R=this.curve.getInfinity(),both=this.add(x);while(i>=0)R=R.twice(),j.testBit(i)?k.testBit(i)?R=R.add(both):R=R.add(this):k.testBit(i)&&(R=R.add(x)),--i;return R}function ECCurveFp(q,a,b){this.q=q,this.a=this.fromBigInteger(a),this.b=this.fromBigInteger(b),this.infinity=new ECPointFp(this,null,null)}function curveFpGetQ(){return this.q}function curveFpGetA(){return this.a}function curveFpGetB(){return this.b}function curveFpEquals(other){return other==this?!0:this.q.equals(other.q)&&this.a.equals(other.a)&&this.b.equals(other.b)}function curveFpGetInfinity(){return this.infinity}function curveFpFromBigInteger(x){return new ECFieldElementFp(this.q,x)}function curveFpDecodePointHex(s){switch(parseInt(s.substr(0,2),16)){case 0:return this.infinity;case 2:case 3:return null;case 4:case 6:case 7:var len=(s.length-2)/2,xHex=s.substr(2,len),yHex=s.substr(len+2,len);return new ECPointFp(this,this.fromBigInteger(new BigInteger(xHex,16)),this.fromBigInteger(new BigInteger(yHex,16)));default:return null}}ECFieldElementFp.prototype.equals=feFpEquals,ECFieldElementFp.prototype.toBigInteger=feFpToBigInteger,ECFieldElementFp.prototype.negate=feFpNegate,ECFieldElementFp.prototype.add=feFpAdd,ECFieldElementFp.prototype.subtract=feFpSubtract,ECFieldElementFp.prototype.multiply=feFpMultiply,ECFieldElementFp.prototype.square=feFpSquare,ECFieldElementFp.prototype.divide=feFpDivide,ECPointFp.prototype.getX=pointFpGetX,ECPointFp.prototype.getY=pointFpGetY,ECPointFp.prototype.equals=pointFpEquals,ECPointFp.prototype.isInfinity=pointFpIsInfinity,ECPointFp.prototype.negate=pointFpNegate,ECPointFp.prototype.add=pointFpAdd,ECPointFp.prototype.twice=pointFpTwice,ECPointFp.prototype.multiply=pointFpMultiply,ECPointFp.prototype.multiplyTwo=pointFpMultiplyTwo,ECCurveFp.prototype.getQ=curveFpGetQ,ECCurveFp.prototype.getA=curveFpGetA,ECCurveFp.prototype.getB=curveFpGetB,ECCurveFp.prototype.equals=curveFpEquals,ECCurveFp.prototype.getInfinity=curveFpGetInfinity,ECCurveFp.prototype.fromBigInteger=curveFpFromBigInteger,ECCurveFp.prototype.decodePointHex=curveFpDecodePointHex;
function X9ECParameters(curve,g,n,h){this.curve=curve,this.g=g,this.n=n,this.h=h}function x9getCurve(){return this.curve}function x9getG(){return this.g}function x9getN(){return this.n}function x9getH(){return this.h}function fromHex(s){return new BigInteger(s,16)}function secp128r1(){var p=fromHex("FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFF"),a=fromHex("FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFC"),b=fromHex("E87579C11079F43DD824993C2CEE5ED3"),n=fromHex("FFFFFFFE0000000075A30D1B9038A115"),h=BigInteger.ONE,curve=new ECCurveFp(p,a,b),G=curve.decodePointHex("04161FF7528B899B2D0C28607CA52C5B86CF5AC8395BAFEB13C02DA292DDED7A83");return new X9ECParameters(curve,G,n,h)}function secp160k1(){var p=fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFAC73"),a=BigInteger.ZERO,b=fromHex("7"),n=fromHex("0100000000000000000001B8FA16DFAB9ACA16B6B3"),h=BigInteger.ONE,curve=new ECCurveFp(p,a,b),G=curve.decodePointHex("043B4C382CE37AA192A4019E763036F4F5DD4D7EBB938CF935318FDCED6BC28286531733C3F03C4FEE");return new X9ECParameters(curve,G,n,h)}function secp160r1(){var p=fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFF"),a=fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFC"),b=fromHex("1C97BEFC54BD7A8B65ACF89F81D4D4ADC565FA45"),n=fromHex("0100000000000000000001F4C8F927AED3CA752257"),h=BigInteger.ONE,curve=new ECCurveFp(p,a,b),G=curve.decodePointHex("044A96B5688EF573284664698968C38BB913CBFC8223A628553168947D59DCC912042351377AC5FB32");return new X9ECParameters(curve,G,n,h)}function secp192k1(){var p=fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFEE37"),a=BigInteger.ZERO,b=fromHex("3"),n=fromHex("FFFFFFFFFFFFFFFFFFFFFFFE26F2FC170F69466A74DEFD8D"),h=BigInteger.ONE,curve=new ECCurveFp(p,a,b),G=curve.decodePointHex("04DB4FF10EC057E9AE26B07D0280B7F4341DA5D1B1EAE06C7D9B2F2F6D9C5628A7844163D015BE86344082AA88D95E2F9D");return new X9ECParameters(curve,G,n,h)}function secp192r1(){var p=fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFF"),a=fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFC"),b=fromHex("64210519E59C80E70FA7E9AB72243049FEB8DEECC146B9B1"),n=fromHex("FFFFFFFFFFFFFFFFFFFFFFFF99DEF836146BC9B1B4D22831"),h=BigInteger.ONE,curve=new ECCurveFp(p,a,b),G=curve.decodePointHex("04188DA80EB03090F67CBF20EB43A18800F4FF0AFD82FF101207192B95FFC8DA78631011ED6B24CDD573F977A11E794811");return new X9ECParameters(curve,G,n,h)}function secp224r1(){var p=fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000000000000000000000001"),a=fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFE"),b=fromHex("B4050A850C04B3ABF54132565044B0B7D7BFD8BA270B39432355FFB4"),n=fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFF16A2E0B8F03E13DD29455C5C2A3D"),h=BigInteger.ONE,curve=new ECCurveFp(p,a,b),G=curve.decodePointHex("04B70E0CBD6BB4BF7F321390B94A03C1D356C21122343280D6115C1D21BD376388B5F723FB4C22DFE6CD4375A05A07476444D5819985007E34");return new X9ECParameters(curve,G,n,h)}function secp256k1(){var p=fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F"),a=BigInteger.ZERO,b=fromHex("7"),n=fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141"),h=BigInteger.ONE,curve=new ECCurveFp(p,a,b),G=curve.decodePointHex("0479BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8");return new X9ECParameters(curve,G,n,h)}function secp256r1(){var p=fromHex("FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF"),a=fromHex("FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFC"),b=fromHex("5AC635D8AA3A93E7B3EBBD55769886BC651D06B0CC53B0F63BCE3C3E27D2604B"),n=fromHex("FFFFFFFF00000000FFFFFFFFFFFFFFFFBCE6FAADA7179E84F3B9CAC2FC632551"),h=BigInteger.ONE,curve=new ECCurveFp(p,a,b),G=curve.decodePointHex("046B17D1F2E12C4247F8BCE6E563A440F277037D812DEB33A0F4A13945D898C2964FE342E2FE1A7F9B8EE7EB4A7C0F9E162BCE33576B315ECECBB6406837BF51F5");return new X9ECParameters(curve,G,n,h)}function getSECCurveByName(name){return name=="secp128r1"?secp128r1():name=="secp160k1"?secp160k1():name=="secp160r1"?secp160r1():name=="secp192k1"?secp192k1():name=="secp192r1"?secp192r1():name=="secp224r1"?secp224r1():name=="secp256k1"?secp256k1():name=="secp256r1"?secp256r1():null}X9ECParameters.prototype.getCurve=x9getCurve,X9ECParameters.prototype.getG=x9getG,X9ECParameters.prototype.getN=x9getN,X9ECParameters.prototype.getH=x9getH;
var EventEmitter=function(){};EventEmitter.prototype.on=function(name,callback,context){context||(context=this),this._listeners||(this._listeners={}),this._listeners[name]||(this._listeners[name]=[]),this._unbinders||(this._unbinders={}),this._unbinders[name]||(this._unbinders[name]=[]);var f=function(e){callback.apply(context,[e])};this._unbinders[name].push(callback),this._listeners[name].push(f)},EventEmitter.prototype.trigger=function(name,event){event===undefined&&(event={}),this._listeners||(this._listeners={});if(!this._listeners[name])return;var i=this._listeners[name].length;while(i--)this._listeners[name][i](event)},EventEmitter.prototype.removeListener=function(name,callback){this._unbinders||(this._unbinders={});if(!this._unbinders[name])return;var i=this._unbinders[name].length;while(i--)this._unbinders[name][i]===callback&&(this._unbinders[name].splice(i,1),this._listeners[name].splice(i,1))},EventEmitter.augment=function(obj){for(var method in EventEmitter.prototype)obj[method]||(obj[method]=EventEmitter.prototype[method])};
(function(exports){var Bitcoin=exports;"object"!=typeof module&&(Bitcoin.EventEmitter=EventEmitter)})("object"==typeof module?module.exports:window.Bitcoin={});
BigInteger.valueOf=nbv,BigInteger.prototype.toByteArrayUnsigned=function(){var ba=this.toByteArray();return ba.length?(ba[0]==0&&(ba=ba.slice(1)),ba.map(function(v){return v<0?v+256:v})):ba},BigInteger.fromByteArrayUnsigned=function(ba){return ba.length?ba[0]&128?new BigInteger([0].concat(ba)):new BigInteger(ba):ba.valueOf(0)};var names=["log","debug","info","warn","error","assert","dir","dirxml","group","groupEnd","time","timeEnd","count","trace","profile","profileEnd"];"undefined"==typeof window.console&&(window.console={});for(var i=0;i<names.length;++i)"undefined"==typeof window.console[names[i]]&&(window.console[names[i]]=function(){});Bitcoin.Util={isArray:Array.isArray||function(o){return Object.prototype.toString.call(o)==="[object Array]"},makeFilledArray:function(len,val){var array=[],i=0;while(i<len)array[i++]=val;return array},numToVarInt:function(i){return i<253?[i]:i<=65536?[253,i>>>8,i&255]:i<=1?[254].concat(Crypto.util.wordsToBytes([i])):[255].concat(Crypto.util.wordsToBytes([i>>>32,i]))},valueToBigInt:function(valueBuffer){return valueBuffer instanceof BigInteger?valueBuffer:BigInteger.fromByteArrayUnsigned(valueBuffer)},formatValue:function(valueBuffer){var value=this.valueToBigInt(valueBuffer).toString(),integerPart=value.length>8?value.substr(0,value.length-8):"0",decimalPart=value.length>8?value.substr(value.length-8):value;while(decimalPart.length<8)decimalPart="0"+decimalPart;decimalPart=decimalPart.replace(/0*$/,"");while(decimalPart.length<2)decimalPart+="0";return integerPart+"."+decimalPart},parseValue:function(valueString){var valueComp=valueString.split("."),integralPart=valueComp[0],fractionalPart=valueComp[1]||"0";while(fractionalPart.length<8)fractionalPart+="0";fractionalPart=fractionalPart.replace(/^0+/g,"");var value=BigInteger.valueOf(parseInt(integralPart));return value=value.multiply(BigInteger.valueOf(1e8)),value=value.add(BigInteger.valueOf(parseInt(fractionalPart))),value},sha256ripe160:function(data){return Crypto.RIPEMD160(Crypto.SHA256(data,{asBytes:!0}),{asBytes:!0})}};for(var i in Crypto.util)Crypto.util.hasOwnProperty(i)&&(Bitcoin.Util[i]=Crypto.util[i]);
(function(Bitcoin){Bitcoin.Base58={alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",base:BigInteger.valueOf(58),encode:function(input){var bi=BigInteger.fromByteArrayUnsigned(input),chars=[];while(bi.compareTo(B58.base)>=0){var mod=bi.mod(B58.base);chars.unshift(B58.alphabet[mod.intValue()]),bi=bi.subtract(mod).divide(B58.base)}chars.unshift(B58.alphabet[bi.intValue()]);for(var i=0;i<input.length;i++){if(input[i]!=0)break;chars.unshift(B58.alphabet[0])}return chars.join("")},decode:function(input){var bi=BigInteger.valueOf(0),leadingZerosNum=0;for(var i=input.length-1;i>=0;i--){var alphaIndex=B58.alphabet.indexOf(input[i]);bi=bi.add(BigInteger.valueOf(alphaIndex).multiply(B58.base.pow(input.length-1-i))),input[i]=="1"?leadingZerosNum++:leadingZerosNum=0}var bytes=bi.toByteArrayUnsigned();while(leadingZerosNum-->0)bytes.unshift(0);return bytes}};var B58=Bitcoin.Base58})("undefined"!=typeof Bitcoin?Bitcoin:module.exports);
Bitcoin.Address=function(bytes){"string"==typeof bytes&&(bytes=Bitcoin.Address.decodeString(bytes)),this.hash=bytes,this.version=0},Bitcoin.Address.prototype.toString=function(){var hash=this.hash.slice(0);hash.unshift(this.version);var checksum=Crypto.SHA256(Crypto.SHA256(hash,{asBytes:!0}),{asBytes:!0}),bytes=hash.concat(checksum.slice(0,4));return Bitcoin.Base58.encode(bytes)},Bitcoin.Address.prototype.getHashBase64=function(){return Crypto.util.bytesToBase64(this.hash)},Bitcoin.Address.decodeString=function(string){var bytes=Bitcoin.Base58.decode(string),hash=bytes.slice(0,21),checksum=Crypto.SHA256(Crypto.SHA256(hash,{asBytes:!0}),{asBytes:!0});if(checksum[0]!=bytes[21]||checksum[1]!=bytes[22]||checksum[2]!=bytes[23]||checksum[3]!=bytes[24])throw"Checksum validation failed!";var version=hash.shift();if(version!=0)throw"Version "+version+" not supported!";return hash};
function integerToBytes(i,len){var bytes=i.toByteArrayUnsigned();if(len<bytes.length)bytes=bytes.slice(bytes.length-len);else while(len>bytes.length)bytes.unshift(0);return bytes}function dmp(v){return v instanceof BigInteger||(v=v.toBigInteger()),Crypto.util.bytesToHex(v.toByteArrayUnsigned())}ECFieldElementFp.prototype.getByteLength=function(){return Math.floor((this.toBigInteger().bitLength()+7)/8)},ECPointFp.prototype.getEncoded=function(compressed){var x=this.getX().toBigInteger(),y=this.getY().toBigInteger(),enc=integerToBytes(x,32);return compressed?y.isEven()?enc.unshift(2):enc.unshift(3):(enc.unshift(4),enc=enc.concat(integerToBytes(y,32))),enc},ECPointFp.decodeFrom=function(curve,enc){var type=enc[0],dataLen=enc.length-1,xBa=enc.slice(1,1+dataLen/2),yBa=enc.slice(1+dataLen/2,1+dataLen);xBa.unshift(0),yBa.unshift(0);var x=new BigInteger(xBa),y=new BigInteger(yBa);return new ECPointFp(curve,curve.fromBigInteger(x),curve.fromBigInteger(y))},ECPointFp.prototype.add2D=function(b){if(this.isInfinity())return b;if(b.isInfinity())return this;if(this.x.equals(b.x))return this.y.equals(b.y)?this.twice():this.curve.getInfinity();var x_x=b.x.subtract(this.x),y_y=b.y.subtract(this.y),gamma=y_y.divide(x_x),x3=gamma.square().subtract(this.x).subtract(b.x),y3=gamma.multiply(this.x.subtract(x3)).subtract(this.y);return new ECPointFp(this.curve,x3,y3)},ECPointFp.prototype.twice2D=function(){if(this.isInfinity())return this;if(this.y.toBigInteger().signum()==0)return this.curve.getInfinity();var TWO=this.curve.fromBigInteger(BigInteger.valueOf(2)),THREE=this.curve.fromBigInteger(BigInteger.valueOf(3)),gamma=this.x.square().multiply(THREE).add(this.curve.a).divide(this.y.multiply(TWO)),x3=gamma.square().subtract(this.x.multiply(TWO)),y3=gamma.multiply(this.x.subtract(x3)).subtract(this.y);return new ECPointFp(this.curve,x3,y3)},ECPointFp.prototype.multiply2D=function(k){if(this.isInfinity())return this;if(k.signum()==0)return this.curve.getInfinity();var e=k,h=e.multiply(new BigInteger("3")),neg=this.negate(),R=this,i;for(i=h.bitLength()-2;i>0;--i){R=R.twice();var hBit=h.testBit(i),eBit=e.testBit(i);hBit!=eBit&&(R=R.add2D(hBit?this:neg))}return R},ECPointFp.prototype.isOnCurve=function(){var x=this.getX().toBigInteger(),y=this.getY().toBigInteger(),a=this.curve.getA().toBigInteger(),b=this.curve.getB().toBigInteger(),n=this.curve.getQ(),lhs=y.multiply(y).mod(n),rhs=x.multiply(x).multiply(x).add(a.multiply(x)).add(b).mod(n);return lhs.equals(rhs)},ECPointFp.prototype.validate=function(){var n=this.curve.getQ();if(this.isInfinity())throw new Error("Point is at infinity.");var x=this.getX().toBigInteger(),y=this.getY().toBigInteger();if(x.compareTo(BigInteger.ONE)<0||x.compareTo(n.subtract(BigInteger.ONE))>0)throw new Error("x coordinate out of bounds");if(y.compareTo(BigInteger.ONE)<0||y.compareTo(n.subtract(BigInteger.ONE))>0)throw new Error("y coordinate out of bounds");if(!this.isOnCurve())throw new Error("Point is not on the curve.");if(this.multiply(n).isInfinity())throw new Error("Point is not a scalar multiple of G.");return!0},Bitcoin.ECDSA=function(){function implShamirsTrick(P,k,Q,l){var m=Math.max(k.bitLength(),l.bitLength()),Z=P.add2D(Q),R=P.curve.getInfinity();for(var i=m-1;i>=0;--i)R=R.twice2D(),R.z=BigInteger.ONE,k.testBit(i)?l.testBit(i)?R=R.add2D(Z):R=R.add2D(P):l.testBit(i)&&(R=R.add2D(Q));return R}var ecparams=getSECCurveByName("secp256k1"),rng=new SecureRandom,ECDSA={getBigRandom:function(limit){return(new BigInteger(limit.bitLength(),rng)).mod(limit.subtract(BigInteger.ONE)).add(BigInteger.ONE)},sign:function(hash,priv){var d=priv,n=ecparams.getN(),e=BigInteger.fromByteArrayUnsigned(hash);do var k=ECDSA.getBigRandom(n),G=ecparams.getG(),Q=G.multiply(k),r=Q.getX().toBigInteger().mod(n);while(r.compareTo(BigInteger.ZERO)<=0);var s=k.modInverse(n).multiply(e.add(d.multiply(r))).mod(n);return ECDSA.serializeSig(r,s)},verify:function(hash,sig,pubkey){var obj=ECDSA.parseSig(sig),r=obj.r,s=obj.s,n=ecparams.getN(),e=BigInteger.fromByteArrayUnsigned(hash);if(r.compareTo(BigInteger.ONE)<0||r.compareTo(n)>=0)return!1;if(s.compareTo(BigInteger.ONE)<0||s.compareTo(n)>=0)return!1;var c=s.modInverse(n),u1=e.multiply(c).mod(n),u2=r.multiply(c).mod(n),G=ecparams.getG(),Q=ECPointFp.decodeFrom(ecparams.getCurve(),pubkey),point=implShamirsTrick(G,u1,Q,u2),v=point.x.toBigInteger().mod(n);return v.equals(r)},serializeSig:function(r,s){var rBa=r.toByteArrayUnsigned(),sBa=s.toByteArrayUnsigned(),sequence=[];return sequence.push(2),sequence.push(rBa.length),sequence=sequence.concat(rBa),sequence.push(2),sequence.push(sBa.length),sequence=sequence.concat(sBa),sequence.unshift(sequence.length),sequence.unshift(48),sequence},parseSig:function(sig){var cursor;if(sig[0]!=48)throw new Error("Signature not a valid DERSequence");cursor=2;if(sig[cursor]!=2)throw new Error("First element in signature must be a DERInteger");var rBa=sig.slice(cursor+2,cursor+2+sig[cursor+1]);cursor+=2+sig[cursor+1];if(sig[cursor]!=2)throw new Error("Second element in signature must be a DERInteger");var sBa=sig.slice(cursor+2,cursor+2+sig[cursor+1]);cursor+=2+sig[cursor+1];var r=BigInteger.fromByteArrayUnsigned(rBa),s=BigInteger.fromByteArrayUnsigned(sBa);return{r:r,s:s}}};return ECDSA}();
Bitcoin.ECKey=function(){var ECDSA=Bitcoin.ECDSA,ecparams=getSECCurveByName("secp256k1"),rng=new SecureRandom,ECKey=function(input){if(!input){var n=ecparams.getN();this.priv=ECDSA.getBigRandom(n)}else input instanceof BigInteger?this.priv=input:Bitcoin.Util.isArray(input)?this.priv=BigInteger.fromByteArrayUnsigned(input):"string"==typeof input&&(this.priv=BigInteger.fromByteArrayUnsigned(Crypto.util.base64ToBytes(input)))};return ECKey.prototype.getPub=function(){return this.pub?this.pub:this.pub=ecparams.getG().multiply(this.priv).getEncoded()},ECKey.prototype.getPubKeyHash=function(){return this.pubKeyHash?this.pubKeyHash:this.pubKeyHash=Bitcoin.Util.sha256ripe160(this.getPub())},ECKey.prototype.getBitcoinAddress=function(){var hash=this.getPubKeyHash(),addr=new Bitcoin.Address(hash);return addr},ECKey.prototype.setPub=function(pub){this.pub=pub},ECKey.prototype.toString=function(format){return format==="base64"?Crypto.util.bytesToBase64(this.priv.toByteArrayUnsigned()):Crypto.util.bytesToHex(this.priv.toByteArrayUnsigned())},ECKey.prototype.sign=function(hash){return ECDSA.sign(hash,this.priv)},ECKey.prototype.verify=function(hash,sig){return ECDSA.verify(hash,sig,this.getPub())},ECKey}();
(function(){var Opcode=Bitcoin.Opcode=function(num){this.code=num};Opcode.prototype.toString=function(){return Opcode.reverseMap[this.code]},Opcode.map={OP_0:0,OP_FALSE:0,OP_PUSHDATA1:76,OP_PUSHDATA2:77,OP_PUSHDATA4:78,OP_1NEGATE:79,OP_RESERVED:80,OP_1:81,OP_TRUE:81,OP_2:82,OP_3:83,OP_4:84,OP_5:85,OP_6:86,OP_7:87,OP_8:88,OP_9:89,OP_10:90,OP_11:91,OP_12:92,OP_13:93,OP_14:94,OP_15:95,OP_16:96,OP_NOP:97,OP_VER:98,OP_IF:99,OP_NOTIF:100,OP_VERIF:101,OP_VERNOTIF:102,OP_ELSE:103,OP_ENDIF:104,OP_VERIFY:105,OP_RETURN:106,OP_TOALTSTACK:107,OP_FROMALTSTACK:108,OP_2DROP:109,OP_2DUP:110,OP_3DUP:111,OP_2OVER:112,OP_2ROT:113,OP_2SWAP:114,OP_IFDUP:115,OP_DEPTH:116,OP_DROP:117,OP_DUP:118,OP_NIP:119,OP_OVER:120,OP_PICK:121,OP_ROLL:122,OP_ROT:123,OP_SWAP:124,OP_TUCK:125,OP_CAT:126,OP_SUBSTR:127,OP_LEFT:128,OP_RIGHT:129,OP_SIZE:130,OP_INVERT:131,OP_AND:132,OP_OR:133,OP_XOR:134,OP_EQUAL:135,OP_EQUALVERIFY:136,OP_RESERVED1:137,OP_RESERVED2:138,OP_1ADD:139,OP_1SUB:140,OP_2MUL:141,OP_2DIV:142,OP_NEGATE:143,OP_ABS:144,OP_NOT:145,OP_0NOTEQUAL:146,OP_ADD:147,OP_SUB:148,OP_MUL:149,OP_DIV:150,OP_MOD:151,OP_LSHIFT:152,OP_RSHIFT:153,OP_BOOLAND:154,OP_BOOLOR:155,OP_NUMEQUAL:156,OP_NUMEQUALVERIFY:157,OP_NUMNOTEQUAL:158,OP_LESSTHAN:159,OP_GREATERTHAN:160,OP_LESSTHANOREQUAL:161,OP_GREATERTHANOREQUAL:162,OP_MIN:163,OP_MAX:164,OP_WITHIN:165,OP_RIPEMD160:166,OP_SHA1:167,OP_SHA256:168,OP_HASH160:169,OP_HASH256:170,OP_CODESEPARATOR:171,OP_CHECKSIG:172,OP_CHECKSIGVERIFY:173,OP_CHECKMULTISIG:174,OP_CHECKMULTISIGVERIFY:175,OP_NOP1:176,OP_NOP2:177,OP_NOP3:178,OP_NOP4:179,OP_NOP5:180,OP_NOP6:181,OP_NOP7:182,OP_NOP8:183,OP_NOP9:184,OP_NOP10:185,OP_PUBKEYHASH:253,OP_PUBKEY:254,OP_INVALIDOPCODE:255},Opcode.reverseMap=[];for(var i in Opcode.map)Opcode.reverseMap[Opcode.map[i]]=i})();
(function(){var Opcode=Bitcoin.Opcode,op=Opcode.map,Script=Bitcoin.Script=function(data){if(!data)this.buffer=[];else if("string"==typeof data)this.buffer=Crypto.util.base64ToBytes(data);else if(Bitcoin.Util.isArray(data))this.buffer=data;else{if(!(data instanceof Script))throw new Error("Invalid script");this.buffer=data.buffer}this.parse()};Script.prototype.parse=function(){function readChunk(n){self.chunks.push(self.buffer.slice(i,i+n)),i+=n}var self=this;this.chunks=[];var i=0;while(i<this.buffer.length){var opcode=this.buffer[i++];opcode>=240&&(opcode=opcode<<8|this.buffer[i++]);var len;opcode>0&&opcode<op.OP_PUSHDATA1?readChunk(opcode):opcode==op.OP_PUSHDATA1?(len=this.buffer[i++],readChunk(len)):opcode==op.OP_PUSHDATA2?(len=this.buffer[i++]<<8|this.buffer[i++],readChunk(len)):opcode==op.OP_PUSHDATA4?(len=this.buffer[i++]<<24|this.buffer[i++]<<16|this.buffer[i++]<<8|this.buffer[i++],readChunk(len)):this.chunks.push(opcode)}},Script.prototype.getOutType=function(){return this.chunks[this.chunks.length-1]==op.OP_CHECKMULTISIG&&this.chunks[this.chunks.length-2]<=3?"Multisig":this.chunks.length==5&&this.chunks[0]==op.OP_DUP&&this.chunks[1]==op.OP_HASH160&&this.chunks[3]==op.OP_EQUALVERIFY&&this.chunks[4]==op.OP_CHECKSIG?"Address":this.chunks.length==2&&this.chunks[1]==op.OP_CHECKSIG?"Pubkey":"Strange"},Script.prototype.simpleOutHash=function(){switch(this.getOutType()){case"Address":return this.chunks[2];case"Pubkey":return Bitcoin.Util.sha256ripe160(this.chunks[0]);default:throw new Error("Encountered non-standard scriptPubKey")}},Script.prototype.simpleOutPubKeyHash=Script.prototype.simpleOutHash,Script.prototype.getInType=function(){return this.chunks.length==1&&Bitcoin.Util.isArray(this.chunks[0])?"Pubkey":this.chunks.length==2&&Bitcoin.Util.isArray(this.chunks[0])&&Bitcoin.Util.isArray(this.chunks[1])?"Address":"Strange"},Script.prototype.simpleInPubKey=function(){switch(this.getInType()){case"Address":return this.chunks[1];case"Pubkey":throw new Error("Script does not contain pubkey.");default:throw new Error("Encountered non-standard scriptSig")}},Script.prototype.simpleInHash=function(){return Bitcoin.Util.sha256ripe160(this.simpleInPubKey())},Script.prototype.simpleInPubKeyHash=Script.prototype.simpleInHash,Script.prototype.writeOp=function(opcode){this.buffer.push(opcode),this.chunks.push(opcode)},Script.prototype.writeBytes=function(data){data.length<op.OP_PUSHDATA1?this.buffer.push(data.length):data.length<=255?(this.buffer.push(op.OP_PUSHDATA1),this.buffer.push(data.length)):data.length<=65535?(this.buffer.push(op.OP_PUSHDATA2),this.buffer.push(data.length&255),this.buffer.push(data.length>>>8&255)):(this.buffer.push(op.OP_PUSHDATA4),this.buffer.push(data.length&255),this.buffer.push(data.length>>>8&255),this.buffer.push(data.length>>>16&255),this.buffer.push(data.length>>>24&255)),this.buffer=this.buffer.concat(data),this.chunks.push(data)},Script.createOutputScript=function(address){var script=new Script;return script.writeOp(op.OP_DUP),script.writeOp(op.OP_HASH160),script.writeBytes(address.hash),script.writeOp(op.OP_EQUALVERIFY),script.writeOp(op.OP_CHECKSIG),script},Script.prototype.extractAddresses=function(addresses){switch(this.getOutType()){case"Address":return addresses.push(new Address(this.chunks[2])),1;case"Pubkey":return addresses.push(new Address(Util.sha256ripe160(this.chunks[0]))),1;case"Multisig":for(var i=1;i<this.chunks.length-2;++i)addresses.push(new Address(Util.sha256ripe160(this.chunks[i])));return this.chunks[0]-op.OP_1+1;default:throw new Error("Encountered non-standard scriptPubKey")}},Script.createMultiSigOutputScript=function(m,pubkeys){var script=new Bitcoin.Script;script.writeOp(op.OP_1+m-1);for(var i=0;i<pubkeys.length;++i)script.writeBytes(pubkeys[i]);return script.writeOp(op.OP_1+pubkeys.length-1),script.writeOp(op.OP_CHECKMULTISIG),script},Script.createInputScript=function(signature,pubKey){var script=new Script;return script.writeBytes(signature),script.writeBytes(pubKey),script},Script.prototype.clone=function(){return new Script(this.buffer)}})();
(function(){var Script=Bitcoin.Script,Transaction=Bitcoin.Transaction=function(doc){this.version=1,this.lock_time=0,this.ins=[],this.outs=[],this.timestamp=null,this.block=null;if(doc){doc.hash&&(this.hash=doc.hash),doc.version&&(this.version=doc.version),doc.lock_time&&(this.lock_time=doc.lock_time);if(doc.ins&&doc.ins.length)for(var i=0;i<doc.ins.length;i++)this.addInput(new TransactionIn(doc.ins[i]));if(doc.outs&&doc.outs.length)for(var i=0;i<doc.outs.length;i++)this.addOutput(new TransactionOut(doc.outs[i]));doc.timestamp&&(this.timestamp=doc.timestamp),doc.block&&(this.block=doc.block)}};Transaction.objectify=function(txs){var objs=[];for(var i=0;i<txs.length;i++)objs.push(new Transaction(txs[i]));return objs},Transaction.prototype.addInput=function(tx,outIndex){arguments[0]instanceof TransactionIn?this.ins.push(arguments[0]):this.ins.push(new TransactionIn({outpoint:{hash:tx.hash,index:outIndex},script:new Bitcoin.Script,sequence:4294967295}))},Transaction.prototype.addOutput=function(address,value){if(arguments[0]instanceof TransactionOut)this.outs.push(arguments[0]);else{if(value instanceof BigInteger){value=value.toByteArrayUnsigned().reverse();while(value.length<8)value.push(0)}else!Bitcoin.Util.isArray(value);this.outs.push(new TransactionOut({value:value,script:Script.createOutputScript(address)}))}},Transaction.prototype.serialize=function(){var buffer=[];buffer=buffer.concat(Crypto.util.wordsToBytes([parseInt(this.version)]).reverse()),buffer=buffer.concat(Bitcoin.Util.numToVarInt(this.ins.length));for(var i=0;i<this.ins.length;i++){var txin=this.ins[i];buffer=buffer.concat(Crypto.util.base64ToBytes(txin.outpoint.hash)),buffer=buffer.concat(Crypto.util.wordsToBytes([parseInt(txin.outpoint.index)]).reverse());var scriptBytes=txin.script.buffer;buffer=buffer.concat(Bitcoin.Util.numToVarInt(scriptBytes.length)),buffer=buffer.concat(scriptBytes),buffer=buffer.concat(Crypto.util.wordsToBytes([parseInt(txin.sequence)]).reverse())}buffer=buffer.concat(Bitcoin.Util.numToVarInt(this.outs.length));for(var i=0;i<this.outs.length;i++){var txout=this.outs[i];buffer=buffer.concat(txout.value);var scriptBytes=txout.script.buffer;buffer=buffer.concat(Bitcoin.Util.numToVarInt(scriptBytes.length)),buffer=buffer.concat(scriptBytes)}return buffer=buffer.concat(Crypto.util.wordsToBytes([parseInt(this.lock_time)]).reverse()),buffer},Transaction.from_serlized_hex=function(str){function spliceVarInt(buf){if(buf[0]<253)return buf.splice(0,1)[0];throw"big varints not supported"}var tx=new Transaction;buf=Crypto.util.hexToBytes("01000000028bc50187152a0c18f85bc7761d05e02c197fa9647be7cd48c86e234e4d36f8cd010000008a4730440220a400d3c6566d9d9f4a64c595b759b87836efe28a79e0e6612f41796cf5eae8280220b4a98420c06b00319971fa9a003fa1832f127d23a231bcde0aabee94cd35cffe01410483cef22b9ba7ec81907781fedf7933032259d2cd4c4240056cfc00ef7b20aa94a61328ce3ae87491b057cae1e26800e7ddda862c6e16f583726efe929ab0c180ffffffff9535a2e982c4233879caf1c913abef41fec61b19681ea9ca15e630e907f8fb33010000008a473044022040dd5ab4281f7d310f18b8dc098c14237435349725534681696fb2248e48366802203bb0b457139116adebf816a397b6ad4791946a820a12a4181adb62414853ba31014104588733f009e2700cdd71c39e19d962052398090f8c8c1a81455500f9cd093984fe4032c53f9addd67bb35d6acedc92228dd5b7ff4a7e87444122a30395877f93ffffffff0200e1f505000000001976a914455f971ec6cf93c3f0e27d36071b54450b83dd9588ac001a3704000000001976a914bf24cf8124792498778634e69cac57d5caccbbaa88ac00000000"),tx.version=Crypto.util.bytesToWords(buf.splice(0,4).reverse())[0],tx.ins=[];for(i=spliceVarInt(buf);i>0;i--){var txin={};txin.outpoint={},txin.outpoint.hash=Crypto.util.bytesToBase64(buf.splice(0,32)),txin.outpoint.index=Crypto.util.bytesToWords(buf.splice(0,4).reverse())[0],txin.script=new Bitcoin.Script(buf.splice(0,spliceVarInt(buf))),txin.sequence=Crypto.util.bytesToWords(buf.splice(0,4).reverse())[0],tx.ins.push(new Bitcoin.TransactionIn(txin))}this.outs=[];for(i=spliceVarInt(buf);i>0;i--){var txout={};txout.value=buf.splice(0,8),txout.script=new Bitcoin.Script(buf.splice(0,spliceVarInt(buf))),tx.outs.push(new Bitcoin.TransactionOut(txout))}tx.lock_time=Crypto.util.bytesToWords(buf.splice(0,4).reverse())[0]};var OP_CODESEPARATOR=171,SIGHASH_ALL=1,SIGHASH_NONE=2,SIGHASH_SINGLE=3,SIGHASH_ANYONECANPAY=80;Transaction.prototype.hashTransactionForSignature=function(connectedScript,inIndex,hashType){var txTmp=this.clone();for(var i=0;i<txTmp.ins.length;i++)txTmp.ins[i].script=new Script;txTmp.ins[inIndex].script=connectedScript;if((hashType&31)==SIGHASH_NONE){txTmp.outs=[];for(var i=0;i<txTmp.ins.length;i++)i!=inIndex&&(txTmp.ins[i].sequence=0)}else(hashType&31)!=SIGHASH_SINGLE;hashType&SIGHASH_ANYONECANPAY&&(txTmp.ins=[txTmp.ins[inIndex]]);var buffer=txTmp.serialize();buffer=buffer.concat(Crypto.util.wordsToBytes([parseInt(hashType)]).reverse());var hash1=Crypto.SHA256(buffer,{asBytes:!0});return Crypto.SHA256(hash1,{asBytes:!0})},Transaction.prototype.getHash=function(){var buffer=this.serialize();return Crypto.SHA256(Crypto.SHA256(buffer,{asBytes:!0}),{asBytes:!0})},Transaction.prototype.clone=function(){var newTx=new Transaction;newTx.version=this.version,newTx.lock_time=this.lock_time;for(var i=0;i<this.ins.length;i++){var txin=this.ins[i].clone();newTx.addInput(txin)}for(var i=0;i<this.outs.length;i++){var txout=this.outs[i].clone();newTx.addOutput(txout)}return newTx},Transaction.prototype.analyze=function(wallet){if(wallet instanceof Bitcoin.Wallet){var allFromMe=!0,allToMe=!0,firstRecvHash=null,firstMeRecvHash=null,firstSendHash=null;for(var i=this.outs.length-1;i>=0;i--){var txout=this.outs[i],hash=txout.script.simpleOutPubKeyHash();wallet.hasHash(hash)?firstMeRecvHash=hash:allToMe=!1,firstRecvHash=hash}for(var i=this.ins.length-1;i>=0;i--){var txin=this.ins[i];firstSendHash=txin.script.simpleInPubKeyHash();if(!wallet.hasHash(firstSendHash)){allFromMe=!1;break}}var impact=this.calcImpact(wallet),analysis={};return analysis.impact=impact,impact.sign>0&&impact.value.compareTo(BigInteger.ZERO)>0?(analysis.type="recv",analysis.addr=new Bitcoin.Address(firstMeRecvHash)):allFromMe&&allToMe?analysis.type="self":allFromMe?(analysis.type="sent",analysis.addr=new Bitcoin.Address(firstRecvHash)):analysis.type="other",analysis}return null},Transaction.prototype.getDescription=function(wallet){var analysis=this.analyze(wallet);if(!analysis)return"";switch(analysis.type){case"recv":return"Received with "+analysis.addr;case"sent":return"Payment to "+analysis.addr;case"self":return"Payment to yourself";case"other":default:return""}},Transaction.prototype.getTotalOutValue=function(){var totalValue=BigInteger.ZERO;for(var j=0;j<this.outs.length;j++){var txout=this.outs[j];totalValue=totalValue.add(Bitcoin.Util.valueToBigInt(txout.value))}return totalValue},Transaction.prototype.getTotalValue=Transaction.prototype.getTotalOutValue,Transaction.prototype.calcImpact=function(wallet){if(wallet instanceof Bitcoin.Wallet){var valueOut=BigInteger.ZERO;for(var j=0;j<this.outs.length;j++){var txout=this.outs[j],hash=Crypto.util.bytesToBase64(txout.script.simpleOutPubKeyHash());wallet.hasHash(hash)&&(valueOut=valueOut.add(Bitcoin.Util.valueToBigInt(txout.value)))}var valueIn=BigInteger.ZERO;for(var j=0;j<this.ins.length;j++){var txin=this.ins[j],hash=Crypto.util.bytesToBase64(txin.script.simpleInPubKeyHash());if(wallet.hasHash(hash)){var fromTx=wallet.txIndex[txin.outpoint.hash];fromTx&&(valueIn=valueIn.add(Bitcoin.Util.valueToBigInt(fromTx.outs[txin.outpoint.index].value)))}}return valueOut.compareTo(valueIn)>=0?{sign:1,value:valueOut.subtract(valueIn)}:{sign:-1,value:valueIn.subtract(valueOut)}}return BigInteger.ZERO};var TransactionIn=Bitcoin.TransactionIn=function(data){this.outpoint=data.outpoint,data.script instanceof Script?this.script=data.script:this.script=new Script(data.script),this.sequence=data.sequence};TransactionIn.prototype.clone=function(){var newTxin=new TransactionIn({outpoint:{hash:this.outpoint.hash,index:this.outpoint.index},script:this.script.clone(),sequence:this.sequence});return newTxin};var TransactionOut=Bitcoin.TransactionOut=function(data){data.script instanceof Script?this.script=data.script:this.script=new Script(data.script);if(Bitcoin.Util.isArray(data.value))this.value=data.value;else if("string"==typeof data.value){var valueHex=(new BigInteger(data.value,10)).toString(16);while(valueHex.length<16)valueHex="0"+valueHex;this.value=Crypto.util.hexToBytes(valueHex)}};TransactionOut.prototype.clone=function(){var newTxout=new TransactionOut({script:this.script.clone(),value:this.value.slice(0)});return newTxout}})();
Bitcoin.Wallet=function(){var Script=Bitcoin.Script,TransactionIn=Bitcoin.TransactionIn,TransactionOut=Bitcoin.TransactionOut,Wallet=function(){var keys=[];this.addressHashes=[],this.txIndex={},this.unspentOuts=[],this.addressPointer=0,this.addKey=function(key,pub){key instanceof Bitcoin.ECKey||(key=new Bitcoin.ECKey(key)),keys.push(key),pub&&("string"==typeof pub&&(pub=Crypto.util.base64ToBytes(pub)),key.pub=pub),this.addressHashes.push(key.getBitcoinAddress().getHashBase64())},this.addKeys=function(keys,pubs){"string"==typeof keys&&(keys=keys.split(",")),"string"==typeof pubs&&(pubs=pubs.split(","));var i;if(Array.isArray(pubs)&&keys.length==pubs.length)for(i=0;i<keys.length;i++)this.addKey(keys[i],pubs[i]);else for(i=0;i<keys.length;i++)this.addKey(keys[i])},this.getKeys=function(){var serializedWallet=[];for(var i=0;i<keys.length;i++)serializedWallet.push(keys[i].toString("base64"));return serializedWallet},this.getPubKeys=function(){var pubs=[];for(var i=0;i<keys.length;i++)pubs.push(Crypto.util.bytesToBase64(keys[i].getPub()));return pubs},this.clear=function(){keys=[]},this.getLength=function(){return keys.length},this.getAllAddresses=function(){var addresses=[];for(var i=0;i<keys.length;i++)addresses.push(keys[i].getBitcoinAddress());return addresses},this.getCurAddress=function(){return keys[this.addressPointer]?keys[this.addressPointer].getBitcoinAddress():null},this.getNextAddress=function(){return this.addressPointer++,keys[this.addressPointer]||this.generateAddress(),keys[this.addressPointer].getBitcoinAddress()},this.signWithKey=function(pubKeyHash,hash){pubKeyHash=Crypto.util.bytesToBase64(pubKeyHash);for(var i=0;i<this.addressHashes.length;i++)if(this.addressHashes[i]==pubKeyHash)return keys[i].sign(hash);throw new Error("Missing key for signature")},this.getPubKeyFromHash=function(pubKeyHash){pubKeyHash=Crypto.util.bytesToBase64(pubKeyHash);for(var i=0;i<this.addressHashes.length;i++)if(this.addressHashes[i]==pubKeyHash)return keys[i].getPub();throw new Error("Hash unknown")}};return Wallet.prototype.generateAddress=function(){this.addKey(new Bitcoin.ECKey)},Wallet.prototype.process=function(tx){if(this.txIndex[tx.hash])return;var j,k,hash;for(j=0;j<tx.outs.length;j++){var txout=new TransactionOut(tx.outs[j]);hash=Crypto.util.bytesToBase64(txout.script.simpleOutPubKeyHash());for(k=0;k<this.addressHashes.length;k++)if(this.addressHashes[k]===hash){this.unspentOuts.push({tx:tx,index:j,out:txout});break}}for(j=0;j<tx.ins.length;j++){var txin=new TransactionIn(tx.ins[j]),pubkey=txin.script.simpleInPubKey();hash=Crypto.util.bytesToBase64(Bitcoin.Util.sha256ripe160(pubkey));for(k=0;k<this.addressHashes.length;k++)if(this.addressHashes[k]===hash){for(var l=0;l<this.unspentOuts.length;l++)txin.outpoint.hash==this.unspentOuts[l].tx.hash&&txin.outpoint.index==this.unspentOuts[l].index&&this.unspentOuts.splice(l,1);break}}this.txIndex[tx.hash]=tx},Wallet.prototype.getBalance=function(){var balance=BigInteger.valueOf(0);for(var i=0;i<this.unspentOuts.length;i++){var txout=this.unspentOuts[i].out;balance=balance.add(Bitcoin.Util.valueToBigInt(txout.value))}return balance},Wallet.prototype.createSend=function(address,sendValue,feeValue){var selectedOuts=[],txValue=sendValue.add(feeValue),availableValue=BigInteger.ZERO,i;for(i=0;i<this.unspentOuts.length;i++){selectedOuts.push(this.unspentOuts[i]),availableValue=availableValue.add(Bitcoin.Util.valueToBigInt(this.unspentOuts[i].out.value));if(availableValue.compareTo(txValue)>=0)break}if(availableValue.compareTo(txValue)<0)throw new Error("Insufficient funds.");var changeValue=availableValue.subtract(txValue),sendTx=new Bitcoin.Transaction;for(i=0;i<selectedOuts.length;i++)sendTx.addInput(selectedOuts[i].tx,selectedOuts[i].index);sendTx.addOutput(address,sendValue),changeValue.compareTo(BigInteger.ZERO)>0&&sendTx.addOutput(this.getNextAddress(),changeValue);var hashType=1;for(i=0;i<sendTx.ins.length;i++){var hash=sendTx.hashTransactionForSignature(selectedOuts[i].out.script,i,hashType),pubKeyHash=selectedOuts[i].out.script.simpleOutPubKeyHash(),signature=this.signWithKey(pubKeyHash,hash);signature.push(parseInt(hashType,10)),sendTx.ins[i].script=Script.createInputScript(signature,this.getPubKeyFromHash(pubKeyHash))}return sendTx},Wallet.prototype.clearTransactions=function(){this.txIndex={},this.unspentOuts=[]},Wallet.prototype.hasHash=function(hash){Bitcoin.Util.isArray(hash)&&(hash=Crypto.util.bytesToBase64(hash));for(var k=0;k<this.addressHashes.length;k++)if(this.addressHashes[k]===hash)return!0;return!1},Wallet}();
var TransactionDatabase=function(){this.txs=[],this.txIndex={}};EventEmitter.augment(TransactionDatabase.prototype),TransactionDatabase.prototype.addTransaction=function(tx){this.addTransactionNoUpdate(tx),$(this).trigger("update")},TransactionDatabase.prototype.addTransactionNoUpdate=function(tx){if(this.txIndex[tx.hash])return;this.txs.push(new Bitcoin.Transaction(tx)),this.txIndex[tx.hash]=tx},TransactionDatabase.prototype.removeTransaction=function(hash){this.removeTransactionNoUpdate(hash),$(this).trigger("update")},TransactionDatabase.prototype.removeTransactionNoUpdate=function(hash){var tx=this.txIndex[hash];if(!tx)return;for(var i=0,l=this.txs.length;i<l;i++)if(this.txs[i].hash==hash){this.txs.splice(i,1);break}delete this.txIndex[hash]},TransactionDatabase.prototype.loadTransactions=function(txs){for(var i=0;i<txs.length;i++)this.addTransactionNoUpdate(txs[i]);$(this).trigger("update")},TransactionDatabase.prototype.getTransactions=function(){return this.txs},TransactionDatabase.prototype.clear=function(){this.txs=[],this.txIndex={},$(this).trigger("update")}
;/*! jQuery v2.0.3 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-2.0.3.min.map
*/
(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],p="2.0.3",f=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:p,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return f.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,p,f,h,d,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=st(),k=st(),N=st(),E=!1,S=function(e,t){return e===t?(E=!0,0):0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],q=L.pop,H=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",$=W.replace("w","w#"),B="\\["+M+"*("+W+")"+M+"*(?:([*^$|!~]?=)"+M+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+$+")|)|)"+M+"*\\]",I=":("+W+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=RegExp("^"+M+"*,"+M+"*"),X=RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=RegExp(M+"*[+~]"),Y=RegExp("="+M+"*([^\\]'\"]*)"+M+"*\\]","g"),V=RegExp(I),G=RegExp("^"+$+"$"),J={ID:RegExp("^#("+W+")"),CLASS:RegExp("^\\.("+W+")"),TAG:RegExp("^("+W.replace("w","w*")+")"),ATTR:RegExp("^"+B),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:RegExp("^(?:"+R+")$","i"),needsContext:RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=F.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){H.apply(e,F.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,s,a,u,l,f,g,m,x,w;if((t?t.ownerDocument||t:b)!==p&&c(t),t=t||p,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(h&&!i){if(o=K.exec(e))if(a=o[1]){if(9===u){if(s=t.getElementById(a),!s||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&y(t,s)&&s.id===a)return r.push(s),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&&(!d||!d.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){f=gt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=f.length;while(l--)f[l]=m+mt(f[l]);x=U.test(e)&&t.parentNode||t,w=f.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,r,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function at(e){return e[v]=!0,e}function ut(e){var t=p.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function lt(e,t){var n=e.split("|"),r=e.length;while(r--)i.attrHandle[n[r]]=t}function ct(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function pt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return at(function(t){return t=+t,at(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}s=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b,r=t.defaultView;return t!==p&&9===t.nodeType&&t.documentElement?(p=t,f=t.documentElement,h=!s(t),r&&r.attachEvent&&r!==r.top&&r.attachEvent("onbeforeunload",function(){c()}),n.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ut(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=ut(function(e){return f.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&h?t.getElementsByClassName(e):undefined},g=[],d=[],(n.qsa=Q.test(t.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll(":checked").length||d.push(":checked")}),ut(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&d.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")})),(n.matchesSelector=Q.test(m=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&ut(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",I)}),d=d.length&&RegExp(d.join("|")),g=g.length&&RegExp(g.join("|")),y=Q.test(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},S=f.compareDocumentPosition?function(e,r){if(e===r)return E=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?P.call(l,e)-P.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],u=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:l?P.call(l,e)-P.call(l,n):0;if(o===s)return ct(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(a[i]===u[i])i++;return i?ct(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0},t):p},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Y,"='$1']"),!(!n.matchesSelector||!h||g&&g.test(t)||d&&d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,p,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==p&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!h):undefined;return o===undefined?n.attributes||!h?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(E=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(S),E){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:at,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return J.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&V.test(n)&&(t=gt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){p=t;while(p=p[g])if(a?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[v]||(m[v]={}),l=c[e]||[],h=l[0]===w&&l[1],f=l[0]===w&&l[2],p=h&&m.childNodes[h];while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[w,h,f];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)f=l[1];else while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if((a?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(x&&((p[v]||(p[v]={}))[e]=[w,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?at(function(e,n){var i,o=r(e,t),s=o.length;while(s--)i=P.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:at(function(e){var t=[],n=[],r=a(e.replace(z,"$1"));return r[v]?at(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:at(function(e){return function(t){return ot(e,t).length>0}}),contains:at(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:at(function(e){return G.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},i.pseudos.nth=i.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=pt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=ft(t);function dt(){}dt.prototype=i.filters=i.pseudos,i.setFilters=new dt;function gt(e,t){var n,r,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){(!n||(r=_.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length));for(s in i.filter)!(r=J[s].exec(a))||l[s]&&!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ot.error(e):k(e,u).slice(0)}function mt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function yt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var u,l,c,p=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,a)||r,l[1]===!0)return!0}}function vt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function bt(e,t,n,r,i,o){return r&&!r[v]&&(r=bt(r)),i&&!i[v]&&(i=bt(i,o)),at(function(o,s,a,u){var l,c,p,f=[],h=[],d=s.length,g=o||Ct(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:xt(g,f,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=xt(y,h),r(l,[],a,u),c=l.length;while(c--)(p=l[c])&&(y[h[c]]=!(m[h[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?P.call(o,p):f[c])>-1&&(o[l]=!(s[l]=p))}}else y=xt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):O.apply(s,y)})}function wt(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,c=yt(function(e){return e===t},a,!0),p=yt(function(e){return P.call(t,e)>-1},a,!0),f=[function(e,n,r){return!s&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])f=[yt(vt(f),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return bt(l>1&&vt(f),l>1&&mt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&wt(e.slice(l,r)),o>r&&wt(e=e.slice(r)),o>r&&mt(e))}f.push(n)}return vt(f)}function Tt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,l,c,f,h){var d,g,m,y=[],v=0,x="0",b=a&&[],T=null!=h,C=u,k=a||s&&i.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==p&&l,r=n);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,c)){f.push(d);break}T&&(w=N,r=++n)}o&&((d=!m&&d)&&v--,a&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(a){if(v>0)while(x--)b[x]||y[x]||(y[x]=q.call(f));y=xt(y)}O.apply(f,y),T&&!a&&y.length>0&&v+t.length>1&&ot.uniqueSort(f)}return T&&(w=N,u=C),b};return o?at(a):a}a=ot.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=gt(e)),n=t.length;while(n--)o=wt(t[n]),o[v]?r.push(o):i.push(o);o=N(e,Tt(i,r))}return o};function Ct(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function kt(e,t,r,o){var s,u,l,c,p,f=gt(e);if(!o&&1===f.length){if(u=f[0]=f[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&h&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}s=J.needsContext.test(e)?0:u.length;while(s--){if(l=u[s],i.relative[c=l.type])break;if((p=i.find[c])&&(o=p(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(s,1),e=o.length&&mt(u),!e)return O.apply(r,o),r;break}}}return a(e,f)(o,t,!h,r,U.test(e)),r}n.sortStable=v.split("").sort(S).join("")===v,n.detectDuplicates=E,c(),n.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||lt("type|href|height|width",function(e,t,n){return n?undefined:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||lt("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?undefined:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||lt(R,function(e,t,n){var r;return n?undefined:(r=e.getAttributeNode(t))&&r.specified?r.value:e[t]===!0?t.toLowerCase():null}),x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(p){for(t=e.memory&&p,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(p[0],p[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!a||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,q,H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){var r;return t===undefined||t&&"string"==typeof t&&n===undefined?(r=this.get(e,t),r!==undefined?r:this.get(e,x.camelCase(t))):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(w)||[])),n=r.length;while(n--)delete s[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new F,q=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||q.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return q.access(e,t,n)},_removeData:function(e,t){q.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!q.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),P(i,r,s[r]));q.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:H.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=q.get(e,t),n&&(!r||x.isArray(n)?r=q.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)
};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return q.get(e,n)||q.access(e,n,{empty:x.Callbacks("once memory").add(function(){q.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=q.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n\f]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,i=0,o=x(this),s=e.match(w)||[];while(t=s[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===r||"boolean"===n)&&(this.className&&q.set(this,"__className__",this.className),this.className=this.className||e===!1?"":q.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,p,f,h,d,g,m,y=q.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(f=x.event.special[d]||{},d=(o?f.delegateType:f.bindType)||d,f=x.event.special[d]||{},p=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,f.setup&&f.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),f.add&&(f.add.call(e,p),p.handler.guid||(p.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,p):h.push(p),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,p,f,h,d,g,m=q.hasData(e)&&q.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){p=x.event.special[h]||{},h=(r?p.delegateType:p.bindType)||h,f=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=f.length;while(o--)c=f[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(o,1),c.selector&&f.delegateCount--,p.remove&&p.remove.call(e,c));s&&!f.length&&(p.teardown&&p.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,q.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,p,f,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),f=x.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!x.isWindow(r)){for(l=f.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:f.bindType||d,p=(q.get(a,"events")||{})[t.type]&&q.get(a,"handle"),p&&p.apply(a,n),p=c&&a[c],p&&x.acceptData(a)&&p.apply&&p.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(q.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,s=e,a=this.fixHooks[i];a||(this.fixHooks[i]=a=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new x.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],s=Q.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return e.contentDocument||x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),J.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&dt(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,p=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&st.test(d))return this.each(function(r){var i=p.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),ft),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,mt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,ht),l=0;s>l;l++)a=o[l],at.test(a.type||"")&&!q.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=mt(a),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],s[r]);if(t)if(n)for(o=o||mt(e),s=s||mt(a),r=0,i=o.length;i>r;r++)gt(o[r],s[r]);else gt(e,a);return s=mt(a,"script"),s.length>0&&dt(s,!u&&mt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,p=e.length,f=t.createDocumentFragment(),h=[];for(;p>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(rt.test(i)){o=o||f.appendChild(t.createElement("div")),s=(nt.exec(i)||["",""])[1].toLowerCase(),a=ct[s]||ct._default,o.innerHTML=a[1]+i.replace(tt,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.lastChild;x.merge(h,o.childNodes),o=f.firstChild,o.textContent=""}else h.push(t.createTextNode(i));f.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(f.appendChild(i),"script"),u&&dt(o),n)){l=0;while(i=o[l++])at.test(i.type||"")&&n.push(i)}return f},cleanData:function(e){var t,n,r,i,o,s,a=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(F.accepts(n)&&(o=n[q.expando],o&&(t=q.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(s=0;(i=r[s])!==undefined;s++)a[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);q.cache[o]&&delete q.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function pt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ft(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ht(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function dt(e,t){var n=e.length,r=0;for(;n>r;r++)q.set(e[r],"globalEval",!t||q.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(q.hasData(e)&&(o=q.access(e),s=q.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp("^("+b+")(.*)$","i"),Ct=RegExp("^("+b+")(?!px)[a-z%]+$","i"),kt=RegExp("^([+-])=("+b+")","i"),Nt={BODY:"block"},Et={position:"absolute",visibility:"hidden",display:"block"},St={letterSpacing:0,fontWeight:400},jt=["Top","Right","Bottom","Left"],Dt=["Webkit","O","Moz","ms"];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function qt(t){return e.getComputedStyle(t,null)}function Ht(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=q.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Lt(r)&&(o[s]=q.access(r,"olddisplay",Rt(r.nodeName)))):o[s]||(i=Lt(r),(n&&"none"!==n||!i)&&q.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=qt(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return Ht(this,!0)},hide:function(){return Ht(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Lt(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=At(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=kt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=At(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=vt(e,t,r)),"normal"===i&&t in St&&(i=St[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,s=n||qt(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Ct.test(a)&&wt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ot(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ft(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+jt[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+jt[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+jt[o]+"Width",!0,i))):(s+=x.css(e,"padding"+jt[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+jt[o]+"Width",!0,i)));return s}function Pt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=qt(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=vt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ct.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ft(e,t,n||(s?"border":"content"),r,o)+"px"}function Rt(e){var t=o,n=Nt[e];return n||(n=Mt(e,t),"none"!==n&&n||(xt=(xt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Mt(e,t),xt.detach()),Nt[e]=n),n}function Mt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&bt.test(x.css(e,"display"))?x.swap(e,Et,function(){return Pt(e,t,r)}):Pt(e,t,r):undefined},set:function(e,n,r){var i=r&&qt(e);return Ot(e,n,r?Ft(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},vt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+jt[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=Ot)});var Wt=/%20/g,$t=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&zt.test(this.nodeName)&&!It.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join("&").replace(Wt,"+")};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):_t(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)_t(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)
},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Xt,Ut,Yt=x.now(),Vt=/\?/,Gt=/#.*$/,Jt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},sn="*/".concat("*");try{Ut=i.href}catch(an){Ut=o.createElement("a"),Ut.href="",Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ln(e,t,n,r){var i={},o=e===on;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:"GET",isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":sn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),p=c.context||c,f=c.context&&(p.nodeType||p.jquery)?x(p):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+"").replace(Gt,"").replace(en,Xt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Xt[1]&&a[2]===Xt[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(Xt[3]||("http:"===Xt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Vt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Jt.test(r)?r.replace(Jt,"$1_="+Yt++):r+(Vt.test(r)?"&":"?")+"_="+Yt++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+sn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(p,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&&f.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=pn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(p,[m,C,T]):h.rejectWith(p,[T,C,y]),T.statusCode(g),g=undefined,u&&f.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(p,[T,C]),u&&(f.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function pn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var hn=[],dn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=hn.pop()||x.expando+"_"+Yt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(dn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&dn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(dn,"$1"+i):t.jsonp!==!1&&(t.url+=(Vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,hn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&&"withCredentials"in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete vn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(mn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=vn[o=yn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var xn,bn,wn=/^(?:toggle|show|hide)$/,Tn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Cn=/queueHooks$/,kn=[An],Nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Tn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),s=(x.cssNumber[e]||"px"!==o&&+r)&&Tn.exec(x.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,x.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function En(){return setTimeout(function(){xn=undefined}),xn=x.now()}function Sn(e,t,n){var r,i=(Nn[t]||[]).concat(Nn["*"]),o=0,s=i.length;for(;s>o;o++)if(r=i[o].call(n,t,e))return r}function jn(e,t,n){var r,i,o=0,s=kn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=xn||En(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:xn||En(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(Dn(c,l.opts.specialEasing);s>o;o++)if(r=kn[o].call(l,e,c,l.opts))return r;return x.map(c,Sn,l),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Dn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(jn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Nn[n]=Nn[n]||[],Nn[n].unshift(t)},prefilter:function(e,t){t?kn.unshift(e):kn.push(e)}});function An(e,t,n){var r,i,o,s,a,u,l=this,c={},p=e.style,f=e.nodeType&&Lt(e),h=q.get(e,"fxshow");n.queue||(a=x._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,l.always(function(){l.always(function(){a.unqueued--,x.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",l.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],wn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){if("show"!==i||!h||h[r]===undefined)continue;f=!0}c[r]=h&&h[r]||x.style(e,r)}if(!x.isEmptyObject(c)){h?"hidden"in h&&(f=h.hidden):h=q.access(e,"fxshow",{}),o&&(h.hidden=!f),f?x(e).show():l.done(function(){x(e).hide()}),l.done(function(){var t;q.remove(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)s=Sn(f?h[r]:0,r,l),r in h||(h[r]=s.start,f&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function Ln(e,t,n,r,i){return new Ln.prototype.init(e,t,n,r,i)}x.Tween=Ln,Ln.prototype={constructor:Ln,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=Ln.propHooks[this.prop];return e&&e.get?e.get(this):Ln.propHooks._default.get(this)},run:function(e){var t,n=Ln.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ln.propHooks._default.set(this),this}},Ln.prototype.init.prototype=Ln.prototype,Ln.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ln.propHooks.scrollTop=Ln.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(qn(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=jn(this,x.extend({},e),o);(i||q.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=q.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Cn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=q.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function qn(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=jt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:qn("show"),slideUp:qn("hide"),slideToggle:qn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Ln.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(xn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),xn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){bn||(bn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(bn),bn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=Hn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),p=x(e),f={};"static"===c&&(e.style.position="relative"),a=p.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=p.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):p.css(f)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=Hn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function Hn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);
;/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS=CryptoJS||function(h,s){var f={},t=f.lib={},g=function(){},j=t.Base={extend:function(a){g.prototype=this;var c=new g;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
q=t.WordArray=j.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=s?c:4*a.length},toString:function(a){return(a||u).stringify(this)},concat:function(a){var c=this.words,d=a.words,b=this.sigBytes;a=a.sigBytes;this.clamp();if(b%4)for(var e=0;e<a;e++)c[b+e>>>2]|=(d[e>>>2]>>>24-8*(e%4)&255)<<24-8*((b+e)%4);else if(65535<d.length)for(e=0;e<a;e+=4)c[b+e>>>2]=d[e>>>2];else c.push.apply(c,d);this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<
32-8*(c%4);a.length=h.ceil(c/4)},clone:function(){var a=j.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],d=0;d<a;d+=4)c.push(4294967296*h.random()|0);return new q.init(c,a)}}),v=f.enc={},u=v.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var d=[],b=0;b<a;b++){var e=c[b>>>2]>>>24-8*(b%4)&255;d.push((e>>>4).toString(16));d.push((e&15).toString(16))}return d.join("")},parse:function(a){for(var c=a.length,d=[],b=0;b<c;b+=2)d[b>>>3]|=parseInt(a.substr(b,
2),16)<<24-4*(b%8);return new q.init(d,c/2)}},k=v.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var d=[],b=0;b<a;b++)d.push(String.fromCharCode(c[b>>>2]>>>24-8*(b%4)&255));return d.join("")},parse:function(a){for(var c=a.length,d=[],b=0;b<c;b++)d[b>>>2]|=(a.charCodeAt(b)&255)<<24-8*(b%4);return new q.init(d,c)}},l=v.Utf8={stringify:function(a){try{return decodeURIComponent(escape(k.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data");}},parse:function(a){return k.parse(unescape(encodeURIComponent(a)))}},
x=t.BufferedBlockAlgorithm=j.extend({reset:function(){this._data=new q.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=l.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var c=this._data,d=c.words,b=c.sigBytes,e=this.blockSize,f=b/(4*e),f=a?h.ceil(f):h.max((f|0)-this._minBufferSize,0);a=f*e;b=h.min(4*a,b);if(a){for(var m=0;m<a;m+=e)this._doProcessBlock(d,m);m=d.splice(0,a);c.sigBytes-=b}return new q.init(m,b)},clone:function(){var a=j.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});t.Hasher=x.extend({cfg:j.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){x.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(c,d){return(new a.init(d)).finalize(c)}},_createHmacHelper:function(a){return function(c,d){return(new w.HMAC.init(a,
d)).finalize(c)}}});var w=f.algo={};return f}(Math);
(function(h){for(var s=CryptoJS,f=s.lib,t=f.WordArray,g=f.Hasher,f=s.algo,j=[],q=[],v=function(a){return 4294967296*(a-(a|0))|0},u=2,k=0;64>k;){var l;a:{l=u;for(var x=h.sqrt(l),w=2;w<=x;w++)if(!(l%w)){l=!1;break a}l=!0}l&&(8>k&&(j[k]=v(h.pow(u,0.5))),q[k]=v(h.pow(u,1/3)),k++);u++}var a=[],f=f.SHA256=g.extend({_doReset:function(){this._hash=new t.init(j.slice(0))},_doProcessBlock:function(c,d){for(var b=this._hash.words,e=b[0],f=b[1],m=b[2],h=b[3],p=b[4],j=b[5],k=b[6],l=b[7],n=0;64>n;n++){if(16>n)a[n]=
c[d+n]|0;else{var r=a[n-15],g=a[n-2];a[n]=((r<<25|r>>>7)^(r<<14|r>>>18)^r>>>3)+a[n-7]+((g<<15|g>>>17)^(g<<13|g>>>19)^g>>>10)+a[n-16]}r=l+((p<<26|p>>>6)^(p<<21|p>>>11)^(p<<7|p>>>25))+(p&j^~p&k)+q[n]+a[n];g=((e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22))+(e&f^e&m^f&m);l=k;k=j;j=p;p=h+r|0;h=m;m=f;f=e;e=r+g|0}b[0]=b[0]+e|0;b[1]=b[1]+f|0;b[2]=b[2]+m|0;b[3]=b[3]+h|0;b[4]=b[4]+p|0;b[5]=b[5]+j|0;b[6]=b[6]+k|0;b[7]=b[7]+l|0},_doFinalize:function(){var a=this._data,d=a.words,b=8*this._nDataBytes,e=8*a.sigBytes;
d[e>>>5]|=128<<24-e%32;d[(e+64>>>9<<4)+14]=h.floor(b/4294967296);d[(e+64>>>9<<4)+15]=b;a.sigBytes=4*d.length;this._process();return this._hash},clone:function(){var a=g.clone.call(this);a._hash=this._hash.clone();return a}});s.SHA256=g._createHelper(f);s.HmacSHA256=g._createHmacHelper(f)})(Math);
;//     Underscore.js 1.5.2
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,w=Object.keys,_=i.bind,j=function(n){return n instanceof j?n:this instanceof j?(this._wrapped=n,void 0):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.5.2";var A=j.each=j.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a=j.keys(n),u=0,i=a.length;i>u;u++)if(t.call(e,n[a[u]],a[u],n)===r)return};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var E="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(E);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(E);return r},j.find=j.detect=function(n,t,r){var e;return O(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var O=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:O(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,function(n){return n[t]})},j.where=function(n,t,r){return j.isEmpty(t)?r?void 0:[]:j[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},j.findWhere=function(n,t){return j.where(n,t,!0)},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);if(!t&&j.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>e.computed&&(e={value:n,computed:a})}),e.value},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);if(!t&&j.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a<e.computed&&(e={value:n,computed:a})}),e.value},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e},j.sample=function(n,t,r){return arguments.length<2||r?n[j.random(n.length-1)]:j.shuffle(n).slice(0,Math.max(0,t))};var k=function(n){return j.isFunction(n)?n:function(t){return t[n]}};j.sortBy=function(n,t,r){var e=k(t);return j.pluck(j.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={},i=null==r?j.identity:k(r);return A(t,function(r,a){var o=i.call(e,r,a,t);n(u,o,r)}),u}};j.groupBy=F(function(n,t,r){(j.has(n,t)?n[t]:n[t]=[]).push(r)}),j.indexBy=F(function(n,t,r){n[t]=r}),j.countBy=F(function(n,t){j.has(n,t)?n[t]++:n[t]=1}),j.sortedIndex=function(n,t,r,e){r=null==r?j.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var M=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):M(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return M(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.indexOf(t,n)>=0})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var R=function(){};j.bind=function(n,t){var r,e;if(_&&n.bind===_)return _.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));R.prototype=n.prototype;var u=new R;R.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:new Date,a=null,i=n.apply(e,u)};return function(){var l=new Date;o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u)):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u,i,a,o;return function(){i=this,u=arguments,a=new Date;var c=function(){var l=new Date-a;t>l?e=setTimeout(c,t-l):(e=null,r||(o=n.apply(i,u)))},l=r&&!e;return e||(e=setTimeout(c,t)),l&&(o=n.apply(i,u)),o}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=w||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},j.pairs=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},j.invert=function(n){for(var t={},r=j.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var I={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};I.unescape=j.invert(I.escape);var T={escape:new RegExp("["+j.keys(I.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(I.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(T[n],function(t){return I[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
//# sourceMappingURL=underscore-min.map;//
// Bitcoin Browser Wallet (Chrome Extension)
// Copyright (c) 2013 Fabian Vogelsteller [frozeman.de]
// 
// This program is free software; you can redistribute it and/or modify
// it under the terms of the MIT license.


    // "http://*/",
    // "https://*/",
    // "tabs",  
    // "http://*/*",
    // "https://*/*",

  // "content_scripts": [
  //   {
  //     "matches": ["http://*/*","https://*/*"],
  //     "js": ["js/jquery-2.0.3.min.js", "js/addressFetcher.js"],
  //     "run_at": "document_end",
  //     "all_frames": false
  //   }
  // ],



// -> INTERFACE

// CONSTANTS
var DECIMAL_POINTS = 100000000,
    TRANSACTION_FEE = 0.0001;

// VARS
var bStore = chrome.extension.getBackgroundPage().storage,
    cStore = chrome.storage.sync,
    intervals = {};
    encryptedPrivateKey = '',
    publicKey = '',
    firstSend = false,
    version = null,
    remoteVersion = null;

// local version
$.getJSON('../manifest.json', function(data) {
    version = data.version;
});
// version on github master
$.getJSON('https://raw.github.com/frozeman/bitcoin-browser-wallet/master/manifest.json', function(data) {
    remoteVersion = data.version;
});



/**
* A very simple self made localization function.
* uses the imported i18n.js file and displays the lang strings.
*
*/
var addI18n = function(lang){
    $('*[data-i18n]').each(function(){
        var key = $(this).data('i18n').split('.');

        // stupid but works
        if(key.length === 2)
            $(this).append(i18n[lang][key[0]][key[1]]);
        if(key.length === 3)
            $(this).append(i18n[lang][key[0]][key[1]][key[2]]);
        if(key.length === 4)
            $(this).append(i18n[lang][key[0]][key[1]][key[2]][key[3]]);
    });
};
var lang = (navigator.language.substr(0,2) === 'de')? 'de' : 'en';
addI18n(lang);


// get users private and public key
cStore.get(['privateKey','publicKey','firstSend'], function(store){

    if(store.privateKey) {
        encryptedPrivateKey = store.privateKey;
        publicKey = store.publicKey;
        firstSend = store.firstSend;
        showWallet();
    } else {
        showSetup();
    }
});



/**
* SETUP
*
* Will generate or import a private and public key for the wallet
* and encrypt it using a user choosen password.
*
*/
var showSetup = function(){
    var importPrivKey = false,
        $setup = $('#setup'),
        $password = $setup.find('.password'),
        $passwordCorfirm = $setup.find('.passwordConfirm');

    // show
    $setup.show();


    // Attach events
    $setup.find('input').on('keypress', function(e){
        if(e.keyCode === 13)
            $setup.find('button.create').trigger('click');
    });
    $setup.find('input.importPrivRadio').on('change', function(){
        if($(this).val()) {
            $setup.find('input.importPrivkey').show();
            importPrivKey = true;
        }
    });
    $setup.find('input.generatePrivRadio').on('change', function(){
        if($(this).val()) {
            $setup.find('input.importPrivkey').hide();
            importPrivKey = false;
        }
    });

    // CREATE ACCOUNT
    $setup.find('button.create').on('click', function(){
        // check passwords
        if(!_.isEmpty($password.val())) {

            if($password.val() === $passwordCorfirm.val()) {

                // -> import a private key
                if(importPrivKey) {
                    var privKey = $setup.find('input.importPrivkey').val(),
                        pubKey = getPublicKey(privKey);

                    // store the priv/pub key
                    if(_.isEmpty(privKey) || !pubKey)
                        $setup.find('.invalidPrivateKey').show();

                // -> generate a private key
                } else {
                    var privKey = generatePrivKey(),
                        pubKey = generatePublicKey(privKey.bytes);

                    if(pubKey)
                        privKey = privKey.WIF;

                }

                // store the priv/pub key
                if(!_.isEmpty(privKey) && !_.isEmpty(pubKey)) {

                    privKey = CryptoJS.AES.encrypt(privKey, $password.val()).toString();

                    if(privKey) {

                        chrome.runtime.lastError = null;
                        cStore.set({
                            firstSend: false,
                            privateKey: privKey,
                            publicKey: pubKey
                        }, function(){

                            if(!chrome.runtime.lastError) {

                                encryptedPrivateKey = privKey;
                                publicKey = pubKey;

                                hideSetup();
                                showWallet();
                            } else {
                                $setup.find('.runtimeError > p').append(chrome.runtime.lastError.message);
                                $setup.find('.runtimeError').show();
                            }

                        });
                    }
                }
                
                
            } else
                $setup.find('.passwordMismatch').show();
        }
    });

};
var hideSetup = function(){
    var $setup = $('#setup');

    $setup.find('input.importPrivkey').hide();
    $setup.find('input').val('');
    $setup.find('.message > .error, .message > .info').hide();
    $setup.find('*').off('click change keyup keypress');
    $setup.hide();
};




/**
* SETTINGS
*
* Allow the user to display his private key and delete teh wallet.
* Will also display the wallets version and credits.
*/
var showSettings = function(){
    var $settings = $('#settings'),
        $showKey = $('#showKey'),
        deleteWallet = false,
        confirmedDeletion = false;

    // show
    $settings.show();

    // show version
    // TODO: show update note??
    $settings.find('.version').text(version);
    if(version < remoteVersion)
        $settings.find('.version').append(' <small>('+ remoteVersion +' <a href="https://chrome.google.com/webstore/detail/bitcoin-browser-wallet/liopgbfpkngindhbgplllgjhfpcfnmig" target="_blank">update available</a>)</small>');


    // ATTACH EVENTS
    // hide settings
    $settings.find('button.close').on('click', function(){
        hideSettings();
        showWallet();
    });
    // show wallet and add the donation address
    $settings.find('a.donate').on('click', function(){
        hideSettings();
        showWallet();
        $('#wallet').find('input.btcAddress').val($(this).text()).trigger('keyup');
        $('#wallet').find('input.sendAmount').focus();
    });
    // send on enter
    $settings.find('#settingsConfirm input').on('keypress', function(e){
        if(e.keyCode === 13)
            $settings.find('#settingsConfirm button.confirm').trigger('click');
    });
    $settings.find('#showKey input').on('keypress', function(e){
        if(e.keyCode === 13)
            $settings.find('#showKey button.confirm').trigger('click');
    });

    // show private key confirm
    $settings.find('button.showKey').on('click', function(){
       $('#settingsConfirm').show().find('.showPrivateKeyText').show();
       $('#settingsConfirm').find('input.login').focus();
       deleteWallet = false;
    });
    // show delete wallet confirm
    $settings.find('button.deleteWallet').on('click', function(){
        $('#settingsConfirm').show().find('.deleteWalletText').show();
        $('#settingsConfirm').find('input.login').focus();
        deleteWallet = true;
    });

    // hide confirms
    $('#settingsConfirm').find('button.cancel').on('click', function(){
       $('#settingsConfirm').hide().find('.deleteWalletText, .showPrivateKeyText').hide();
       $('#settingsConfirm').find('input.login').val('');
       $settings.find('#settingsConfirm .passwordWrong').hide();
       deleteWallet = false;
    });



    // -> show private key
    $settings.find('button.confirm').on('click', function(){
        $settings.find('#settingsConfirm .passwordWrong').hide();

        try {
            decodedPrivKey = CryptoJS.AES.decrypt(encryptedPrivateKey, $settings.find('#settingsConfirm input.login').val()).toString(CryptoJS.enc.Utf8);
        } catch(error) {
            decodedPrivKey = false;
        }

        // all went right
        if(!_.isEmpty(decodedPrivKey)) {

            $('#settingsConfirm').hide().find('.deleteWalletText, .showPrivateKeyText').hide();
            $showKey.show().find('input.privKey').val(decodedPrivKey);

            // show private key
            if(deleteWallet) {
                $showKey.find('.deleteWallet').show();
                confirmedDeletion = true;

            // delete wallet
            } else {
                $showKey.find('.showKey').show();
            }
        } else {
            $settings.find('#settingsConfirm .passwordWrong').show();
        }

        decodedPrivKey = null;
    });

    // hide private key
    $showKey.find('button.ok, button.cancel').on('click', function(){
        $showKey.find('input.privKey').val('');
        $showKey.find('.deleteWallet, .showKey').hide();
        $('#settingsConfirm').find('button.cancel').trigger('click');
        $showKey.hide();
    });

    // confirm DELETE WALLET
    $showKey.find('button.confirm').on('click', function(){

        // DELETE WALLET KEYS
        if(confirmedDeletion) {
            chrome.runtime.lastError = null;
            cStore.remove(['privateKey','publicKey'], function(){

                if(!chrome.runtime.lastError) {
                    confirmedDeletion = false;
                    encryptedPrivateKey = null;
                    publicKey = null;
                    bStore.balance = 0;
                    bStore.currentAddress = null;
                    bStore.currentAmount = null;
                    bStore.displayUSD = null;
                    bStore.currentPrice = null;
                    bStore.paymentInProcess = null;

                    // hide showKey
                    $showKey.find('button.cancel').trigger('click');
                    hideSettings();
                    hideWallet();
                    showSetup();
                
                // show error
                } else {
                    $showKey.find('.deletionFailed').show().find('p').append(chrome.runtime.lastError);
                }
            });

        }

    });

};
var hideSettings = function(){
    var $settings = $('#settings');

    $settings.find('input').val('');
    $settings.find('.message > .error, .message > .info').hide();
    $settings.find('*').off('click change keyup keypress');
    $settings.hide();
};




/**
* WALLET
*
* Displays the user wallet balance and 
* lets the user send bitcoin to other addresses.
*/
var showWallet = function(){
    var $wallet = $('#wallet'),
        $sendAddress = $wallet.find('.btcAddress'),
        $sendAmount = $wallet.find('.sendAmount');

    // show
    $wallet.show();

    // DEV
    // showSuccess('8e0e21ef77a73d30fe5e1bc52809c1e67fd5c6c929d8efacb6e6b70e99e75bde');

    // -> FETCH BTC ADDRESSES FROM CURRENT TAB

    // fetch BTC address from the current tab
    chrome.tabs.executeScript(null, {file:"/js/vendor/underscore-min.js"}, function() {
        chrome.tabs.executeScript(null, {file:"/js/vendor/jquery-2.0.3.min.js"}, function(){
            chrome.tabs.executeScript(null, { file: "/js/addressFetcher.js"});
        });
    });
    // retrieve addresses
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        // console.log(sender.tab ?
        //             "from a content script:" + sender.tab.url :
        //             "from the extension", request.btcAdresses);

        // when addresses were received, add them to a list
        if(!_.isEmpty(request.btcAdresses)) {

            setTimeout(function(){
                var $availableAddresses = $wallet.find('.availableAddresses');
                _.each(request.btcAdresses, function(btcAdresses){
                    var $button = $('<button><span class="icon-qrcode"></span><span class="text"></span></button>');

                    // append to the list
                    $availableAddresses.children('ul').append($('<li>').append($button));

                    // add address
                    $button.data('address', btcAdresses.address).find('span.text').text(' '+ btcAdresses.address);

                    if(btcAdresses.amount > 0)
                        $button.data('amount', btcAdresses.amount).append(' > '+ btcAdresses.amount +' BTC');

                });
                $availableAddresses.show();
            }, 200);
        }
    });
    

    // display own public key
    $wallet.find('a.publicKey, a.walletAddress').text(publicKey).attr('href','http://blockchain.info/address/'+ publicKey);


    // set the balance on start
    displayBalance();
    
    // -> get balance every 10s
    getPriceIndex();
    // run the balance check with a delay of 2s
    intervals.checkBalanceTimeout = setTimeout(function(){
        getBalance();
        intervals.checkBalance = setInterval(function(){
            // console.log('checking balance...');
            getBalance();
        }, 10000);
    }, 2000);
    // check the price index after 10s
    intervals.checkPrice = setInterval(function(){
        getPriceIndex();
    }, 10000);

    
    // -> retrieve last typed address
    if(bStore.currentAddress) {
        $sendAddress.val(bStore.currentAddress);
        setTimeout(function(){
            $sendAmount.focus();
        }, 100);
    }
    // -> retrieve last typed send amount
    $sendAmount.val(bStore.currentAmount);
    


    // ATTACH EVENTS
    // show settings
    $wallet.find('button.settings').on('click', function(){
        showSettings();
        hideWallet();
    });
    // switch displayed currency
    $wallet.find('button.switchCurrency, button.symbol').on('click', function(){
        bStore.displayUSD  = (bStore.displayUSD) ? false : true;
        displayBalance();
        getPriceIndex();
    });
    // store currently typed address
    $sendAddress.on('keyup change', function(){
        bStore.currentAddress = $(this).val();
    });
    // store currently typed address
    $sendAmount.on('keyup change', function(){
        var val = $(this).val();

        // make sure all "," are replaced with "."
        if(val.indexOf(',') != -1)
            $(this).val(val.replace(/\,/g,'.'));

        bStore.currentAmount = val;
    });
    $wallet.find('input').on('keypress', function(e){
        if(e.keyCode === 13)
            $wallet.find('button.send').trigger('click');
    });
    // add donation address to form when clicked
    $wallet.find('.message').on('click','a.donate', function(){
        $sendAddress.val($(this).text()).trigger('keyup');
        $sendAmount.focus();
    });
    // add available address to form when clicked
    $wallet.find('.availableAddresses').on('click','button', function(){
        $sendAddress.val($(this).data('address')).trigger('keyup');
        if($(this).data('amount'))
            $sendAmount.val($(this).data('amount')).trigger('keyup').focus();
    });

    // -> start payment
    $wallet.find('button.send').on('click', function(){
        var address = $sendAddress.val(),
            amount = $sendAmount.val();

        // if value was given in USD, calculate the biycoin price
        if(bStore.displayUSD) {
            amount = inBTC(amount);
        }

        $wallet.find('.error').hide();

        if(validateAddress(address)) {

            if(_.isFinite(amount) && amount != 0) {

                // show password form
                showSendConfirm(address, amount);

            } else
                $wallet.find('.invalidSendAmount').show();
        } else
            $wallet.find('.invalidSendAddress').show();
    });


};
var hideWallet = function(){
    var $wallet = $('#wallet');
    clearTimeout(intervals.checkBalanceTimeout);
    clearInterval(intervals.checkBalance);
    clearInterval(intervals.checkPrice);

    $wallet.find('input').val('');
    $wallet.find('.message > *').hide();
    $wallet.find('.message > .error, .message > .info').hide();
    $wallet.find('*').off('click keyup keypress change');
    $wallet.hide();
};



/**
* SEND CONFIRM
*
* This includes various checks and a confirmation page which is shown before the user finally sends his funds.
*/
var showSendConfirm = function(address, amount){
    var $sendConfirm = $('#sendConfirm');


    // make sure its not more than 8 decimal points
    amount = roundBTC(amount);


    // show
    $sendConfirm.show();
    $sendConfirm.find('input.login').focus();
    $sendConfirm.find('span.amount').text(amount +' BTC ('+ inUSD(amount) +' USD)');
    $sendConfirm.find('a.address').text(address).attr('href','http://blockchain.info/address/'+ address);



    // attach events
    // close login window
    $sendConfirm.find('button.cancel').on('click', function(){
        hideSendConfirm();
    });
    $sendConfirm.find('input').on('keypress', function(e){
        if(e.keyCode === 13)
            $sendConfirm.find('button.confirm').trigger('click');
    });

    // -> SEND PAYMENT
    $sendConfirm.find('button.confirm').on('click', function(){
        $wallet = $('#wallet');

        // prevent "double spends"
        if(!bStore.paymentInProcess) {
            var decodedPrivKey;

            try {
                decodedPrivKey = CryptoJS.AES.decrypt(encryptedPrivateKey, $sendConfirm.find('input.login').val()).toString(CryptoJS.enc.Utf8);
            } catch(error) {
                decodedPrivKey = false;
            }

            // all went right
            if(!_.isEmpty(decodedPrivKey)) {

                bStore.paymentInProcess = true;
                $('#loading').show();

                // -> SEND TRANSACTION VIA BLOCKCHAIN.INFO
                $.ajax({
                    url: 'https://blockchain.info/merchant/'+ decodedPrivKey +'/payment',
                    data: {
                        to: address,
                        amount: amount * DECIMAL_POINTS 
                    }
                })
                .always(function(){
                    bStore.paymentInProcess = false;
                    $('#loading').hide();
                    hideSendConfirm();
                })
                .done(function(response){

                    // stringify if thats not happened
                    if(_.isString(response))
                        response = JSON.parse(response);

                    // show SUCCESS
                    if(_.isObject(response) && _.isEmpty(response.error) && !_.isEmpty(response.tx_hash)) {

                        // successful, show transaction id
                        showSuccess(response.tx_hash);

                        // update the balance in the background
                        bStore.balance = bStore.balance - amount - TRANSACTION_FEE;
                        displayBalance();

                        // store first send done
                        chrome.runtime.lastError = null;
                        cStore.set({ firstSend: true }, function(){
                            if(!chrome.runtime.lastError) {
                                firstSend = true;
                                displayBalance();
                            }
                        });

                    // show ERROR
                    } else {
                        $wallet.find('.transactionFailed > p').text(response.error);
                        $wallet.find('.transactionFailed').show();
                    }

                })
                .fail(function(){
                    $wallet.find('.transactionRequestFailed').show();
                });



            // wrong password
            } else {
                hideSendConfirm();
                $wallet.find('.passwordWrong').show();
            }

            decodedPrivKey = null;
        }

    });
};
var hideSendConfirm = function(){
    var $sendConfirm = $('#sendConfirm');

    $sendConfirm.find('input').val('');
    $sendConfirm.find('*').off('click keypress');
    $sendConfirm.hide();
};


/**
* SUCCESS PAGE
*
* Shows the success page to after successfully send an transaction.
*/
var showSuccess = function(txHash){
    var $success = $('#success');

    $success.find('button.ok').on('click', function(){
        hideSuccess();
    });

    $success.show();
    $success.find('a.transactionId').text(txHash).attr('href','http://blockchain.info/tx/'+ txHash);
};
var hideSuccess = function(){
    $('#success').hide().find('*').off('click');
    $('#success').find('input').val('');

    bStore.currentAmount = null;
    bStore.currentAddress = null;

    $('#wallet').find('input').val('');
};








// METHODS


/**
* Retrives the balance of the users address.
*
*/
var getBalance = function(){

    return $.ajax({
        url: "https://blockchain.info/q/addressbalance/"+ publicKey, //"https://blockchain.info/address/"+ publicKey,
        // data: {
        //     format: 'json',
        //     limit: 0
        // }
    }).done(function(data){

        bStore.balance = data / DECIMAL_POINTS; // .final_balance
        // bStore.balance = undefined;

        displayBalance();
    });
};

/**
* Retrives the current price for 1 bitcoin in USD from bitstamp.net.
*
*/
var getPriceIndex = function(){

    return $.ajax({
        url: "https://www.bitstamp.net/api/ticker/"
    }).done(function(data){
        bStore.currentPrice = data.last;

        displayBalance();
    });
};


/**
* Displays the balance in either BTC or USD
*
*/
var displayBalance = function(){
    var $wallet = $('#wallet');

    // ake sure there is a number balance
    if(!bStore.balance)
        bStore.balance = 0;


    // show message to load wallet
    if(bStore.balance)
        $wallet.find('.noFunds').hide();
    else
        $wallet.find('.noFunds').show();

    // -> display message 
    if(bStore.balance && !firstSend)
        $wallet.find('.noTransaction').show();
    else
        $wallet.find('.noTransaction').hide();


    // display USD or BTC
    if(bStore.displayUSD) {
        $wallet.find('.balance .number').text(inUSD(bStore.balance));
        $wallet.find('.balance .symbol').text('USD');
        $wallet.find('button.symbol').text('USD');
        $wallet.find('input.sendAmount').attr('placeholder','0.00');
        $wallet.find('input.sendAmount').attr('step','0.01');
    } else {
        $wallet.find('.balance .number').text(bStore.balance);
        $wallet.find('.balance .symbol').text('BTC');
        $wallet.find('button.symbol').text('BTC');
        $wallet.find('input.sendAmount').attr('placeholder','0.00000000');
        $wallet.find('input.sendAmount').attr('step','0.001');
    }
    $wallet.find('button.switchCurrency').attr('title','Bitstamp: '+ bStore.currentPrice +' USD/BTC');
};

/**
* Changes BTC into USD
*
*/
var inUSD = function(btc){
    return Math.round((btc * bStore.currentPrice) * 100) / 100;
};

/**
* Changes USD into BTC
*
*/
var inBTC = function(fiat){
    return Math.round((fiat / bStore.currentPrice) * DECIMAL_POINTS) / DECIMAL_POINTS;
};

/**
* Makes sure that BTC will "only" have 8 decimal points.
*
*/
var roundBTC = function(btc){
    return Math.round((btc) * DECIMAL_POINTS) / DECIMAL_POINTS;
};


/**
* Generates a bitcoin Private Key
*
*/
var generatePrivKey = function(){
    var randArr = new Uint8Array(32); //create a typed array of 32 bytes (256 bits)
    window.crypto.getRandomValues(randArr); //populate array with cryptographically secure random numbers

    //some Bitcoin and Crypto methods don't like Uint8Array for input. They expect regular JS arrays.
    var privateKeyBytes = []
    for (var i = 0; i < randArr.length; ++i)
      privateKeyBytes[i] = randArr[i];

    //hex string of our private key
    var privateKeyHex = Crypto.util.bytesToHex(privateKeyBytes).toUpperCase();

    var privateKeyAndVersion = "80" + privateKeyHex;
    var firstSHA = Crypto.SHA256(Crypto.util.hexToBytes(privateKeyAndVersion));
    var secondSHA = Crypto.SHA256(Crypto.util.hexToBytes(firstSHA));
    var checksum = secondSHA.substr(0, 8).toUpperCase();

    //append checksum to end of the private key and version
    var keyWithChecksum = privateKeyAndVersion + checksum;

    var privateKeyWIF = Bitcoin.Base58.encode(Crypto.util.hexToBytes(keyWithChecksum));

    return {
        bytes: privateKeyBytes,
        WIF: privateKeyWIF
    };
};

/**
* Gets the public key from a private key
*
*/
var getPublicKey = function(privKey){

    try { 
        var res = parseBase58Check(privKey);
        return new Bitcoin.ECKey(res[1]).getBitcoinAddress().toString();
    } catch (err) {
        return false;
    };
};

/**
* Generates the public key from a private keys bytes
*
*/
var generatePublicKey = function(privateKeyBytes){
    //privateKeyBytes is the private key array from the top
    var eckey = new Bitcoin.ECKey(privateKeyBytes);
    // var publicKeyHex = Crypto.util.bytesToHex(eckey.getPub());
    return eckey.getBitcoinAddress().toString();
};

/**
* Parses a Base58 key and validates it.
*
*/
var parseBase58Check = function(address) {
    var bytes = Bitcoin.Base58.decode(address);
    var end = bytes.length - 4;
    var hash = bytes.slice(0, end);
    var checksum = Crypto.SHA256(Crypto.SHA256(hash, {asBytes: true}), {asBytes: true});
    if (checksum[0] != bytes[end] ||
        checksum[1] != bytes[end+1] ||
        checksum[2] != bytes[end+2] ||
        checksum[3] != bytes[end+3])
            throw new Error("Wrong checksum");
    var version = hash.shift();
    return [version, hash];
};

/**
* Validates a bitcoin address (public key)
*
*/
var validateAddress = function(address){
    try {
        Bitcoin.Address(address);
        return true;
    } catch (err) {
        return false;
    }
};
