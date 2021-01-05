import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../models/contracts';
import { Urls } from '../constants/urls'

@Injectable({
  providedIn: 'root'
})
export class ParrotService {

  private http: HttpClient;

  constructor(http: HttpClient) { 
    this.http = http;
  }

  public getAnIdea() {
    console.log("Requesting the asp net service for an idea...");
    return this.http.get<Card>(Urls.PICTIONARY_SERVICE_URL_PREFIX + "random");
  }

  public getAllCards() {
    console.log("Requesting the asp net service for all the cards...");
    return this.http.get<Card[]>(Urls.PICTIONARY_SERVICE_URL_PREFIX + "list");
  }

  public addCard(card: Card) {
    console.log("Requesting the asp net service to add a card: " + card.word + "-" + card.level);
    return this.http.post(Urls.PICTIONARY_SERVICE_URL_PREFIX + "create", card);
  }

  public deleteCard(id: string) {
    console.log("Requesting the asp net service to delete a card: " + id);
    return this.http.get(Urls.PICTIONARY_SERVICE_URL_PREFIX + "delete/" + id);
  }
}