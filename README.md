VHardWallet
===
Offline smart phone + VHardWallet = Bitcoin hardware wallet. In the bitcoin land the most important thing is your private keys, you should never let it been stolen or lost. As we all know cold wallet is more secure than hot wallet,
hardware wallet is more secure than software wallet. This is why Ledger & Trezor have been created. But they all are very expensive. VHardWallet can turn an obsolete mobile phone into an hardware wallet, and is more cheap.

VHardWallet have two part: Offline key manager & Online wallet. They communicate with each other through QR code: include balance sync, transaction sign & broadcast. In this way your private key will be pretty secure, because they were generated and keept on a offline environment, hackers can't touch them, except they stole your phone.

**Note: you should never put you offline phone online**

#### Offline key manager
Offline key manager use deterministic key creation to create parent private and public keys which can create child private and public keys. When first run, the signing-only wallet creates a parent private key and transfers the corresponding parent public key to the online wallet through QR code. It receive unsigned transactions from online wallet, sign it and send back also through QR code.

![](https://bitcoin.org/img/dev/en-wallets-signing-only.svg)

#### Online wallet

The online wallet uses the parent public key to derive child public keys, optionally helps distribute them, monitors for outputs spent to those public keys, creates unsigned transactions spending those outputs, and transfers the unsigned transactions to the offline wallet. broadcasts the signed transactions to the peer-to-peer network. Sync balance with offline wallet

#### Inherited features from copay
This project is forked from copay which is an open source bitcoin wallet project. So it inherit excellent features from it, include:

* Multiple wallet creation and management in-app
* Intuitive, multisignature security for personal or shared wallets
* Easy spending proposal flow for shared wallets and group payments
* BIP32 Hierarchical deterministic (HD) address generation and wallet backups
* Device-based security: all private keys are stored locally, not in the cloud
* Support for Bitcoin testnet wallets
* Synchronous access across all major mobile and desktop platforms
* Payment protocol (BIP70-BIP73) support: easily-identifiable payment requests and verifiable, secure bitcoin payments
* Support for over 150 currency pricing options and unit denomination in BTC or bits
* Mnemonic (BIP39) support for wallet backups
* Paper wallet sweep support (BIP38)
* Email notifications for payments and transfers
* Push notifications (only available for ios and android versions)
* Customizable wallet naming and background colors
* Multiple languages supported
* Available for iOS, Android, Windows Phone, Chrome App, Linux, Windows and OS X devices







