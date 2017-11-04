import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class IssueService {
    constructor(private http: Http) { }

   // private urlPreprod : string = "https://api.github.com/repos/dev-sigl/site-vitrine/issues";
    private urlPreprod : string = "https://api.github.com/repos/dev-sigl/site-vitrine/issues/?access_token=4d5cf6787b2307eef1402420332d151eef9a3765";
    

    reportIssue(title : string, body : string) {
        var request = {
            title : title,
            body : body
        };

        console.log(request);
        return this.http.post(this.urlPreprod, request).toPromise().then(response =>
            console.log(response));
    }
    
}