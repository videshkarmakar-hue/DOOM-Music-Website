export interface DeveloperLink {
  id: 'website' | 'spotify' | 'instagram' | 'youtube' | 'facebook';
  label: string;
  handle: string;
  url: string;
}

export const APP_INFO = {
  brand: 'DOOM',
  brandSuffix: '- Music',
  version: 'v8.4.2-b1270',
  architecture: 'arm64',
  fileName: 'Doom-Music-arm64-debug-b1270.apk',
  apkUrl:
    'https://github.com/videshkarmakar-hue/Doom-Music/releases/download/v8.4.2-b1270/Doom-Music-arm64-debug-b1270.apk',
  taglinePrimary:
    'One of Best Alternative for Spotify & YouTube Music Streaming',
  taglineSecondary: 'This app Best & Optimization for Low end devices',
} as const;

export const DEVELOPER_INFO = {
  name: 'VIDESH KARMAKAR',
  role: 'Creator & Android Developer',
  creditLine: 'Crafted by VIDESH KARMAKAR',
  imageUrl:
    'https://cdn.phototourl.com/member/2026-09-24-d3b8ff6f-f0d4-43e0-9082-9f39cc851774.png',
  links: [
    {
      id: 'website',
      label: 'Website',
      handle: 'videshkarmakarlive.vercel.app',
      url: 'https://videshkarmakarlive.vercel.app/',
    },
    {
      id: 'spotify',
      label: 'Spotify',
      handle: 'Artist Profile',
      url: 'https://open.spotify.com/artist/2eJEzi0mzJB60zVJf0OjWP',
    },
    {
      id: 'instagram',
      label: 'Instagram',
      handle: '@code.red_videsh',
      url: 'https://www.instagram.com/code.red_videsh/',
    },
    {
      id: 'youtube',
      label: 'YouTube',
      handle: '@videshkarmakar2000',
      url: 'https://www.youtube.com/@videshkarmakar2000',
    },
    {
      id: 'facebook',
      label: 'Facebook',
      handle: 'gfx.videsh',
      url: 'https://www.facebook.com/gfx.videsh',
    },
  ] satisfies DeveloperLink[],
} as const;
