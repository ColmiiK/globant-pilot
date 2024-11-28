import Button from "@mui/material/Button";
import GitHubLogin from "./components/GitHubLogin";

export default function Login() {
  return (
    <>
      {" "}
      <h1>PokéApi</h1>
      <Button variant="outlined" onClick={GitHubLogin}>
        Log in
      </Button>
    </>
  );
}
