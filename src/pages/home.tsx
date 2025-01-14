import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import LightboxImage from "@/components/ui/lightbox-image";
import { Heading, Paragraph } from "@/components/ui/typography";
import { useTitle } from "@/hooks";
import { photosList, worksList, notesList } from "@/lib/utils/data";
import { Link, useNavigate } from "react-router-dom";
import {
  // FacebookIcon,
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
        {/* pattern = for background plaisd */}
        <div className="flex justify-center items-center space-x-3 w-fit">
          <LightboxImage
            src="https://avatars.githubusercontent.com/u/129604094?v=4"
            alt="Github Profile Picture"
            className="rounded-full w-11 cursor-pointer h-11"
          />
          <Heading as="h1">こんにちは !</Heading>
        </div>
        <Paragraph>
          Hello everyone! I am Ibrahim El Gibran, a Backend Developer. Download
          or view my{" "}
          <b>
            <a href="https://drive.google.com/file/d/1be38UTsfygqTVcZ3eeVZTrBEeonJrPkr/view">
              (CV.PERSONAL)
            </a>
          </b>
          . Experienced with intermediate level knowledge of APIs,
          microservices, monoliths, and containers, using ORM tools such as
          Hibernate, and proficient with Java Spring Boot. Always eager to learn
          something new and able to work independently or as part of a team.{" "}
          <b>
            <i>Keep it simple</i>
          </b>
          , is one of my principles while crafting something.
        </Paragraph>
        <Paragraph>
          Apart from coding, there are several other activities that I enjoy. I
          love these hobbies because they give me a lot of perspective on life,
          and of course, they're fun. These activities include reading novels,
          writing essays and cooking.
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
            {/* <Link to="https://www.facebook.com/ibrahimelgibran" target="_blank">
              <FacebookIcon size={20} />
            </Link> */}
            <Link to="https://www.instagram.com/ibrahimelgibran17/" target="_blank">
              <InstagramIcon size={20} />
            </Link>
          </div>
        </div>
      </div>

      <div className="my-6 space-y-6">
        <Heading as="h1">Skills</Heading>
        <div className="space-y-1">
          <Paragraph>
            <b>Programming Languages: </b>Java, JavaScript and PHP.
          </Paragraph>
          <Paragraph>
            <b>Backend:</b> Spring Boot, NodeJS and Laravel.
          </Paragraph>
          <Paragraph>
            <b>Tools:</b> Intellij IDEA, Visual Studio Code.
          </Paragraph>
          <Paragraph>
            <b>Others:</b> PostgreSQL, MYSQL, MongoDB, Docker, Postman, APIDog
            Firebase, Supabase, BPMN & Camunda.
          </Paragraph>
        </div>
      </div>

      <div className="my-6 space-y-6">
        <Heading as="h1">Educations & Awards</Heading>
        <div className="flex space-x-2 items-center w-fit">
          <Heading as="h3">Amikom Yogyakarta University</Heading>
          <span className="text-sm ml-auto">
            <b>🗒️ 2022 - Present</b>
          </span>
        </div>
        <div className="space-y-1" style={{ marginTop: "-1px" }}>
          <Paragraph>• Informatics Engineering</Paragraph>
        </div>
        <div className="flex space-x-2 items-center w-fit">
          <Heading as="h3">Muhammadiyah Gamping Vocational School</Heading>
          <span className="text-sm ml-auto">
            <b>🗒️ 2019 - 2022</b>
          </span>
        </div>
        <div className="space-y-1" style={{ marginTop: "-1px" }}>
          <Paragraph> • Motorcycle Business Engineering</Paragraph>
        </div>
        <hr />
        <div className="flex space-x-2 items-center w-fit">
          <Heading as="h3">
            2 Ranking Winner Hackathon 2023 - "Building Digital Economy"
          </Heading>
          <span className="text-sm ml-auto">
            <b>📌 Amikom Yogyakarta University</b>
          </span>
        </div>
        <div className="space-y-1">
          <Paragraph>
            • 2 Ranking Winner Compotition Hackathon Building Digital Economy.{" "}
            <br /> • In the development of the "Queue Free Payment Application"
            organized by Amikom University Yogyakarta and in collaboration with
            PT. Praisindo Technology, from 17 June 2023 to 24 June 2023. <br />•
            View Document{" "}
            <b>
              <a href="https://drive.google.com/drive/folders/1cV7k0In9Ftc6rfKt7O8xVCkbFsRtup8F?usp=sharing">
                (Certificate).
              </a>
            </b>
          </Paragraph>
        </div>
        <div className="flex space-x-2 items-center w-fit">
          <Heading as="h3">
            2 Ranking Winner ITC AMICTA 2024 - "Messenger Of Innovation Change"
          </Heading>
          <span className="text-sm ml-auto">
            <b>📌 Amikom Yogyakarta University</b>
          </span>
        </div>
        <div className="space-y-1">
          <Paragraph>
            • 2 Ranking Winner Compotition AMICTA Messenger Of Innovation
            Change. <br />• Digital business category Development of "Cleanee
            Application for Digital Waste Processing and Development of Object
            Detection with AI for object sorting" organized by Amikom University
            Yogyakarta, on June 7, 2024 to July 12, 2024. <br />• View Document{" "}
            <b>
              <a href="https://drive.google.com/drive/folders/1fdGu6asl6WM6kqFKuyFHdoqZBj0pg2mP?usp=sharing">
                (Certificate).
              </a>
            </b>
          </Paragraph>
        </div>
      </div>

      <div className="my-6 space-y-6">
        <Heading as="h1">Experiences</Heading>

        <div className="flex space-x-2 items-center w-fit">
          <Heading as="h3">IEGCODE</Heading>
          <span className="text-sm ml-auto">
            <b>- Full Time</b>
          </span>
        </div>
        <Paragraph className="font-semibold mt-0.5 flex items-center">
          <span className="mr-20">Full Stack Developer</span>
          <span className="text-sm ml-auto">Jan 2024 – Now</span>
        </Paragraph>
        <div className="space-y-1">
          <Paragraph>
            • I create stunning website for your business, Intermediate
            experienced in web design and development. <br /> • Platform for
            software house and an e-commerce website for your business that
            caters to your needs 🛒. <br /> • IEGLINK is a new product from iegcode which is an open source URL shortener or short link and features such as custom & barcode links, generating automatic links in unique and unlimited shapes.
            <br /> • <b>Programming Languages & Technology Used: </b> PHP, Laravel,
            Codeigniter and MYSQL.
          </Paragraph>
        </div>
        <hr />

        <div className="flex space-x-2 items-center w-fit">
          <Heading as="h3">Smk Muhammadiyah Gamping</Heading>
          <span className="text-sm ml-auto">
            <b>- Full Time</b>
          </span>
        </div>
        <Paragraph className="font-semibold mt-0.5 flex items-center">
          <span className="mr-20">Full Stack Developer</span>
          <span className="text-sm ml-auto">Okt 2023 – Now</span>
        </Paragraph>
        <div className="space-y-1">
          <Paragraph>
            • Building CMS (Content Manajement System) for profil school. <br />
            • Responsible for creating several PPDB 2024 - 2025 features,
            dashboards for teachers, students, employees and many more such as
            search filters and form validation. <br /> • Create WebApps CBT or
            Online Exams Feature, Dashboard for teachers, students, employees.
            and filter token examp. <br /> • Web App Voting elections are held.
            <br /> • <b>Programming Languages & Technology Used: </b> PHP,
            Codeigniter and MYSQL.
          </Paragraph>
        </div>
        <hr />

        <div className="flex space-x-2 items-center w-fit">
          <Heading as="h3">PT Javan Cipta Solusi</Heading>
          <span className="text-sm ml-auto">
            <b>- Full Time / Internship</b>
          </span>
        </div>
        <Paragraph className="font-semibold mt-0.5 flex items-center">
          <span className="mr-20">Backend Developer Java Spring Boot</span>
          <span className="text-sm ml-auto">Sep 2024 – Des 2024</span>
        </Paragraph>
        <div className="space-y-1">
          <Paragraph>
            • Implementation unit testing development backend and utilization
            supprot with BPMN & Camunda. <br /> • Manajement project with portal
            AWS apps, PostgreSQL as basis data, Apidog as testing tools, Gitlab
            for collaboration team, as does taiga for work manajement progress.{" "}
            <br /> • Learn library tools from PT Javan this is AlurKerja and
            implementaion project LMS XL Tower Dismantle.
            <br /> • <b>Programming Languages & Technology Used: </b> Java,
            Spring Boot, PostgreSQL and BPMN & Camunda.
          </Paragraph>
        </div>
        <hr />

        {/* <div className="flex space-x-2 items-center w-fit">
          <Heading as="h3">Cleanee</Heading>
          <span className="text-sm ml-auto">
            <b>- Full Time</b>
          </span>
        </div>
        <Paragraph className="font-semibold mt-0.5 flex items-center">
          <span className="mr-20">Full Stack Developer</span>
          <span className="text-sm ml-auto">April 2024 – Now</span>
        </Paragraph>
        <div className="space-y-1">
          <Paragraph>
            • Digital waste processing platform and development of object
            detection for object selection with Artificial Intelligence. <br />{" "}
            • <b>Programming Languages WebApps: </b> PHP, Codeigniter and MYSQL.
            <br /> • <b>Programming Languages dan Technology Used: </b> React JS
            and TensorFlow JS
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
          <span className="mr-20">Back End Developer</span>
          <span className="text-sm ml-auto">Sep 2022 – Now</span>
        </Paragraph>
        <div className="space-y-1">
          <Paragraph>
            • A Website Company Profiles for your business, Innovation for
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
          <span className="mr-20">Front End Developer</span>
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
          <span className="mr-20">Back End Developer</span>
          <span className="text-sm ml-auto">June 2023 - Sep 2023</span>
        </Paragraph>
        <div className="space-y-1">
          <Paragraph>
            • Payment system from a personal smartphone via direct scan with a
            product that has a QR Code.
            <br /> • <b>Programming Languages: </b> Express JS and Node JS.
          </Paragraph>
        </div> */}
      </div>
      <br />

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
      <div className="mb-6">
        <div className="space-y-6">
          <Heading as="h1">Featured Notes</Heading>
          <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-1 sm:grid-rows-2 mt-6 gap-4">
            {notesList.slice(0, 4).map((item) => (
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

                {/* <Link
                  to={`/notes/${item.id}`}
                  key={item.id}
                  rel="noopener noreferrer"
                  target="_blank"
                ></Link> */}
                <Link
                  to={`/notes/${item.id}`}
                  key={item.id}
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
            aria-label="see other photos"
            onClick={() => navigate("/notes")}
            className="font-bold"
          >
            See other notes
          </Button>
        </div>
      </div>
    </Layout>
  );
}
