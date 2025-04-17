import { Access } from 'payload'
import { ReviewWorkflowStep } from '@payloadcms/plugin-publication-workflows'

const access: Access = ({ req }) => {
  return {
    status: {
      not_equals: 'awaitingRequest',
    },
  }
}

export const assessmentItemWorkflow = {
  steps: [
    new ReviewWorkflowStep({
      name: 'internalReview',
      label: 'Internal Review',
      reviewCollection: {
        access: {
          read: access,
          update: access,
          delete: access,
          create: access,
          readVersions: access,
        },
      },
    }),
    new ReviewWorkflowStep({
      name: 'externalReview',
      label: 'Staging / External Review',
      components: {
        BeforeIndicator: {
          path: '@/components/Workflow#BeforeIndicator',
        },
      },
      reviewCollection: {
        access: {
          read: access,
          update: access,
          delete: access,
          create: access,
          readVersions: access,
        },
      },
    }),
  ],
}
