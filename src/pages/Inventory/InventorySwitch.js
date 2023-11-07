import React from 'react';
import Laptop from '../../components/Assetsconfiguration/Hardwares/Laptop';
import Keyboard from '../../components/Assetsconfiguration/Hardwares/Keyboard';
import Mouse from '../../components/Assetsconfiguration/Hardwares/Mouse';

const InventorySwitch = ({ selectedInventory }) => {
    console.log('InventorySwitch')
    console.log(selectedInventory)
  let addInventory;

  switch (selectedInventory) {
    case 'laptop':
      addInventory = <Laptop />;
      break;
    case 'keyboard':
      addInventory = <Keyboard />;
      break;
    case 'mouse':
      addInventory = <Mouse />;
      break;
    default:
      addInventory = <></>;
      break;
  }

  return addInventory;
};

export default InventorySwitch;
