import { useParams } from "react-router-dom";
import Layout from "@/components/layout";
import LightboxImage from "@/components/ui/lightbox-image";
import { Heading, Paragraph } from "@/components/ui/typography";
import { notesList } from "@/lib/utils/data";
import { ExternalLinkIcon, Github } from "lucide-react"; // Import the icons you need
import { Link } from "react-router-dom";

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const notesPost = notesList.find((post) => post.id === id);

  if (!notesPost) {
    return (
      <Layout>
        <Heading as="h1">Blog Post Not Found</Heading>
        <Paragraph>The blog post you're looking for doesn't exist.</Paragraph>
      </Layout>
    );
  }

  return (
    <Layout>
      <Heading as="h1">{notesPost.name}</Heading>
      <LightboxImage
        src={notesPost.thumbnail}
        alt={notesPost.name}
        loading="lazy"
        className="w-full object-cover mt-4"
      />
      <Paragraph className="mt-4">{notesPost.description}</Paragraph>
      {notesPost.preview && (
        <a
          href={notesPost.preview}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-blue-500 flex items-center"
        >
          Read more
          <ExternalLinkIcon size={20} className="ml-1" />
        </a>
      )}
      {notesPost.github && notesPost.github !== "null" && (
        <a
          href={notesPost.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-blue-500 flex items-center"
        >
          View on GitHub
          <Github size={20} className="ml-1" />{" "}
          {/* Pastikan kelas ml-1 tidak mengganggu penempatan */}
        </a>
      )}
      <div
        style={{
          maxWidth: "100%",
          width: "100%",
          overflowX: "hidden",
        }}
        className="mt-5"
        dangerouslySetInnerHTML={{ __html: notesPost.content }}
      />
      <div className="mt-5 flex justify-start items-start">
        <Link to="/notes">
          <button
            type="button"
            aria-label="See other photos of notes"
            className="font-bold text-gray-800 dark:text-white w-full text-left"
          >
            Back Notes
          </button>
        </Link>
      </div>
    </Layout>
  );
}
