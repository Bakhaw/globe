const markers = [
  {
    id: 1,
    city: 'Prague',
    color: '#ccc',
    coordinates: [50.08804, 14.42076],
    value: 50
  },
  {
    id: 2,
    city: 'Paris',
    color: '#ccc',
    coordinates: [48.856614, 2.3522219],
    value: 50
  },
  {
    id: 3,
    city: 'Colombo',
    color: '#ccc',
    coordinates: [6.927079, 79.861244],
    value: 50
  }
];

const markerOptions = {
  enableTooltip: true,
  getTooltipContent: marker => `${marker.city} (Sales: ${marker.value}.0M)`
};

export { markers, markerOptions };
