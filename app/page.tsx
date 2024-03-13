'use client'
import Image from "next/image";
import Link from 'next/link'


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <div>Todo
        <ul className="list-disc ml-5">
          <li className=""><a href="" target="_blank">Login</a></li>
          <li className=""><a href="" target="_blank">(pre) Rendering</a></li>
          <li className=""><a href="" target="_blank">Tests</a></li>
          <li className=""><a href="" target="_blank">CI/CD Deployment</a></li>
          <li className=""><a href="https://vercel.com/templates/next.js/nextjs-ai-chatbot" target="_blank">AI page</a></li>
        </ul>
      </div>


        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center ">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>


    </main>
  );
}
