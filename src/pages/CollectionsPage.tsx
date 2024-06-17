import React, { useEffect } from 'react';
import Collections from '../components/Collections/Collections';
import './CollectionsPage.sass';


const CollectionsPage: React.FC = () => {
  return (
    <div className="collectionspage-container">
      <Collections />
    </div>
  )
}

export default CollectionsPage