import type { KirbyQuerySchema } from 'kirby-fest';
import { imageQuery } from './image'

export const siteQuery: KirbyQuerySchema = {
  query: 'site',
  select: {
    title: true,
    sitelogo: {
      query: "page.sitelogo.toFiles.first",
      select: [ 'url', 'alt' ],
    },
    shortbio: 'page.shortbio.kirbytext',
    social: {
      query: 'page.social.toStructure',
      select: {
        id: true,
        url: 'structureItem.url',
        name: 'structureItem.name',
      }
    },
    copyright: 'page.copyright.kirbytext',
    sitetitle: 'page.sitetitle.kirbytext',
    address: 'page.address.kirbytext',
    footeremail: 'page.footeremail.kirbytext',
    privacycookies: 'page.privacycookies.kirbytext',
  },
};
