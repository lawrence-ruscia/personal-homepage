import { useBreakpoint } from '../utils/useBreakpoint';
import styles from '../assets/styles/About.module.css';
import illustration from '@/assets/images/illustration.svg';
const text1 = (
  <p className={styles.textContent}>
    Hi! I’m a full-stack web developer based in the Philippines with a focus on
    building scalable, user-centered applications using the PERN stack
    (PostgreSQL, Express, React, Node.js).
  </p>
);

const text2 = (
  <p>
    As an Information Technology student, I’ve developed a solid foundation in
    both front-end and back-end development. I enjoy designing responsive and
    accessible UIs with HTML, CSS, and React, and building robust APIs with
    Node.js and Express.
  </p>
);

const text3 = (
  <p>
    I care about writing clean, maintainable code and crafting meaningful user
    experiences. I’m always learning, iterating, and looking for ways to
    contribute to impactful projects.
  </p>
);

const text4 = <p>Let’s build something great together.</p>;
const largeScreenTexts = [text1, text2, text3, text4];
const mobileScreenText = (
  <p>
    I’m a final-year IT student with hands-on experience building and testing
    web applications using React, Node.js, and TypeScript. I enjoy learning by
    doing, solving problems, and working with others to deliver reliable,
    well-tested software.
  </p>
);

export const About = () => {
  const isMobile = useBreakpoint('(max-width: 768px)');

  return (
    <section id='about' className={styles.about}>
      <h2 className={`${styles.title} section-title`}>About Me</h2>
      <div className={styles.content}>
        <div className={styles.textContent}>{mobileScreenText}</div>

        <div className={styles.illustration} aria-hidden='true'>
          <img src={illustration} loading='lazy' alt='' />
        </div>
      </div>
    </section>
  );
};
