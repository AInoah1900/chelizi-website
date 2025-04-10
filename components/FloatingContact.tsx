"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function FloatingContact() {
  const [isQRCodeVisible, setIsQRCodeVisible] = useState(false);

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
      <div className="relative">
        {/* 微信图标按钮 - 优化设计和交互 */}
        <button 
          className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-green-500 to-green-400 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-105 active:scale-95"
          aria-label="联系我"
          onClick={() => setIsQRCodeVisible(!isQRCodeVisible)}
          style={{
            WebkitTransform: 'translateZ(0)', 
            WebkitBackfaceVisibility: 'hidden'
          }}
        >
          <div className="w-8 h-8 md:w-10 md:h-10 relative">
            <Image
              src="/icons/wechat.svg"
              alt="联系我"
              width={40}
              height={40}
              className="p-0.5 brightness-[1.2] filter"
              style={{ 
                objectFit: 'contain',
                WebkitTransform: 'translateZ(0)'
              }}
            />
          </div>
        </button>

        {/* 二维码展示卡片 - 全面优化设计 */}
        <div 
          className={`absolute right-full mr-6 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
            isQRCodeVisible ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'
          }`}
          style={{
            WebkitTransform: 'translate3d(0,0,0)',
            WebkitBackfaceVisibility: 'hidden'
          }}
        >
          <div className="qrcode-card bg-white rounded-2xl shadow-2xl p-5 w-[280px] border border-gray-100">
            {/* 用户信息头部 */}
            <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-gray-100">
              <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-white shadow-sm">
                <Image
                  src="/avatar.jpg"
                  alt="Ainoah车厘子"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium text-gray-800 text-lg">Ainoah车厘子</h3>
                <p className="text-sm text-gray-500">微信号</p>
              </div>
              <button 
                onClick={() => setIsQRCodeVisible(false)}
                className="ml-auto text-gray-400 hover:text-gray-600"
                aria-label="关闭"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            {/* 优化的二维码容器 */}
            <div className="relative mb-4 bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-xl overflow-hidden border border-orange-200">
              {/* 扫描动画指示器 */}
              <div className="absolute left-0 w-full h-1 bg-orange-300/50 animate-scan"></div>
              
              {/* 二维码图像 */}
              <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-white p-2 shadow-sm">
                <Image
                  src="/WeChat.jpg"
                  alt="WeChat QR Code"
                  fill
                  className="object-contain"
                  style={{ WebkitTransform: 'translateZ(0)' }}
                  priority
                />
              </div>
            </div>
            
            {/* 提示文本 */}
            <div className="text-center">
              <p className="text-sm text-gray-600">扫一扫上面的二维码图案，加我微信</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}