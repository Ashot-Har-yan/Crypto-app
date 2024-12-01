import React, { useState } from 'react';
import { Dropdown, Menu } from 'antd';
import ReactCountryFlag from 'react-country-flag';

const AuthProfileDropDown = () => {

  const items = [
    {
      label: (
        <div>
          <ReactCountryFlag
            countryCode="US"
            svg
            style={{
              width: '1.5em',
              height: '1.5em',
              letterSpacing: '1px' 
            }}
            title="US"
          />
          US
        </div>
      ),
      key: '0',
    },
    {
      label: (
        <div>
          <ReactCountryFlag
            countryCode="AM"
            svg
            style={{
              width: '1.5em',
              height: '1.5em',
              letterSpacing: '1px' 
            }}
            title="AM"
          />
          ARM
        </div>
      ),
      key: '1',
    },
    {
      label: (
        <div>
          <ReactCountryFlag
            countryCode="RU"
            svg
            style={{
              width: '1.5em',
              height: '1.5em',
              letterSpacing: '1px' 
            }}
            title="RU"
          />
          RU
        </div>
      ),
      key: '2',
    },
    {
      label: (
        <div>
          <ReactCountryFlag
            countryCode="AE"
            svg
            style={{
              width: '1.5em',
              height: '1.5em',
              letterSpacing: '1px' 
            }}
            title="AE"
          />
          UAE
        </div>
      ),
      key: '3',

    },
  ];

  const menu = (
    <Menu items={items} />
  );

  return (
    <Dropdown overlay={menu} trigger={['hover']}>
      <div style={{ fontFamily: 'Sans-serif', fontSize: '14px', letterSpacing: '1px' }}>
        Currency
      </div>
    </Dropdown>
  );
};

export default AuthProfileDropDown;
