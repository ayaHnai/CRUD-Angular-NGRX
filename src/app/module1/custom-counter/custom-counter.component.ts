import { Component,OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription,Observable } from 'rxjs'
import { customincrement } from 'src/app/shared/store/counter/counter.action';
import { CounterModel } from 'src/app/shared/store/counter/counter.model';
import { getchannelname } from 'src/app/shared/store/counter/counter.selector';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css']
})
export class CustomCounterComponent implements OnInit {
  constructor(private store: Store<{counter:CounterModel}>) {

  }
  ngOnInit(): void {
    this.countersubscribe = this.store.select(getchannelname).subscribe(data => {
      this.channelname = data;
      console.log('custom counter');
    });
  }
  counterinput!: number;
  actiontype='add';
  channelname='';
  countersubscribe !: Subscription;

  OnIncrement() {
    this.store.dispatch(customincrement({ value: +this.counterinput,action:this.actiontype }));
  }

}
