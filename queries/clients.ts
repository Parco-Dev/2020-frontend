import type { KirbyQuerySchema } from 'kirby-fest'
import { imageQuery } from './image'

export const clientsQuery: KirbyQuerySchema = {
  query: 'page("clients")',
  select: {
    title: true,
    id: true,
    intendedTemplate: true,
    clientstext: 'page?.clientstext?.kirbytext',
    clients: {
      query: 'page.clients.toStructure',
      select: {
        clientslogo: {
          query: 'structureItem.clientslogo.toFiles.first',
          select: ['url', 'alt'],
        },
        clientslink: true
      },
    },
  },
}
