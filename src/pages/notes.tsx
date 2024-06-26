import Layout from "@/components/layout";
import LightboxImage from "@/components/ui/lightbox-image";
import { Heading, Paragraph } from "@/components/ui/typography";
import { useTitle } from "@/hooks";
import { notesList } from "@/lib/utils/data";
import { Link } from "react-router-dom";

export default function Notes() {
  useTitle("Notes - ElGibran");

  return (
    <Layout>
      <Heading as="h1">Notes</Heading>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {notesList.map((item) => (
          <div
            key={item.id}
            className="flex flex-col rounded-lg overflow-hidden shadow-md bg-white dark:bg-neutral-900"
          >
            <Link to={`/notes/${item.id}`} className="flex flex-col h-full">
              <LightboxImage
                src={item.thumbnail}
                alt={item.name}
                loading="lazy"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex-grow">
                <Heading as="h3" className="text-lg font-medium">
                  {item.name}
                </Heading>
                <Paragraph className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </Paragraph>
              </div>
            </Link>
            <div className="p-4 flex justify-start">
              <Link to={`/notes/${item.id}`}>
                <button
                  type="button"
                  aria-label={`See other photos of ${item.name}`}
                  className="font-bold text-sm text-gray-800 dark:text-white bg-transparent hover:bg-white dark:hover:bg-gray-800"
                >
                  Read Notes
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
