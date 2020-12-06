const { getGifs } = require("../../helpers/getGifs");


describe('Tests with getGifs fetch', () => {
    test('Should get 10 elements', async () => {
        const gifs = await getGifs('naruto');
        expect(gifs.length).toBe(10);
    });

    test('Should get 0 elements for missing category', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });

});