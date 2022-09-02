import { FunctionComponent, useState } from "react";
import { Typography, Button, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { KeyboardArrowRight } from "@mui/icons-material";

interface CreateProps {}

const Create: FunctionComponent<CreateProps> = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setTitleError(false);
    setDetailsError(false);
    if (title === "") setTitleError(true);

    if (details === "") setDetailsError(true);

    if (title && details) {
      console.log({ title, details });
    }
  };
  return (
    <div className="Create">
      <Container>
        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          color="textSecondary"
        >
          Create a new Note
        </Typography>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            onChange={({ target: { value } }) => setTitle(value)}
            className="gap-input"
            label="Note title"
            variant="outlined"
            color="secondary"
            fullWidth
            required
            error={titleError}
          />
          <TextField
            className="gap-input"
            label="Details"
            onChange={({ target: { value } }) => setDetails(value)}
            multiline
            rows={4}
            variant="outlined"
            color="secondary"
            fullWidth
            required
            error={detailsError}
          />
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            endIcon={<KeyboardArrowRight />}
          >
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Create;
