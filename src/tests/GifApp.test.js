import { shallow } from 'enzyme';
import GifApp from '../GifApp';

describe('Tests for GifApp component', () => {
    test('Should show component correctly', () => {
        const wrapper = shallow(<GifApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should show category list', () => {
        const categories = ['Itachi', 'Sasuke'];
        const wrapper = shallow(<GifApp defaultCategory={categories} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
});