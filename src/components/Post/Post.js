// @flow
import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import Content from './Content';
import styles from './Post.module.scss';
import type { Node } from '../../types';
import { useScroll } from '../../hooks';

type Props = {
  post: Node
};

const Post = ({ post }: Props) => {
  // const sideButtonRef = useRef();
  // const position = useScroll();

  // // Scroll 위치에 따라 사이드 버튼 노출 관리
  // useEffect(() => {
    // const { y } = position;
    // if (y < 500) {
    //   sideButtonRef.current.classList.remove('show');
    // } else {
    //   sideButtonRef.current.classList.add('show');
    // }
  // });

  const { html } = post;
  const {
    tags, title, date, category
  } = post.frontmatter;
  return (
    <div className={styles['post']}>
      <Link className={styles['post__home-button']} to="/">Home</Link>

      <div className={styles['post__content']}>
        <Content body={html} title={title} date={date} tags={tags} category={category} />
      </div>

      {/*<div className={styles['post__side-button']} ref={sideButtonRef}>*/}
      {/*  <div className={styles['post__side-button__move-top']}>*/}
      {/*    <span>TOP</span>*/}
      {/*  </div>*/}
      {/*  <div className={styles['post__side-button__move-home']}>*/}
      {/*    <span>HOME</span>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};

export default Post;
