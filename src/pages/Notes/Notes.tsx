import { FunctionComponent, useEffect, useState } from "react";
import { Theme } from "@mui/material";
import INoteResponse from "../../models/INoteResponse";
import NoteService from "../../services/NoteService";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import { Container } from "@mui/system";
import NoteCard from "../../components/NoteCard/NoteCard";
interface NotesProps {}

const Notes: FunctionComponent<NotesProps> = () => {
  const [notes, setNotes] = useState<INoteResponse[]>([]);
  const theme = useTheme() as Theme;
  useEffect(() => {
    NoteService.getAllNotes().then((res) => setNotes(res.data));
  }, []);

  const handleDeleteNote = (id: number) => {
    NoteService.deleteNote(id).then((_res) =>
      setNotes(notes.filter((note) => note.id !== id))
    );
  };

  return (
    <Box component="div" className="Notes">
      <Container>
        <Typography
          variant="h5"
          component="h2"
          sx={{
            margin: theme.pages.notes.title.margin,
          }}
        >
          Notes page
        </Typography>

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
    </Box>
  );
};

export default Notes;
