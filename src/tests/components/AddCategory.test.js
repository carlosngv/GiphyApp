import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Tests for AddCategory Component', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });
    
    test('should show AddCategory component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('input should change value correctly', () => {
        const input = wrapper.find('input');
        const value = 'Hello world';
        input.simulate('change', { 
            target: {
                value: value
            } 
        });
    });
    
    test('should appear same value as input within p tag', () => {
        const input = wrapper.find('input');
        const value = 'Hello world';
        input.simulate('change', { 
            target: {
                value: value
            } 
        });
        const pTagContent = wrapper.find('p').text().trim(); 
        expect(pTagContent).toBe(value);
    });

    test('Shouldnt post info on submit', () => {
        wrapper.find('form').simulate('submit', { 
            preventDefault(){} 
        });
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('should call setCategories and clean input', () => {
        const input = wrapper.find('input');
        const value = 'This is a test';
        input.simulate('change', {
            target: {
                value: value
            }
        });

        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });

        expect(setCategories).toHaveBeenCalled();
        expect(input.prop('value').trim()).toBe('');

    });

});