// import Layout from "@/components/layout";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Heading, Paragraph } from "@/components/ui/typography";
// import { useTitle } from "@/hooks";
// import {
//   EMAILJS_PUBLIC_KEY,
//   EMAILJS_SERVICE_ID,
//   EMAILJS_TEMPLATE_ID,
// } from "@/lib/utils/constants";
// import emailjs from "@emailjs/browser";
// import { FormEvent, useRef, useState } from "react";

// export default function Contact() {
//   const [isSuccessSendmessage, setIsSuccessSendmessage] =
//     useState<boolean>(false);

//   const formRef = useRef<HTMLFormElement>(null);

//   useTitle("Contact - ElGibran");

//   async function sendmessage(): Promise<void> {
//     try {
//       await emailjs.sendForm(
//         EMAILJS_SERVICE_ID,
//         EMAILJS_TEMPLATE_ID,
//         formRef.current as HTMLFormElement | string,
//         EMAILJS_PUBLIC_KEY
//       );

//       setIsSuccessSendmessage(true);
//       formRef.current?.reset(); // Mengosongkan form setelah pesan berhasil dikirim
//     } catch (err: any) {
//       throw new Error("Failed to send message!");
//     }
//   }

//   function handleSubmit(e: FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     sendmessage();
//   }

//   return (
//     <>
//       <Layout>
//         <Heading as="h1">Contact</Heading>
//         <form
//           ref={formRef}
//           onSubmit={handleSubmit}
//           className="w-full space-y-6 mt-6"
//         >
//           <div className="flex w-full justify-center flex-col items-start">
//             <label htmlFor="from_email">
//               <Paragraph className="text-sm font-semibold">Email</Paragraph>
//             </label>
//             <Input
//               name="from_email"
//               placeholder="Your Email...."
//               className="mt-1 w-full"
//               type="email"
//               required
//             />
//           </div>
//           <div className="flex w-full justify-center flex-col items-start">
//             <label htmlFor="from_name">
//               <Paragraph className="text-sm font-semibold">Name</Paragraph>
//             </label>
//             <Input
//               name="from_name"
//               placeholder="Your Name...."
//               className="mt-1 w-full"
//               type="text"
//               required
//             />
//           </div>
//           <div className="flex w-full justify-center flex-col items-start">
//             <label htmlFor="message">
//               <Paragraph className="text-sm font-semibold">Message</Paragraph>
//             </label>
//             <Textarea
//               name="message"
//               placeholder="Your Message...."
//               className="mt-1 w-full h-44"
//               required
//             />
//           </div>
//           <Button type="submit" className="font-bold">
//             Submit!
//           </Button>
//           {/* <Heading as="h1">Contact</Heading>
//           <div className="w-full space-y-6 mt-6">
//             <a href="mailto:ibrahimelgibran17@gmail.com?subject=Your%20Subject">
//               <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 flex items-center">
//                 <img
//                   src="https://ibrahimelgibran.vercel.app/assets/svg/gmail.svg"
//                   alt="Gmail"
//                   className="h-10 w-10 mr-4"
//                 />
//                 <div>
//                   <div className="font-bold text-xl mb-2 text-black">Gmail</div>
//                   <p className="text-gray-700 text-base">
//                     ibrahimelgibran17@gmail.com
//                   </p>
//                   <p className="text-slate-600 text-base mt-1">
//                     Send Me A Message
//                   </p>
//                 </div>
//               </div>
//             </a>
//             <br />
//             <a href="https://wa.me/6285876076005?text=assalamualaikum">
//               <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 flex items-center">
//                 <img
//                   src="https://ibrahimelgibran.vercel.app/assets/svg/whatsapp.svg"
//                   alt="Gmail"
//                   className="h-10 w-10 mr-4"
//                 />
//                 <div>
//                   <div className="font-bold text-xl mb-2 text-black">
//                     Whatsapp
//                   </div>
//                   <p className="text-gray-700 text-base">+62 858-7607-6005</p>
//                   <p className="text-slate-600 text-base mt-1">
//                     Send Me A Message
//                   </p>
//                 </div>
//               </div>
//             </a>
//           </div> */}
//         </form>
//       </Layout>
//       {isSuccessSendmessage ? (
//         <div className="flex justify-center items-center w-full fixed top-0 backdrop-blur-md min-h-screen z-50">
//           <div className="rounded-lg px-6 py-4 dark:bg-neutral-900 flex justify-center items-center flex-col text-center">
//             <Heading as="h3" className="font-bold">
//               Success send message!
//             </Heading>
//             <Button
//               onClick={() => setIsSuccessSendmessage(false)}
//               className="font-bold mt-3 w-24"
//             >
//               Close
//             </Button>
//           </div>
//         </div>
//       ) : null}
//     </>
//   );
// }

