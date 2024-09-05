import { Link } from 'react-router-dom';
import type { CategoryTabProps } from '../../../types';
import './tab.css';

function Tab({ title, link, Icon, isSelected, onClick }: CategoryTabProps) {
    return (
        <Link
            to={link}
            className={` ${isSelected ? 'highlighted' : 'link1'}`}
            onClick={onClick}>
            <div>
                <Icon className="icon" size={35} />
                <h1>{title}</h1>
            </div>
        </Link>
    );
}

export default Tab;
