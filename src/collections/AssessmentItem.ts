import type { CollectionConfig } from 'payload'

export const AssessmentItem: CollectionConfig = {
  slug: 'assessment-item',
  admin: {
    useAsTitle: 'name',
  },
  versions: {
    drafts: {
      autosave: true,
    },
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
}
