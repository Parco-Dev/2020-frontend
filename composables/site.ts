import type { KirbySite } from '#build/kql'
import { siteQuery } from '~/queries'

/**
 * Access the global site context, similar to Kirby's `$site` global variable
 */
export function useSite() {
  return useState<Partial<KirbySite>>('app.site', () => ({}))
}

export function useHomepage() {
  const site = useSite().value
  return site.children.find((p: any) => p.id === 'home')
}


// This useSiteData function is a test
const cachedSiteData = ref<any | null>(null)

export const useSiteData = async () => {
  if (!cachedSiteData.value) {
    const { queryApi, queryParams } = useQueryParams(siteQuery)
    const { data } = await useFetch(queryApi, queryParams)
    cachedSiteData.value = (data.value as any)?.result;
  }

  return cachedSiteData
}

