import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import {CadastroPage} from "../cadastro/cadastro";
import {LoginPage} from "../login/login";

/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  constructor(public navCtrl: NavController, public statusBar: StatusBar, public navParams: NavParams) {

    //esconde menu
      this.statusBar.hide();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

  cadastrarAction() {
    this.navCtrl.push(CadastroPage);
  }

  loginAction() {
    this.navCtrl.push(LoginPage);
  }
}
