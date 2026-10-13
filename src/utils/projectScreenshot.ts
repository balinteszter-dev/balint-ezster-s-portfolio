export function projectScreenshot(siteUrl: string, crop = true): string {
  const normalized = siteUrl.replace(/\/$/, '')
  const size = crop ? 'width/800/crop/600' : 'width/800'
  return `https://image.thum.io/get/${size}/noanimate/${normalized}`
}
