import { SharedService } from './../../../../services/shared/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public produits: any
  public clients: any
  public admin: any
  public magasins: any
  constructor(private _service: SharedService) { }

  ngOnInit(): void {
    this._service.get('/admins/magasins').subscribe(
      data => {
        this.magasins = data
        this.magasins = this.magasins['hydra:member']
        console.log("magasins ==>", this.magasins);
      }
    )
    this.get('/admins/connected', this.admin)
    this.get('/admins/magasins', this.magasins)
    this.get('/admins/magasins/clients', this.clients)
    this.get('/admins/magasins/produits', this.produits)

  }

  get(suffix:any, destination:any){
    this._service.get(suffix).subscribe(
      data=> {
        destination = data
        console.log(destination);
      },
      err=>{
        console.log(err);
      }
    )
  }

}
