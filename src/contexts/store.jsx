import React, { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([
    {
      id: 1,
      img: 'https://madamsoapy.com.ua/wp-content/uploads/2015/09/1370579512_mokroe-yabloko.jpg',
      title: 'Green Apple',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, tenetur.',
      prices: ' ⃀ 14.99',
      discount: ' ⃀ 20.99',
    },
    {
      id: 2,
      img: 'https://avatars.mds.yandex.net/get-eda/3513074/89f474fd27a71ce76d17008707d37bce/1200x1200nocrop',
      title: 'Surjapur Mango',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, tenetur.',
      prices: ' ⃀ 14.99',
    },

    {
      id: 3,
      img: 'https://media.vprok.ru/products/x956/tk/y5/7qrpns6khhocvbdufb7gqpgvatgiy5tk.jpeg',
      title: 'Mandarin',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, tenetur.',
      prices: ' ⃀ 11.99',
    },
    {
      id: 4,
      img: 'https://photos.demandstudios.com/getty/article/103/225/152946356.jpg',
      title: 'Lime',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, tenetur.',
      prices: ' ⃀ 14.99',
      discount: ' ⃀ 20.99',
    },
    {
      id: 5,
      img: 'https://wallpapers.com/images/hd/two-black-nadia-eggplants-jcpyc6ri1ce7ocr2.jpg',
      title: 'Eggplant',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, tenetur.',
      prices: ' ⃀ 12.99',
    },
    {
      id: 6,
      img: 'https://clipart-library.com/new_gallery/241-2410377_lettuce-sandwich-butterhead-lettuce-vegetable-salad-transparent-lettuce.png',
      title: 'Green Lettuce',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, tenetur.',
      prices: ' ⃀ 14.99',
      discount: '⃀ 20.99',
    },
    {
      id: 7,
      img: 'https://yans18.files.wordpress.com/2011/05/stockvault-red-hot-chili-pepper-with-smoke117579.jpg',
      title: 'Chilli',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, tenetur.',
      prices: '⃀ 8.99',
      discount: '⃀ 20.99',
    },
    {
      id: 8,
      img: 'https://i.pinimg.com/originals/2c/00/cf/2c00cfefb7ec1482ebd3d876fc668b5e.jpg',
      title: 'Red Tomatos',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, tenetur.',
      prices: '⃀ 15.99',
      discount: '⃀ 20.99',
    },
    {
      id: 9,
      img: 'https://glycemic-index.net/images/ogjwI69crE.webp',
      title: 'Juice',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, tenetur.',
      prices: '⃀ 4.99',
    },
    {
      id: 10,
      img: 'https://static.tildacdn.com/tild3766-3161-4830-b737-393432383161/mango.png',
      title: 'Mango',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, tenetur.',
      prices: '⃀ 5',
      discount: '⃀ 8.55',
    },

    {
      id: 11,
      img: 'https://alsat24.ru/wp-content/uploads/2022/06/c1b19657e9f011eca80654a05054786b_ddf5e185e9f511eca80654a05054786b.jpg',
      title: '7u100',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, tenetur.',
      prices: '⃀ 11.99',
    },
    {
      id: 12,
      img: 'https://cdn2.may24.ru/upload/iblock/fb4/fb4962700a6fcfe456066ddd62d1f4cf.jpg',
      title: 'тархун',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, tenetur.',
      prices: '⃀ 14.99',
      discount: '⃀ 20.99',
    },
    {
      id: 13,
      img: 'https://irkmarket.ru/images/virtuemart/product/096171.jpg',
      title: 'NAR',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, tenetur.',
      prices: '⃀ 12.99',
    },
    {
      id: 14,
      img: 'https://cdn2.may24.ru/upload/iblock/90b/90b11ecb066c1314ef09c5aa44427a73.jpg',
      title: 'Mохито',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, tenetur.',
      prices: '⃀ 14.99',
      discount: '⃀ 20.99',
    },
    {
      id: 15,
      img: 'https://tvoydom.ru/photos/1000476593/1000476593.jpg',
      title: 'Rich',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, tenetur.',
      prices: '⃀ 8.99',
      discount: '⃀ 20.99',
    },
    {
      id: 16,
      img: 'https://pivobraga.ru/image/cache/data/vine/soki/0/sok_malinovyy_koncentrirovannyy_1kg_360-600x600.jpg',
      title: 'Malina',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, tenetur.',
      prices: '⃀ 15.99',
      discount: '⃀ 20.99',
    },
    {
      id: 17,
      img: 'https://allo-spb.com/images/shop_items/2731_220x220.jpg.webp',
      title: 'Чудо',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, tenetur.',
      prices: '⃀ 4.99',
    },
    {
      id: 18,
      img: 'https://tornado.shop/images/thumbnails/220/220/detailed/23/P1297991.jpg',
      title: ' Растишка',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, tenetur.',
      prices: '⃀ 5',
      discount: '⃀ 8.55',
    },

    {
      id: 19,
      img: 'https://almaty.instashop.kz/upload/resize_cache/iblock/4b2/476_342_1/4b21e7e901fd1e2254baad833153a572.jpg',
      title: 'Агуша',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, tenetur.',
      prices: '⃀ 11.99',
    },
    {
      id: 20,
      img: 'https://agrokomplexshop.ru/upload/iblock/11c/31697_1.jpg',
      title: 'Fruttis',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, tenetur.',
      prices: '⃀ 14.99',
      discount: '⃀ 20.99',
    },
    {
      id: 21,
      img: 'https://freshice.by/sites/default/files/2019-11/19bdb29fc5e60b36fc800d3af0f5ddbd.jpg',
      title: 'Bahroma',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, tenetur.',
      prices: '⃀ 12.99',
    },
    {
      id: 22,
      img: 'https://imgproxy.sbermarket.ru/imgproxy/size-680-680/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzMyMjA3OC9vcmlnaW5hbC8xLzIwMjItMDgtMjJUMTclM0EzMiUzQTA4LjQ3NjAwMCUyQjAwJTNBMDAvMzIyMDc4XzEuanBn.jpg',
      title: 'Капсула',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, tenetur.',
      prices: '⃀ 14.99',
      discount: '⃀ 20.99',
    },
    {
      id: 23,
      img: 'https://parhato.ru/wp-content/uploads/2022/11/728b9fe1611911eda27800155d01c83b_c38ac1e8615711ed98d100155d203202-5.jpg',
      title: 'Пломбир',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, tenetur.',
      prices: '⃀ 8.99',
      discount: '⃀ 20.99',
    },
    {
      id: 24,
      img: 'https://main-cdn.sbermegamarket.ru/hlr-system/-15/295/546/299/822/54/100029255438b0.jpg',
      title: 'Мишка',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, tenetur.',
      prices: '⃀ 15.99',
      discount: '⃀ 20.99',
    },
    {
      id: 25,
      img: 'https://avatars.mds.yandex.net/get-mpic/7980098/img_id5567330357436813642.jpeg/x332_trim',
      title: 'Cake',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, tenetur.',
      prices: '⃀ 4.99',
    },
    {
      id: 26,
      img: 'https://sc02.alicdn.com/kf/HTB1kIQIUXzqK1RjSZFvq6AB7VXaG/231613577/HTB1kIQIUXzqK1RjSZFvq6AB7VXaG.jpg',
      title: ' Cake',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, tenetur.',
      prices: '⃀ 5',
      discount: '⃀ 8.55',
    },

    {
      id: 27,
      img: 'https://ижпакмаркет.рф/image/cache/catalog/tovar/konditerka/dlya-torta/transportirovochnyj/new/ecocake6000open%2B-800x800.jpg',
      title: 'Cake',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, tenetur.',
      prices: '⃀ 11.99',
    },
    {
      id: 28,
      img: 'https://popsolutionsinc.com/wp-content/uploads/2018/01/Six-Cupcake-Box-BB6-WEB-PROFILE-1.jpg',
      title: 'Cake',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, tenetur.',
      prices: '⃀ 14.99',
      discount: '⃀ 20.99',
    },
    {
      id: 29,
      img: 'https://main-cdn.sbermegamarket.ru/hlr-system/117/548/151/612/121/920/100045549723b0.png',
      title: 'Bread',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, tenetur.',
      prices: '⃀ 12.99',
    },
    {
      id: 30,
      img: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614571859_3-p-khleb-na-belom-fone-3.jpg',
      title: 'bread',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, tenetur.',
      prices: '⃀ 14.99',
      discount: '⃀ 20.99',
    },
    {
      id: 31,
      img: 'https://e3raph.com/wp-content/uploads/2022/10/الفرق-بين-الخبز-الأبيض-والأسمر،-وفوائدهما-1568x1046.jpg',
      title: 'bread',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, tenetur.',
      prices: '⃀ 8.99',
      discount: '⃀ 20.99',
    },
    {
      id: 32,
      img: 'https://wp-s.ru/wallpapers/1/4/515422490374348/xleb-na-belom-fone-s-batonami.jpg',
      title: 'bread',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, tenetur.',
      prices: '⃀ 15.99',
      discount: '⃀ 20.99',
    },
    {
      id: 33,
      img: 'https://unblast.com/wp-content/uploads/2019/09/Butter-Block-Packaging-Mockup-2.jpg',
      title: 'Butter',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, tenetur.',
      prices: '⃀ 4.99',
    },
    {
      id: 34,
      img: 'https://cdn.freelance.ru/img/portfolio/pics/00/35/ED/3534305.jpg?mt=c4e20359',
      title: ' Butter',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, tenetur.',
      prices: '⃀ 5',
      discount: '⃀ 8.55',
    },

    {
      id: 35,
      img: 'https://avatars.mds.yandex.net/i?id=179b0c08c4bc189d7d08399a32b489f746fa11fe-7763867-images-thumbs&n=13',
      title: 'Butter',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, tenetur.',
      prices: '⃀ 11.99',
    },
    {
      id: 36,
      img: 'https://avatars.mds.yandex.net/i?id=1396fd36bf702ca7bc387dff13115b0323fa2743-8310669-images-thumbs&n=13',
      title: 'Butter',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, tenetur.',
      prices: '⃀ 14.99',
      discount: '⃀ 20.99',
    },
    {
      id: 37,
      img: 'https://pl.all.biz/img/pl/catalog/42379.jpeg',
      title: 'Cream',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, tenetur.',
      prices: '⃀ 12.99',
    },
    {
      id: 38,
      img: 'https://cdn.100sp.ru/pictures/461883594',
      title: 'Cream',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, tenetur.',
      prices: '⃀ 14.99',
      discount: '⃀ 20.99',
    },
    {
      id: 39,
      img: 'https://main-cdn.sbermegamarket.ru/hlr-system/197/077/955/012/512/37/600003118160b0.jpeg',
      title: 'Cream',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, tenetur.',
      prices: '⃀ 8.99',
      discount: '⃀ 20.99',
    },
    {
      id: 40,
      img: 'https://swlife.ru/image/cache/catalog/product/32/f8/32f86cad4891a33790ebcdc56d3f0508-628x628.webp',
      title: 'Cream',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, tenetur.',
      prices: '⃀ 15.99',
      discount: '⃀ 20.99',
    },
  ])  

  const [shoppingCart, setShoppingCart] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  const addToFavorites = (product) => {
    setFavoriteProducts((prevFavorites) => {
      const exists = prevFavorites.some((favProduct) => favProduct.id === product.id);
      if (!exists) {
        return [...prevFavorites, product];
      }
      return prevFavorites;
    });
  };

  const removeFromFavorites = (id) => {
    setFavoriteProducts((prevFavorites) => prevFavorites.filter((product) => product.id !== id));
  };

  const removeFromCart = (id) => {
    setShoppingCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const value = {
    cart,
    setCart,
    shoppingCart,
    setShoppingCart,
    favoriteProducts,
    addToFavorites,
    removeFromFavorites,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};