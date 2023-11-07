import React from 'react';
//import Laptop from '../../components/Assetsconfiguration/Hardwares/Laptop';
import LaptopAlt from '../../components/Assetsconfiguration/HardwaresAlt/LaptopAlt';
import Accessories from './Accessories';
import AddLicenses from '../License/AddLicenses';

const InventorySwitch = ({ selectedInventory }) => {
    console.log('InventorySwitch')
    console.log(selectedInventory)
  let addInventory;

  switch (selectedInventory) {
    case 'laptop':
      addInventory = <LaptopAlt />;
      break;
    case 'accessories':
      addInventory = <Accessories />;
      break;
    case 'licenses':
      addInventory = <AddLicenses />;
      break;
    default:
      addInventory = <></>;
      break;
  }

  return addInventory;
};

export default InventorySwitch;
