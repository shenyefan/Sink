export default defineAppConfig({
  title: 'Sink',
  email: 'shenyefan0793@gmail.com',
  github: 'https://github.com/shenyefan',
  // twitter: 'https://sink.cool/kai',
  // telegram: 'https://sink.cool/telegram',
  // mastodon: 'https://sink.cool/mastodon',
  blog: 'https://moenya.net',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
