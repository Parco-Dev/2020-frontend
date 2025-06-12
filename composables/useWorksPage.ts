import { worksQuery } from '~/queries'

const cachedWorksData = ref<any | null>(null)

export const useWorksPage = async () => {
  if (!cachedWorksData.value) {
    const { queryApi, queryParams } = useQueryParams(worksQuery)
    const { data } = await useFetch(queryApi, queryParams)
    cachedWorksData.value = (data.value as any)?.result;
  }

  return cachedWorksData
}