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
    homeaboutlink: 'page.homeaboutlink',
    homeaboutlinktext: 'page.homeaboutlinktext',
    homeaboutimage: {
      query: "page.homeaboutimage.toFiles.first",
      select: imageQuery,
    },
    homeexperience: 'page.homeexperience',
    homeculturetitle: 'page.homeculturetitle',
    homeculturetext: 'page.homeculturetext',
    homeplacetitle: 'page.homeplacetitle',
    homeplacetext: 'page.homeplacetext',
    hometechnologytitle: 'page.hometechnologytitle',
    hometechnologytext: 'page.hometechnologytext',
    homecasestitle: 'page.hometechnologytitle',
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
            casemainimage: {
              query: "page.casemainimage.toFiles.first",
              select: imageQuery,
            },
          }
        }
      },
    },
    homelatestcaseslink: 'page.homelatestcaseslink',
    homelatestcaseslinktext: 'page.homelatestcaseslinktext',
    homeoutcomes: 'page.homeoutcomes.kirbytext',
    homeoutcomeslinks: {
      query: 'page.homeoutcomeslinks.toStructure',
      select: {
        id: true,
        homeoutcomeslinkslink: 'page.homeoutcomeslinkslink',
        homeoutcomeslinkstext: 'page.homeoutcomeslinkstext',
      }
    },
    homeoutcomeslink: 'page.homeoutcomeslink',
    homeoutcomeslinktext: 'page.homeoutcomeslinktext',
    homeclientstitle: 'page.homeclientstitle',
    homeclientstext: 'page.homeclientstext.kirbytext',
    homeclients: {
      query: 'page.homeclients.toStructure',
      select: {
        id: true,
        homeclientslogo: {
          query: "structureItem.homeclientslogo.toFiles.first",
          select: imageQuery,
        },
        homeclientsname: 'structureItem.homeclientstitle',
        homeclientstext: 'structureItem.homeclientstext.kirbytext',
      }
    },
    homeclientslink: 'page.homeclientslink',
    homeclientslinktext: 'page.homeclientslinktext',
    hometeamtext: 'page.hometeamtext.kirbytext',
    hometeamimage: {
      query: "page.hometeamimage.toFiles.first",
      select: imageQuery,
    },
    hometeamlink: 'page.hometeamlink',
    hometeamlinktext: 'page.hometeamlinktext',
    homenewsletter: 'page.homenewsletter',
  }
}