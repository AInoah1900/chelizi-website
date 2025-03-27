"use client";

import Image from 'next/image';

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* 头像部分 - 严格控制尺寸 */}
          <div className="relative flex-shrink-0 w-48 h-48 md:w-64 md:h-64">
            <div className="w-full h-full rounded-3xl bg-white overflow-hidden">
              <Image
                src="/avatar.svg"
                alt="车厘子"
                width={256}
                height={256}
                className="w-full h-full scale-75 md:scale-90"
                style={{
                  objectFit: 'contain',
                  objectPosition: 'center',
                  maxWidth: '100%',
                  maxHeight: '100%'
                }}
                priority
              />
            </div>
          </div>

          {/* 个人信息部分 */}
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              车厘子
            </h1>
            <p className="text-xl md:text-2xl text-red-500 mb-6">
              AI Coder 数字游民 | 第一代AI编程个体开发者
            </p>
            <div className="space-y-3 text-gray-600">
              <p className="flex items-center">
                <span className="mr-2">🎓</span>
                曾任重庆某本科院校大数据与人工智能学院讲师
              </p>
              <p className="flex items-center">
                <span className="mr-2">💼</span>
                曾任职百度、联想研究院，从事AI领域智能软件研发
              </p>
              <p className="flex items-center">
                <span className="mr-2">🏆</span>
                人邮出版社旗下&quot;大数据&quot;师资培训、腾讯旗下&quot;人工智能与大数据&quot;师资培训、国家专业技术人才旗下&quot;人工智能应用&quot;高级项目培训认证
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="py-4 bg-gray-100 text-center">
        <p className="text-sm text-gray-600">
          @2025 AInoah车厘子 AI Coder 数字游民 | 第一代AI编程个体开发者
        </p>
      </footer>
    </div>
  );
} 