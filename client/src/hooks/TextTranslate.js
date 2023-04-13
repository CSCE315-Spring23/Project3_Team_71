const creds = process.env.REACT_APP_GCP_CREDENTIALS;
const { Translate } = require("@google-cloud/translate").v2;

const translate = new Translate({
    projectId: creds.projectId,
    keyFilename: 'C:\\Users\\jiabe\\Downloads\\pro-talon-383315-1c03ba162901.json'
});

const translateText = async (text, lang) => {
    const [translation] = await translate.translate(text, lang);

    return translation;
}

export default { translateText };