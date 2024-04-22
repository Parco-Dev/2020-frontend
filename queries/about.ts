import type { KirbyQuerySchema } from 'kirby-fest'
import { imageQuery } from './image'

export const aboutQuery: KirbyQuerySchema = {
  query: 'page("about")',
  select: {
    title: true,
    id: true,
    isListed: true,
    intendedTemplate: true,
    aboutmaintext: 'page.aboutmaintext',
  }
}