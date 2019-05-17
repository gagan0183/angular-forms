import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { HttpClient } from "@angular/common/http";
import { UserSettings } from "./user-settings";
import { of } from "rxjs/observable/of";

@Injectable({})
export class DataService {
  constructor(private http: HttpClient) {}

  postUserSettingsFrom(userSettings: UserSettings): Observable<any> {
    //return Observable.of(userSettings);
    return this.http.post("url", userSettings);
  }

  getSubscriptionTypes(): Observable<String[]> {
    return of(["Monthly", "Annual", "Lifetime"]);
  }
}
