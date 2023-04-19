import { FunctionComponent } from 'react'
import { CardHeader, Card, CardContent, IconButton, Typography, Avatar } from '@mui/material'
import INoteResponse from '../../models/INoteResponse'
import { DeleteOutlined } from '@mui/icons-material'
import { blue, deepOrange, deepPurple, green, yellow, amber } from '@mui/material/colors'
interface NoteCardProps {
  note: INoteResponse
  onDelete: (id: number) => void
  children?: React.ReactNode
}
const getColorByCategory = (category: string) => {
  if (category === 'work') return yellow[500]
  if (category === 'some_stuff') return blue[600]
  if (category === 'reminders') return deepOrange[600]
  if (category === 'money') return green[600]
  if (category === 'todos') return deepPurple[600]
  return amber[300]
}
const NoteCard: FunctionComponent<NoteCardProps> = ({ note, onDelete }) => {
  return (
    <Card elevation={1}>
      <CardHeader
        avatar={
          <Avatar sx={{ background: getColorByCategory(note.category) }}>
            {note.category[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton onClick={onDelete.bind(null, note.id)}>
            <DeleteOutlined />
          </IconButton>
        }
        title={note.title}
        subheader={note.category}
      />
      <CardContent>
        <Typography variant="body1" color="GrayText">
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default NoteCard
