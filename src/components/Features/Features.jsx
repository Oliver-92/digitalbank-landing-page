import React from 'react';
import './Features.css';
import iconOnline from '../../assets/images/icon-online.svg';
import iconBudgeting from '../../assets/images/icon-budgeting.svg';
import iconOnboarding from '../../assets/images/icon-onboarding.svg';
import iconApi from '../../assets/images/icon-api.svg';

const featuresData = [
  {
    id: 1,
    icon: iconOnline,
    title: 'Online Banking',
    description: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
  },
  {
    id: 2,
    icon: iconBudgeting,
    title: 'Simple Budgeting',
    description: 'See exactly where your money goes each month. Receive notifications when you\'re close to hitting your limits.'
  },
  {
    id: 3,
    icon: iconOnboarding,
    title: 'Fast Onboarding',
    description: 'We don\'t do branches. Open your account in minutes online and start taking control of your finances right away.'
  },
  {
    id: 4,
    icon: iconApi,
    title: 'Open API',
    description: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'
  }
];

function Features() {
  return (
    <section className="features">
      <div className="features__container">
        <div className="features__header">
          <h2 className="features__title">Why choose Digitalbank?</h2>
          <p className="features__subtitle">
            We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
          </p>
        </div>

        <div className="features__grid">
          {featuresData.map(feature => (
            <article key={feature.id} className="feature-card">
              <img src={feature.icon} alt="" className="feature-card__icon" aria-hidden="true" />
              <h3 className="feature-card__title">{feature.title}</h3>
              <p className="feature-card__text">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
