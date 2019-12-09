import assert from 'assert';
import URL from 'url';
import cheerio from 'cheerio';

import Mercury from 'mercury';
import getExtractor from 'extractors/get-extractor';
import { excerptContent } from 'utils/text';

const fs = require('fs');

describe('WwwIndependentCoUkExtractor', () => {
  describe('initial test case', () => {
    let result;
    let url;
    beforeAll(() => {
      url =
        'https://www.independent.co.uk/news/world/politics/donald-trump-wto-rules-international-trade-war-china-a9238506.html';
      const html = fs.readFileSync(
        './fixtures/www.independent.co.uk/1575900417251.html'
      );
      result = Mercury.parse(url, { html, fallback: false });
    });

    it('is selected properly', () => {
      // This test should be passing by default.
      // It sanity checks that the correct parser
      // is being selected for URLs from this domain
      const extractor = getExtractor(url);
      assert.equal(extractor.domain, URL.parse(url).hostname);
    });

    it('returns the title', async () => {
      // To pass this test, fill out the title selector
      // in ./src/extractors/custom/www.independent.co.uk/index.js.
      const { title } = await result;

      // Update these values with the expected values from
      // the article.
      assert.equal(
        title,
        `Trump risks return to 'law of the jungle' for international trade, officials warn`
      );
    });

    it('returns the author', async () => {
      // To pass this test, fill out the author selector
      // in ./src/extractors/custom/www.independent.co.uk/index.js.
      const { author } = await result;

      // Update these values with the expected values from
      // the article.
      assert.equal(author, 'Ana Swanson');
    });

    it('returns the date_published', async () => {
      // To pass this test, fill out the date_published selector
      // in ./src/extractors/custom/www.independent.co.uk/index.js.
      const { date_published } = await result;

      // Update these values with the expected values from
      // the article.
      assert.equal(date_published, '2019-12-09T08:51:20.000Z');
    });

    it('returns the dek', async () => {
      // To pass this test, fill out the dek selector
      // in ./src/extractors/custom/www.independent.co.uk/index.js.
      const { dek } = await result;

      // Update these values with the expected values from
      // the article.
      assert.equal(
        dek,
        "WTO's\xa0authority under threat as US blocks appointments to panel that hears trade dispute appeals – despite ongoing trade war with China"
      );
    });

    it('returns the lead_image_url', async () => {
      // To pass this test, fill out the lead_image_url selector
      // in ./src/extractors/custom/www.independent.co.uk/index.js.
      const { lead_image_url } = await result;

      // Update these values with the expected values from
      // the article.
      assert.equal(
        lead_image_url,
        'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/12/09/07/donald-trump-white-house-lawn.jpg'
      );
    });

    it('returns the content', async () => {
      // To pass this test, fill out the content selector
      // in ./src/extractors/custom/www.independent.co.uk/index.js.
      // You may also want to make use of the clean and transform
      // options.
      const { content } = await result;

      const $ = cheerio.load(content || '');

      const first13 = excerptContent(
        $('*')
          .first()
          .text(),
        13
      );

      // Update these values with the expected values from
      // the article.
      assert.equal(
        first13,
        'The US has spent two years chipping away at the World Trade Organisation'
      );
    });
  });
});
