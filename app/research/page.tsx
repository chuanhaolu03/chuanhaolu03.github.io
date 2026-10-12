import type { Metadata } from 'next';
import { SiteFrame } from '../components/site-frame';

export const metadata: Metadata = {
  title: 'Research | Chuanhao Lu',
  description: 'Working papers and ongoing research by Chuanhao Lu.',
};

const publications = [
  {
    title: 'Order of Entry and Market Performance in the Global Smartphone Industry',
    authors: 'with Wenzhuo Lu and Xiaochen Xie',
    status: 'International Journal of Industrial Organization (2026)',
  },
];

const workingPapers = [
  {
    title: 'Technology Sanctions and Production-Network Spillovers: Evidence from the Huawei Ban',
    authors: 'with Qi Wu, Xiaochen Xie, and Junjie Xia',
    status: 'Under Review',
  },
];

const workInProgress = [
  {
    title: 'Competition in the Smartphone Markets',
    authors: 'with Shengmao Cao and Xiaochen Xie',
  },
  {
    title: 'China’s New Energy Vehicle Subsidies',
    authors: 'with Mingming Li and Xiaochen Xie',
  },
];

export default function ResearchPage() {
  return (
    <SiteFrame active="research">
      <section className="page-content" aria-labelledby="research-heading">
        <h2 id="research-heading">Research</h2>

        <h3>Publication</h3>
        <div className="publication-list">
          {publications.map((paper) => (
            <article className="publication" key={paper.title}>
              <h4>{paper.title}</h4>
              <p>{paper.authors}</p>
              <p className="status">{paper.status}</p>
            </article>
          ))}
        </div>

        <h3>Working Papers</h3>
        <div className="publication-list">
          {workingPapers.map((paper) => (
            <article className="publication" key={paper.title}>
              <h4>{paper.title}</h4>
              <p>{paper.authors}</p>
              <p className="status">{paper.status}</p>
            </article>
          ))}
        </div>

        <h3>Work in Progress</h3>
        <div className="publication-list compact">
          {workInProgress.map((paper) => (
            <article className="publication" key={paper.title}>
              <h4>{paper.title}</h4>
              <p>{paper.authors}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteFrame>
  );
}
