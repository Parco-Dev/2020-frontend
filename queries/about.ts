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
    aboutfocusareastext: true,
    aboutfocusareas: {
      query: 'page.aboutfocusareas.toStructure',
      select: {
        focusareaname: true,
        focusareabigtext: true,
        focusarealefttext: true,
        focusarearighttext: true,
      },
    },
    aboutstrengthstext: true,
    aboutstrengthsbigtext: true,
    aboutstrengthsslider: {
      query: 'page.aboutstrengthsslider.toStructure',
      select: {
        aboutstrengthsslidercaption: true,
        aboutstrengthssliderimage: {
          query: 'structureItem.aboutstrengthssliderimage.toFiles.first',
          select: ['url', 'alt'],
        },
      },
    },
    aboutmethodologytext: true,
    aboutmethodology: {
      query: 'page.aboutmethodology.toStructure',
      select: {
        methodologyname: true,
        methodologybigtext: true,
        methodologysections: {
          query: 'structureItem.methodologysections.toStructure',
          select: {
            methodologysectionslefttext: true,
            methodologysectionsrighttext: true,
          },
        },
      },
    },
    aboutteamtext: true,
    aboutteamgroups: {
      query: 'page.aboutteamgroups.toStructure',
      select: {
        aboutteamgroupname: true,
        aboutteamgrouppeople: {
          query: 'structureItem.aboutteamgrouppeople.toStructure',
          select: {
            aboutteamgrouppeopleimage: {
              query: 'structureItem.aboutteamgrouppeopleimage.toFiles.first',
              select: ['url', 'alt'],
            },
            aboutteamgrouppeoplename: true,
            aboutteamgrouppeoplerole: true,
          },
        },
      },
    },
    aboutnetworktext: true,
    aboutnetworklist: {
      query: 'page.aboutnetworklist.toStructure',
      select: {
        aboutnetworklistlink: true,
        aboutnetworklistlinktext: true,
      },
    },
    aboutnetworklink: true,
    aboutnetworklinktext: true,
  },
}
