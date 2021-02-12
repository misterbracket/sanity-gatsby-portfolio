import {CgHello as icon} from 'react-icons/cg'

export default {
  name: 'projectIntroduction',
  type: 'document',
  title: 'Project Introduction',
  icon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'projectIntroduction',
      type: 'array',
      title: 'Project Introduction',
      of: [
        {
          type: 'block'
        }
      ]
    }
  ]
}
