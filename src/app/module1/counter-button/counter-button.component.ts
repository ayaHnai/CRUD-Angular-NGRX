import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { changechannelname, decrement, increment, reset } from 'src/app/shared/store/counter/counter.action';
import { CounterModel } from 'src/app/shared/store/counter/counter.model';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent {
  constructor(private store:Store<{counter: CounterModel}>){

  }

  OnIncrement(){
    this.store.dispatch(increment());

  }
  OnDecrement(){
    this.store.dispatch(decrement());
  }
  OnReset(){
    this.store.dispatch(reset());
  }

  OnRename(){
    this.store.dispatch(changechannelname({channel:'Welcome to Nihira Techiees'}))
  }

}