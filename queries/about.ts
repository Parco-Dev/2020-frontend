import type { KirbyQuerySchema } from 'kirby-fest'
import { imageQuery } from './image'

export const aboutQuery: KirbyQuerySchema = {
  query: 'page("about")',
  select: {
    title: true,
    id: true,
    isListed: true,
    intendedTemplate: true,
    aboutmaintext: true,
    abouttext: true,
    aboutapproachtitle: true,
    aboutapproachtext: true,
    aboutapproach: {
      query: 'page.aboutapproach.toStructure',
      select: {
        aboutapproachword: true,
        aboutapproachtexttop: true,
        aboutapproachicon: {
          query: 'structureItem.aboutapproachicon.toFiles.first',
          select: ['url', 'alt'],
        },
        aboutapproachtextbottom: true,
      },
    },
    aboutteamtitle: true,
    aboutteamtext: true,
    aboutteampeople: {
      query: 'page.aboutteampeople.toStructure',
      select: {
        aboutteampeopleimage: {
          query: 'structureItem.aboutteampeopleimage.toFiles.first',
          select: ['url', 'alt'],
        },
        aboutteampeoplename: true,
        aboutteampeoplerole: true,
        aboutteampeoplecontact: true,
        aboutteampeoplebio: true,
      },
    },
  },
}
