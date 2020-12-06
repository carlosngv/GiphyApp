import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';
import toJson from 'enzyme-to-json';


describe('GifGridItem tests', () => {
    const title = 'Test item';
    const url = 'https://testurl.com';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    
    test('Should show component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should contain text within p tag', () => {
        const pTagContent = wrapper.find('p').text().trim();
        expect(pTagContent).toBe(title);
    });
    
    test('img should have same url src and same alt title', () => {
        const img = wrapper.find('img');
        const {src, alt} = img.props();
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });
    
    test('parent div should contain animate__backInLeft class', () => {
        const div = wrapper.find('div').at(0);
        const { className } = div.props();
        const classname = "animate__backInLeft";
        expect(className.includes(classname)).toBe(true);
    });
    
});

