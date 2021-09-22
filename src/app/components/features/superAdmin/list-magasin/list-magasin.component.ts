import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';

interface Magasin{
  id:number,
  nom: string
}

@Component({
  selector: 'app-list-magasin',
  templateUrl: './list-magasin.component.html',
  styleUrls: ['./list-magasin.component.scss']
})
export class ListMagasinComponent implements OnInit {
  page = 1;
	pageSize = 5;
	collectionSize: number = 0;
  magasins :any = []
  mag : Magasin[] = []
  constructor(private shared: SharedService) { }

  ngOnInit(): void {
    this.refreshMagasins()
  }

  refreshMagasins(){
    this.shared.get('/magasins').subscribe(
      data=>{
        this.magasins = data;
        this.magasins = this.magasins['hydra:member']
        console.log(this.magasins);

        this.collectionSize = this.magasins.length

      },
      error => {
        console.log("error")
      }
    )
  }

}
