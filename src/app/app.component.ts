import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Amazon_Links';
  productsLinks: AmazonLinks[] = [
    // {
    //   title: 'Crucial P2 CT1000P2SSD8 SSD Interno, 1TB, fino a 2400 MB/s',
    //   link: 'https://amzn.to/3uZjc7f',
    //   imgLink: 'https://m.media-amazon.com/images/I/61J+ROo+7WL._AC_SL1500_.jpg'
    // },
    // {
    //   title: 'CPU AMD Ryzen 5 5600X AM4 ',
    //   link: 'https://amzn.to/3H2uFVV',
    //   imgLink: 'https://m.media-amazon.com/images/I/61vGQNUEsGL._AC_SL1384_.jpg'
    // },
    // {
    //   title: 'MSI B550-A PRO Scheda madre ATX',
    //   link: 'https://amzn.to/3sXWeLf',
    //   imgLink: 'https://m.media-amazon.com/images/I/81dy5eK-IaS._AC_SL1500_.jpg'
    // },
    // {
    //   title: 'Corsair Vengeance RGB PRO Black DDR4-RAM 3600 MHz 2x 8GB memoria ',
    //   link: 'https://amzn.to/3H4hdkt',
    //   imgLink: 'https://m.media-amazon.com/images/I/81cGtM0c+UL._AC_SL1500_.jpg'
    // },
    {
      title: 'ASUS VG279Q 27\'\' FHD (1920 x 1080) Gaming Monitor per PC, IPS, 144 Hz, 1 ms',
      link: 'https://amzn.to/3s1Z963',
      imgLink: 'https://m.media-amazon.com/images/I/41QL-mwiq5L._AC_.jpg'
    },

    {
      title: 'MSI Optix G272 Monitor Gaming 27"',
      link:'https://amzn.to/3tJTfGy',
      imgLink: 'https://m.media-amazon.com/images/I/81Qhj-bFWqL._AC_SL1500_.jpg'
    },
    {

      title: 'Acer Nitro VG270UPbmiipfx Monitor Gaming PC 27"',
      link: 'https://amzn.to/3KP1ZCj',
      imgLink: 'https://m.media-amazon.com/images/I/61FLsIpgSSS._AC_SL1400_.jpg'
    },
    {
      title: 'Corsair iCUE 465X RGB Vetro Temprato Smart Case Mid-Tower ATX',
      link: 'https://amzn.to/3KC8aJN',
      imgLink: 'https://m.media-amazon.com/images/I/715+B5-bHUL._AC_SL1500_.jpg'
    },

    {
      title: 'Cooler Master MasterBox MB530P ARGB, 3 Ventole da 120mm Preinstallate',
      link: 'https://amzn.to/35bkyRi',
      imgLink: 'https://m.media-amazon.com/images/I/515htF899jS._AC_SL1000_.jpg'
    },
    {
      title: 'Corsair 4000D Airflow Case ATX Mid-Tower con Vetro Temperato, Due 120 mm Ventole Incluse, Nero ',
      link: 'https://amzn.to/3vZOI5p',
      imgLink: 'https://m.media-amazon.com/images/I/818a--kMzkL._AC_SL1500_.jpg'
    },
    {
      title: "Corsair iCUE SP120 RGB ELITE Kit da tre ventole PWM Performance da 120 mm con iCUE Lighting Node CORE",
      link: "https://amzn.to/3i6txq8",
      imgLink: "https://m.media-amazon.com/images/I/71hoTApiYIS._AC_SL1500_.jpg"
    },
  ]
}

interface AmazonLinks {
  title: string;
  link: string;
  imgLink: string;
}
