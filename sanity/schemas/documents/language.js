
import {GrLanguage as icon} from 'react-icons/gr'

export default {
  name: 'language',
  type: 'document',
  title: 'Languages',
  icon,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'level',
      title: 'Level',
      type: 'string'
    }
  ]
}
