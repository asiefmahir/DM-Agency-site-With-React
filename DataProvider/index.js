import { useEffect } from 'react';
import { useStoreActions } from 'easy-peasy';
import getData from '../api';
const DataProvider = () => {
    const urls = [
        { name: 'about', url: '/about' },
        { name: 'nav', url: '/nav' },
        { name: 'hero', url: '/hero' },
        { name: 'team', url: '/team' },
        { name: 'service', url: '/service' },
        { name: 'portfolio', url: '/portfolio' },
        { name: 'privacy', url: '/privacy' },
        { name: 'feedback', url: '/feedback' },
        { name: 'contact', url: '/contact' },

    ];
    const actions = useStoreActions((actions) => actions);
    useEffect(() => {
        getData(urls).then((data) => {
            urls.forEach((item) => {
                actions[item.name].load(data[item.name]);
            });
        });
    }, []);
    return null;
};
export default DataProvider;