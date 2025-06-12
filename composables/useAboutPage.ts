import { aboutQuery } from '~/queries'

const cachedAboutData = ref<any | null>(null)

export const useAboutPage = async () => {
  if (!cachedAboutData.value) {
    const { queryApi, queryParams } = useQueryParams(aboutQuery)
    const { data } = await useFetch(queryApi, queryParams)
    cachedAboutData.value = (data.value as any)?.result;
  }

  return cachedAboutData
}