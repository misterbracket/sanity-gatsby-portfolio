import {BsFillBriefcaseFill as icon} from 'react-icons/md'
import {format} from 'date-fns'

export default {
  name: 'job',
  title: 'Job',
  icon,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the job',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'simplePortableText'
    },
    {
      name: 'startedAt',
      title: 'Started at',
      type: 'datetime'
    },
    {
      name: 'endedAt',
      title: 'Ended at',
      type: 'datetime'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'figure'
    },
    {
      name: 'tag',
      title: 'Tags',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tag'}}]
    },
    {
      name: 'body',
      title: 'Body',
      type: 'projectPortableText'
    }
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      media: 'mainImage',
      excerpt: 'excerpt'
    },
    prepare ({title = 'No title', excerpt, slug = {}, media}) {
      console.log(excerpt[0].children[0].text)
      return {
        title,
        media,
        subtitle: excerpt[0].children[0].text || 'Missing excerpt'
      }
    }
  }
}
