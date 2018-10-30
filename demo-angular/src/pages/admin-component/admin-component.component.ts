import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-component',
  templateUrl: './admin-component.component.html',
  styleUrls: ['./admin-component.component.css']
})
export class AdminComponentComponent implements OnInit {

  public configSidebar: any = {
    title: {
      isShow: true,
      text: 'Menu',
      href: ''
    },
    item: [
      {
        label: 'España',
        type: 'select',
        id: 'selectEspaña',
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
      },
      {
        label: 'Portugal',
        type: 'link',
        href: '',
        icon: 'fas fa-star',
        item: []
      },
      {
        label: 'Azul',
        type: 'link',
        href: '',
        icon: 'fas fa-star',
        item: []
      }, {
        label: 'Amarillo',
        type: 'link',
        href: '',
        icon: 'fas fa-star',
        item: []
      },
      {
        label: 'Cadiz',
        type: 'select',
        id: 'selectCadiz',
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
        href: '',
        icon: 'fas fa-star',
        item: []
      }, {
        label: 'Madrid',
        type: 'select',
        id: 'selectMadrid',
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
  };

  public configNavbar: any = {
    logo: {
      isShow: true,
      src: '/src/assets/img/logo.svg',
      alt: 'Logo'
    },
    icons: {
      isShow: true,
      items: [
        {
          icon: 'fas fa-globe-africa',
          href: '#'
        },
        {
          icon: 'fas fa-bullseye',
          href: '#'
        },
        {
          icon: 'fas fa-bookmark',
          href: '#'
        }
      ]
    },
    search: {
      isShow: true,
      href: ''
    },
    user: {
      isShow: true,
      name: 'Jesús',
      src: '/src/assets/img/avatar.png',
      alt: 'Avatar'
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
