import React from 'react';
import './ProjectPopupContent.css';

const ACMDesignWorkshops = () => (
  <div className="popup-content">
    <div className="popup-first-line"><h2>F24 Design Track Workshops</h2></div>
    <div className="acm-design-workshop-container">
      <iframe title="design-workshop-1" width="570" height="450" src="https://embed.figma.com/design/Maj0CJX8Q7FJR8qI3tVR6k/Design-Workshops?node-id=0-1&embed-host=share" allowfullscreen></iframe>
      <iframe title="design-workshop-2" width="570" height="450" src="https://embed.figma.com/design/Maj0CJX8Q7FJR8qI3tVR6k/Design-Workshops?node-id=2-796&embed-host=share" allowfullscreen></iframe>
      <iframe title="design-workshop-3" width="570" height="450" src="https://embed.figma.com/design/Maj0CJX8Q7FJR8qI3tVR6k/Design-Workshops?node-id=2-4141&embed-host=share" allowfullscreen></iframe>
      <iframe title="design-workshop-4" width="570" height="450" src="https://embed.figma.com/design/S2ZrnwzPLrhdWNUmcXQy8u/Design-Workshops?node-id=0-1&embed-host=share" allowfullscreen></iframe>
      <iframe title="design-workshop-5" width="570" height="450" src="https://embed.figma.com/design/S2ZrnwzPLrhdWNUmcXQy8u/Design-Workshops?node-id=1-1789&embed-host=share" allowfullscreen></iframe>
    </div>
    <h2>Other Workshops</h2>
    <div className="acm-design-workshop-container">
      <iframe title="hack2impact" width="570" height="450" src="https://embed.figma.com/design/S2ZrnwzPLrhdWNUmcXQy8u/Design-Workshops?node-id=1-3834&embed-host=share" allowfullscreen></iframe>
    </div>
  </div>
);

export default ACMDesignWorkshops;