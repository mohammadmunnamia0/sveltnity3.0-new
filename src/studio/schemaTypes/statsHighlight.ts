import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'statsHighlight',
  title: 'Stats Highlight',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Section Title', type: 'string'}),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Label', type: 'string'}),
            defineField({name: 'value', title: 'Value', type: 'string'}),
            defineField({name: 'icon', title: 'Icon', type: 'image'}),
          ],
        }),
      ],
    }),
  ],
})
