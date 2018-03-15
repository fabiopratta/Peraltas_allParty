import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { PrincipalPage } from '../principal/principal';


@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

    responseData : any;
    userData = {
        "name":"",
        "email":"",
        "birthday":"",
        "phone":"",
        "password":"",
        "type":""
    };

    constructor(public navCtrl: NavController, public authService: AuthServiceProvider, public alertCtrl: AlertController, public loading: LoadingController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CadastroPage');
    }

    efetuaCadastro() {
        let loader = this.loading.create({
            content: "Por favor aguarde...",
            duration: 3000,
            spinner: 'dots',
        });
        loader.present();
        this.authService.postData(this.userData,'signup').then((result) => {
            this.responseData = result;
            if(this.responseData.userData){
                console.log(this.responseData);
                localStorage.setItem('userData', JSON.stringify(this.responseData));
                loader.dismiss();
                this.navCtrl.push(PrincipalPage);
            }else{
                this.showAlert("Usuário ja existe em nossa base de dados.","alert");
            }
        }, (err) => {
            loader.dismiss();
            this.showAlert("Não foi possivel completar sua requisição detalhes do erro: "+JSON.stringify(err),"error");
        });
    }

    showAlert(message,type) {
        let alert = this.alertCtrl.create({
            title: 'Atenção',
            subTitle: message,
            buttons: ['OK']
        });

        if(type == "error"){
            alert.setTitle("Erro:");
        }

        alert.present();
    }
}
