import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const myNumbers = Observable.interval(1000);
    // myNumbers.subscribe(
    //   (number: number) => {
    //     console.log(number);
    //   }
    // );

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 12000);
      setTimeout(() => {
        observer.next('second package');
      }, 14000);
      setTimeout(() => {
        // observer.error('this does not work');
        observer.complete();
      }, 15000);
      setTimeout(() => {
        observer.next('third package');
      }, 16000);
    });
    myObservable.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error); },
      () => { console.log('completed'); }
    );
  }

}
