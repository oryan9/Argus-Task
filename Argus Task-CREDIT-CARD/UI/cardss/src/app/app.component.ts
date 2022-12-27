
import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { CardsService } from './service/cards.service';
import { Card } from './service/models/card.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cardss';
  cards: Card[] = []; 
  card: Card ={
    id: '',
    cardNumber:'',
    cardHolderName:'',
    cvc:'',
    expiryMonth:'',
    expiryYear:'',
    
    
  }
  constructor(private cardService : CardsService){
    
  }
  ngOnInit(): void {  
    this.getAllCards()
  }

  getAllCards(){
    this.cardService.getAllCards()
    .subscribe(   
        response=>{
          this.cards=response;
        }
    );
  }

  onSubmit(){
    if(this.card.id===''){
      this.cardService.addcard(this.card)
      .subscribe(
        response=>{
          this.getAllCards() 
          this.card= {
            id: '',
            cardNumber:'',
            cardHolderName:'',
            expiryMonth:'',
            expiryYear:'',
            cvc:''
          }
        }
      );
    }else{
      console.log(this.card)
      this.updateCard(this.card)

    }
    this.clearForm()
    this.ngOnInit()
   


  
  }


  deleteCard(id:string){
    this.cardService.deleteCard(id)
    .subscribe(
      response=>{
        this.getAllCards();
      }
    )
  }

  populateForm(card:Card){
    this.card =card;

    console.log(card)
  }

  clearForm(){
    this.card.id ='';
    this.card.cardNumber ='';
    this.card.cardHolderName ='';
    this.card.cvc ='';
    this.card.expiryMonth ='';
    this.card.expiryYear ='';
  }

  updateCard(card:Card){
    this.cardService.updateCard(card)
    .subscribe(
      response=>{
        this.getAllCards()
      }
    )
  }

}