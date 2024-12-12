import type { KirbyQuerySchema } from 'kirby-fest'

export const casesQuery: KirbyQuerySchema = {
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
          query: 'page.casethumbnail.toFiles.first',
          select: ['url', 'alt'],
        },
        casethumbnailsize: true
      },
    },
  },
}
