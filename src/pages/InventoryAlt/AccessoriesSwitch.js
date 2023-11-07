import React from 'react';
import HeadphonesAlt from '../../components/Assetsconfiguration/HardwaresAlt/HeadphonesAlt';
import MouseAlt from '../../components/Assetsconfiguration/HardwaresAlt/MouseAlt';
import KeyboardsAlt from '../../components/Assetsconfiguration/HardwaresAlt/KeyboardAlt';


const AccessoriesSwitch = ({ selectedAccessories }) => {
  let addAccessories;

  switch (selectedAccessories) {
    case 'mouse':
      addAccessories = <MouseAlt />;
      break;
    case 'keyboard':
      addAccessories = <KeyboardsAlt />;
      break;
    case 'headphones':
      addAccessories = <HeadphonesAlt />;
      break;
    default:
      addAccessories = <></>;
      break;
  }

  return addAccessories;
};

export default AccessoriesSwitch;
