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
      },
      casecontentblocksimage: {
        query: "page.casecontentblocks.toBlocks.filterBy('type','imageblock')",
        select: {
          image: {
            query: 'block.content.image.toFiles.first',
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
