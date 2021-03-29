import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title: String = "counter app";
  counter: number = 0;

  handleInc = () => {
    if (this.counter >= 0) {
      this.counter += 1;
    }
  };

  handleDec = () => {
    if (this.counter > 0) {
      this.counter -= 1;
    }
  };
}
