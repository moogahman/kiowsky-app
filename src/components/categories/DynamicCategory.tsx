import { useParams } from 'react-router-dom';
import CategoryItems from '../common/CategoryItems';
import './DynamicCategory.css';

function DynamicCategory() {
    const { category } = useParams<{ category: string }>();
    const formattedCategory = category
        ?.split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return (
        <div className={'dynamic-category'}>
            <CategoryItems
                category={formattedCategory || ''}
                className={`main-${category}`}
            />
        </div>
    );
}

export default DynamicCategory;
