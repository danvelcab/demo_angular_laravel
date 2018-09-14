import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public configNavbar: any = {
    title: {
      isShow: false,
      text: '',
      href: ''
    },
    style: {},
    item: [
      {
        titleElement: 'Paises',
        element: [
          {
            label: 'España',
            type: 'select',
            href: 'countryTest',
            icon: 'fas fa-star',
            item: [
              {
                label: 'Norte',
                href: '#',
                icon: 'fas fa-star'
              }, {
                label: 'Este',
                href: '#',
                icon: 'fas fa-star'
              }, {
                label: 'Sur',
                href: '#',
                icon: 'fas fa-star'
              }, {
                label: 'Oeste',
                href: '#',
                icon: 'fas fa-star',
              }
            ]
          }, {
            label: 'Portugal',
            type: 'link',
            href: '#',
            icon: 'fas fa-star',
            item: []
          }
        ]
      }, {
        titleElement: 'Colores',
        element: [
          {
            label: 'Azul',
            type: 'link',
            href: '#',
            icon: 'fas fa-star',
            item: []
          }, {
            label: 'Amarillo',
            type: 'link',
            href: '#',
            icon: 'fas fa-star',
            item: []
          }
        ]
      }, {
        titleElement: 'Ciudad',
        element: [
          {
            label: 'Cadiz',
            type: 'select',
            href: 'cityCadiz',
            icon: 'fas fa-star',
            item: [
              {
                label: 'Barriada de la paz',
                href: '#',
                icon: 'fas fa-star'
              }, {
                label: 'La viña',
                href: '#',
                icon: 'fas fa-star'
              }, {
                label: 'Campo del sur',
                href: '#',
                icon: 'fas fa-star'
              }, {
                label: 'Santa María',
                href: '#',
                icon: 'fas fa-star'
              }
            ]
          }, {
            label: 'Sevilla',
            type: 'link',
            href: '#',
            icon: 'fas fa-star',
            item: []
          }, {
            label: 'Madrid',
            type: 'select',
            href: 'cityMadrid',
            icon: 'fas fa-star',
            item: [
              {
                label: 'Malasaña',
                href: '#',
                icon: 'fas fa-star'
              }, {
                label: 'Lavapies',
                href: '#',
                icon: 'fas fa-star'
              }
            ]
          }
        ]
      }
    ],
    itemBtn: [
      {
        label: 'Boton 1',
        href: '#',
        class: 'download'
      }, {
        label: 'Boton 2',
        href: '#',
        class: 'article'
      }
    ]
  };


  constructor() { }

  ngOnInit() {
    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
      $('#main').toggleClass('activeMenu');

      const element = document.querySelectorAll('#sidebar__icon');
      for ( let x = 0; x < element.length; x++ ) {
        element[x].classList.toggle('activesIcon');
      }

      const isActive = $('#sidebarCollapse').hasClass('active');
    });

    $('#sidebarClose').on('click', function () {
      $('#sidebar').toggleClass('active');
      $('#main').toggleClass('activeMenu');

      const element = document.querySelectorAll('#sidebar__icon');
      for ( let x = 0; x < element.length; x++ ) {
        element[x].classList.toggle('activesIcon');
      }

      const isActive = $('#sidebar').hasClass('active');
      if ( isActive ) {
        $('#icon_sidebar').removeClass('fas fa-bars').addClass('fas fa-times');
      } else {
        $('#icon_sidebar').removeClass('fas fa-times').addClass('fas fa-bars');
      }
    });
  }
}
