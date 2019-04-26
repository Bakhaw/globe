const markers = [
  {
    city: 'Paris',
    color: '#75D9D7',
    coordinates: [48.856614, 2.3522219], // ? [latitude, longitude]
    image:
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80',
    value: 50
  },
  {
    city: 'Prague',
    color: '#75D9D7',
    coordinates: [50.08804, 14.42076],
    image:
      'https://images.unsplash.com/photo-1541849546-216549ae216d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    value: 50
  },
  {
    city: 'Colombo',
    color: '#75D9D7',
    coordinates: [6.927079, 79.861244],
    image:
      'https://images.unsplash.com/photo-1537551080512-fb7dd14fbf90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    value: 50
  },
  {
    city: 'Malé',
    color: '#75D9D7',
    coordinates: [1.924992, 73.399658],
    image:
      'https://images.unsplash.com/photo-1499488256403-b872eddb408c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    value: 50
  }
];

const markerOptions = {
  enableTooltip: true,
  getTooltipContent: marker => `${marker.city} (Sales: ${marker.value}.0M)`,
  glowPower: 15
};

export { markers, markerOptions };
