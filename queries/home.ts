import type { KirbyQuerySchema } from 'kirby-fest'
import { imageQuery } from './image'

export const homeQuery: KirbyQuerySchema = {
  query: 'page("home")',
  select: {
    title: true,
    id: true,
    isListed: true,
    intendedTemplate: true,
    homeabouttext: 'page.homeabouttext',
    homeaboutimage: {
      query: 'page.homeaboutimage.toFiles.first',
      select: ['url', 'alt'],
    },
    homeexperience: true,
    homeculturetitle: true,
    homeculturetext: true,
    homeplacetitle: true,
    homeplacetext: true,
    hometechnologytitle: true,
    hometechnologytext: true,
    homelatestcasestitle: true,
    homelatestcases: {
      query: 'page.homelatestcases.toStructure',
      select: {
        columns: true,
        case: {
          query: 'structureItem.case.toPages',
          select: {
            id: true,
            url: 'page.slug',
            title: true,
            excerpt: true,
            casethumbnail: {
              query: 'page.casethumbnail.toFiles.first',
              select: ['url', 'alt'],
            },
            casesubtitle: true,
          },
        },
      },
    },
    homelatestcaseslink: true,
    homelatestcaseslinktext: true,
    homeoutcomes: true,
    homeoutcomeslinks: {
      query: 'page.homeoutcomeslinks.toStructure',
      select: {
        homeoutcomeslinkslink: true,
        homeoutcomeslinkstext: true,
      },
    },
    homeoutcomeslink: true,
    homeoutcomeslinktext: true,
    homeclientstitle: true,
    homeclientstext: true,
    homeclients: {
      query: 'page.homeclients.toStructure',
      select: {
        homeclientslogo: {
          query: 'structureItem.homeclientslogo.toFiles.first',
          select: ['url', 'alt'],
        },
        homeclientsname: true,
        homeclientsdescription: true,
      },
    },
    homeclientslink: true,
    homeclientslinktext: true,
    hometeamtext: true,
    hometeamimage: {
      query: 'page.hometeamimage.toFiles.first',
      select: ['url', 'alt'],
    },
    hometeamlink: true,
    hometeamlinktext: true,
    homenewsletter: true,
  },
}
