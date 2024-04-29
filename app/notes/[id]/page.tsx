import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type PostPageprops = {
  params: {
    id: string;
  };
};

export default async function Home({ params }: PostPageprops) {
  const noteId = params.id;
  const note = await prisma.note.findUnique({
    where: {
      id: noteId as string,
    },
  });

  return (
    <div className="container mx-auto p-4 max-w-4xl bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-gray-800 mb-3">Note Details</h1>
      <div className="bg-gray-100 p-5 rounded-lg">
        <p className="text-lg font-semibold text-gray-600">Note ID:</p>
        <p className="text-sm bg-gray-200 rounded p-2 text-gray-700">
          {noteId}
        </p>

        <p className="text-lg font-semibold text-gray-600 mt-4">Title:</p>
        <p className="text-md text-gray-800 bg-gray-200 rounded p-2">
          {note?.title}
        </p>

        <p className="text-lg font-semibold text-gray-600 mt-4">Content:</p>
        <div className="text-gray-800 bg-gray-200 rounded p-2 whitespace-pre-line">
          {note?.content}
        </div>
      </div>
    </div>
  );
}
