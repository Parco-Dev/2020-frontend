import { contactQuery } from '~/queries'

const cachedContactData = ref<any | null>(null)

export const useContactPage = async () => {
  if (!cachedContactData.value) {
    const { queryApi, queryParams } = useQueryParams(contactQuery)
    const { data } = await useFetch(queryApi, queryParams)
    cachedContactData.value = (data.value as any)?.result;
  }

  return cachedContactData
}