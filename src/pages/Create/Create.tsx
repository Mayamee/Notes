import { FunctionComponent, useState } from "react";
import {
  Typography,
  Button,
  TextField,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import { Container } from "@mui/system";
import { KeyboardArrowRight } from "@mui/icons-material";
import { Radio, RadioGroup } from "@mui/material";
interface CreateProps {}

const Create: FunctionComponent<CreateProps> = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const [cathegory, setCathegory] = useState("todos");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setTitleError(false);
    setDetailsError(false);
    if (title === "") setTitleError(true);

    if (details === "") setDetailsError(true);

    if (title && details) {
      console.log({ title, details, cathegory });
    }
  };

  const cathegoryHandler: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => setCathegory(value);

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
          <FormControl
            sx={{
              display: "block",
              margin: "20px 0",
            }}
          >
            <FormLabel
              sx={{ transition: "color 0.3s ease" }}
              id="form-cathegory"
              color="secondary"
            >
              Notes cathegory
            </FormLabel>
            <RadioGroup
              aria-labelledby="form-cathegory"
              onChange={cathegoryHandler}
              value={cathegory}
            >
              <FormControlLabel
                value={"money"}
                control={<Radio color="secondary" />}
                label={"Money"}
              />
              <FormControlLabel
                value={"todos"}
                control={<Radio color="secondary" />}
                label={"Todos"}
              />
              <FormControlLabel
                value={"reminders"}
                control={<Radio color="secondary" />}
                label={"Reminders"}
              />
              <FormControlLabel
                value={"some_stuff"}
                control={<Radio color="secondary" />}
                label={"Some stuff"}
              />
            </RadioGroup>
          </FormControl>
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
