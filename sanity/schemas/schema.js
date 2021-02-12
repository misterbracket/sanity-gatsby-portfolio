// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import tag from './documents/tag'
import person from './documents/person'
import project from './documents/project'
import siteSettings from './documents/siteSettings'
import job from './documents/job'
import education from './documents/education'
import professionalSkill from './documents/professionalSkill'
import language from './documents/language'
import projectIntroduction from './documents/projectIntroduction'

// Object types
import figure from './objects/figure'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'portfolio',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    figure,

    // The following are document types which will appear
    // in the studio.
    tag,
    person,
    project,
    siteSettings,
    job,
    education,
    professionalSkill,
    language,
    projectIntroduction
  ])
})
