import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY',
      }
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{type: "string"}],
      options: {
        layout: "tags"
      }
    }),
    defineField({
      name: 'cover',
      title: 'Cover',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'carousel',
      title: 'Carousel',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{type: 'url'}],
    }),
  ],
  orderings: [
    {
      title: 'Release Date, New',
      name: 'releaseDateDesc',
      by: [{field: 'date', direction: 'desc'}],
    },
    {
      title: 'Release Date, Old',
      name: 'releaseDateAsc',
      by: [{field: 'date', direction: 'asc'}],
    },
  ],
})
