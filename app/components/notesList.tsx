import Link from "next/link";

interface Note {
  id: string;
  title: string;
  content: string;
}

interface NotesListProps {
  notes: Note[];
}

const NotesList: React.FC<NotesListProps> = ({ notes }) => {
  return (
    <div className="container mx-auto max-w-4xl mt-5">
      {notes.length > 0 ? (
        <ul className="space-y-4">
          {notes.map((note) => (
            <Link href={`/notes/${note.id}`}>
              <li key={note.id} className="p-4 bg-gray-100 rounded-lg shadow">
                <h2 className="text-xl font-bold text-gray-800">
                  {note.title}
                </h2>
                <p className="text-gray-600">{note.content}</p>
              </li>
            </Link>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No notes available.</p>
      )}
    </div>
  );
};

export default NotesList;
