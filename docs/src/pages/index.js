import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Lorem ipsum',
    imageUrl: 'data:image/svg+xml,%3Csvg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="m0 0h600v600h-600z" fill="%23cac0ca"/%3E%3Cpath d="m59.99998 80h199.99998v199.99998h-199.99998z" fill="%23503b8d" stroke-width=".83682"/%3E%3Ccircle cx="300.00038" cy="305.00014" fill="%23773c8c" r="135.00006" stroke-width="1.22172"/%3E%3Cpath d="m339.5 235 142.5 285h-285z" fill="%23303e77" transform="matrix(1.26316 0 0 1.01754 -68.8421 10.8772)"/%3E%3C/svg%3E',
    description: (
      <>
        Lorem ipsum dolor sit amet.
      </>
    ),
  },
  {
    title: 'Lorem ipsum',
    imageUrl: 'data:image/svg+xml,%3Csvg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="m0 0h600v600h-600z" fill="%23cac0ca"/%3E%3Cpath d="m59.99998 80h199.99998v199.99998h-199.99998z" fill="%23503b8d" stroke-width=".83682"/%3E%3Ccircle cx="300.00038" cy="305.00014" fill="%23773c8c" r="135.00006" stroke-width="1.22172"/%3E%3Cpath d="m339.5 235 142.5 285h-285z" fill="%23303e77" transform="matrix(1.26316 0 0 1.01754 -68.8421 10.8772)"/%3E%3C/svg%3E',
    description: (
      <>
        Lorem ipsum dolor sit amet.
      </>
    ),
  },
  {
    title: 'Lorem ipsum',
    imageUrl: 'data:image/svg+xml,%3Csvg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="m0 0h600v600h-600z" fill="%23cac0ca"/%3E%3Cpath d="m59.99998 80h199.99998v199.99998h-199.99998z" fill="%23503b8d" stroke-width=".83682"/%3E%3Ccircle cx="300.00038" cy="305.00014" fill="%23773c8c" r="135.00006" stroke-width="1.22172"/%3E%3Cpath d="m339.5 235 142.5 285h-285z" fill="%23303e77" transform="matrix(1.26316 0 0 1.01754 -68.8421 10.8772)"/%3E%3C/svg%3E',
    description: (
      <>
        Lorem ipsum dolor sit amet.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
