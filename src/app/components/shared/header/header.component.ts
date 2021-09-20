import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.btn').click(function(){
      $(this).toggleClass("click");
      $('.sidebar').toggleClass("show");
      });


      $('.sidebar ul li a').click(function(){
      var id = $(this).attr('id');
      $('nav ul li ul.item-show-'+id).toggleClass("show");
      $('nav ul li #'+id+' span').toggleClass("rotate");

      });

      $('nav ul li').click(function(){
      $(this).addClass("active").siblings().removeClass("active");
      });
  }

}
