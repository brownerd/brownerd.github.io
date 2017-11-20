// Import all data files
import downloads from './downloads';
import resources from './resources';
import seo from './seo';

// Assign all data objects to one object to export
export default Object.assign({},
  resources,
  seo,
  downloads,
);
