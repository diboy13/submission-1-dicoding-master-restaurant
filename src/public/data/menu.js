const menus = [
  {
    'id': 'ribs-brisket-and-burnt-ends',
    'img': 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79619/joes-kc-ribs-brisket-and-burnt-ends.6710e994980e485e6441b794717ad6fb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    'name': "Joe's KC BBQ",
    'dsc': "Joe's KC Ribs, Brisket & Burnt Ends",
    'price': 110,
    'rate': 4,
    'country': 'Kansas City, KS'
  },
  {
    'id': '005-kings-carolina-oink-sampler',
    'img': 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66752/carolina-bbq-oink-sampler.1340b5a10cedc238cb2280306dd1d5a5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    'name': 'Kings BBQ',
    'dsc': 'Carolina BBQ Oink Sampler',
    'price': 89,
    'rate': 4,
    'country': 'Kinston, NC'
  },
  {
    'id': 'texas-monthlys-1-bbq-brisket',
    'img': 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131249/texas-monthlys-1-bbq-brisket.1006a061be7acae03992e420fbca995a.png?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    'name': "Snow's BBQ",
    'dsc': "Texas Monthly's #1 BBQ Brisket",
    'price': 199,
    'rate': 4,
    'country': 'Lexington, TX'
  },
  {
    'id': 'bo-ssam-dinner-for-4-6',
    'img': 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110906/bo-ssam-dinner-for-4.c4a32e8801e2f0283e0565bbe8493149.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    'name': 'Momofuku',
    'dsc': 'Half Bo Ssäm Dinner for 4-6',
    'price': 169,
    'rate': 4,
    'country': 'New York, NY'
  },
  {
    'id': 'legendary-seafood-gumbo',
    'img': 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133100/legendary-seafood-gumbo.a4010efb8ba0569ff59d68c3723f0963.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    'name': "Commander's Palace",
    'dsc': 'Legendary Seafood Gumbo',
    'price': 89,
    'rate': 4,
    'country': 'New Orleans, LA'
  },
  {
    'id': 'the-gramercy-tavern-burger-4-pack',
    'img': 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137148/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-15.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    'name': 'Gramercy Tavern',
    'dsc': 'The Gramercy Tavern Burger - 4 Pack',
    'price': 99,
    'rate': 4,
    'country': 'New York, NY'
  },
  {
    'id': '15259-german-chocolate-killer-brownie-tin-pack',
    'img': 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132029/german-chocolate-killer-brownie-tin-pack.5ebc34160f28767a9d94c4da2e04c4b9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    'name': 'Killer Brownie®',
    'dsc': 'German Chocolate Killer Brownie®',
    'price': 39.99,
    'rate': 4,
    'country': 'Dayton, OH'
  },
  {
    'id': 'jacques-world-famous-chocolate-chip-cookies',
    'img': 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/81172/jacques-world-famous-chocolate-chip-cookies-6-pack.2217a14c443602493bba88aa9335319a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    'name': 'Jacques Torres Chocolate',
    'dsc': 'Jacques’ World Famous Chocolate Chip Cookies - 6 Pack',
    'price': 39.95,
    'rate': 4,
    'country': 'New York, NY'
  },
  {
    'id': 'luigis-original-cannoli-pie',
    'img': 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132206/original-cannoli-pie.4cb5b9ba82f57b69b90765fd9f07aa1a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    'name': 'The Cannoli Pie Company',
    'dsc': 'Original Cannoli Pie',
    'price': 69,
    'rate': 4,
    'country': 'Bridgeport, CT'
  },
  {
    'id': 'hong-kong-boba-tea-kit-for-6',
    'img': 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/108725/hong-kong-boba-tea-kit-for-6.63841de36d8e5edfafa13023fc303285.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    'name': 'New Territories',
    'dsc': 'Hong Kong Boba Tea Kit for 6',
    'price': 59,
    'rate': 4,
    'country': 'New York, NY'
  },
  {
    'id': 'guys-caliente-margaritas-for-12',
    'img': 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126836/guys-caliente-margaritas-for-12.ca8c6bc06b8f1039549385ffcebc749d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    'name': 'Guy Fieri',
    'dsc': "Guy's Caliente Margaritas for 12",
    'price': 69,
    'rate': 5,
    'country': 'Flavortown, USA'
  },
  {
    'id': 'woodford-reserve-mint-julep-syrup',
    'img': 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134036/woodford-reserve-mint-julep-syrup.ef523ac7cbae5f4aba6b058207f490d2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    'name': 'Woodford Reserve',
    'dsc': 'Woodford Reserve Mint Julep Syrup',
    'price': 39,
    'rate': 4,
    'country': 'Louisville, KY'
  },
  {
    'id': 'new-orleans-hurricane-mix',
    'img': 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/84522/new-orleans-hurricane-mix.4613584fc65cb0787024dd24d2a8f4b3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    'name': "Franco's Hurricane Mix",
    'dsc': 'New Orleans Hurricane Mix',
    'price': 39,
    'rate': 5,
    'country': 'Natchitoches, LA'
  }
];


export default menus;