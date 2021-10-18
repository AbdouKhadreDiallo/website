import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';

interface Magasin{
  id:number,
  nom: string
}

@Component({
  selector: 'app-list-magasin',
  templateUrl: './list-magasin.component.html',
  styleUrls: ['./list-magasin.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListMagasinComponent implements OnInit {
  page = 1;
	pageSize = 3;
	collectionSize!: number;
  magasins :any
  mag : Magasin[] = []
  constructor(private shared: SharedService) {
    this.refreshMagasins()
   }

  ngOnInit(): void {

  }

  refreshMagasins(){
    this.shared.get('/magasins').subscribe(
      data=>{
        this.magasins = data;
        this.magasins = this.magasins['hydra:member']
        console.log(this.magasins);
        this.collectionSize = this.magasins.length
        // console.log(this.collectionSize);
      },
      error => {
        console.log("error")
      }
    )
  }

}
