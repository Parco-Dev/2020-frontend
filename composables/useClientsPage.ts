import { clientsQuery } from '~/queries'

const cachedClientsData = ref<any | null>(null)

export const useClientsPage = async () => {
  if (!cachedClientsData.value) {
    const { queryApi, queryParams } = useQueryParams(clientsQuery)
    const { data } = await useFetch(queryApi, queryParams)
    cachedClientsData.value = (data.value as any)?.result;
  }

  return cachedClientsData
}