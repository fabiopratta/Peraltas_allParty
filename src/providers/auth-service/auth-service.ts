import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

let apiUrl = "http://10.1.1.34/Webservice/api/";


@Injectable()
export class AuthServiceProvider {

    constructor(public http: HttpClient) {
        console.log('Hello AuthServiceProvider Provider');
    }

    postData(credentials, type) {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            this.http.post(apiUrl + type, JSON.stringify(credentials))
                .subscribe(res => {
                        resolve(res.json());
                    },(err) => {
                    reject(err);
                });
        });
    }
}
