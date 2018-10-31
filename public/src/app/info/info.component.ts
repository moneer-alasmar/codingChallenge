import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs/Rx";

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.css"]
})
export class InfoComponent implements OnInit {
  contactForm: {};
  errors: any;
  contactSuccess: boolean;
  contactFailed: boolean;
  errorMsg: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.contactForm = { email: "", subject: "", body: "" };
    this.contactSuccess = false;
  }

  ngOnInit() {}

  componentSubmitForm() {
    this._httpService.serviceSubmitForm(this.contactForm).subscribe(
      data => {
        this.contactSuccess = true;
        this.contactFailed = false;
      },
      error => {
        this.contactFailed = true;
        this.contactSuccess = false;
      }
    );
  }
}
