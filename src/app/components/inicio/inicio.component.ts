import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../../services/bitcoin.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  monedaEur!: any;
  monedaUsd!: any;
  monedaGbp!: any;

  constructor(public _service: BitcoinService) { }

  ngOnInit(): void {
    this._service.getEurCurerency().subscribe((data: any) => {
      if (data && data['bpi'] && data['bpi'].EUR) {
        this.monedaEur = data['bpi'].EUR;
      }
    });

    this._service.getUSDCurerency().subscribe((data: any) => {
      if (data && data['bpi'] && data['bpi'].USD) {
        this.monedaUsd = data['bpi'].USD;
      }
    });

    this._service.getGBPCurerency().subscribe((data: any) => {
      if (data && data['bpi'] && data['bpi'].GBP) {
        this.monedaGbp = data['bpi'].GBP;
      }
    });
  }
}
