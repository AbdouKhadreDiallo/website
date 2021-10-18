import { LoginService } from '../../../../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor(private _service: LoginService) { }

  ngOnInit(): void {
    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
      $(this).toggleClass('active');
  });
  }

  logout(){
    return this._service.logout()
  }


}
