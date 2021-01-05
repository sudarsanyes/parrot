import { Component, OnInit } from '@angular/core';
import { ParrotService } from 'src/app/services/parrot.service';
import { Card } from 'src/app/models/contracts';

@Component({
  selector: 'app-pictionary',
  templateUrl: './pictionary.component.html',
  styleUrls: ['./pictionary.component.css']
})
export class PictionaryComponent implements OnInit {

  public cards: Card[] = [];

  public newCard: Card = new Card();
  public newCardAddRequestMessage: string = "";
  public isAddCardRequested: boolean = false;

  public batchCardLevel: number = 0;
  public batchWords: string = "";
  public batchCardsAddRequestMessages: string[] = [];
  public isBatchCardsAddRequested: boolean = false;

  public deletedCards: string[] = [];

  constructor(private service: ParrotService) {
  }

  ngOnInit(): void {
  }

  getAllCards() {
    console.log("requesting all the words in the dictionary...");
    this.service.getAllCards().subscribe(cards => this.cards = cards);
  }

  addCard() {
    if (this.newCard.word != "") {
      this.isAddCardRequested = true;
      this.service.addCard(this.newCard).subscribe(x => {
        console.log("requesting to add:" + this.newCard.word);
        if (x) {
          this.newCardAddRequestMessage = this.newCard.word + " added successfully!";
        }
        else {
          this.newCardAddRequestMessage = "Couldn't add the work, " + this.newCard.word + "!";
        }
      });
    }
  }

  addCards() {
    var words = this.batchWords.split(',');
    words.forEach(word => {
      if (word != "") {
        this.isBatchCardsAddRequested = true;
        console.log("requesting to add:" + word);
        var newCard = new Card();
        newCard.word = word;
        newCard.level = this.batchCardLevel;
        this.service.addCard(newCard).subscribe(x => {
          if (x) {
            this.batchCardsAddRequestMessages.push(newCard.word + " added successfully!");
          }
          else {
            this.batchCardsAddRequestMessages.push("Couldn't add the work, " + newCard.word + "!");
          }
        });
      }
    });
  }

  deleteCard(id: string) {
    this.service.deleteCard(id).subscribe(x => {
      if(x){
        console.log("Deleted " + id);
        this.deletedCards.push(id);
      } 
      else {
        console.log("Couldn't delete " + id);
      }
    });
  }

  checkIfCardIsDeleted(id: string) {
    return this.deletedCards.includes(id);
  }
}