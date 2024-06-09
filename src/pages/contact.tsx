import Layout from "@/components/layout";
import React from "react";

export default function Contact() {
  return (
    <Layout>
      <div className="w-full space-y-6 mt-6">
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
              <p className="text-slate-600 text-base mt-1">Send Me A Message</p>
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
              <div className="font-bold text-xl mb-2 text-black">Whatsapp</div>
              <p className="text-gray-700 text-base">+62 858-7607-6005</p>
              <p className="text-slate-600 text-base mt-1">Send Me A Message</p>
            </div>
          </div>
        </a>
      </div>
    </Layout>
  );
}
