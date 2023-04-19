import { FunctionComponent, useState } from 'react'
import {
  Typography,
  Button,
  TextField,
  FormControlLabel,
  FormControl,
  FormLabel,
  Box,
  Theme,
  useTheme,
} from '@mui/material'
import { Container } from '@mui/system'
import { KeyboardArrowRight } from '@mui/icons-material'
import { Radio, RadioGroup } from '@mui/material'
import NoteService from '../../services/NoteService'
import { useNavigate } from 'react-router-dom'
interface CreateProps {}

const Create: FunctionComponent<CreateProps> = () => {
  const navigate = useNavigate()
  const theme = useTheme() as Theme
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)

  const [category, setCategory] = useState('todos')

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    setTitleError(false)
    setDetailsError(false)
    if (title === '') setTitleError(true)

    if (details === '') setDetailsError(true)

    if (title && details && category) {
      NoteService.addNote({ title, details, category }).then((res) => {
        navigate('/')
      })
    }
  }

  const categoryHandler: React.ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) =>
    setCategory(value)

  return (
    <Box component="div" className="Create">
      <Container>
        <Typography
          sx={{
            margin: theme.pages.create.title.margin,
          }}
          variant="h5"
          component="h2"
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
            rows={theme.pages.create.form.textArea.rows}
            variant="outlined"
            color="secondary"
            fullWidth
            required
            error={detailsError}
          />
          <FormControl
            sx={{
              display: 'block',
              margin: '20px 0',
            }}
          >
            <FormLabel sx={{ transition: 'color 0.3s ease' }} id="form-category" color="secondary">
              Notes category
            </FormLabel>
            <RadioGroup aria-labelledby="form-category" onChange={categoryHandler} value={category}>
              <FormControlLabel
                value={'money'}
                control={<Radio color="secondary" />}
                label={'Money'}
              />
              <FormControlLabel
                value={'todos'}
                control={<Radio color="secondary" />}
                label={'Todos'}
              />
              <FormControlLabel
                value={'reminders'}
                control={<Radio color="secondary" />}
                label={'Reminders'}
              />
              <FormControlLabel
                value={'some_stuff'}
                control={<Radio color="secondary" />}
                label={'Some stuff'}
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
    </Box>
  )
}

export default Create
