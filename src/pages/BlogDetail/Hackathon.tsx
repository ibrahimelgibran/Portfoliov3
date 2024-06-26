import { useParams } from "react-router-dom";
import Layout from "@/components/layout";
import LightboxImage from "@/components/ui/lightbox-image";
import { Heading, Paragraph } from "@/components/ui/typography";
import { blogList } from "@/lib/utils/data";
import { ExternalLinkIcon } from "lucide-react"; // Import the icons you need

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const blogPost = blogList.find((post) => post.id === parseInt(id!));

  if (!blogPost) {
    return (
      <Layout>
        <Heading as="h1">Blog Post Not Found</Heading>
        <Paragraph>The blog post you're looking for doesn't exist.</Paragraph>
      </Layout>
    );
  }

  return (
    <Layout>
      <Heading as="h1">{blogPost.name}</Heading>
      <br />
      <LightboxImage
        src={"https://home.amikom.ac.id/media/2023/07/Picture1.jpg"}
        alt={blogPost.name}
      />
      <Paragraph className="mt-5">{blogPost.description}</Paragraph>
      <div className="flex space-x-4 mt-4">
        <a
          href={blogPost.preview}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2"
        >
          <ExternalLinkIcon size={20} />
          <span>Preview</span>
        </a>
      </div>
      <Paragraph className="mt-5 text-2xl">
        “Build Digital Economy”, ABP X National Seminar and Hackathon Praisindo
        Successfully Held.
      </Paragraph>
      <Paragraph className="mt-5 text-lg">
        In a series of prestigious competitions at Amikom University Yogyakarta
        was named Amikom ICT Award (AMICTA) 2023, has held in collaboration with
        the Faculty of Computer Science Amikom, Amikom Business Park (ABP) and
        also Praisindo have held the "Build Digital Economy" Hackathon
        competition on June 17 2023 for seminars, and June 23 – 24 2023 for the
        Hackathon competition. This event presents a variety a big figure in the
        formation of startups and the digital economy. Not missed, participants
        from various parts of Indonesia attended compete in this event. The
        important figures who attended this event were: Co-Founder & Director
        PT. Prasindo Boyke Bader Brilianto, ABP incubation manager, and also
        Secretary General of the Creative Digital Association Head Solusi 247
        Jogja who has shared their experiences regarding the digital economy in
        a National Seminar with the theme “Build Digital Economy” which is also
        the opening of Hackathons.
      </Paragraph>
      <LightboxImage
        className="mt-5"
        src={
          "https://gemilangmultiteknologi.vercel.app/image/innerpage/hackthon.jpg"
        }
        alt={blogPost.name}
      />
      <Paragraph className="mt-5 text-lg">
        In today's global market competition, various companies and startups
        need quality digital talent to make it work compete in a competitive
        market. Through Hackathons, the circulation of digital talent can be
        accelerated and at the same time has the potential to generate ideas new
        information about IT and the digital economy that is really needed in
        business.
      </Paragraph>
      <LightboxImage
        className="mt-5"
        src={"https://projectprofilebuyr.vercel.app/assets/juara2-17e25bee.png"}
        alt={blogPost.name}
      />
      <Paragraph className="mt-5">
        This is our team from Gemilang Multi Teknologi take part in a hackthon
        competition. and develop a BUYR application is a payment application
        without queuing with Scanner Barcode. The Tech Stack that we use is
        ReactJS and NodeJS. then we presented it in front of the participants
        others and the jury. Hose waiting for announcement Our decision is very
        happy to be called and chosen get 2nd place and we are very proud of our
        hard work and dedication.
      </Paragraph>
    </Layout>
  );
}
