import { Component, OnDestroy, OnInit } from "@angular/core";
import { MediaChange, ObservableMedia } from "@angular/flex-layout";
import { Subscription } from "rxjs";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.css"]
})
export class SidenavComponent implements OnInit, OnDestroy {

  isScreenSmall = false;
  watcher: Subscription;

  constructor(private media: ObservableMedia) {
    this.watcher = media.subscribe((change: MediaChange) => {
      this.isScreenSmall = change.mqAlias === "xs";
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }
}
