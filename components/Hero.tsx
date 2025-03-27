"use client";  // 添加这行很重要，因为 framer-motion 需要客户端渲染

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGraduationCap, FaBuilding, FaCertificate } from 'react-icons/fa';

export default function Hero() {
  const platforms = [
    {
      name: 'DeepSeek',
      icon: '/icons/deepseek.svg',
      url: '#'
    },
    {
      name: 'Youtube',
      icon: '/icons/youtube.svg',
      url: '#'
    },
    {
      name: 'Bilibili',
      icon: '/icons/bilibili.svg',
      url: '#'
    },
    {
      name: 'Twitter',
      icon: '/icons/twitter.svg',
      url: '#'
    },
    {
      name: '即刻',
      icon: '/icons/jike.svg',
      url: '#'
    },
    {
      name: '小红书',
      icon: '/icons/xiaohongshu.svg',
      url: '#'
    },
    {
      name: '公众号',
      icon: '/icons/gzh.svg',
      url: '#'
    }
  ];

  return (
    <>
      {/* 第一栏 - 品牌展示 */}
      <section className="h-24 bg-white border-b">
        <div className="container px-4 h-full mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="h-full flex items-center"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 via-pink-500 to-red-400 bg-clip-text text-transparent">
              chelizi.AI
            </h2>
          </motion.div>
        </div>
      </section>

      {/* 第二栏 - 简化布局结构 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <table className="w-full">
              <tbody>
                <tr className="align-top">
                  {/* 左侧头像列 */}
                  <td className="w-64 pr-8">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl">
                        <Image
                          src="/avatar.svg"
                          alt="车厘子头像"
                          width={256}
                          height={256}
                          className="object-cover"
                          priority
                        />
                      </div>
                    </motion.div>
                  </td>

                  {/* 右侧内容列 */}
                  <td className="align-top">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <div className="mb-6">
                        <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-red-600 via-pink-500 to-red-400 bg-clip-text text-transparent">
                          车厘子
                        </h1>
                        <p className="text-xl md:text-2xl bg-gradient-to-r from-red-500 via-pink-400 to-red-300 bg-clip-text text-transparent">
                          AI Coder 数字游民｜第一代AI编程个体开发者
                        </p>
                      </div>

                      <div className="space-y-4 mb-8">
                        <div className="flex items-start gap-3">
                          <FaGraduationCap className="text-xl text-red-500 mt-1 flex-shrink-0" />
                          <p className="text-gray-600">
                            曾任重庆某本科院校大数据与人工智能学院讲师
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <FaBuilding className="text-xl text-red-500 mt-1 flex-shrink-0" />
                          <p className="text-gray-600">
                            曾任职百度、联想研究院，从事AI领域智能软件研发
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <FaCertificate className="text-xl text-red-500 mt-1 flex-shrink-0" />
                          <p className="text-gray-600">
                          人邮出版社旗下"大数据"师资培训、腾讯旗下"人工智能与大数据"师资培训、国家专业技术人才旗下"人工智能应用"高级项目培训认证
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {platforms.map((platform) => (
                          <motion.a
                            key={platform.name}
                            href={platform.url}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 text-sm transition-all flex items-center gap-2"
                          >
                            <Image
                              src={platform.icon}
                              alt={platform.name}
                              width={16}
                              height={16}
                              className="w-4 h-4"
                            />
                            {platform.name}
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
} 