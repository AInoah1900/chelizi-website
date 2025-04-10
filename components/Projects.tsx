"use client";

import { motion } from 'framer-motion';
import { FaBox, FaGraduationCap, FaHandshake } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  price?: string;
  bgImage?: string;
  category: 'product' | 'course' | 'service';
  url?: string;
}

const ProjectCard = ({ title, description, price, bgImage, category, url }: ProjectCardProps) => {
  // 创建卡片内容
  const cardContent = (
    <>
      {/* 背景图层 */}
      <div className="absolute inset-0 z-0">
        {bgImage ? (
          <Image
            src={bgImage}
            alt="背景"
            fill
            className="object-cover opacity-10"
          />
        ) : (
          <div className={`w-full h-full opacity-10 ${
            category === 'product' ? 'bg-gradient-to-br from-red-100 via-pink-100 to-red-50' :
            category === 'course' ? 'bg-gradient-to-br from-blue-100 via-indigo-100 to-blue-50' :
            'bg-gradient-to-br from-green-100 via-emerald-100 to-green-50'
          }`} />
        )}
      </div>

      {/* 内容层 */}
      <div className="p-8 flex flex-col h-full relative z-10">
        <div className="mb-4" style={{ height: '56px' }}>
          <h3 className="text-xl font-semibold text-gray-800 line-clamp-2">
            {title}
          </h3>
        </div>
        
        <div className="flex-1 overflow-hidden">
          <p className="text-gray-600 line-clamp-4">
            {description}
          </p>
        </div>
        
        {price && (
          <div className="mt-auto pt-4 border-t border-gray-100" style={{ height: '60px' }}>
            <p className="text-lg font-bold text-red-500">
              {price}
            </p>
          </div>
        )}
      </div>
    </>
  );

  // 根据是否有URL决定渲染为链接或普通div
  return url ? (
    <Link href={url}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white rounded-xl shadow-lg border border-gray-100 h-full relative overflow-hidden cursor-pointer"
        style={{
          height: '240px',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {cardContent}
      </motion.div>
    </Link>
  ) : (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-lg border border-gray-100 h-full relative overflow-hidden"
      style={{
        height: '240px',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {cardContent}
    </motion.div>
  );
};

const CardGrid = ({ items }: { items: ProjectCardProps[] }) => {
  // 将数据按每行3个进行分组
  const rows = [];
  for (let i = 0; i < items.length; i += 3) {
    rows.push(items.slice(i, i + 3));
  }

  return (
    <table className="w-full" style={{ borderSpacing: '2rem', borderCollapse: 'separate' }}>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((item, index) => (
              <td key={index} className="w-1/3 align-top">
                <ProjectCard {...item} />
              </td>
            ))}
            {/* 如果一行不满3个，添加空白单元格 */}
            {row.length < 3 && Array(3 - row.length).fill(null).map((_, i) => (
              <td key={`empty-${i}`} className="w-1/3" />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function Projects() {
  const products = [
    {
      title: "DeepSeek小助手",
      url: "https://www.deepseek.com",
      description: "AI小助手改写文章，基于DeepSeek各种大语言模型，帮您方便快捷生成满意的内容",
      bgImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop",
      category: 'product' as const
    },
    {
      title: "Notion头像生成",
      url: "/products/notion-avatar",
      description: "免费生成您喜欢Notion风格头像，支持PNG、SVG格式",
      bgImage: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&auto=format&fit=crop",
      category: 'product' as const
    },
    {
      title: "智慧学习助手",
      url: "/products/learning-assistant",
      description: "一个人工智能助手，专门设计用于回答问题、提供帮助和交流，旨在帮助初中生培养学习兴趣和创新思考能力",
      bgImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop",
      category: 'product' as const
    },
    {
      title: "职业规划大师",
      url: "/products/career-planner",
      description: "通过大数据筛选符合您当前状况的职位，并给予针对性的未来职业规划建议",
      bgImage: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=800&auto=format&fit=crop",
      category: 'product' as const
    },
    {
      title: "AI Coder 学习网站",
      url: "/products/ai-coder",
      description: "帮助新手小白提升使用AI的能力",
      bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop",
      category: 'product' as const
    }
  ];

  const courses = [
    {
      title: "从0开始：AI 开发个人网站",
      url: "/courses/ai-website",
      description: "从AI开发网站、部署网站上线、到优化网站访问等，让您搭建完全属于自己的个人网站",
      bgImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop",
      category: 'course' as const
    },
    {
      title: "从0开始：AI 开发iOS APP",
      url: "/courses/ai-ios-app",
      description: "让您从0开始使用AI开发自己第一个iOS app，提供上架app store指导",
      bgImage: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=800&auto=format&fit=crop",
      category: 'course' as const
    },
    {
      title: "从0开始：AI 生成办公PPT",
      url: "/courses/ai-ppt",
      description: "让您通过AI生成满意的PPT内容，远离办公烦恼",
      bgImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop",
      category: 'course' as const
    },
    {
      title: "从0开始：AI 生成IP视频",
      url: "/courses/ai-video",
      description: "让您通过AI打造个人IP视频，打造一人自媒体工作室",
      bgImage: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&auto=format&fit=crop",
      category: 'course' as const
    }
  ];

  const services = [
    {
      title: "1 对 1 咨询",
      url: "/services/consultation",
      description: "为您提供个性化AI编程、AI产品设计以及AI市场分析预测等方面专业咨询服务",
      price: "999 元/小时",
      bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop",
      category: 'service' as const
    },
    {
      title: "AI编程项目陪跑",
      url: "/services/ai-project",
      description: "10小时深度参与，助您从0到1完成AI项目设计、开发和营销等",
      price: "9,999 元/月",
      bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop",
      category: 'service' as const
    },
    {
      title: "企业AI提效/编程培训",
      url: "/services/enterprise-training",
      description: "为企业提供定制化的AI降本提效方案和团队培训服务",
      price: "1-5万元/场",
      bgImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop",
      category: 'service' as const
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* 产品展示部分 */}
          <div className="mb-24">
            <div className="flex items-center gap-3 mb-16">
              <FaBox className="text-2xl text-red-500" />
              <h2 className="text-3xl font-bold text-gray-900">产品展示</h2>
            </div>
            <div className="overflow-x-auto">
              <CardGrid items={products} />
            </div>
          </div>

          {/* 精品课程部分 */}
          <div className="mb-24">
            <div className="flex items-center gap-3 mb-16">
              <FaGraduationCap className="text-2xl text-red-500" />
              <h2 className="text-3xl font-bold text-gray-900">精品课程</h2>
            </div>
            <div className="overflow-x-auto">
              <CardGrid items={courses} />
            </div>
          </div>

          {/* 高阶服务部分 */}
          <div>
            <div className="flex items-center gap-3 mb-16">
              <FaHandshake className="text-2xl text-red-500" />
              <h2 className="text-3xl font-bold text-gray-900">高阶服务</h2>
            </div>
            <div className="overflow-x-auto">
              <CardGrid items={services} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 