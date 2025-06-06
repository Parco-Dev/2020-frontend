import type { KirbyQuerySchema } from 'kirby-fest'
import { imageQuery } from './image'

export const homeQuery: KirbyQuerySchema = {
  query: 'page("home")',
  select: {
    title: true,
    id: true,
    isListed: true,
    intendedTemplate: true,
    homeabouttext: 'page?.homeabouttext?.kirbytext',
    homevideoimage: {
      query: 'page.homevideoimage.toFiles.first',
      select: ['url', 'alt'],
    },
    homevideotext: 'page?.homevideotext?.kirbytext',
    homevideobutton: true,
    homevideo: {
      query: 'page.homevideo.toFiles.first',
      select: ['url', 'alt'],
    },
    homephilosophytitle: true,
    homephilosophytext: true,
    homephilosophysubtitle: true,
    homefocusareastitle: true,
    homefocusareas: {
      query: 'page.homefocusareas.toStructure',
      select: {
        homefocusareastitletitle: true,
        homefocusareassubtitle: true,
        homefocusareastext: true,
        homefocusareasimage: {
          query: 'structureItem.homefocusareasimage.toFiles.first',
          select: ['url', 'alt'],
        }
      }
    },
    homefocusareasbutton: true,
    hometext: 'page?.hometext?.kirbytext',
    // homenewsletter: true
  },
}
