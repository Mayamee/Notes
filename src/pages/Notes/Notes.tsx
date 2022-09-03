import { FunctionComponent, useEffect, useState } from "react";
import INoteResponse from "../../models/INoteResponse";
import NoteService from "../../services/NoteService";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import NoteCard from "../../components/NoteCard/NoteCard";
interface NotesProps {}

const Notes: FunctionComponent<NotesProps> = () => {
  const [notes, setNotes] = useState<INoteResponse[]>([]);
  useEffect(() => {
    NoteService.getAllNotes().then((res) => setNotes(res.data));
  }, []);

  const handleDeleteNote = (id: number) => {
    NoteService.deleteNote(id).then((_res) =>
      setNotes(notes.filter((note) => note.id !== id))
    );
  };

  return (
    <div className="Notes">
      <Container>
        <h2>Notes page</h2>

        {notes.length !== 0 && (
          <Grid container spacing={3}>
            {notes.map((note, index) => (
              <Grid item key={`${note.title}-${index}`} xs={12} md={6} lg={4}>
                <NoteCard note={note} onDelete={handleDeleteNote} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </div>
  );
};

export default Notes;
