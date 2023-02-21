export interface Product {
  id: number;
  name: string;
  price: number;
  description: string,
  url: string, 
  image: string,
  rate: string;
}

export const products = [
  {
    id: 1,
    name: 'iPhone 14 Pro Max 256Gb purple',
    price: 669770,
    description: "A great phone with one of the best cameras",
    url: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg',
    rate: '5'
  },
  {
    id: 2,
    name: 'Mod Beds',
    price: 139500,
    description: 'The Mod Bunk bed is a low line bunk bed and has great versatility & can be split into two beds & bookcase!',
    url: 'https://kaspi.kz/shop/p/mod-beds-284496-140x200-sm-s-matrasom-seryi-106755918/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd8/h04/63016362115102/mod-beds-284496-140x200-sm-s-matrasom-seryj-106755918-1.jpg',
    rate: '5'
  },
  {
    id: 3,
    name: 'Smart watch Samsung Galaxy Watch 4 Classic',
    price: 95890,
    description: 'Samsung smart watches are not just a gadget, but your faithful companion on the way to achieving goals and self-improvement.',
    url: 'https://kaspi.kz/shop/p/samsung-galaxy-watch-4-classic-sm-r890nzkacis-46-mm-chernyi-chernyi-102170938/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6c/h85/62047597592606/samsung-galaxy-watch-4-classic-sm-r890-cernyj-102170938-1-Container.jpg',
    rate: '5'
  },
  {
    id: 4, 
    name: 'Xiaomi Soocas H5 hair dryer',
    price: 20590,
    description: 'Xiaomi SOOCAS H5 is a 1800W hair dryer with an ergonomic design.',
    url: 'https://kaspi.kz/shop/p/xiaomi-soocas-h5-fen-1800-w-101050689/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h52/hf8/33990323273758/xiaomi-soocas-h5-fen-1800-w-101050689-1.jpg',
    rate: '5'
  },
  {
    id: 5, 
    name: 'Coffee maker CENTEK CT-1164 silver',
    price: 60990,
    description: 'The appearance of the Centek CT-1164 carob coffee maker will turn the process of tasting the corresponding drink into a real pleasure.',
    url: 'https://kaspi.kz/shop/p/kofevarka-centek-ct-1164-serebristyi-chernyi-100358682/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h13/h18/51251427639326/centek-ct-1164-serebristyj-100358682-1-Container.jpg',
    rate: '5'
  },
  {
    id: 6, 
    name: 'Apple MacBook Pro 14 gray',
    price: 993990,
    description: 'The stunning 14.2-inch Liquid Retina XDR display and a wide range of ports add to the benefits.',
    url: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-mkgp3-seryi-102866247/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbf/h8a/47153374199838/apple-macbook-pro-14-mkgp3-seryj-102866247-1.jpg',
    rate: '5'
  },
  {
    id: 7, 
    name: 'Air conditioner Atlantic ASAFA-12',
    price: 180990,
    description: 'Split system Atlantic ASAFA-12HRN8-S is a multifunctional device that can easily cope not only with cooling, but also with heating, dehumidification and ventilation of the air flow.',
    url: 'https://kaspi.kz/shop/p/atlantic-asafa-12hrn8-s-montazhnyi-komplekt-4201112/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf4/h3b/31671049912350/atlantic-asafa-12hrn1-s-serebristyj-montaznyj-komplekt-4201112-1-Container.jpg',
    rate: '5'
  },
  {
    id: 8, 
    name: 'Camera Canon EOS M50 Mark II',
    price: 334990,
    description: 'The Canon EOS M50 Mark II kit 15-45mm IS STM interchangeable-lens camera is a mirrorless model that delivers crisp detail and a seamless content creation process from capture to publish.',
    url: 'https://kaspi.kz/shop/p/canon-eos-m50-mark-ii-kit-ef-m-15-45mm-f-3-5-6-3-is-stm-chernyi-102026887/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc2/h32/68844292374558/canon-eos-m50-mark-ii-kit-ef-m-15-45mm-f-3-5-6-3-is-stm-chernyi-102026887-1.jpg',
    rate: '5'
  },
  {
    id: 9, 
    name: 'Amazon Kindle 10 e-reader black',
    price: 59990,
    description: 'Slim and light backlit 10th generation Kindle in black. The touch screen does not glare even in bright sunlight.',
    url: 'https://kaspi.kz/shop/p/amazon-kindle-10-chernyi-101391295/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd2/h3d/33861602246686/amazon-kindle-10-cernyj-101391295-1-Container.jpg',
    rate: '5'
  },
  {
    id: 10, 
    name: 'TV Xiaomi Mi TV P1 50',
    price: 244990,
    description: 'The innovative three-sided bezel-less design provides a higher screen-to-body ratio and 178° viewing angles for a more realistic picture and a more enjoyable viewing experience.',
    url: 'https://kaspi.kz/shop/p/xiaomi-mi-tv-p1-50-l50m6-6arg-127-sm-chernyi-105324626/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h93/he8/51568662249502/xiaomi-l50m6-6arg-cernyj-105324626-1.jpg',
    rate: '5'
  },

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/