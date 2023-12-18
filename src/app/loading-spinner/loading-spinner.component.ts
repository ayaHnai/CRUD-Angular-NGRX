import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getspinnerstate } from '../shared/store/global/app.selectors';
import { AppStateModel } from '../shared/store/global/app.model';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit {

  isloaded = false;
  constructor(private store: Store) {
    console.log("spinner...")

  }
  ngOnInit(): void {
    this.store.select(getspinnerstate).subscribe(res => {
      this.isloaded = res;
    });
  }

}
