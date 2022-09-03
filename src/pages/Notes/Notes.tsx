import { FunctionComponent, useEffect, useState } from "react";
import INoteResponse from "../../models/INoteResponse";
import NoteService from "../../services/NoteService";
import { Grid, Paper } from "@mui/material";
import { Container } from "@mui/system";
interface NotesProps {}

const Notes: FunctionComponent<NotesProps> = () => {
  const [noteList, setNoteList] = useState<INoteResponse[] | null>(null);
  useEffect(() => {
    NoteService.getAllNotes().then((res) => setNoteList(res.data));
  }, []);
  return (
    <div className="Notes">
      <Container>
        <h2>Notes page</h2>

        {noteList && (
          <Grid container>
            {noteList.map((note, index) => (
              <Grid item key={`${note.title}-${index}`} xs={12} md={6} lg={4}>
                <Paper>{note.title}</Paper>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </div>
  );
};

export default Notes;
