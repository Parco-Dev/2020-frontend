import type { KirbyQuerySchema } from 'kirby-fest'
import { imageQuery } from './image'

export const contactQuery: KirbyQuerySchema = {
  query: 'page("contact")',
  select: {
    title: true,
    id: true,
    isListed: true,
    intendedTemplate: true,
    contactlosangeles: 'page.contactlosangeles.kirbytext',
    contactdubai: 'page.contactdubai.kirbytext',
    contactemail: 'page.contactemail.kirbytext',
    contactsocial: 'page.contactsocial.kirbytext',
  }
}