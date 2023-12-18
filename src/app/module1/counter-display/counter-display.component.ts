
import { Component, OnInit,OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription,Observable } from 'rxjs'
import { CounterModel } from 'src/app/shared/store/counter/counter.model';
import { getcounter } from 'src/app/shared/store/counter/counter.selector';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.css']
})
export class CounterDisplayComponent implements OnInit,OnDestroy {
  constructor(private store: Store<{counter:CounterModel}>) {

  }
  
  counterdisplay!: number;
  channelname = '';
  countersubscribe !: Subscription;
  counter$ !:Observable<CounterModel>;
  ngOnInit(): void {
    this.countersubscribe = this.store.select(getcounter).subscribe(data => {
      this.counterdisplay = data;
      console.log('counter display');
    });

   // this.counter$=this.store.select('counter');
  }

  ngOnDestroy(): void {
    if(this.countersubscribe){
      this.countersubscribe.unsubscribe();
    }
  }

}
