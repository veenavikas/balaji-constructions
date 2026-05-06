export const schemaTypes = [
  {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      { name: 'name', title: 'Name', type: 'string' },
      { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } },
      { name: 'category', title: 'Category', type: 'string', options: { list: ['Residential', 'Commercial', 'Villas'] } },
      { name: 'location', title: 'Location', type: 'string' },
      { name: 'config', title: 'Configuration', type: 'string' },
      { name: 'status', title: 'Status', type: 'string', options: { list: ['Upcoming', 'Ongoing', 'Completed'] } },
      { name: 'image', title: 'Main Image', type: 'image', options: { hotspot: true } },
      { name: 'gallery', title: 'Gallery', type: 'array', of: [{ type: 'image' }] },
      { name: 'description', title: 'Description', type: 'text' },
    ]
  },
  {
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
      { name: 'name', title: 'Client Name', type: 'string' },
      { name: 'project', title: 'Project', type: 'reference', to: [{ type: 'project' }] },
      { name: 'quote', title: 'Short Quote', type: 'string' },
      { name: 'fullText', title: 'Full Review', type: 'text' },
      { name: 'rating', title: 'Rating', type: 'number', validation: Rule => Rule.min(1).max(5) },
      { name: 'avatar', title: 'Avatar', type: 'image', options: { hotspot: true } },
    ]
  },
  {
    name: 'teamMember',
    title: 'Team Member',
    type: 'document',
    fields: [
      { name: 'name', title: 'Name', type: 'string' },
      { name: 'role', title: 'Role', type: 'string' },
      { name: 'image', title: 'Photo', type: 'image', options: { hotspot: true } },
      { name: 'bio', title: 'Bio', type: 'text' },
    ]
  }
];
