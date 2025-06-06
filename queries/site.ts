import type { KirbyQuerySchema } from 'kirby-fest'
import { imageQuery } from './image'

export const siteQuery: KirbyQuerySchema = {
  query: 'site',
  select: {
    title: true,
    sitelogo: {
      query: 'site.sitelogo.toFiles.first',
      select: ['url', 'alt'],
    },
    shortbio: true,
    social: {
      query: 'site.social.toStructure',
      select: {
        url: true,
        name: true,
      },
    },
    copyright: true,
    sitetitle: true,
    address: true,
    footeremail: true,
    privacycookies: 'site?.privacycookies?.kirbytext',
  },
}
