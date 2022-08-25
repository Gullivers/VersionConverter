const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const fetchedVersion = core.getInput('version');
  console.log(`Fetched Version is ${fetchedVersion}!`);
  var versionWithoutZeros = "";
  for (char of fetchedVersion){
    if (char != '0'){
        versionWithoutZeros += char;
    }
  }
  const output = fetchedVersion + "-v" + versionWithoutZeros;
  console.log("new version is: " + output);
  core.setOutput("new-version", output);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}