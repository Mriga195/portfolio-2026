'use client';
import React, { useState } from 'react';
import { Terminal, Trophy, Medal, Award, GraduationCap, FolderOpen, ExternalLink, Code2, MapPin, Mail } from 'lucide-react';

/* Inline SVG icons for GitHub and LinkedIn */
const GithubIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const PROJECTS = [
  {
    name: 'mechmate',
    description: 'Co-founder. Doorstep bike and car repair service in Delhi NCR and Assam. Co-built the platform: booking flow, reviews, invoicing and an admin dashboard for profit and expenses. Next.js, Prisma, Neon PostgreSQL, deployed on Cloudflare Workers.',
    tech: 'JavaScript',
    techColor: '#f1e05a',
    badge: 'Startup',
    link: 'https://mechmate.in',
    live: 'https://mechmate.in'
  },
  {
    name: 'queueless',
    description: 'Canteen pre-order and pickup system. Students pay ahead and collect with a 4-digit code; staff work a live order queue. Razorpay payments with a signed webhook, 3 roles, MongoDB aggregation sales reports, integration tests.',
    tech: 'JavaScript',
    techColor: '#f1e05a',
    stars: '0',
    link: 'https://github.com/Mriga195/queueless',
    live: 'https://queueless-bywb.onrender.com'
  },
  {
    name: 'loksamadhan',
    description: 'Hackathon team project. Citizens report civic issues and see similar existing reports before filing a duplicate; officers move each issue from Submitted to Resolved. React, Node.js, Express, MongoDB.',
    tech: 'JavaScript',
    techColor: '#f1e05a',
    stars: '0',
    link: 'https://github.com/Mriga195/loksamadhan',
    live: 'https://www.loksamadhan.online/'
  },
  {
    name: 'advanced-cpp-journey',
    description: 'Working through advanced C++: pointer arithmetic, smart pointers, move semantics, templates, SFINAE and the STL, with one hands-on exercise per concept.',
    tech: 'C++',
    techColor: '#f34b7d',
    stars: '4',
    link: 'https://github.com/Mriga195/advanced-cpp-journey'
  }
];

