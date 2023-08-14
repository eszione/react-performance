import { Link } from "react-router-dom";
import "./SideMenu.css";

export default () => {
    const navigation = [
        {
            link: '/',
            name: 'Home'
        },
        {
            link: '/full',
            name: 'Full re-renders'
        },
        {
            link: '/memo',
            name: 'Render with memo'
        },
        {
            link: '/children',
            name: 'Render with children'
        }
    ];

    return (
        <nav className="sideMenu">
            <ul>
                {navigation.map((n, i) => <li key={`SideMenu-${i}`}><Link to={n.link}>{n.name}</Link></li>)}
            </ul>
        </nav>);
};
