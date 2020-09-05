module.exports = {
    format_date: date => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
        date
      ).getFullYear()}`;
    },
    // format_url: url => {
    //   return url
    //     .replace('http://', '')
    //     .replace('https://', '')
    //     .replace('www.', '')
    //     .split('/')[0]
    //     .split('?')[0];
    // },
    format_plural: (word, amount) => {
      if (amount !== 1) {
        return `${word}s`;
      }
      return word;
    },
    isCurrentLanguage: (language_id, userlanguage_id) => {
      console.log(language_id)
      console.log(userlanguage_id)
      if (language_id === userlanguage_id) {
      return true
      }
      else {
        return false
      }
    }
  }