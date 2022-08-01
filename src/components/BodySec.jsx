import * as React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

export default function BodySec() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Stack spacing={2} direction="row">
      <div style={{ margin: "100px" }}>
        <CircularProgress
          variant="determinate"
          value={100}
          style={{ width: "10rem", marginBottom: "80px" }}
        />
        <h3>SOFT SKILLS</h3>
      </div>
      <div style={{ margin: "100px" }}>
        <CircularProgress
          variant="determinate"
          value={75}
          style={{ width: "10rem", marginBottom: "80px" }}
        />
        <h3>HARD SKILLS</h3>
      </div>
      <div style={{ margin: "100px" }}>
        <CircularProgress
          variant="determinate"
          value={75}
          style={{ width: "10rem", marginBottom: "80px" }}
        />
        <h3>SOCIABILITY</h3>
      </div>
      <div style={{ margin: "100px" }}>
        <CircularProgress
          variant="determinate"
          value={50}
          style={{ width: "10rem", marginBottom: "80px" }}
        />
        <h3>INDUSTRIOUSNESS</h3>
      </div>
    </Stack>
  );
}
