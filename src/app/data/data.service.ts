import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { UserSettings } from "./user-settings";

@Injectable({})
export class DataService {
  constructor() {}

  postUserSettingsFrom(userSettings: UserSettings): Observable<UserSettings> {
    return Observable.of(userSettings);
  }
}
