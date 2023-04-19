import { FunctionComponent, useEffect, useState } from 'react'
import { Theme } from '@mui/material'
import INoteResponse from '../../models/INoteResponse'
import NoteService from '../../services/NoteService'
import { Box, Typography, useTheme } from '@mui/material'
import { Container } from '@mui/system'
import NoteCard from '../../components/NoteCard/NoteCard'
import Masonry from 'react-masonry-css'
interface NotesProps {}

const Notes: FunctionComponent<NotesProps> = () => {
  const [notes, setNotes] = useState<INoteResponse[]>([])
  const theme = useTheme() as Theme
  useEffect(() => {
    NoteService.getAllNotes().then((res) => setNotes(res.data))
  }, [])

  const handleDeleteNote = (id: number) => {
    NoteService.deleteNote(id).then((_res) => setNotes(notes.filter((note) => note.id !== id)))
  }
  const makeBreakPointsMasonry = (theme: Theme) => {
    const { lg, md } = theme.breakpoints.values
    return {
      default: 3,
      [lg]: 2,
      [md]: 1,
    }
  }
  makeBreakPointsMasonry(theme)
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
          <Masonry
            breakpointCols={makeBreakPointsMasonry(theme)}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {notes.map((note, index) => (
              <Box component="div" key={`${note.title}-${index}`}>
                <NoteCard note={note} onDelete={handleDeleteNote} />
              </Box>
            ))}
          </Masonry>
        )}
        {notes.length === 0 && (
          <Typography variant="h6" component="p" sx={{ fontWeight: 400 }} color="GrayText">
            There aren't notes here...
          </Typography>
        )}
      </Container>
    </Box>
  )
}

export default Notes
