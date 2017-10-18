import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class IssueService {
    constructor(private http: Http) { }

    private urlPreprod : string = "https://api.github.com/repos/dev-sigl/site-vitrine/issues";
    //private urlPreprod : string = "https://api.github.com/repos/dev-sigl/site-vitrine/issues/?access_token=c7b70bc7b7d01ec65969a55367feb2e967d2e2fd";
    

    reportIssue(title : string, body : string) {
        var request = {
            title : title,
            body : body
           // token : "c7b70bc7b7d01ec65969a55367feb2e967d2e2fd"
        };
        return this.http.post(this.urlPreprod, request).toPromise().then(response =>
            console.log(response));
    }
    
}