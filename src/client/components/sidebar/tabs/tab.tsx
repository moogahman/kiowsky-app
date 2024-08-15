import { Link } from 'react-router-dom';

/* interface ItemProps {
    title: string;
    link: string;
    Icon: React.ElementType;
} */

interface ItemProps {
    title: string;
}

/* function Tab({ title, link, Icon }: ItemProps) {
    return (
        <Link to={link} className="link1">
            <div>
                <Icon className="icon" size={35} />
                <h1>{title}</h1>
            </div>
        </Link>
    );
}
*/

function Tab({ title }: ItemProps) {
    return (
        <Link to={'/'} className="link1">
            <div>
                <h1>{title}</h1>
            </div>
        </Link>
    );
}
export default Tab;
