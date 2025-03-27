"use client";

import Image from 'next/image';

export default function Contact() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">联系我</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            如果您对 AI 技术有任何想法或合作意向，欢迎与我联系
          </p>
          <a 
            href="mailto:contact@chelizi.TOP" 
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            发送邮件
          </a>
        </div>
      </div>
    </section>
  )
}

export function FloatingContact() {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
      <div className="relative group">
        <div className="w-[96px] h-[96px] cursor-pointer hover:shadow-lg transition-shadow duration-300">
          <Image
            src="/icons/wechat.svg"
            alt="联系我"
            width={96}
            height={96}
            className="rounded-full shadow-md"
          />
        </div>
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 hidden group-hover:block transform transition-all duration-300 ease-out">
          <div className="bg-[#FF4D1C] p-4 rounded-lg shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/avatar.svg"
                alt="车厘子头像"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div className="text-white">
                <div className="text-lg font-bold">Alnoah车厘子</div>
                <div className="text-sm opacity-80">南极洲</div>
              </div>
            </div>
            <Image
              src="/WeChat.jpg"
              alt="WeChat QR Code"
              width={200}
              height={200}
              className="rounded-lg bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 
