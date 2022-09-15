/** 
    @jest-environment-jsdom
*/

import { Dropdown } from "../Dropdown"
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

configure({adapter: new Adapter()});

describe('Dropdown', () => {
    test('Should render', () => {
        const wrapper = shallow(<Dropdown button={<button/>} karma={<div />} children={<div />} isOpen={false}/>);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy()
    });

    test('Should render (snapshot)', () => {
        const wrapper = shallow(<Dropdown button={<button/>} karma={<div />} children={<div />} isOpen={false}/>)
        expect(wrapper).toMatchSnapshot()
    })
})