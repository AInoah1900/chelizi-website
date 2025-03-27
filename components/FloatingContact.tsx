"use client";

import Image from 'next/image';

export default function FloatingContact() {
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
      <div className="relative group">
        {/* 微信图标按钮 - Safari 兼容性优化 */}
        <button 
          className="w-24 h-24 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
          aria-label="联系我"
          style={{
            WebkitTransform: 'translateZ(0)', // Safari 性能优化
            WebkitBackfaceVisibility: 'hidden' // Safari 渲染优化
          }}
        >
          <div className="w-[60px] h-[60px] relative">
            <Image
              src="/icons/wechat.svg"
              alt="联系我"
              width={60}
              height={60}
              className="p-0.5"
              style={{ 
                objectFit: 'contain',
                WebkitTransform: 'translateZ(0)'
              }}
            />
          </div>
        </button>

        {/* 二维码浮层 - Safari 兼容性优化 */}
        <div 
          className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
          style={{
            WebkitTransform: 'translate3d(0,0,0)',
            WebkitBackfaceVisibility: 'hidden'
          }}
        >
          <div className="w-[200px] h-[200px] relative bg-white rounded-lg shadow-2xl p-4">
            <Image
              src="/WeChat.jpg"
              alt="WeChat QR Code"
              width={200}
              height={200}
              className="rounded-lg"
              style={{ 
                objectFit: 'contain',
                WebkitTransform: 'translateZ(0)'
              }}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
} 