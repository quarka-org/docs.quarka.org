import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: <Translate id="homepage.features.userGuide.title">User Guide</Translate>,
    description: (
      <Translate id="homepage.features.userGuide.description">
        Comprehensive guides for using QA Advisor WordPress Analytics.
        Learn how to track, analyze, and optimize your WordPress site.
      </Translate>
    ),
  },
  {
    title: <Translate id="homepage.features.developerGuide.title">Developer Guide</Translate>,
    description: (
      <Translate id="homepage.features.developerGuide.description">
        Technical documentation for developers working with QA Advisor.
        API references, integration guides, and customization options.
      </Translate>
    ),
  },
  {
    title: <Translate id="homepage.features.privacy.title">Privacy-Focused</Translate>,
    description: (
      <Translate id="homepage.features.privacy.description">
        QA Advisor is designed with privacy in mind, providing analytics
        without cookies and respecting user privacy.
      </Translate>
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
