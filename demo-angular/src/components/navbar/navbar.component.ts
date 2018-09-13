import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public configNavbar: any = {
    logo: {
      isShow: true,
      src: '/src/assets/img/logo.svg',
      alt: 'Logo'
    },
    title: {
      isShow: false,
      text: '',
      href: ''
    },
    search: {
      isShow: false,
      href: ''
    },
    style: {
      flex: 'navbar__flex',
      width: 'navbar__width',
      background: 'background'
    },
    item: [
      {
        label: 'Text1',
        link: '#'
      },
      {
        label: 'Text2',
        link: '#'
      },
      {
        label: 'Text3',
        link: '#'
      },
    ]
  };

  constructor() { }

  ngOnInit() { }

}
