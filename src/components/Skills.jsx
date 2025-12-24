import styles from '../assets/styles/Skills.module.css';

import { Monitor, Server, Hammer } from 'lucide-react';

export const Skills = () => {
  return (
    <section id='skills' className={styles.skills}>
      <h2 className='section-title'>Skills</h2>
      <div className={styles.content}>
        <div className={styles.grid}>
          <h3 className={styles.heading}>
            <Monitor className={styles.icon} />
            Frontend
          </h3>
          <ul className={styles.skillList}>
            <li>React</li>
            <li>TypeScript</li>
            <li>HTML & CSS</li>
            <li>Vite</li>
          </ul>
        </div>

        <div className={styles.grid}>
          <h3 className={styles.heading}>
            <Server className={styles.icon} />
            Backend
          </h3>
          <ul className={styles.skillList}>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>REST APIs</li>
            <li>PostgreSQL</li>
            <li>JWT Authentication</li>
          </ul>
        </div>

        <div className={styles.grid}>
          <h3 className={styles.heading}>
            <Hammer className={styles.icon} />
            Testing & Tools
          </h3>
          <ul className={styles.skillList}>
            <li>Jest & Vitest</li>
            <li>Supertest</li>
            <li>Postman</li>
            <li>Git & GitHub</li>
            <li>Vercel / Render</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
