import type { KirbyQuerySchema } from 'kirby-fest'
import { imageQuery } from './image'

export const contactQuery: KirbyQuerySchema = {
  query: 'page("contact")',
  select: {
    title: true,
    id: true,
    isListed: true,
    intendedTemplate: true,
    contactgeneral: 'page?.contactgeneral?.kirbytext',
    contactlosangeles: 'page?.contactlosangeles?.kirbytext',
    contactdubai: 'page?.contactdubai?.kirbytext',
    contactsydney: 'page?.contactsydney?.kirbytext',
  },
}
