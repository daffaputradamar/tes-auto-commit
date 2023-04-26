const GitHub = require('github-api');
const simpleGit = require('simple-git');

const botToken = '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';
const repoOwner = '<repository owner>';
const repoName = '<repository name>';

const gh = new GitHub({ token: botToken });
const repo = gh.getRepo(repoOwner, repoName);
const git = simpleGit();

const commitMessage = 'Automated commit from bot';

git.clone(`https://github.com/${repoOwner}/${repoName}.git`, (err, result) => {
  if (err) {
    console.error(err);
    return;
  }

  // Make changes to files in the cloned repository directory here.

  git.add('.')
    .commit(commitMessage)
    .push('origin', 'main', (err, result) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log('Changes committed and pushed to GitHub!');
    });
});
