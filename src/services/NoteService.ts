import $api from '../http/axios'
import INote from '../models/INote'
import INoteResponse from '../models/INoteResponse'
import { AxiosResponse } from 'axios'

export default class NoteService {
  static getAllNotes(): Promise<AxiosResponse<INoteResponse[]>> {
    return $api.get('notes')
  }
  static addNote(data: INote): Promise<AxiosResponse> {
    return $api.post('notes', data, {
      headers: {
        'Content-type': 'application/json',
      },
    })
  }
  static deleteNote(id: number): Promise<AxiosResponse> {
    return $api.delete(`notes/${id}`)
  }
}
