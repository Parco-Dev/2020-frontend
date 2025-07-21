import { homeQuery } from '~/queries'

// composables/useHomePage.ts
const cachedHomeData = ref<any | null>(null)

export const useHomePage = () => {
  if (!cachedHomeData.value) {
    const { queryApi, queryParams } = useQueryParams(homeQuery)
    const { data } = useFetch(queryApi, {
      ...queryParams,
      server: false, // only on client if needed
      lazy: true,    // only fetch when needed
    })
    watch(data, () => {
      cachedHomeData.value = data.value?.result || null
    })
  }
  return cachedHomeData
}
