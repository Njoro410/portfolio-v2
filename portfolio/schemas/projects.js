export default {
    title: 'Projects',
    name: 'Projects',
    type: 'document',
    fields: [
        {
            title: 'Project Links',
            name: 'projectLinks',
            type: 'reference',
            to: [{
                type: 'Links',
                description: 'The github and live links'
            }]
        },
        {
            title: 'Project Name',
            name: 'projectName',
            type: 'string',
        },
        {
            title: 'Project Description',
            name: 'projectDesc',
            type: 'text',
            options: {
                maxLength: 255,
            }
        },
        {
            title: 'Mock-up',
            name: 'projectMockup',
            type: 'image'
        },
        {
            title: 'Stack',
            name: 'techStack',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            }
        }]
}