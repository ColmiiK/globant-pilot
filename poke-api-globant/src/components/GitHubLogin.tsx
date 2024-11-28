const CLIENT_ID = "";
const REDIRECT_URI = "http://localhost:5173/callback";

export default function GitHubLogin() {
  const githubAuthURL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
  window.location.href = githubAuthURL;
}
