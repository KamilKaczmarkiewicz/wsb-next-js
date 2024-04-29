import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export default async function Home() {
  const addNote = async (FormData: FormData) => {
    "use server";
    await prisma.note.create({
      data: {
        title: FormData.get("title") as string,
        content: FormData.get("content") as string,
      },
    });
    revalidatePath("/notes");
    redirect("/notes");
  };

  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-5xl font-semibold mb-7">Create note</h1>
      <form action={addNote} className="max-w-xl mx-auto">
        <div className="mb-6">
          <input
            type="text"
            name="title"
            placeholder="Title"
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            name="content"
            placeholder="Content"
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
