import type { KirbyQuerySchema } from 'kirby-fest'
import { imageQuery } from './image'

export const contactQuery: KirbyQuerySchema = {
  query: 'page("contact")',
  select: {
    title: true,
    id: true,
    isListed: true,
    intendedTemplate: true,
    contactlosangeles: true,
    contactdubai: true,
    contactemail: true,
    contactsocial: 'page.contactsocial.kirbytext',
  }
}