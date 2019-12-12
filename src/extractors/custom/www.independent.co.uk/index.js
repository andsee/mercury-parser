export const WwwIndependentCoUkExtractor = {
  domain: 'www.independent.co.uk',

  title: {
    selectors: [
      // enter title selectors
      'h1.headline',
    ],
  },

  author: {
    selectors: [['meta[name="article:author_name"]', 'value']],
  },

  date_published: {
    selectors: [['meta[name="article:published_time"]', 'value']],
  },

  dek: {
    selectors: ['h2.sub-headline'],
  },

  lead_image_url: {
    selectors: [['meta[name="og:image"]', 'value']],
  },

  content: {
    selectors: [
      // enter content selectors
      'div.body-content',
    ],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [
      'div.ad-wrapper',
      'amp-geo',
      'amp-experiment',
      'div.inline-prompt',
      'figure.i-gallery',
      'aside',
      'figure.video',
      'div.signup-comp',
    ],
  },
};
