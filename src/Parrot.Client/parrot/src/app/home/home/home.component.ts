import { Component, OnInit } from '@angular/core';
import { ParrotService } from 'src/app/services/parrot.service';
import { Card } from 'src/app/models/contracts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private service: ParrotService;
  public randomCard: Card = new Card();
  public isBusy: boolean = false;
  public isIdeaRequested = false;

  constructor(parrotService: ParrotService) {
    this.service = parrotService;
  }

  ngOnInit(): void {
  }

  getAnIdea() {
    this.isBusy = true;
    this.service.getAnIdea().subscribe(x => {
      this.isIdeaRequested = true;
      this.randomCard = x;
      this.isBusy = false;
    });
  }
}