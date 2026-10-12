import Link from 'next/link';
import type { ReactNode } from 'react';

type PageName = 'home' | 'research' | 'teaching' | 'cv';

const navigation: Array<{ href: string; label: string; page: PageName }> = [
  { href: '/', label: 'Home', page: 'home' },
  { href: '/research', label: 'Research', page: 'research' },
  { href: '/teaching', label: 'Teaching', page: 'teaching' },
  { href: '/cv', label: 'CV', page: 'cv' },
];

export function SiteFrame({ active, children }: { active: PageName; children: ReactNode }) {
  return (
    <main className="site-shell">
      <header className={`site-header${active === 'home' ? ' home-header' : ''}`}>
        {active !== 'home' && (
          <div className="identity">
            <Link href="/" className="identity-link">
              <h1>Chuanhao Lu</h1>
            </Link>
            <p>Ph.D. Student in Economics</p>
            <p>The Chinese University of Hong Kong</p>
          </div>
        )}

        <nav aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              href={item.href}
              key={item.page}
              aria-current={active === item.page ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <div className="page-body">{children}</div>

      <footer>
        <p>Last updated: September 2026</p>
      </footer>
    </main>
  );
}
