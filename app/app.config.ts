export default defineAppConfig({
  title: 'Sink',
  email: 'shenyefan@syf.sh',
  twitter: 'https://sink.cool/x',
  telegram: 'https://sink.cool/telegram',
  description: 'Meow',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
