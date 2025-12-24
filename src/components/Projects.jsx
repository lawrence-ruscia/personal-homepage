import styles from '../assets/styles/Projects.module.css';
import fundxpert_preview from '../assets/images/fundxpert-preview.png';
import cv_builder_preview from '../assets/images/cv-builder-preview.png';

import { useBreakpoint } from '../utils/useBreakpoint';
import { ExternalLink } from 'lucide-react';
import { Github } from './Github.jsx';
import { ResponsiveImage } from './ResponsiveImage.jsx';

export const Projects = () => {
  const isMobile = useBreakpoint('(max-width: 768px)');
  return (
    <section id='projects' className={styles.projects}>
      <h2 className='section-title'>Projects</h2>
      <div className={styles.projectContainer}>
        <div className={styles.projectItem}>
          <div className={styles.content}>
            <div className={styles.description}>
              <h3>FundXpert – Provident Fund Management System</h3>
              <p>
                A full-stack web application that digitizes employee retirement
                fund workflows, including contributions, loan applications,
                approvals, and HR processing, with a strong focus on security
                and automated testing.
              </p>
            </div>

            <div className={styles.technology}>
              <ul className={styles.frontend}>
                <p>Frontend</p>
                <li>React with TypeScript</li>
                <li>Role-based dashboards (Employee, HR, Admin)</li>
                <li>Reusable components & custom hooks</li>
                <li>Responsive UI with Tailwind CSS</li>
              </ul>

              <ul className={styles.backend}>
                <p>Backend</p>
                <li>Node.js & Express REST APIs</li>
                <li>PostgreSQL database with Prisma ORM</li>
                <li>JWT authentication & TOTP-based 2FA</li>
                <li>Role-based access control & approval workflows</li>
              </ul>

              <ul className={styles.features}>
                <p>Key Highlights</p>
                <li>~75% automated test coverage (unit & integration)</li>
                <li>Multi-level approval flows across 3 user roles</li>
                <li>Authorization bypass vulnerability identified & fixed</li>
              </ul>
            </div>
          </div>
          <div className={styles.preview}>
            <img
              src={fundxpert_preview}
              style={{ width: '100%', height: 'auto' }}
            />

            <div className={styles.links}>
              <a
                href='https://fundxpert.vercel.app'
                target='_blank'
                rel='noopener noreferrer'
                className='cta'
                aria-label='View live demo'
                title='View live demo'
              >
                {isMobile ? (
                  <ExternalLink />
                ) : (
                  <>
                    <ExternalLink /> Live Demo
                  </>
                )}
              </a>
              <a
                href='projects'
                target='_blank'
                rel='noopener noreferrer'
                className='secondaryBtn'
                aria-label='View code on GitHub'
                title='View code on GitHub'
              >
                {isMobile ? (
                  <Github color='var(--color-text-muted)' />
                ) : (
                  <>
                    <Github color='var(--color-text-muted)' /> View Code
                    (Private)
                  </>
                )}
              </a>
            </div>
          </div>
        </div>

        <div className={styles.projectItem}>
          <div className={styles.content}>
            <div className={styles.description}>
              <h3>CV Builder – Resume Generation Tool</h3>
              <p>
                A responsive web application that enables users to build and
                preview resumes in real time, focusing on React state
                management, controlled components, and live PDF rendering.
              </p>
            </div>

            <div className={styles.technology}>
              <ul className={styles.frontend}>
                <p>Frontend</p>
                <li>React with controlled components</li>
                <li>Live form-to-preview state synchronization</li>
                <li>Responsive UI using CSS Modules</li>
              </ul>

              <ul className={styles.backend}>
                <p>PDF Rendering</p>
                <li>@react-pdf/renderer for PDF generation</li>
                <li>react-pdf for real-time document preview</li>
                <li>Dynamic document styling</li>
              </ul>

              <ul className={styles.features}>
                <p>Key Highlights</p>
                <li>Real-time CV preview and updates</li>
                <li>Downloadable PDF resume</li>
                <li>Mobile-first responsive design</li>
              </ul>
            </div>
          </div>
          <div className={styles.preview}>
            <img src={cv_builder_preview} />
            <div className={styles.links}>
              <a
                href='https://renz-cv-builder.vercel.app/'
                target='_blank'
                rel='noopener noreferrer'
                className='cta'
                aria-label='View live demo'
                title='View live demo'
              >
                {isMobile ? (
                  <ExternalLink />
                ) : (
                  <>
                    <ExternalLink /> Live Demo
                  </>
                )}
              </a>
              <a
                href='https://github.com/lawrence-ruscia/cv-builder'
                target='_blank'
                rel='noopener noreferrer'
                className='secondaryBtn'
                aria-label='View code on GitHub'
                title='View code on GitHub'
              >
                {isMobile ? (
                  <Github color='var(--color-text-muted)' />
                ) : (
                  <>
                    <Github color='var(--color-text-muted)' /> View Code
                  </>
                )}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