import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Heading, Paragraph } from "@/components/ui/typography";
import { useTitle } from "@/hooks";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} from "@/lib/utils/constants";
import emailjs from "@emailjs/browser";
import { FormEvent, useRef, useState } from "react";

export default function Contact() {
  const [isSuccessSendmessage, setIsSuccessSendmessage] =
    useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  useTitle("Contact - ElGibran");

  async function sendmessage(): Promise<void> {
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current as HTMLFormElement | string,
        EMAILJS_PUBLIC_KEY
      );

      setIsSuccessSendmessage(true);
      formRef.current?.reset(); // Mengosongkan form setelah pesan berhasil dikirim
    } catch (err: any) {
      console.error("Failed to send message:", err); // Logging error lebih detail
      throw new Error(`Failed to send message: ${err.text || err.message}`);
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    sendmessage();
  }

  return (
    <>
      <Layout>
        <Heading as="h1">Contact</Heading>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full space-y-6 mt-6"
        >
          <div className="flex w-full justify-center flex-col items-start">
            <label htmlFor="from_email">
              <Paragraph className="text-sm font-semibold">Email</Paragraph>
            </label>
            <Input
              name="from_email"
              placeholder="Your Email...."
              className="mt-1 w-full"
              type="email"
              required
            />
          </div>
          <div className="flex w-full justify-center flex-col items-start">
            <label htmlFor="from_name">
              <Paragraph className="text-sm font-semibold">Name</Paragraph>
            </label>
            <Input
              name="from_name"
              placeholder="Your Name...."
              className="mt-1 w-full"
              type="text"
              required
            />
          </div>
          <div className="flex w-full justify-center flex-col items-start">
            <label htmlFor="message">
              <Paragraph className="text-sm font-semibold">Message</Paragraph>
            </label>
            <Textarea
              name="message"
              placeholder="Your Message...."
              className="mt-1 w-full h-44"
              required
            />
          </div>
          <Button type="submit" className="font-bold">
            Submit!
          </Button>
          {/* <Heading as="h1">Contact</Heading>
          <div className="w-full space-y-6 mt-6">
            <a href="mailto:ibrahimelgibran17@gmail.com?subject=Your%20Subject">
              <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 flex items-center">
                <img
                  src="https://ibrahimelgibran.vercel.app/assets/svg/gmail.svg"
                  alt="Gmail"
                  className="h-10 w-10 mr-4"
                />
                <div>
                  <div className="font-bold text-xl mb-2 text-black">Gmail</div>
                  <p className="text-gray-700 text-base">
                    ibrahimelgibran17@gmail.com
                  </p>
                  <p className="text-slate-600 text-base mt-1">
                    Send Me A Message
                  </p>
                </div>
              </div>
            </a>
            <br />
            <a href="https://wa.me/6285876076005?text=assalamualaikum">
              <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 flex items-center">
                <img
                  src="https://ibrahimelgibran.vercel.app/assets/svg/whatsapp.svg"
                  alt="Gmail"
                  className="h-10 w-10 mr-4"
                />
                <div>
                  <div className="font-bold text-xl mb-2 text-black">
                    Whatsapp
                  </div>
                  <p className="text-gray-700 text-base">+62 858-7607-6005</p>
                  <p className="text-slate-600 text-base mt-1">
                    Send Me A Message
                  </p>
                </div>
              </div>
            </a>
          </div> */}
        </form>
      </Layout>
      {isSuccessSendmessage ? (
        <div className="flex justify-center items-center w-full fixed top-0 backdrop-blur-md min-h-screen z-50">
          <div className="rounded-lg px-6 py-4 dark:bg-neutral-900 flex justify-center items-center flex-col text-center">
            <Heading as="h3" className="font-bold">
              Success send message!
            </Heading>
            <Button
              onClick={() => setIsSuccessSendmessage(false)}
              className="font-bold mt-3 w-24"
            >
              Close
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
}
