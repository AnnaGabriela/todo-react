import './CategorySelector.css';
import { categories } from '../data/categories';

function CategorySelector(props) {
  return (
    <div className="category-selector">
      {categories.map(category => {
        return <div
          className={`category-item ${props.value === category.id ? 'category-item-selected' : ''}`}
          onClick={() => props.handleChange(category.id)}
          key={category.id}>
          {category.name}
        </div>
      })
      }
    </div>
  );
}

export default CategorySelector;
