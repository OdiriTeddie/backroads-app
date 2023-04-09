import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'
import tour5 from './images/tour-5.jpeg'
import tour6 from './images/tour-6.jpeg'

export const pageLinks = [
    {id: 1, href: '#home', text: 'home' },
    {id: 2, href: '#about', text: 'about' },
    {id: 3, href: '#services', text: 'services' },
    {id: 4, href: '#tours', text: 'tours' }
]

export const socialLinks = [
    {id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook'},
    {id: 1, href: 'https://www.twitter.com', icon: 'fab fa-twitter'},
    {id: 1, href: 'https://www.twitter.com', icon: 'fab fa-squarespace'},
]

export const services = [
    {id: 1, 
        icon: 'fas fa-wallet fa-fw', 
        title: 'saving money', 
        text: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'
    }, 
    {id: 2, 
        icon: 'fas fa-wallet fa-fw', 
        title: 'endless hiking', 
        text: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'
    }, 
    {id: 1, 
        icon: 'fas fa-socks fa-fw', 
        title: 'amazing comfort', 
        text: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'
    }, 
]

export const tours = [
    {
        id: 1, 
        image: tour1, 
        date: 'august 26th, 2020', 
        title: 'Tibet Adventure', 
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
        location: 'china',
        duration: 6,
        cost: 2100,
    },
    {
        id: 2, 
        image: tour2, 
        date: 'may 2nd, 2021', 
        title: 'Best Of Java', 
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
        location: 'USA',
        duration: 17,
        cost: 2100,
    },
    {
        id: 3, 
        image: tour3, 
        date: 'febuaury 4th, 2022', 
        title: 'Explore Hong Kong', 
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
        location: 'Hong Kong',
        duration: 5,
        cost: 2100,
    },
    {
        id: 4, 
        image: tour4, 
        date: 'december 16th, 2021', 
        title: 'Kenya Highlights', 
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
        location: 'Kenya',
        duration: 24,
        cost: 900,
    },
    {
        id: 5, 
        image: tour5, 
        date: 'march 19th, 2023', 
        title: 'Namibia by Road', 
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
        location: 'Namibia',
        duration: 15,
        cost: 2100,
    },
    {
        id: 6, 
        image: tour6, 
        date: 'june 7th, 2023', 
        title: 'Beautiful Rwanda', 
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
        location: 'Rwanda',
        duration: 12,
        cost: 4000,
    },
]