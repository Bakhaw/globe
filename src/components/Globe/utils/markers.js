const markers = [
  {
    id: 1,
    city: 'Prague',
    color: '#ccc',
    coordinates: [50.08804, 14.42076],
    value: 50
  }
];

const markerOptions = {
  enableTooltip: true,
  getTooltipContent: marker => `${marker.city} (Sales: ${marker.value}.0M)`
};

export { markers, markerOptions };
