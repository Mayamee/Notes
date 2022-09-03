import { FunctionComponent } from "react";
import {
  CardHeader,
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import INoteResponse from "../../models/INoteResponse";
import { DeleteOutlined } from "@mui/icons-material";
interface NoteCardProps {
  note: INoteResponse;
  onDelete: (id: number) => void;
  children?: React.ReactNode;
}

const NoteCard: FunctionComponent<NoteCardProps> = ({ note, onDelete }) => {
  return (
    <Card elevation={1}>
      <CardHeader
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
  );
};

export default NoteCard;
