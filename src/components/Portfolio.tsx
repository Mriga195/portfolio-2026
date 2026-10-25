import React from 'react';

/* The page is a Linux man page: `man mriganka`. Section names follow man(7) conventions. */

type Link = { label: string; href: string };

const HISTORY = [
  {
    term: 'Encamp Adventures',
    role: 'Full-stack engineer, June 2026 to present',
    points: [
      'Ship production features for a North-East India travel company that has hosted 23,000+ travellers: the customer booking site and two internal admin systems. 200+ commits so far.',
      'Built payment and checkout flows (online payments, coupon validation, request-to-book) where prices and order state have to stay correct end to end.',
      'Moved lead filtering from the browser to the server so paginated queries return only matching records; added role-based access control and CSV export.',
    ],
  },
  {
    term: 'MechMate',
    role: 'Co-founder and software engineer, August 2026 to present',
    link: { label: 'mechmate.in', href: 'https://mechmate.in' },
    points: [
      'Doorstep bike and car repair in Delhi NCR and Assam. Co-built the booking, invoicing and profit-tracking platform on Next.js, PostgreSQL and Cloudflare Workers.',
    ],
  },
];

const EXAMPLES: { term: string; summary: string; links: Link[]; points: string[] }[] = [
  {
    term: 'Modern C++ deep dive',
    summary: 'C++17/20, STL, Valgrind',
    links: [{ label: 'source', href: 'https://github.com/Mriga195/advanced-cpp-journey' }],
    points: [
      'An arena allocator built on placement new, cache-line-aligned buffers with alignas, an RAII file wrapper, and a linked list owned through unique_ptr. Found and fixed a seeded leak with Valgrind.',
      'A fixed-size CircularBuffer<T, N>, compile-time dispatch with SFINAE and if constexpr, variadic fold expressions, and a custom forward iterator that works in range-for.',
      'Benchmarked middle insertion in vector, deque and list at N = 100k, and lookup in map against unordered_map.',
    ],
  },
  {
    term: 'QueueLess',
    summary: 'Canteen pre-order system: Node.js, MongoDB, Razorpay',
    links: [
      { label: 'source', href: 'https://github.com/Mriga195/queueless' },
      { label: 'live', href: 'https://queueless-bywb.onrender.com' },
    ],
    points: [
      'An order state machine (paid, preparing, ready, collected) with three user roles, a 4-digit pickup code, and refunds until preparation starts.',
      'Payment webhooks verified with HMAC signatures; sales reports built on MongoDB aggregation pipelines; integration tests for the order flow.',
    ],
  },
  {
    term: 'LokSamadhan',
    summary: 'Civic issue tracker, hackathon team of four: React, Node.js, MongoDB',
    links: [
      { label: 'source', href: 'https://github.com/Mriga195/loksamadhan' },
      { label: 'live', href: 'https://www.loksamadhan.online/' },
    ],
    points: [
      'Citizens see similar existing reports before filing a duplicate; officers move each issue from submitted to resolved.',
    ],
  },
];

const OPTIONS = [
  ['--lang', 'C++ (17/20), C, JavaScript, Python, SQL'],
  ['--cpp', 'STL, templates, smart pointers, RAII, memory management, iterators, ranges'],
  ['--core', 'Data structures and algorithms, object-oriented design'],
  ['--web', 'React, Next.js, Node.js, Express, PostgreSQL, MongoDB, Prisma'],
  ['--tools', 'Git, Linux, Valgrind, Docker, Cloudflare Workers'],
];

const ACHIEVEMENTS = [
  'IndiaSkills National, top 10 in Web Technologies, representing Assam.',
  'IndiaSkills silver medals: North-East Regional (2025–26) and Assam State, Web Technologies.',
  'Best Coder 2024, Jorhat Engineering College, for competitive programming.',
  '180+ LeetCode problems solved in C++, 110+ of them medium.',
  'Harvard CS50x certificate.',
];

const SEE_ALSO: Link[] = [
  { label: 'resume(pdf)', href: '/resume.pdf' },
  { label: 'github(1)', href: 'https://github.com/Mriga195' },
  { label: 'linkedin(1)', href: 'https://linkedin.com/in/mriganka-mahanta' },
  { label: 'leetcode(1)', href: 'https://leetcode.com/u/Mriganka951/' },
  { label: 'mail(1)', href: 'mailto:mrigank195@gmail.com' },
];

