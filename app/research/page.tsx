import type { Metadata } from 'next';
import { SiteFrame } from '../components/site-frame';

export const metadata: Metadata = {
  title: 'Research | Chuanhao Lu',
  description: 'Working papers and ongoing research by Chuanhao Lu.',
};

const XiaochenXieLink = () => (
  <a href="https://xiexiaochen.weebly.com/" target="_blank" rel="noreferrer">
    Xiaochen Xie
  </a>
);

const WenzhuoLuLink = () => (
  <a href="https://sites.google.com/site/luwenzhuo/home" target="_blank" rel="noreferrer">
    Wenzhuo Lu
  </a>
);

const QiWuLink = () => (
  <a href="https://qiwu-qw.github.io" target="_blank" rel="noreferrer">
    Qi Wu
  </a>
);

const publications = [
  {
    title: 'Order of Entry and Market Performance in the Global Smartphone Industry',
    href: 'https://www.sciencedirect.com/science/article/pii/S0167718726000937?dgcid=author',
    authors: (
      <>
        with <WenzhuoLuLink /> and <XiaochenXieLink />
      </>
    ),
    status: 'International Journal of Industrial Organization (2026)',
  },
];

const workingPapers = [
  {
    title: 'Technology Sanctions and Production-Network Spillovers: Evidence from the Huawei Ban',
    authors: (
      <>
        with <QiWuLink />, <XiaochenXieLink />, and Junjie Xia
      </>
    ),
    status: 'Under Review',
  },
];

const workInProgress = [
  {
    title: 'Competition in the Smartphone Markets',
    authors: (
      <>
        with Shengmao Cao and <XiaochenXieLink />
      </>
    ),
  },
  {
    title: 'China’s New Energy Vehicle Subsidies',
    authors: (
      <>
        with Mingming Li and <XiaochenXieLink />
      </>
    ),
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
              <h4>
                <a href={paper.href} target="_blank" rel="noreferrer">
                  {paper.title}
                </a>
              </h4>
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
