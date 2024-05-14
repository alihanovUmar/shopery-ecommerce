import { AiOutlinePlus } from 'react-icons/ai'
import { GiCakeSlice, GiCupcake } from 'react-icons/gi'
import { GrDomain } from 'react-icons/gr'
import { PiCookingPot } from 'react-icons/pi'
import { SiBuymeacoffee } from 'react-icons/si'
import { TbIceCream, TbMeat, TbSalad } from 'react-icons/tb'

export const navbarData = [
  {
    id: 1,
    class: 'mainMenu',
    name: 'All Categories',
    link: '',
    type: 'dropdown',
    dropdown: [
      {
        id: 1,
        image: <GrDomain />,
        link: '',
        name: 'Main',
      },
      {
        id: 2,
        image: <SiBuymeacoffee />,
        link: 'drinkIndex',
        name: 'Drink & Watert',
      },
      {
        id: 3,
        image: <TbIceCream />,
        link: 'yogurt',
        name: 'Yogurt & Ice Cream',
      },
      {
        id: 4,
        link: 'cake',
        image: <GiCakeSlice />,
        name: 'Cake & Bread',
      },
      {
        id: 5,
        image: <GiCupcake />,
        link: 'butter',
        name: 'Butter & Cream',
      },
      {
        id: 6,
        image: <AiOutlinePlus />,
        link: '',
        name: 'View all Categor',
      },
    ],
  },
  {
    id: 4,
    name: 'Pages',
    link: '',
    type: 'dropdown',
    dropdown: [
      {
        name: 'Favorite',
        link: 'favorite',
      },
      {
        name: 'Shopping Cart',
        link: 'shoppingCart',
      },
      {
        name: 'Faqs',
        link: 'faqs',
      },
    ],
  },
  {
    id: 3,
    name: 'Product',
    link: 'card',
    type: 'single',
    dropdown: [
      {
        name: 'Ladoo',
        link: '',
      },
      {
        name: 'Besan Ladoo',
        link: '',
      },
      {
        name: 'Ghee Besan Ladoo',
        link: '',
      },
      {
        name: 'Nariyal Ladoo',
        link: '',
      },
      {
        name: 'Kaju Katli',
        link: '',
      },
      {
        name: 'Rasgulla',
        link: '',
      },
    ],
  },
  {
    id: 5,
    name: 'About Us',
    link: 'about',
    type: 'single',
  },
  {
    id: 7,
    name: 'Contact Us',
    link: 'contact',
    type: 'single',
  },
]
