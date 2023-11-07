import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAssets } from '../../store/actions';

const AssetList = () => {
  const dispatch = useDispatch();
  const assets = useSelector(state => state.assets.assets);

  useEffect(() => {
    dispatch(fetchAssets());
  }, [dispatch]);

  return (
    <div>
      <h2>Asset List</h2>
      <ul>
        {assets.map(asset => (
          <li key={asset.id}>{asset.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default AssetList;
