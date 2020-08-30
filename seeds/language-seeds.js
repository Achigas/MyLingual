const { Language } = require('../models');

const languageData = [
  {
    language_name: 'French',
  },
  {
    language_name: 'Lithuanian',
  },
  {
    language_name: 'Spanish',
  },
  {
    language_name: 'English',
  },
  {
    language_name: 'Russian',
  },
];

const seedLanguages = () => Language.bulkCreate(languageData);

module.exports = seedLanguages;