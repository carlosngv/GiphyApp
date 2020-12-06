import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import '@testing-library/jest-dom';

jest.mock('../../hooks/useFetchGifs');

describe('Tests for GifGrid component', () => {

    const testCategory = 'Itachi';

    test('component should work correctyl', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={testCategory} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should fetch images and show them correctly, using the custom hook (useFetchGifs)', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://localhsot.com/camsdkvsdv.jpg',
            title: 'test'
        }, {
            id: 'DEF',
            url: 'https://localhsot.com/test2.jpg',
            title: 'test2'
        }];
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category={testCategory} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false); // Verifies if loading p tag hides when gifs are fetched
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
    });


});