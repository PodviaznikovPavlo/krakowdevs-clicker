import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'krakowdevs-clicker';
  
  conditions = {
    isProcessing: true
  };

  clicker = {
    email: "",
    clicksNum: 0
  };

  constructor(
    private AppService: AppService
  ) {}

  ngOnInit() {
    this.AppService.getClicks("")
      .subscribe((clicksNum: any) => {
        this.clicker.clicksNum = clicksNum;

        this.setProcessing(false);
      });    
  }

  onGetUserClicks() {
    
  }

  onClick() {
    ++this.clicker.clicksNum;

    this.AppService.saveClick(this.clicker.clicksNum)
      .subscribe((clicksNum: any) => {
        this.clicker.clicksNum = clicksNum;
      });  
  }

  private setProcessing(bool: boolean) {
    this.conditions.isProcessing = bool;
  }
}
