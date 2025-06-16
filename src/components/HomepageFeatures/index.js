import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'User Guide',
    description: (
      <>
        Comprehensive guides for using QA Advisor WordPress Analytics.
        Learn how to track, analyze, and optimize your WordPress site.
      </>
    ),
  },
  {
    title: 'Developer Guide',
    description: (
      <>
        Technical documentation for developers working with QA Advisor.
        API references, integration guides, and customization options.
      </>
    ),
  },
  {
    title: 'Privacy-Focused',
    description: (
      <>
        QA Advisor is designed with privacy in mind, providing analytics
        without cookies and respecting user privacy.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
