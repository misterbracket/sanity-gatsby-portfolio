import {BsFillBriefcaseFill as icon} from 'react-icons/bs'

export default {
  name: 'job',
  title: 'Job',
  icon,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Job Title',
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
      name: 'company',
      title: 'Company',
      type: 'string'
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string' // refactor to geopoint at some point
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text'
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
      name: 'description',
      title: 'Description',
      type: 'text'
    }
  ],
  preview: {
    select: {
      title: 'name',
      slug: 'slug',
      media: 'mainImage',
      excerpt: 'excerpt'
    },
    prepare ({title = 'No title', excerpt, slug = {}, media}) {
      return {
        title,
        media,
        subtitle: excerpt || 'Missing excerpt'
      }
    }
  }
}
