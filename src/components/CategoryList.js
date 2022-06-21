import './CategoryList.css';
import { categories } from '../data/categories';

function CategoryList(props) {
  return (
    <div className="category-list">
      <h1 className="category-list-header">Categories</h1>
      {categories.map(category => {
        return <div
          className="category"
          key={category.id}>
          {category.name}
        </div>
      })
      }
    </div>
  );
}

export default CategoryList;
