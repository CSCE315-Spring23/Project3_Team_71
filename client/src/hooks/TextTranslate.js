
const { Translate } = require("@google-cloud/translate").v2;

const translate = new Translate({
    projectId: '',
    keyFilename: ''
});

const translateText = async (text, lang) => {
    const [translation] = await translate.translate(text, lang);

    return translation;
}

export default { translateText };