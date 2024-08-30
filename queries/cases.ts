import type { KirbyQuerySchema } from 'kirby-fest'
import { imageQuery } from './image';

export function CasesQuery(): KirbyQuerySchema {
  return {
    query: `page('cases')`,
    select: {
      url: true,
      id: true,
      title: true,
      intendedTemplate: true,
      children: {
        query: `page.children.listed`,
        select: {
          url: true,
          id: true,
          title: true,
          casesubtitle: true,
          casethumbnail: {
            query: "page.casethumbnail.toFiles.first",
            select: [ 'url', 'alt' ],
          },
        }
      }
    },
  }
}