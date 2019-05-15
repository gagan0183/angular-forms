import { Component, OnInit } from "@angular/core";
import { UserSettings } from "../data/user-settings";
import { NgForm, NgModel } from "@angular/forms";

@Component({
  selector: "app-user-settings-form",
  templateUrl: "./user-settings-form.component.html",
  styleUrls: ["./user-settings-form.component.css"]
})
export class UserSettingsFormComponent implements OnInit {
  originalUserSettings: UserSettings = {
    name: "p",
    specialOffer: true,
    intefaceStyle: "medium",
    subscriptionType: "annual",
    notes: "this is note"
  };

  userSettings: UserSettings = {
    ...this.originalUserSettings
  };
  constructor() {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    console.log("form is submitted ", form.valid);
  }

  onBlur(name: NgModel) {
    console.log("on ", name.valid);
  }
}
