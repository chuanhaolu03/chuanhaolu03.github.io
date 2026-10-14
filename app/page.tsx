import { SiteFrame } from './components/site-frame';

export default function Home() {
  return (
    <SiteFrame active="home">
      <h2 className="home-name">Chuanhao Lu</h2>
      <section className="home-profile" aria-labelledby="about-heading">
        <img
          className="profile-photo"
          src="/chuanhao-lu-portrait.jpg"
          alt="Chuanhao Lu"
          width="1000"
          height="1500"
        />
        <div className="intro">
          <h2 className="visually-hidden" id="about-heading">About</h2>
          <p>
            I am a Ph.D. student in Economics at The Chinese University of Hong Kong. I received my
            bachelor&apos;s degree in Finance from Renmin University of China.
          </p>
          <p>
            My research interests are Industrial Organization, Applied Microeconomics, Public
            Economics, and International Trade.
          </p>
          <p className="contact-line">
            Email: <a href="mailto:chuanhaolu@link.cuhk.edu.hk">chuanhaolu@link.cuhk.edu.hk</a>
            <span aria-hidden="true"> · </span>
            <a href="/cv">Curriculum Vitae</a>
          </p>
        </div>
      </section>
    </SiteFrame>
  );
}
