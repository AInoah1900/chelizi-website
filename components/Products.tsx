"use client";

const products = [
  { id: 1, title: "Product 1", description: "Description for product 1" },
  { id: 2, title: "Product 2", description: "Description for product 2" },
  // Add more products as needed
];

export default function Products() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 产品展示部分 - Safari 网格优化 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">产品展示</h2>
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}
          >
            {products.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden"
                style={{
                  WebkitTransform: 'translateZ(0)',
                  transform: 'translateZ(0)'
                }}
              >
                {/* 产品卡片内容 */}
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 精品课程部分 - Safari 网格优化 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">精品课程</h2>
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}
          >
            {/* 课程卡片内容 */}
          </div>
        </div>

        {/* 高阶服务部分 - Safari 网格优化 */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">高阶服务</h2>
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}
          >
            {/* 服务卡片内容 */}
          </div>
        </div>
      </div>
    </div>
  );
} 