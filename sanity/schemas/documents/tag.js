import {ImPriceTags as icon} from 'react-icons/im'

export default {
  name: 'tag',
  type: 'document',
  title: 'Tag',
  icon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    }
  ]
}
