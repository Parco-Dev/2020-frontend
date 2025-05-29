import type { KirbyQuerySchema } from 'kirby-fest'
import { imageQuery } from './image'

export function getWorkQuery(pageId: string): KirbyQuerySchema {
  return {
    query: `page("${pageId}")`,
    select: {
      url: true,
      id: true,
      title: true,
      worksubtitle: 'page.worksubtitle.kirbytext',
      worklocation: 'page.worklocation.kirbytext',
      workyear: 'page.workyear',
      workclient: 'page.workclient.kirbytext',
      workcollaborators: 'page.workcollaborators.kirbytext',
      workservices: 'page.workservices.kirbytext',
      workthumbnail: {
        query: 'page.workthumbnail.toFiles.first',
        select: imageQuery,
      },
      workmainimage: {
        query: 'page.workmainimage.toFiles.first',
        select: imageQuery,
      },
      workcontentblocks: {
        query: 'page.workcontentblocks.toBlocks',
        select: {
          id: true,
          type: true,
          blocktitle: 'block.content.blocktitle',
          paragraph: 'block.content.paragraph.kirbytext',
          image: {
            query: 'block.content.image.toFiles.first',
            select: imageQuery,
          },
        }
      },
      worksrelated: {
        query: 'page.worksrelated.toStructure',
        select: {
          columns: true,
          work: {
            query: 'structureItem.work.toPages',
            select: {
              id: true,
              url: 'page.slug',
              title: true,
              workthumbnail: {
                query: 'page.workthumbnail.toFiles.first',
                select: imageQuery,
              },
              worksubtitle: true,
            },
          },
        },
      },
    },
  }
}

export function getProjectNavigationQuery(projectId: string): KirbyQuerySchema {
  return {
    query: `page("works/${projectId}").siblings(true).visible()`,
    select: {
      id: true,
      title: true,
      url: 'page.slug',
    },
  }
}
