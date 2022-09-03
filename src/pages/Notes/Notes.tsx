import { FunctionComponent, useEffect, useState } from "react";
import INoteResponse from "../../models/INoteResponse";
import NoteService from "../../services/NoteService";

interface NotesProps {}

const Notes: FunctionComponent<NotesProps> = () => {
  const [noteList, setNoteList] = useState<INoteResponse[] | null>(null);
  useEffect(() => {
    NoteService.getAllNotes().then((res) => {
      setNoteList(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div className="Notes">
      <h2>Notes page</h2>
      {noteList && (
        <ul>
          {noteList.map((note, index) => (
            <li key={`${note.title}-${index}`}>
              <p>{note.title}</p>
              <p>{note.details}</p>
              <p>{note.category}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notes;
