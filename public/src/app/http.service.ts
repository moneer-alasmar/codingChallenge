import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {}

  serviceSubmitForm(obj) {
    return this._http.post(
      "http://interview-contact-submit-api-lb-1009699934.us-east-1.elb.amazonaws.com/contact-us/send",
      obj
    );
  }
}
