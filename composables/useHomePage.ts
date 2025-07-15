import { homeQuery } from '~/queries'

const cachedHomeData = ref<any | null>(null)

export const useHomePage = async () => {

  if (!cachedHomeData.value) {
    const { queryApi, queryParams } = useQueryParams(homeQuery)
    const { data } = await useFetch(queryApi, queryParams)

    cachedHomeData.value = (data.value as any)?.result;
  }

  return cachedHomeData
}