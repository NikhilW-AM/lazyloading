import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../shared-service/interaction.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private _interaction: InteractionService) { }

  ngOnInit(): void {
  }


  send(num: string) {
    this._interaction.sendNumber(parseInt(num))
  }
}
