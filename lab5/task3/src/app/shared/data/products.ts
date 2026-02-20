import { Category } from '../models/category.models';
import { Product } from '../models/product.model';

export const CATEGORIES: Category[] = [
  { id: 1, name: '📱 Смартфондар' },
  { id: 2, name: '💻 Ноутбуктер' },
  { id: 3, name: '🛋️ Мебель' },
  { id: 4, name: '🔌 Бытавая техника' }
];

export const PRODUCTS: Product[] = [
  
  {
    id: 1,
    name: 'Apple iPhone 15 Pro Max 256GB',
    description: 'Смартфон Apple iPhone 15 Pro Max, 256 ГБ, титан, A17 Pro чип, 48 МП камера',
    price: 649990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h81/had/86319870181406.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h81/had/86319870181406.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p7d/p75/29469426.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hfc/hd3/86319870410782.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-chernyi-113138363/?c=750000000',
    categoryId: 1,
    likes: 0
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra 512GB',
    description: 'Смартфон Samsung Galaxy S24 Ultra, 512 ГБ, 200 МП камера, S-Pen, AI функциялар',
    price: 549990,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hce/h21/84963123462174.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h85/hb3/84963123593246.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000',
    categoryId: 1,
    likes: 0
  },
  {
    id: 3,
    name: 'Xiaomi 13T Pro 512GB',
    description: 'Смартфон Xiaomi 13T Pro, 512 ГБ, 120 Гц экран, Leica камера, 120W зарядка',
    price: 299990,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p77/pdd/15562935.png?format=gallery-large',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p77/pdd/15562935.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p5b/pdd/15562936.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p07/pdd/15562939.png?format=gallery-large'
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-5g-nfc-16-gb-512-gb-chernyi-118366848/?c=750000000',
    categoryId: 1,
    likes: 0
  },
  {
    id: 4,
    name: 'Google Pixel 8 Pro 128GB',
    description: 'Смартфон Google Pixel 8 Pro, 128 ГБ, Tensor G3 чип, 50 МП камера, AI функциялар',
    price: 449990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hca/h8f/85986943762462.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hca/h8f/85986943762462.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/haa/hb7/85988322869278.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h6b/hb1/85988323000350.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/google-pixel-8a-8-gb-128-gb-chernyi-119270938/?c=750000000',
    categoryId: 1,
    likes: 0
  },
  {
    id: 5,
    name: 'OnePlus 12 512GB',
    description: 'Смартфон OnePlus 12, 512 ГБ, 120 Гц экран, 50 МП камера, 100W зарядка',
    price: 399990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p62/p82/24035969.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p62/p82/24035969.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pf6/p7f/24035970.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p85/p7f/24035974.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/oneplus-13r-12-gb-256-gb-chernyi-132466811/?c=750000000',
    categoryId: 1,
    likes: 0
  },

  // Категория 2: Ноутбуктер (5)
  {
    id: 6,
    name: 'Apple MacBook Pro 16" M3 Pro',
    description: 'Ноутбук Apple MacBook Pro 16, M3 Pro чип, 18ГБ, 512ГБ SSD, Space Black',
    price: 1299990,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p32/p89/17666424.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p32/p89/17666424.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p92/pa0/17666425.jpeg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h87/h97/84577682522142.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-14-2-16-gb-ssd-512-gb-macos-mw2u3ru-a-132088460/?c=750000000',
    categoryId: 2,
    likes: 0
  },
  {
    id: 7,
    name: 'ASUS ROG Strix G16',
    description: 'Ноутбук ASUS ROG Strix G16, Intel Core i9, 16ГБ, 1ТБ SSD, RTX 4060, 240 Гц',
    price: 699990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p8d/pbb/42525232.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p8d/pbb/42525232.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p1a/pbc/42525237.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p28/pc2/42525250.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/asus-rog-strix-g16-16-16-gb-ssd-1024-gb-bez-os-90nr0nj7-m001j0-139735259/?c=750000000',
    categoryId: 2,
    likes: 0
  },
  {
    id: 8,
    name: 'Lenovo Legion Pro 5',
    description: 'Ноутбук Lenovo Legion Pro 5, AMD Ryzen 7, 32ГБ, 1ТБ SSD, RTX 4060, 165 Гц',
    price: 549990,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pa3/p36/53999447.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pa3/p36/53999447.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p6a/p36/53999449.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pc6/p33/53999452.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/lenovo-legion-pro-5-16irx10-16-32-gb-ssd-1000-gb-bez-os-83nn001krk-142787523/?c=750000000',
    categoryId: 2,
    likes: 0
  },
  {
    id: 9,
    name: 'HP Victus 16',
    description: 'Ноутбук HP Victus 16, Intel Core i7, 16ГБ, 512ГБ SSD, RTX 3050, 144 Гц',
    price: 449990,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p2d/p09/59464043.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p2d/p09/59464043.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p49/p09/59464044.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p82/p09/59464046.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/hp-victus-15-fb3705ci-15-6-16-gb-m-2-512-gb-bez-os-bd1v3ea-144327452/?c=750000000',
    categoryId: 2,
    likes: 0
  },
  {
    id: 10,
    name: 'Dell XPS 15',
    description: 'Ноутбук Dell XPS 15, Intel Core i7, 16ГБ, 512ГБ SSD, OLED экран',
    price: 799990,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h91/h1e/64860295462942.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h91/h1e/64860295462942.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h3e/h1d/64860298412062.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/ha9/h86/64860307390494.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/dell-xps-15-9520-15-6-16-gb-ssd-1024-gb-win-11-210-bdvf-4-106784220/?c=750000000',
    categoryId: 2,
    likes: 0
  },

  // Категория 3: Мебель (5 өнім)
{
  id: 11,
  name: 'Офисное кресло Sport&Fitness SFBRFRGC14Combo8, черный',
  description: 'Офисное кресло с высокой спинкой, подголовником и подлокотниками. Регулировка высоты, газлифт, черный цвет. Максимальная нагрузка 120 кг.',
  price: 59990,
  rating: 4.6,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/p81/p5e/60099570.jpg?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/p81/p5e/60099570.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/p49/p5e/60099572.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/pd8/p5d/60099576.jpg?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/ofisnoe-kreslo-sport-fitness-sfbrfrgc14combo8-chernyi-144508901/?c=750000000',
  categoryId: 3,
  likes: 0
},
{
  id: 12,
  name: 'Стол компьютерный Riva 120 см, белый',
  description: 'Компьютерный стол Riva, 120 см, белый цвет. Металлический каркас, стеклянная столешница, выдвижная полка для клавиатуры.',
  price: 45990,
  rating: 4.7,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/h8e/h43/64059817984030.jpg?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/h8e/h43/64059817984030.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/pa5/pda/51598993.png?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/p89/pda/51598994.png?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/komp-juternyi-stol-ritmix-tbl-120-120x60x70-sm-belyi-103003487/?c=750000000',
  categoryId: 3,
  likes: 0
},
{
  id: 13,
  name: 'Кровать двуспальная Luara с подъемным механизмом, 160x200 см',
  description: 'Двуспальная кровать Luara с подъемным механизмом. Встроенный ящик для белья, ортопедическое основание, бежевый цвет.',
  price: 159990,
  rating: 4.8,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/p25/pb3/111751893.png?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/p25/pb3/111751893.png?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/p09/pb3/111751894.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/pd0/pb2/111751896.jpg?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/luara-160x200-sm-115674926/',
  categoryId: 3,
  likes: 0
},
{
  id: 14,
  name: 'Шкаф-купе Vizit 3-дверный, дуб сонома',
  description: 'Шкаф-купе Vizit, 3 двери, раздвижная система. Внутреннее наполнение: полки, штанга для одежды, ящики. Цвет: дуб сонома.',
  price: 189990,
  rating: 4.7,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/hf7/h52/87004437119006.jpg?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/hf7/h52/87004437119006.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/hd0/h27/87004437184542.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/h21/hbd/87004437315614.jpg?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/zeta-denver-2-0-m-bel-tekstur-dub-sonoma-rf-200x60x215-sm-belyi-123104623/?c=750000000',
  categoryId: 3,
  likes: 0
},
{
  id: 15,
  name: 'Диван угловой Mebelf Estet',
  description: 'Угловой диван Mebelf Estet. Механизм трансформации "дельфин", спальное место 140x200 см, велюр.',
  price: 249990,
  rating: 4.8,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/h9f/he8/85577939550238.jpg?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/h8c/h0c/85577939583006.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/h1d/h99/85577939648542.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/h0f/h5c/85577939615774.jpg?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/mebel-akbope-puma-dovanoff-komplekt-divan-uglovoi-universal-nyi-2-kresla-puf-obivka-iskusstvennaja-zamsha-seryi-temno-seryi-116557992/?c=750000000',
  categoryId: 3,
  likes: 0
  },
  // Категория 4: Бытавая техника (5 өнім)
{
  id: 16,
  name: 'Холодильник LG GA-B419SQGL двухкамерный',
  description: 'Холодильник LG GA-B419SQGL, двухкамерный, серебристый. Общий объем 302 л, No Frost, инверторный компрессор, энергопотребление A+',
  price: 299990,
  rating: 4.8,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/hd3/64348227600414.jpg?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/h6f/hd3/64348227600414.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/h4c/h4f/64348232384542.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/h8b/h71/64348235071518.jpg?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/lg-ga-b509mmqm-seryi-101396880/?c=750000000',
  categoryId: 4,
  likes: 0
},
{
  id: 17,
  name: 'Стиральная машина Samsung WW90T654ADW',
  description: 'Стиральная машина Samsung WW90T654ADW, белая, фронтальная загрузка до 9 кг, инверторный двигатель, Eco Bubble, AI Control',
  price: 349990,
  rating: 4.9,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/p24/p36/65659429.jpg?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/p24/p36/65659429.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/pb8/p33/65659430.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/p7f/p33/65659432.jpg?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/samsung-ww60ak4s00celt-belyi-145907861/?c=750000000',
  categoryId: 4,
  likes: 0
},
{
  id: 18,
  name: 'Пылесос Dyson V15 Detect Absolute',
  description: 'Пылесос Dyson V15 Detect Absolute, беспроводной, лазерная подсветка, цифровой мотор, 60 мин работы, HEPA фильтр',
  price: 349990,
  rating: 4.9,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/pa4/p32/77965055.jpg?format=gallery-large',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/pa4/p32/77965055.jpg?format=gallery-large',
    'https://resources.cdn-kaspi.kz/img/m/p/pdc/p32/77965057.jpg?format=gallery-large',
    'https://resources.cdn-kaspi.kz/img/m/p/pf8/p32/77965058.jpg?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-sv47-serebristyi-113691132/?c=750000000',
  categoryId: 4,
  likes: 0
},
{
  id: 19,
  name: 'Микроволновая печь Samsung ME88SUG',
  description: 'Микроволновая печь Samsung ME88SUG, 23 л, черная, керамическое покрытие, гриль, размораживание',
  price: 69990,
  rating: 4.7,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/h2b/h44/63765290287134.jpg?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/h2b/h44/63765290287134.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/h38/hff/63765293891614.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/hd4/hd2/63765292318750.jpg?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/samsung-me88sut-bw-serebristyi-2900802/?c=750000000',
  categoryId: 4,
  likes: 0
},
{
  id: 20,
  name: 'Электрическая плита Hansa FCMW58220',
  description: 'Электрическая плита Hansa FCMW58220, белая, 4 конфорки, духовка 60 л, эмалированное покрытие, гриль',
  price: 199990,
  rating: 4.7,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/p93/pb9/62969497.jpg?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/p93/pb9/62969497.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/p5b/pb9/62969499.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/p43/p6f/62969500.jpg?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/hansa-fccw53103-belyi-112148872/?c=750000000',
  categoryId: 4,
  likes: 0
}
];