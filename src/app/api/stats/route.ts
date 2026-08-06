import { NextResponse } from 'next/server';
import FirecrawlApp from '@mendable/firecrawl-js';

// Cache the response for 1 hour
export const revalidate = 3600;

export async function GET() {
  const apiKey = process.env.FIRECRAWL_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Missing Firecrawl API Key' }, { status: 500 });
  }

  const app = new FirecrawlApp({ apiKey });

  try {
    const leetcodeRes = await app.scrapeUrl('https://leetcode.com/u/Mriganka951/', {
      formats: ['markdown'],
    });
    const githubRes = await app.scrapeUrl('https://github.com/Mriga195', {
      formats: ['markdown'],
    });

    // Handle Firecrawl ScrapeResponse union type correctly
    const lcMarkdown = typeof leetcodeRes === 'object' && 'markdown' in leetcodeRes ? leetcodeRes.markdown || '' : '';
    const ghMarkdown = typeof githubRes === 'object' && 'markdown' in githubRes ? githubRes.markdown || '' : '';

    // Extract LeetCode data
    const lcSolvedMatch = lcMarkdown.match(/(\d+)\s*problems solved/i) || lcMarkdown.match(/(\d+)\/\d+\s*Solved/i);
    const lcSolved = lcSolvedMatch ? lcSolvedMatch[1] : '172';

    const lcRankMatch = lcMarkdown.match(/Rank\s*([\d,]+)/i) || lcMarkdown.match(/Global Ranking[\s\S]*?([\d,]+)/i);
    const lcRank = lcRankMatch ? lcRankMatch[1] : '973,834';

    // Extract GitHub data
    const ghFollowersMatch = ghMarkdown.match(/(\d+)\\?\s*followers/i);
    const ghFollowers = ghFollowersMatch ? ghFollowersMatch[1] : '15';

    const ghPinnedMatch = ghMarkdown.match(/1\.\s*\[(.*?)\]/);
    const ghPinned = ghPinnedMatch ? ghPinnedMatch[1] : 'advanced-cpp-journey';

    return NextResponse.json({
      leetcode: { solved: lcSolved, rank: lcRank },
      github: { followers: ghFollowers, pinned: ghPinned }
    });
  } catch (error) {
    console.error('Firecrawl Error:', error);
    return NextResponse.json({ error: 'Failed to fetch live stats' }, { status: 500 });
  }
}
