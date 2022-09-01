import { FunctionComponent } from "react";
import { Typography, Button } from "@mui/material";
import { Container } from "@mui/system";
import { KeyboardArrowRight } from "@mui/icons-material";

interface CreateProps {}

const Create: FunctionComponent<CreateProps> = () => {
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
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          onClick={() => console.log("you clicked me")}
          endIcon={<KeyboardArrowRight />}
        >
          Submit
        </Button>
      </Container>
    </div>
  );
};

export default Create;