const ext = (href: string) =>
  href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {};

function A({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} {...ext(href)} className="man-link">
      {children}
    </a>
  );
}

function Section({ name, children }: { name: string; children: React.ReactNode }) {
  const id = name.toLowerCase().replace(' ', '-');
  return (
    <section aria-labelledby={id} className="mt-8">
      <h2 id={id} className="font-bold">{name}</h2>
      <div className="man-indent mt-1">{children}</div>
    </section>
  );
}

function Entry({ term, children }: { term: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="mt-4 first:mt-0">
      <h3 className="font-bold">{term}</h3>
      <div className="man-indent">{children}</div>
    </div>
  );
}

function Points({ items }: { items: string[] }) {
  return (
    <ul className="man-list mt-1">
      {items.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </ul>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <main className="man-page mx-auto px-4 py-8 sm:py-14">
        <p className="text-dim">
          <span aria-hidden="true">$ </span>
          <span className="prompt-cmd">man mriganka</span>
        </p>

        <header className="mt-6 flex justify-between gap-4">
          <span>MRIGANKA(1)</span>
          <span className="hidden sm:inline">Engineer&apos;s Manual</span>
          <span className="hidden sm:inline">MRIGANKA(1)</span>
        </header>

        <Section name="NAME">
          <h1 className="name-display">Mriganka Mahanta</h1>
          <p className="mt-2">mriganka, a C++ and systems software engineer in training</p>
        </Section>

        <Section name="SYNOPSIS">
          <p>
            <b>mriganka</b> [<u>--cpp</u>] [<u>--systems</u>] [<u>--dsa</u>] [<u>--full-stack</u>]
          </p>
          <p>
            <b>mriganka --contact</b> <A href="mailto:mrigank195@gmail.com">mrigank195@gmail.com</A>
          </p>
          <p>
            <b>mriganka --resume</b> <A href="/resume.pdf">resume.pdf</A>
          </p>
        </Section>

        <Section name="DESCRIPTION">
          <p>
            Third-year B.Tech student in computer science at Jorhat Engineering College, Assam,
            graduating in 2028. I work as a full-stack engineer at Encamp Adventures and co-founded
            MechMate.
          </p>
          <p className="mt-3">
            My focus now is C++ and systems: how memory is laid out and owned, how threads share
            work, and how Linux runs a program.
          </p>
        </Section>

        <Section name="OPTIONS">
          <dl>
            {OPTIONS.map(([flag, value]) => (
              <div key={flag} className="mt-3 first:mt-0">
                <dt className="font-bold">{flag}</dt>
                <dd className="man-indent">{value}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section name="HISTORY">
          {HISTORY.map((job) => (
            <Entry
              key={job.term}
              term={
                <>
                  {job.term}
                  {job.link && (
                    <span className="font-normal">
                      {' '}(<A href={job.link.href}>{job.link.label}</A>)
                    </span>
                  )}
                </>
              }
            >
              <p className="text-dim">{job.role}</p>
              <Points items={job.points} />
            </Entry>
          ))}
        </Section>

        <Section name="EXAMPLES">
          {EXAMPLES.map((ex) => (
            <Entry
              key={ex.term}
              term={
                <>
                  {ex.term}
                  <span className="font-normal">
                    {' '}(
                    {ex.links.map((l, i) => (
                      <React.Fragment key={l.href}>
                        {i > 0 && ', '}
                        <A href={l.href}>{l.label}</A>
                      </React.Fragment>
                    ))}
                    )
                  </span>
                </>
              }
            >
              <p className="text-dim">{ex.summary}</p>
              <Points items={ex.points} />
            </Entry>
          ))}
        </Section>

        <Section name="ACHIEVEMENTS">
          <Points items={ACHIEVEMENTS} />
        </Section>

        <Section name="BUGS">
          <p>
            Operating systems knowledge is still being written. Currently building an HTTP server in
            C++ from scratch, with a hand-written thread pool, to learn sockets and concurrency.
          </p>
        </Section>

        <Section name="SEE ALSO">
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            {SEE_ALSO.map((l) => (
              <A key={l.href} href={l.href}>
                {l.label}
              </A>
            ))}
          </p>
        </Section>

        <footer className="mt-12 flex justify-between gap-4">
          <span>Jorhat, Assam</span>
          <span className="hidden sm:inline">2026</span>
          <span>MRIGANKA(1)</span>
        </footer>
      </main>
    </div>
  );
}
