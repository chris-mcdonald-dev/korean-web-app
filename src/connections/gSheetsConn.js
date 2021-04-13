const { google } = require("googleapis");
const keys = require("../../google-sheets.json");
// Declare scopes that determine the authorization level
const googleScopes = ["https://www.googleapis.com/auth/spreadsheets"];
// Create client
const gClient = new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,
    googleScopes
);


// Connect to Google Sheets
gClient.authorize((err, tokens) => {
	if (err) {
		console.log(`There was a problem connecting to Google Sheets: ${err}`);
	} else {
        console.log("Successfully connected to Google Sheets.");
	}
});

async function getVocab(range) {
	const gSheetsAPI = google.sheets({ version: "v4", auth: gClient });
	const request = {
		spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
		range: range,
	};

	const weeklyVocabWords = await gSheetsAPI.spreadsheets.values.get(request);
	const result = parseVocab(weeklyVocabWords.data.values);
	return result;
}

// Convert fetched vocab arrays into an object
function parseVocab(result) {
	return result;
}

module.exports = { getVocab };