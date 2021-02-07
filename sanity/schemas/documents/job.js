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
      options: {
        source: 'name',
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
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY'
      }
    },
    {
      name: 'endedAt',
      title: 'Ended at',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY'
      }
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
