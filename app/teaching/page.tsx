import type { Metadata } from 'next';
import { SiteFrame } from '../components/site-frame';

export const metadata: Metadata = {
  title: 'Teaching | Chuanhao Lu',
  description: 'Teaching experience of Chuanhao Lu.',
};

export default function TeachingPage() {
  return (
    <SiteFrame active="teaching">
      <section className="page-content" aria-labelledby="teaching-heading">
        <h2 id="teaching-heading">Teaching</h2>
        <article className="teaching-entry">
          <h3>Quantitative Empirical Economics</h3>
          <p>Teaching Assistant, core course for the Public Finance–Mathematics Dual Degree Program</p>
          <p>Instructor: Xiaochen Xie, Renmin University of China</p>
          <p className="status">2025–2026</p>
        </article>
      </section>
    </SiteFrame>
  );
}
