import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate from '@docusaurus/Translate';

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
            <h2><Translate id="homepage.wordcamp.title">🎉 WordCamp Europe 2025 Special Release</Translate></h2>
            <p><Translate id="homepage.wordcamp.announcement">We're excited to present the beta version of QA Advisor at WordCamp Europe 2025!</Translate></p>
            <p><Translate id="homepage.wordcamp.description">QA Advisor is a powerful analytics tool that helps you understand user behavior through heatmaps and interaction tracking.</Translate></p>
            <p><strong><Translate id="homepage.wordcamp.coming">Full version coming Summer 2025!</Translate></strong></p>
          </div>
          
          <div className={styles.downloadSection}>
            <a
              className="button button--primary button--lg"
              href="/downloads/qa-heatmap-analytics.zip"
              download>
              <Translate id="homepage.download.button">🚀 Download QA Advisor (β)</Translate>
            </a>
          </div>
        </div>
        
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/user-manual">
            <Translate id="homepage.userGuide.button">User Guide</Translate>
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/developer-manual"
            style={{marginLeft: '10px'}}>
            <Translate id="homepage.developerGuide.button">Developer Guide</Translate>
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
