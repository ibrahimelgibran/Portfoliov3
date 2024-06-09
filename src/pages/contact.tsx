import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Heading, Paragraph } from "@/components/ui/typography";
import { useTitle } from "@/hooks";
import emailjs from "@emailjs/browser";
import { FormEvent, useRef, useState } from "react";

export default function Contact() {
  const [isSuccessSendMessage, setIsSuccessSendMessage] =
    useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useTitle("Contact - ElGibran");

  async function sendMessage(): Promise<void> {
    try {
      if (!formRef.current) throw new Error("Form reference is null");

      const response = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("EmailJS response:", response);

      if (response.status === 200) {
        setIsSuccessSendMessage(true);
        setErrorMessage(null);
      } else {
        throw new Error(
          `Failed to send message with status: ${response.status}`
        );
      }
    } catch (err: any) {
      console.error("Failed to send message:", err);
      setErrorMessage("Failed to send message! Please try again later.");
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    sendMessage();
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
          {/* <div className="flex w-full justify-center flex-col items-start">
            <label htmlFor="guest-email">
              <Paragraph className="text-sm font-semibold">Email</Paragraph>
            </label>
            <Input
              name="guest-email"
              placeholder="Your Email...."
              className="mt-1 w-full"
              type="email"
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
            <a href="https://mail.google.com/mail/u/0/?fs=1&to=ibrahimelgibran17@gmail.com&su=Your%20Subject&body=&tf=cm">
              Submit!
            </a>
          </Button> */}
          <a href="https://mail.google.com/mail/u/0/?fs=1&to=ibrahimelgibran17@gmail.com&su=Your%20Subject&body=&tf=cm">
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
          <a href="https://wa.me/6285876076005?text=Assalamualaikum">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 flex items-center">
              <img
                src="https://ibrahimelgibran.vercel.app/assets/svg/whatsapp.svg"
                alt="Gmail"
                className="h-10 w-10 mr-4"
              />
              <div>
                <div className="font-bold text-xl mb-2 text-black">
                  Whatsapps
                </div>
                <p className="text-gray-700 text-base">+62 858-7607-6005</p>
                <p className="text-slate-600 text-base mt-1">
                  Send Me A Message
                </p>
              </div>
            </div>
          </a>
        </form>
      </Layout>
      {isSuccessSendMessage ? (
        <div className="flex justify-center items-center w-full fixed top-0 backdrop-blur-md min-h-screen z-50">
          <div className="rounded-lg px-6 py-4 dark:bg-neutral-900 flex justify-center items-center flex-col text-center">
            <Heading as="h3" className="font-bold">
              Success send message!
            </Heading>
            <Button
              onClick={() => setIsSuccessSendMessage(false)}
              className="font-bold mt-3 w-24"
            >
              Close
            </Button>
          </div>
        </div>
      ) : null}
      {errorMessage && (
        <div className="flex justify-center items-center w-full fixed top-0 backdrop-blur-md min-h-screen z-50">
          <div className="rounded-lg px-6 py-4 dark:bg-neutral-900 flex justify-center items-center flex-col text-center">
            <Heading as="h3" className="font-bold">
              {errorMessage}
            </Heading>
            <Button
              onClick={() => setErrorMessage(null)}
              className="font-bold mt-3 w-24"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
