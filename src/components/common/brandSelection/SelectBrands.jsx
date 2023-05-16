import React, { useState } from 'react';
import styles from './SelectBrands.module.scss';
import { Link } from 'react-router-dom';
import { brandOptions } from '../../../data/data.js';

const SelectBrands = () => {
  const [brandVisible, setBrandVisible] = useState(false);

  const handleToggleVisibility = () => {
    setBrandVisible(!brandVisible);
  };

  return (
    <div className={styles.row}>
      <div className={styles.row}>
        <div>
          <div
            className={`${styles.logoFlexDiv} ${brandVisible ? styles.colsHidden : ''}`}
            onClick={handleToggleVisibility}
          >
            <p className={styles.selectBrand}>Select Brand</p>
          </div>
          {brandVisible && (
            <div className={styles.row}>
              <div className={styles.wrapper}>
              {brandOptions.map((brand) => (
                <div className={styles.logoFlexDiv} key={brand.id}>
                    <Link to={`/${brand.link}`}>
                      <img src={brand.logo} alt={brand.name} />
                    </Link>
                </div>
              ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectBrands;
