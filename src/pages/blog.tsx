import Layout from "@/components/layout";
import LightboxImage from "@/components/ui/lightbox-image";
import { Heading, Paragraph } from "@/components/ui/typography";
import { useTitle } from "@/hooks";
import { blogList } from "@/lib/utils/data";
import { Link } from "react-router-dom";

export default function Blog() {
  useTitle("Blog - ElGibran");

  return (
    <Layout>
      <Heading as="h1">Blog</Heading>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {blogList.map((item) => (
          <Link
            to={`/blog/${item.id}`}
            key={item.id}
            className="flex flex-col rounded-lg overflow-hidden shadow-md bg-white dark:bg-neutral-900"
          >
            <LightboxImage
              src={item.thumbnail}
              alt={item.name}
              loading="lazy"
              className="w-full"
              style={{ aspectRatio: "16/9" }}
            />
            <div className="p-4">
              <Heading as="h3" className="text-lg font-medium">
                {item.name}
              </Heading>
              <Paragraph className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {item.description}
              </Paragraph>

              <button
                type="button"
                aria-label={`See other photos of ${item.name}`}
                onClick={() => `/blog/${item.id}`}
                className="mt-2 font-bold flex flex-col rounded-lg overflow-hidden dark:bg-gary-800"
              >
                Read Blog
              </button>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
