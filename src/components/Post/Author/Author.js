// @flow strict
import React from 'react';
import styles from './Author.module.scss';
import { useSiteMetadata } from '../../../hooks';

const Author = () => {
  const { author } = useSiteMetadata();
  return (
    <div className={styles['author']}>
      <a href={`https://github.com/${author.contacts.github}`}>
        <img className={styles['author__image']} alt="profile images" src={author.photo} />
      </a>
      <p className={styles['author__bio']}>
        <span className={styles['author__bio-name']}>{author.name}</span>
        {author.bio}
      </p>
    </div>
  );
};

export default Author;
