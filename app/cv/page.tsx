import type { Metadata } from 'next';
import { SiteFrame } from '../components/site-frame';

export const metadata: Metadata = {
  title: 'CV | Chuanhao Lu',
  description: 'Curriculum vitae of Chuanhao Lu.',
};

export default function CvPage() {
  return (
    <SiteFrame active="cv">
      <section className="page-content cv-page" aria-labelledby="cv-heading">
        <div className="document-heading">
          <h2 id="cv-heading">Curriculum Vitae</h2>
          <a href="/Chuanhao_Lu_CV.pdf" target="_blank" rel="noreferrer">
            Open PDF
          </a>
        </div>
        <object
          className="cv-viewer"
          data="/Chuanhao_Lu_CV.pdf"
          type="application/pdf"
          aria-label="Chuanhao Lu curriculum vitae"
        >
          <p>
            Your browser cannot display the PDF here.{' '}
            <a href="/Chuanhao_Lu_CV.pdf">Open the curriculum vitae</a>.
          </p>
        </object>
      </section>
    </SiteFrame>
  );
}
