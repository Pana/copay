import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Logger } from '../../../providers/logger/logger';

// providers
import { AppProvider } from '../../../providers/app/app';
import { WalletProvider } from '../../../providers/wallet/wallet';

@Component({
  selector: 'wallet-all-address-qr',
  templateUrl: 'wallet-all-address-qr.html',
})
export class WalletAllAddressQRPage {
  private wallet: any;
  private allAddress: any;

  constructor(
    private navParams: NavParams,
    private viewCtrl: ViewController,
    private appProvider: AppProvider,
    private walletProvider: WalletProvider,
    private logger: Logger,
  ) {
    this.wallet = this.navParams.data.wallet;
  }

  ionViewWillEnter() {
    this.walletProvider.getMainAddresses(this.wallet, {}).then((addresses: any) => {
      this.allAddress = addresses.map(i => i.address).join(',');
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}