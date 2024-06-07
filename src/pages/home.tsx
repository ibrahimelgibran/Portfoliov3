import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import LightboxImage from "@/components/ui/lightbox-image";
import { Heading, Paragraph } from "@/components/ui/typography";
import { useTitle } from "@/hooks";
import { photosList, worksList } from "@/lib/utils/data";
import { Link, useNavigate } from "react-router-dom";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  useTitle("ElGibran");

  return (
    <Layout>
      <div className="space-y-6">
        {" "}
        {/* pattern = for background plaid */}
        <div className="flex justify-center items-center space-x-3 w-fit">
          <LightboxImage
            src="https://avatars.githubusercontent.com/u/129604094?v=4"
            alt="Github Profile Picture"
            className="rounded-full w-11 cursor-pointer h-11"
          />
          <Heading as="h1">こんにちは !</Heading>
        </div>
        <Paragraph>
          Hello everyone! I am Ibrahim El Gibran, with more than 10+ Month Of
          Experience in a Back End developer. Download or View my{" "}
          <b>
            <a href="https://drive.google.com/file/d/1s6LHj2dP0ouThY0vaA2NBRuuv-leWN2h/view">
              (CV.PERSONAL)
            </a>
          </b>
          . I am a intermediate experienced and I hope with this I can always
          learning something new to be able to invent digital applications that
          can help many people in the future. Can work alone or in a team.{" "}
          <b>
            <i>Keep it simple</i>
          </b>
          , is one of my principles while crafting something.
        </Paragraph>
        <Paragraph>
          Certainly! Here's a corrected version of your English sentences: Apart
          from coding, there are several other activities that I enjoy. I love
          these hobbies because they give me a lot of perspective on life, and
          of course, they're fun. These activities include reading novels,
          writing essays, and cooking.
        </Paragraph>
        <div className="w-full max-w-xl flex justify-center sm:justify-between flex-col sm:flex-row items-center mt-5">
          <div className="space-x-4 mt-4 sm:mt-0 flex justify-start sm:justify-center items-center sm:items-start w-full sm:w-auto">
            {" "}
            <Link to="https://github.com/ibrahimelgibran" target="_blank">
              <GithubIcon size={20} />
            </Link>
            <Link
              to="https://www.linkedin.com/in/ibrahimelgibran"
              target="_blank"
            >
              <LinkedinIcon size={20} />
            </Link>
            <Link to="https://www.facebook.com/ibrahimelgibran" target="_blank">
              <FacebookIcon size={20} />
            </Link>
            <Link to="https://www.instagram.com/elgibran17/" target="_blank">
              <InstagramIcon size={20} />
            </Link>
          </div>
        </div>
      </div>
      <div className="my-6 space-y-6">
        <Heading as="h1">Skills</Heading>
        <div className="space-y-1">
          <Paragraph>
            <b>Programming Languages: </b>Java, Javascript and PHP.
          </Paragraph>
          <Paragraph>
            <b>Backend:</b> Spring Boot, Node JS, Laravel.
          </Paragraph>
          <Paragraph>
            <b>Tools:</b> Intellij IDEA, Visual Studio Code.
          </Paragraph>
          <Paragraph>
            <b>Others:</b> MYSQL, MongoDB, Postman, Firebase.
          </Paragraph>
        </div>
      </div>

      <div className="my-6 space-y-6">
        <Heading as="h1">Experiences</Heading>
        <div className="flex space-x-2 items-center w-fit">
          <Heading as="h3">Smk Muhammadiyah Gamping</Heading>
          <span className="text-sm ml-auto">
            <b>- Full Time</b>
          </span>
        </div>
        <Paragraph className="font-semibold mt-0.5 flex items-center">
          <span className="mr-20">Full Stack Develoer</span>
          <span className="text-sm ml-auto">Okt 2023 – Now</span>
        </Paragraph>
        <div className="space-y-1">
          <Paragraph>
            • Responsible for creating several PPDB 2024 - 2025 features,
            dashboards for teachers, students, employees and many more such as
            search filters and form validation. <br /> • Create WebApps CBT or
            Online Exams Feature, Dashboard for teachers, students, employees.
            and filter token examp.
            <br /> • <b>Programming Languages: </b> PHP, Codeigniter and MYSQL.
          </Paragraph>
        </div>
        <hr />

        <div className="flex space-x-2 items-center w-fit">
          <Heading as="h3">IEGCODE</Heading>
          <span className="text-sm ml-auto">
            <b>- Full Time</b>
          </span>
        </div>
        <Paragraph className="font-semibold mt-0.5 flex items-center">
          <span className="mr-20">Full Stack Develoer</span>
          <span className="text-sm ml-auto">Jan 2024 – Now</span>
        </Paragraph>
        <div className="space-y-1">
          <Paragraph>
            • I create stunning website for your business, Intermediate
            experienced in web design and development. <br /> • Platform
            e-commerce personal who provides services your need. there are some
            type very product pada e-commerce 🛒.
            <br /> • <b>Programming Languages: </b> PHP, Codeigniter and MYSQL.
          </Paragraph>
        </div>
        <hr />

        <div className="flex space-x-2 items-center w-fit">
          <Heading as="h3">Gemilang Multi Teknologi</Heading>
          <span className="text-sm ml-auto">
            <b>- Full Time</b>
          </span>
        </div>
        <Paragraph className="font-semibold mt-0.5 flex items-center">
          <span className="mr-20">Back End Develoer</span>
          <span className="text-sm ml-auto">JSep 2022 – Now</span>
        </Paragraph>
        <div className="space-y-1">
          <Paragraph>
            • A Website Company Profile for your business, Innovation for
            Technology Freedom and Technology Business Services Platform.
            <br /> • <b>Programming Languages: </b> Node JS, Laravel.
          </Paragraph>
        </div>
        <hr />

        <div className="flex space-x-2 items-center w-fit">
          <Heading as="h3">Soto Ijo Monjali</Heading>
          <span className="text-sm ml-auto">
            <b>- Full Time</b>
          </span>
        </div>
        <Paragraph className="font-semibold mt-0.5 flex items-center">
          <span className="mr-20">Front End Develoer</span>
          <span className="text-sm ml-auto">Jan 2023 – Now</span>
        </Paragraph>
        <div className="space-y-1">
          <Paragraph>
            • Responsible for CMS (Content Manajement System) creating site-wide
            food menu profiles and taking orders.
            <br /> • <b>Programming Languages: </b> Sass, Bootstrap and
            JavaScript.
          </Paragraph>
        </div>
        <hr />

        <div className="flex space-x-2 items-center w-fit">
          <Heading as="h3">BUYR</Heading>
          <span className="text-sm ml-auto">
            <b>- Internship</b>
          </span>
        </div>
        <Paragraph className="font-semibold mt-0.5 flex items-center">
          <span className="mr-20">Front End Develoer</span>
          <span className="text-sm ml-auto">2023 June - 2023 September </span>
        </Paragraph>
        <div className="space-y-1">
          <Paragraph>
            • Payment system from a personal smartphone via direct scan with a
            product that has a QR Code.
            <br /> • <b>Programming Languages: </b> Express JS and Node JS.
          </Paragraph>
        </div>
        <hr />
      </div>

      <div className="mb-6">
        <div className="space-y-6">
          <Heading as="h1">Featured Works</Heading>
          <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-1 sm:grid-rows-2 mt-6 gap-4">
            {worksList.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="drop-shadow-md bg-white dark:bg-neutral-900"
              >
                <LightboxImage
                  src={item.thumbnail}
                  alt={item.name}
                  loading="lazy"
                  className="h-[170px] w-full"
                />
                <Link
                  to={item.github}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="px-4 pt-2 pb-4">
                    <Heading as="h3">{item.name}</Heading>
                    <Paragraph className="mt-2 text-sm">
                      {item.description}
                    </Paragraph>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <Button
            type="button"
            aria-label="see other works"
            onClick={() => navigate("/works")}
            className="font-bold"
          >
            See other works
          </Button>
        </div>
      </div>
      <div className="mb-6">
        <div className="space-y-6">
          <Heading as="h1">Featured Photos</Heading>
          <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-1 sm:grid-rows-2 mt-6 gap-4">
            {photosList.slice(0, 4).map((item) => (
              <LightboxImage
                key={item.id}
                src={`/images/photos/${item.id}.png`}
                alt={item.name}
                className="drop-shadow-md cursor-pointer"
              />
            ))}
          </div>
          <Button
            type="button"
            aria-label="see other photos"
            onClick={() => navigate("/photos")}
            className="font-bold"
          >
            See other photos
          </Button>
        </div>
      </div>
    </Layout>
  );
}
