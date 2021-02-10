import {FaGraduationCap as icon} from 'react-icons/fa'

export default {
  name: 'education',
  title: 'Education',
  icon,
  type: 'document',
  fields: [
    {
      name: 'education',
      title: 'Education Name',
      type: 'string'
    },
    {
      name: 'degreeLevel',
      title: 'Degree Level',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Education Slug',
      options: {
        source: 'education',
        maxLength: 96
      }
    },
    {
      name: 'institution',
      title: 'Institution',
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
    }
  ],
  preview: {
    select: {
      title: 'degree',
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
