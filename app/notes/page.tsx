import { PrismaClient } from "@prisma/client";
import NotesList from "../components/notesList";

const prisma = new PrismaClient();

export default async function Home() {
  let notes = await prisma.note.findMany();

  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-5xl font-semibold bm-7">All notes</h1>
      <NotesList notes={notes} />
    </main>
  );
}
