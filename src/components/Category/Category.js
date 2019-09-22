import React from 'react';
import { Link } from 'gatsby';
import styles from './Category.module.scss';

type Props = {
  categories: string[]
};

const Category = ({ categories }: Props) => {
  // filter category list
  const categoryList = {};
  categories.forEach(category => {
    if (categoryList[category]) {
      return;
    }
    categoryList[category.category] = category.categorySlug;
  });

  return (
    <div className={styles['category']}>
      <div className={styles['category__list']}>
        {Object.keys(categoryList).sort().map(category => (
          <span className={styles['category__list__item']}><Link to={categoryList[category]}>{category}</Link></span>
        ))}
      </div>
    </div>
  );
};

export default Category;