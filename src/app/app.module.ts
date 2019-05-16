import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { DataService } from "./data/data.service";
import { UserSettingsFormComponent } from "./user-settings-form/user-settings-form.component";

@NgModule({
  declarations: [AppComponent, UserSettingsFormComponent],
  imports: [BrowserModule, FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
