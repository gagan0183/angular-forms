import { Component, OnInit } from "@angular/core";
import { UserSettings } from "../data/user-settings";
import { NgForm, NgModel } from "@angular/forms";
import { DataService } from "../data/data.service";

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
  constructor(private dataService: DataService) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    console.log("form is submitted ", form.valid);
    this.dataService
      .postUserSettingsFrom(this.userSettings)
      .subscribe(
        result => console.log("success", result),
        error => console.log("error", error)
      );
  }

  onBlur(name: NgModel) {
    console.log("on ", name.valid);
  }
}
