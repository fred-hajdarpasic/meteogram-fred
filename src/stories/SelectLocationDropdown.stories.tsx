import React from 'react';

import SelectLocationDropdown from '../components/SelectLocationDropdown'

export default {
    component: SelectLocationDropdown,
    title: 'SelectLocationDropdown',
};

export const SydneySelected = () => <SelectLocationDropdown locationCode='Sydney' setLocationCode={(loc: string) => undefined}/>
