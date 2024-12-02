import { Dropdown, Menu } from 'antd';
import ReactCountryFlag from 'react-country-flag';
import { useCurrency } from '../../../context/CurrencyContext';

const AuthProfileDropDown = () => {
    const { setSelectedCurrency } = useCurrency(); 

    const items = [
        {
            label: (
                <div>
                    <ReactCountryFlag countryCode="US" svg style={{ width: '1.5em', height: '1.5em' }} />
                    US
                </div>
            ),
            key: 'usd',
        },
        {
            label: (
                <div>
                    <ReactCountryFlag
                     countryCode="AM" 
                     svg 
                     style={{ width: '1.5em', height: '1.5em' }} />
                    ARM
                </div>
            ),
            key: 'amd',
        },
        {
            label: (
                <div>
                    <ReactCountryFlag 
                    countryCode="RU" 
                    svg 
                    style={{ width: '1.5em', height: '1.5em' }} />
                    RU
                </div>
            ),
            key: 'rub',
        },
        {
            label: (
                <div>
                    <ReactCountryFlag 
                    countryCode="AE" 
                    svg style={{ width: '1.5em', height: '1.5em' }} />
                    UAE
                </div>
            ),
            key: 'aed',
        },
    ];

    const menu = (
        <Menu
            items={items}
            onClick={(e) => {
                setSelectedCurrency(e.key);
            }}
        />
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
