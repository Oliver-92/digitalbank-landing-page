import React from 'react';
import './Articles.css';
import imageCurrency from '../../assets/images/image-currency.jpg';
import imageRestaurant from '../../assets/images/image-restaurant.jpg';
import imagePlane from '../../assets/images/image-plane.jpg';
import imageConfetti from '../../assets/images/image-confetti.jpg';

const articlesData = [
  {
    id: 1,
    image: imageCurrency,
    author: 'By Claire Robinson',
    title: 'Receive money in any currency with no fees',
    excerpt: 'The world is getting smaller and we\'re becoming more mobile. So why should you be forced to only receive money in a single …'
  },
  {
    id: 2,
    image: imageRestaurant,
    author: 'By Wilson Hutton',
    title: 'Treat yourself without worrying about money',
    excerpt: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …'
  },
  {
    id: 3,
    image: imagePlane,
    author: 'By Wilson Hutton',
    title: 'Take your Digitalbank card wherever you go',
    excerpt: 'We want you to enjoy your travels. This is why we don\'t charge any fees on purchases while you\'re abroad. We\'ll even show you …'
  },
  {
    id: 4,
    image: imageConfetti,
    author: 'By Claire Robinson',
    title: 'Our invite-only Beta accounts are now live!',
    excerpt: 'After a lot of hard work by the whole team, we\'re excited to launch our closed beta. It\'s easy to request an invite through the site ...'
  }
];

function Articles() {
  return (
    <section className="articles">
      <div className="articles__container">
        <h2 className="articles__title">Latest Articles</h2>

        <div className="articles__grid">
          {articlesData.map(article => (
            <article key={article.id} className="article-card">
              <div className="article-card__image">
                <img src={article.image} alt={article.title} />
              </div>
              <div className="article-card__content">
                <p className="article-card__author">{article.author}</p>
                <h3 className="article-card__title">
                  <a href="#">{article.title}</a>
                </h3>
                <p className="article-card__excerpt">{article.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Articles;
