import type { KirbyQuerySchema } from 'kirby-fest'
import { imageQuery } from './image'

export function getCaseQuery(pageId: string): KirbyQuerySchema {
  return {
    query: `page("${pageId}")`,
    select: {
      url: true,
      id: true,
      title: true,
      casesubtitle: 'page.casesubtitle.kirbytext',
      caselocation: 'page.caselocation.kirbytext',
      caseyear: 'page.caseyear',
      caseclient: 'page.caseclient.kirbytext',
      casecollaborators: 'page.casecollaborators.kirbytext',
      caseservices: 'page.caseservices.kirbytext',
      casethumbnail: {
        query: 'page.casethumbnail.toFiles.first',
        select: imageQuery,
      },
      casemainimage: {
        query: 'page.casemainimage.toFiles.first',
        select: imageQuery,
      },
      casecontentblocks: {
        query: 'page.casecontentblocks.toBlocks',
        select: {
          id: true,
          type: true,
          blocktitle: 'block.content.blocktitle',
          paragraph: 'block.content.paragraph.kirbytext',
          paragraphleft: 'block.content.paragraphleft',
          paragraphright: 'block.content.paragraphright',
          image: {
            query: 'block.content.image.toFiles.first',
            select: imageQuery,
          },
          caption: 'block.content.caption',
          imagesblockimages:{
            query:  'block.content.imagesblockimages.toStructure',
            select: {
              imagesblockimagescaption: true,
              imagesblockimagesimage: {
                query: 'structureItem.imagesblockimagesimage.toFiles.first',
                select: imageQuery,
              },
            }
          },
          imageleft: {
            query: 'block.content.imageleft.toFiles.first',
            select: imageQuery,
          },
          captionleft: 'block.content.captionleft',
          imageright: {
            query: 'block.content.imageright.toFiles.first',
            select: imageQuery,
          },
          captionright: 'block.content.captionright',
        }
      },
      casesrelated: {
        query: 'page.casesrelated.toStructure',
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
                select: imageQuery,
              },
              casesubtitle: true,
            },
          },
        },
      },
    },
  }
}

export function getProjectNavigationQuery(projectId: string): KirbyQuerySchema {
  return {
    query: `page("cases/${projectId}").siblings(true).visible()`,
    select: {
      id: true,
      title: true,
      url: 'page.slug',
    },
  }
}
