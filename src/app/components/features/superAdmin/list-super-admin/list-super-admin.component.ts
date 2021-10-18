import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-list-super-admin',
  templateUrl: './list-super-admin.component.html',
  styleUrls: ['./list-super-admin.component.scss']
})
export class ListSuperAdminComponent implements OnInit {
  page = 1;
	pageSize = 2;
	collectionSize!: number;
  superAdmins :any = []
  constructor(private shared: SharedService) {
    this.refreshSuperAdmin()
   }

  ngOnInit(): void {
  }
  refreshSuperAdmin(){
    this.shared.get('/super_users').subscribe(
      data => {
        this.superAdmins = data
        this.superAdmins = this.superAdmins['hydra:member']
        console.log("data", data);
        console.log("super admins", this.superAdmins)
        this.collectionSize = this.superAdmins.length
      }
    )
  }

}
