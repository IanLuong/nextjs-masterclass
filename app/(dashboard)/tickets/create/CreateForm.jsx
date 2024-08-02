import { createTicket } from '../actions';
import SubmitButton from '@/app/components/SubmitButton';

export default function CreateForm() {
  return (
    <form action={createTicket} className="w-1/2">
      <label>
        <span>Title:</span>
        <input name="title" required type="text" />
      </label>
      <label>
        <span>Body:</span>
        <textarea name="body" required />
      </label>
      <label>
        <span>Priority:</span>
        <select name="priority">
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </label>
      <SubmitButton />
    </form>
  );
}
