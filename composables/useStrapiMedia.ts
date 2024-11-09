/**
 * A composable function to construct and return the full URL for media files
 * hosted on a Strapi server. Ensures that media URLs are correctly formatted.
 *
 * @param {string} url - The relative URL or path of the media file from Strapi.
 * @returns {string} - The full URL of the media file.
 */
export function useStrapiMedia(url: string) {
  const config = useRuntimeConfig();

  const getMediaUrl = (path: string) => {
    return path.startsWith("/")
      ? `${config.public.strapi.url}${path}`
      : `${config.public.strapi.url}/${path}`;
  };

  return getMediaUrl(url);
}
