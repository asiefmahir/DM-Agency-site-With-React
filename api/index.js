// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
// Base URL
export const BASE_URL = 'http://192.168.0.136:4500';
const image = (url) => {
    return `${BASE_URL}${url}`;
};
const mapURLAndData = {
    /* about */
    about(data) {
        return {
            excerpt: data.excerpt || '',
            paragraphLeft: data.paragraphLeft || '',
            paragraphRight: data.paragraphRight || '',
            titleArray: data.title ? data.title.map(item => {
                return {
                    id: item.id || '',
                    text: item.text || '',
                    variantColor: item.variantColors || '',
                    tag: item.tag || '',
                }
            }) : [],
            finishingHeading: data.finishingHeading ? data.finishingHeading.map(item => {
                return {
                    id: item.id || '',
                    text: item.text || '',
                    variantColor: item.variantColors || '',
                    tag: item.tag || '',
                }
            }) : [],
        };
    },
    /* portfolio */
    portfolio(data) {
        return {
            name: data.name || '',
            excerpt: data.excerpt || '',
            carousels: data.carousels ? data.carousels.map(carousel => {
                return {
                    id: carousel.id || '',
                    title: carousel.title || '',
                    subTitle: carousel.subTitle || '',
                    prevCarouselIconText: carousel.prevCarousel.iconText || '',
                    nextCarouselIconText: carousel.nextCarousel.iconText || '',
                    image: carousel.image ? image(carousel.image.url) : '',
                }
            }) : [],
            others: {
                title: data.others.title || '',
                icon: data.others.icon ? image(data.others.icon) : '',
                category: data.others.category ? data.others.category.map(item => {
                    return {
                        text: item.title,
                        tag: item.url
                    }
                }) : [],
            },
            works: data.works ? data.works.map(work => {
                return {
                    title: work.title || '',
                    subtitle: work.subtitle || '',
                    category: work.category || '',
                    type: work.type || '',
                    thumb: work.thumb ? image(work.thumb.url) : '',
                    modalSections: work.modalSection.type == 'images' ? work.modalSection.map(modal => {
                        return {
                            title: modal.title || '',
                            description: modal.description || '',
                            image: modal.image ? image(modal.image.url) : '',
                        }
                    }) : [],
                }
            }) : []
        };
    },
    /* hero */
    hero(data) {
        return {
            id: data.id || '',
            title: data.title ? data.title.map(item => {
                return {
                    id: item.id || '',
                    text: item.text || '',
                    variantColor: item.variantColor || '',
                    tag: item.tag || '',
                }
            }) : [],
            subtitle: data.subtitle ? data.subtitle.map(item => {
                return {
                    id: item.id || '',
                    text: item.text || '',
                    variantColor: item.variantColor || '',
                    tag: item.tag || '',
                }
            }) : [],
            aboutLinkText: data.aboutLink.text || '',
            aboutLinkIcon: data.aboutLink.url || '',
        }
    },
    /**latest-news */
    latestNews(data) {
        return {
            title: data.title ? data.title.map(item => {
                return {
                    text: item.text || '',
                    variantColor: item.variantColor || '',
                    tag: item.tag || '',
                }
            }) : [],
            news: data.news ? data.news.map(item => {
                return {
                    id: item.id || '',
                    duration: item.duration || '',
                    text: item.text || '',
                    url: data.link || ''
                }
            }) : []
        }
    },
    /* nav */
    nav(data) {
        return {
            brandText: data.brandText || ' ',
            brandUrl: data.brandUrl || '',
            brandLogo: data.brandLogo ? image(data.brandLogo.url) : '',
            navData: data.navLink ? data.navLink.map(item => {
                return {
                    text: item.text || '',
                    url: item.url || '',
                }
            }) : [],
            socialLinks: data.socialLinks ? data.socialLinks.map(item => {
                return {
                    text: item.text || '',
                    link: item.link || '',
                    iconText: item.iconText || image(item.image.url) || '',
                }
            }) : []
        }
    },
    /* privacy */
    privacy(data) {
        return {
            text: data.text || '',
            variantColor: data.variantColor || '',
            tag: data.tag || ''
        }
    },
    /* services */
    service(data) {
        return {
            title: data.title ? data.title.map(item => {
                return {
                    text: item.text || '',
                    variantColor: item.variantColor || '',
                    tag: item.tag || ''
                }
            }) : [],
            excerpt: data.excerpt || '',
            features: data.features ? data.features.map(item => {
                return {
                    id: item.id || '',
                    name: item.name || '',
                    description: item.description || '',
                    iconText: item.iconText || '',
                }
            }) : []
        }
    },
    /* team */
    team(data) {
        return {
            title: data.title ? data.title.map(item => {
                return {
                    text: item.text || '',
                    variantColor: item.variantColor || '',
                    tag: item.tag || '',
                }
            }) : [],
            excerpt: data.excerpt ? data.excerpt : '',
            teamMembers: data.teamMembers ? data.teamMember.map(item => {
                return {
                    name: item.name || '',
                    designation: item.designation || '',
                    excerpt: item.excerpt || '',
                    socialLinks: item.socialLink ? item.socialLink.map(singleLink => {
                        return {
                            text: singleLink.text || '',
                            link: singleLink.link || '',
                            iconText: singleLink.iconText || '',
                            image: singleLink.image ? image(singleLink.image.url) : '',
                        }
                    }) : '',
                }
            }) : []
        }
    },
    /* contact */
    contact(data) {
        return {
            title: data.title || '',
            excerpt: data.excerpt || '',
            contactList: data.link ? data.link.map(item => {
                return {
                    text: item.text || '',
                    url: item.url || '',
                    className: item.className || '',
                }
            }) : []
        }
    },
    /* feedback */
    feedBack(data) {
        return {
            title: data.title || '',
            fields: data.field ? data.field.map(item => {
                return {
                    type: data.type || '',
                    placeholder: data.placeholder || '',
                    name: data.name || '',
                }
            }) : [],
        }
    }
};
/**
 * [
 *  {name: 'about', url: 'about'},
 *  {name: 'site', url: 'site'}
 * ]
 */
/**
 *
 * @param {Array} urlList Array of data name
 */
const getData = async (urlList) => {
    const promises = urlList.map((item) => axios.get(`${BASE_URL}${item.url}`));
    const response = await Promise.all(promises);
    return response.reduce((acc, { data }, index) => {
        const name = urlList[index].name;
        const item = mapURLAndData[name](data);
        acc[name] = item;
        return acc;
    }, {});
};
export default getData;