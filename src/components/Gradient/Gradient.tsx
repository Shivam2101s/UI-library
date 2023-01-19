import React from 'react';
import s from './Gradient.module.scss';

export const Gradient = () => {
  const GRADIENT_NAMES = [
    'LightMango',
    'LightSun',
    'LightLeaf',
    'LightTrust',
    'LightHolo',
    'LightSunrise',
    'LightMorph',
    'LightEmerald',
    'PastelPlum',
    'PastelDesert',
    'PastelLeaf',
    'PastelOcean',
    'PastelSunset',
    'PastelDusk',
    'PastelMorph',
    'PastelEmerald',
    'Plum',
    'Glacier',
    'Silk',
    'SoftPink',
    'SoftVoilet',
    'Ice',
    'DeepOrange',
    'Sunrise',
    'Leaf',
    'Ocean',
    'Sunset',
    'PinkSky',
    'Luxury',
    'Emerald',
  ];

  return (
    <div className={s.root}>
      {GRADIENT_NAMES.map((el) => (
        <div key={el}>{`gradient: ${el}`}</div>
      ))}
    </div>
  );
};
