import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../shared-service/interaction.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private _interaction: InteractionService) { }
  resCount: number = 0
  ngOnInit(): void {
    this._interaction.counter$.subscribe((data: any) => {
      console.log(data);

    })
  }

}