const ACHIEVEMENTS = [
  {
    icon: <Trophy className="w-5 h-5 text-yellow-500" />,
    title: 'National Top 10, Web Technologies',
    org: 'IndiaSkills National',
    date: '2025'
  },
  {
    icon: <Medal className="w-5 h-5 text-gray-400" />,
    title: 'Silver Medalist (North-East & Assam)',
    org: 'IndiaSkills Regional',
    date: '2025'
  },
  {
    icon: <Award className="w-5 h-5 text-blue-400" />,
    title: 'Harvard CS50x Certificate',
    org: 'Harvard University',
    date: '2024'
  },
  {
    icon: <Trophy className="w-5 h-5 text-yellow-500" />,
    title: 'Best Coder Award',
    org: 'Jorhat Engineering College',
    date: '2024'
  }
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="min-h-screen bg-background text-text-main font-body flex flex-col">
      {/* GitHub-style Top Nav */}
      <nav className="bg-surface border-b border-border py-3 px-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <GithubIcon className="w-8 h-8 text-text-main" />
          <div className="font-code text-sm font-semibold hidden md:block">
            mriganka / portfolio
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-background border border-border rounded-md px-2 py-1">
            <span className="text-text-muted text-xs">/</span>
            <input
              type="text"
              placeholder="Search or jump to..."
              className="bg-transparent border-none text-sm text-text-main ml-2 w-64 focus:outline-none"
              disabled
            />
          </div>
          <a href="https://github.com/Mriga195" target="_blank" rel="noopener noreferrer" className="text-text-main hover:text-primary" aria-label="Visit Mriganka Mahanta's GitHub Profile">
            <GithubIcon className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/mriganka-mahanta" target="_blank" rel="noopener noreferrer" className="text-text-main hover:text-primary" aria-label="Visit Mriganka Mahanta's LinkedIn Profile">
            <LinkedinIcon className="w-5 h-5" />
          </a>
        </div>
      </nav>

      {/* Main Layout */}
      <div className="max-w-[1280px] w-full mx-auto px-4 md:px-8 py-8 flex flex-col md:flex-row gap-8">

        {/* Left Sidebar (Profile) */}
        <aside className="w-full md:w-1/4 flex-shrink-0 flex flex-col gap-6">
          <div className="flex flex-col items-start gap-4 md:gap-0">
            <div className="hidden md:flex md:w-full md:h-auto md:aspect-square rounded-full border border-border overflow-hidden mb-4 bg-surface items-center justify-center">
              <Terminal className="md:w-32 md:h-32 text-text-muted" />
            </div>
            <div className="flex flex-col w-full">
              <h1 className="text-2xl font-bold font-code text-text-main leading-tight">Mriganka Mahanta</h1>
              <p className="text-xl font-light text-text-muted mb-2 md:mb-4">Mriga195</p>

              <div className="text-text-main text-sm mb-4 leading-relaxed">
                Full-stack developer and co-founder of MechMate. IndiaSkills National Top 10 in Web Technologies.
              </div>

              <div className="flex flex-col gap-1 text-sm text-text-main mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-text-muted" />
                  <span>Jorhat, Assam, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-text-muted" />
                  <a href="mailto:mrigank195@gmail.com" className="hover:text-primary">mrigank195@gmail.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-text-muted" />
                  <a href="https://leetcode.com/u/Mriganka951/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">leetcode.com/u/Mriganka951</a>
                </div>
                <div className="flex items-center gap-2 mt-2 pt-2 border-t border-border">
                  <FolderOpen className="w-4 h-4 text-text-muted" aria-hidden="true" />
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary font-bold">View My Resume</a>
                </div>
              </div>

              <a href="mailto:mrigank195@gmail.com" className="w-full block bg-[#21262d] hover:bg-[#30363d] border border-border text-center py-1.5 rounded-md text-sm font-medium transition-colors">
                Contact Me
              </a>
            </div>
          </div>
        </aside>

        {/* Right Content Area */}
        <main className="w-full md:w-3/4 flex flex-col gap-6">
          {/* Tabs */}
          <div className="flex gap-4 border-b border-border overflow-x-auto hide-scrollbar">
            {['Overview', 'Repositories', 'Achievements', 'Tech Stack'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-2 px-4 py-2 border-b-2 text-sm font-medium whitespace-nowrap transition-colors ${activeTab === tab
                    ? 'border-[#f78166] text-text-main'
                    : 'border-transparent text-text-muted hover:text-text-main hover:border-border'
                  }`}
              >
                {tab === 'Overview' && <FolderOpen className="w-4 h-4" />}
                {tab === 'Repositories' && <FolderOpen className="w-4 h-4" />}
                {tab === 'Achievements' && <Trophy className="w-4 h-4" />}
                {tab === 'Tech Stack' && <Code2 className="w-4 h-4" />}
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 'Overview' && (
            <div className="animate-in fade-in duration-300">
              <div className="w-full border border-border rounded-md bg-surface mb-6">
                <div className="bg-[#1c2128] border-b border-border px-4 py-2 font-code text-sm flex items-center justify-between">
                  <span>Mriganka/README.md</span>
                </div>
                <div className="p-4 md:p-8 overflow-hidden w-full max-w-full">
                  <div className="font-code text-success text-[6px] sm:text-[10px] md:text-xs whitespace-pre overflow-x-auto select-all leading-tight mb-6 max-w-full pb-4">
{` __  __ ____  ___ ____    _    _   _ _  __    _    
|  \\/  |  _ \\|_ _/ ___|  / \\  | \\ | | |/ /   / \\   
| |\\/| | |_) || | |  _  / _ \\ |  \\| | ' /   / _ \\  
| |  | |  _ < | | |_| |/ ___ \\| |\\  | . \\  / ___ \\ 
|_|  |_|_| \\_\\___|____/_/   \\_\\_| \\_|_|\\_\\_/   \\_\\

 __  __    _    _   _    _    _   _ _____  _    
|  \\/  |  / \\  | | | |  / \\  | \\ | |_   _|/ \\   
| |\\/| | / _ \\ | |_| | / _ \\ |  \\| | | | / _ \\  
| |  | |/ ___ \\|  _  |/ ___ \\| |\\  | | |/ ___ \\ 
|_|  |_/_/   \\_\\_| |_/_/   \\_\\_| \\_| |_/_/   \\_\\`}
                  </div>
                  <h2 className="text-xl md:text-2xl font-semibold border-b border-border pb-2 mb-4">
                    Hi there, I&apos;m Mriganka
                  </h2>
                  <p className="text-sm md:text-base text-text-main leading-relaxed mb-4">
                    I&apos;m a B.Tech student at Jorhat Engineering College (Class of 2028). I build full-stack web apps and solve algorithm problems in C++.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-text-main text-sm md:text-base ml-2">
                    <li>Full-stack engineer at Encamp Adventures since June 2026, building their travel booking site and admin dashboards</li>
                    <li>Co-founder of <a href="https://mechmate.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">MechMate</a>, a doorstep bike and car repair service in Delhi NCR and Assam. I co-built its Next.js platform</li>
                    <li>Built <a href="https://github.com/Mriga195/queueless" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">QueueLess</a>, a canteen pre-order system with Razorpay payments</li>
                    <li>180+ LeetCode problems solved in C++</li>
                    <li>Ranked Top 10 nationally in Web Technologies at IndiaSkills</li>
                    <li>How to reach me: <strong>mrigank195@gmail.com</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Repositories' && (
            <div className="animate-in fade-in duration-300">
              <div className="border border-border rounded-md bg-surface divide-y divide-border">
                {PROJECTS.map(repo => (
                  <div key={repo.name} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-[#1c2128] transition-colors">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <a href={repo.link} target="_blank" rel="noopener noreferrer" className="text-primary font-code text-lg font-semibold hover:underline">
                          {repo.name}
                        </a>
                        <span className="border border-border rounded-full px-2 py-0.5 text-xs text-text-muted">{repo.badge ?? 'Public'}</span>
                      </div>
                      <p className="text-sm text-text-muted mb-2 max-w-2xl">{repo.description}</p>
                      <div className="flex items-center gap-4 text-xs text-text-muted">
                        <div className="flex items-center gap-1.5">
                          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: repo.techColor }}></span>
                          <span>{repo.tech}</span>
                        </div>
                        {repo.live && (
                          <a href={repo.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary">
                            <ExternalLink className="w-3 h-3" />
                            <span>Live</span>
                          </a>
                        )}
                        {repo.stars && <div className="flex items-center gap-1 hover:text-primary cursor-pointer">
                          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" className="fill-current"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path></svg>
                          <span>{repo.stars}</span>
                        </div>}
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-0 flex flex-col items-end gap-2">
                      <button className="bg-[#21262d] hover:bg-[#30363d] border border-border px-3 py-1 rounded-md text-xs font-medium flex items-center gap-1">
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" className="fill-current text-text-muted"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path></svg>
                        Star
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'Achievements' && (
            <div className="animate-in fade-in duration-300 relative border-l border-border ml-3 pl-6 pb-6 mt-4">
              <div className="absolute top-0 left-0 w-3 h-3 rounded-full bg-background border-2 border-border -translate-x-[6.5px]"></div>

              <div className="flex flex-col gap-6">
                {ACHIEVEMENTS.map((item, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-success border-[3px] border-background"></div>
                    <div className="border border-border rounded-md bg-surface p-4">
                      <div className="flex items-center gap-2 mb-2">
                        {item.icon}
                        <h4 className="text-text-main font-semibold text-lg">{item.title}</h4>
                      </div>
                      <div className="text-text-muted text-sm flex items-center justify-between">
                        <span>{item.org}</span>
                        <span className="font-code text-xs bg-[#21262d] border border-border px-2 py-0.5 rounded">{item.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'Tech Stack' && (
            <div className="animate-in fade-in duration-300">
              <div className="border border-border rounded-md bg-surface p-6 font-code text-sm">
                <div className="flex gap-2 items-center mb-4 text-text-muted">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
                  <span className="ml-2 font-body text-xs">bash - neofetch</span>
                </div>
                <div className="text-text-main">
                  <span className="text-success font-semibold">mriganka@portfolio</span>:~$ neofetch
                </div>
                <div className="mt-6 flex flex-col lg:flex-row gap-8 items-start">
                  <div className="text-[#35bf5c] font-bold leading-[1.1] hidden sm:block whitespace-pre select-none text-[10px] md:text-xs">
                    {`██████████████████  ████████
██████████████████  ████████
██████████████████  ████████
████████            ████████
████████  ████████  ████████
████████  ████████  ████████
████████  ████████  ████████
████████  ████████  ████████
████████  ████████  ████████
████████  ████████  ████████
████████  ████████  ████████
████████  ████████  ████████
████████  ████████  ████████
████████  ████████  ████████`}
                  </div>
                  <div className="flex-grow text-xs sm:text-sm">
                    <div className="text-[#35bf5c] font-bold">mriganka<span className="text-text-main">@</span>portfolio</div>
                    <div className="text-text-muted mb-4">------------------</div>
                    <div className="grid grid-cols-[90px_1fr] sm:grid-cols-[120px_1fr] gap-y-3">
                      <span className="text-[#35bf5c] font-bold">Languages</span>
                      <span className="text-text-main">JavaScript, TypeScript, C++, Python, SQL, HTML5</span>

                      <span className="text-[#35bf5c] font-bold">Frontend</span>
                      <span className="text-text-main">React, Next.js, CSS3, Tailwind CSS</span>

                      <span className="text-[#35bf5c] font-bold">Backend</span>
                      <span className="text-text-main">Node.js, Express, Prisma, Qt</span>

                      <span className="text-[#35bf5c] font-bold">Databases</span>
                      <span className="text-text-main">MongoDB, PostgreSQL</span>

                      <span className="text-[#35bf5c] font-bold">Tools</span>
                      <span className="text-text-main">Git, Docker, Linux, Cloudflare Workers, Render</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>

      <footer className="border-t border-border mt-auto py-8">
        <div className="max-w-[1280px] mx-auto px-4 flex items-center justify-center gap-2 text-xs text-text-muted">
          <GithubIcon className="w-4 h-4" />
          <span>© 2026 Mriganka Mahanta. Styled like GitHub.</span>
        </div>
      </footer>
    </div>
  );
}
