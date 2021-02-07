import {MdPerson as icon} from 'react-icons/md'

export default {
  name: 'person',
  type: 'document',
  title: 'Person',
  icon,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontend will require a slug to be set to be able to show the person',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'figure'
    },
    {
      name: 'profileslug',
      type: 'string',
      title: 'Profile Slug'
    },
    {
      name: 'profiletitle',
      type: 'string',
      title: 'Profile Title'
    },
    {
      name: 'profilesubheading',
      type: 'string',
      title: 'Profile Heading'
    },
    {
      name: 'bio',
      title: 'Short Bio',
      type: 'text'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
