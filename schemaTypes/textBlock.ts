import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'textBlock',
  title: 'Text Block',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
        title: 'Content', 
        name: 'content',
        type: 'array', 
        of: [{type: 'block'}]
      }),
  ]
})
