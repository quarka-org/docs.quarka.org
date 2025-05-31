import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        
        {/* WordCamp Europe 2025 Beta Release */}
        <div className={styles.betaSection}>
          <div className={styles.betaAnnouncement}>
            <h2>🎉 WordCamp Europe 2025 Special Release</h2>
            <p>We're excited to present the beta version of QA Advisor at WordCamp Europe 2025!</p>
            <p>QA Advisor is a powerful analytics tool that helps you understand user behavior through heatmaps and interaction tracking.</p>
            <p><strong>Full version coming Summer 2025!</strong></p>
          </div>
          
          <div className={styles.downloadSection}>
            <a
              className="button button--primary button--lg"
              href="/downloads/qa-heatmap-analytics.zip"
              download>
              🚀 Download QA Advisor (β)
            </a>
          </div>
        </div>
        
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/user-manual">
            User Manual
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/developer-manual"
            style={{marginLeft: '10px'}}>
            Developer Manual
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-TSMMZM4X"
          height="0" 
          width="0" 
          style={{display: 'none', visibility: 'hidden'}}
        />
      </noscript>
      {/* End Google Tag Manager (noscript) */}
    </Layout>
  );
}
