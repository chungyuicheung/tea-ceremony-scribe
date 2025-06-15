
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Heart, Star, MapPin } from "lucide-react";

const TeaLibrary = () => {
  const teaCollection = [
    {
      id: 1,
      name: "西湖龙井",
      type: "绿茶",
      origin: "浙江杭州",
      rating: 4.8,
      records: 12,
      favorite: true,
      image: "🍃",
      description: "明前龙井，香气清雅，味道甘醇",
      lastTasted: "2024-06-15"
    },
    {
      id: 2,
      name: "安溪铁观音",
      type: "乌龙茶",
      origin: "福建安溪",
      rating: 4.9,
      records: 8,
      favorite: true,
      image: "🌿",
      description: "兰花香型，回甘持久",
      lastTasted: "2024-06-14"
    },
    {
      id: 3,
      name: "正山小种",
      type: "红茶",
      origin: "福建武夷山",
      rating: 4.5,
      records: 6,
      favorite: false,
      image: "🍂",
      description: "松烟香，桂圆香，甘醇顺滑",
      lastTasted: "2024-06-10"
    },
    {
      id: 4,
      name: "云南普洱",
      type: "黑茶",
      origin: "云南",
      rating: 4.3,
      records: 15,
      favorite: true,
      image: "🍄",
      description: "陈香浓郁，汤色红亮",
      lastTasted: "2024-06-13"
    },
    {
      id: 5,
      name: "白毫银针",
      type: "白茶",
      origin: "福建福鼎",
      rating: 4.7,
      records: 4,
      favorite: false,
      image: "❄️",
      description: "毫香清雅，滋味清淡甘甜",
      lastTasted: "2024-06-08"
    },
    {
      id: 6,
      name: "茉莉花茶",
      type: "花茶",
      origin: "福建福州",
      rating: 4.2,
      records: 9,
      favorite: false,
      image: "🌸",
      description: "花香浓郁，茶味清香",
      lastTasted: "2024-06-12"
    }
  ];

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      "绿茶": "bg-green-100 text-green-800",
      "红茶": "bg-red-100 text-red-800",
      "乌龙茶": "bg-blue-100 text-blue-800",
      "白茶": "bg-gray-100 text-gray-800",
      "黑茶": "bg-amber-100 text-amber-800",
      "黄茶": "bg-yellow-100 text-yellow-800",
      "花茶": "bg-pink-100 text-pink-800",
    };
    return colors[type] || "bg-gray-100 text-gray-800";
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-3 h-3 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="space-y-6">
      {/* 搜索和筛选 */}
      <Card className="bg-white/80 backdrop-blur-sm border-green-100">
        <CardContent className="pt-6">
          <div className="flex space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500 w-4 h-4" />
              <Input 
                placeholder="搜索茶叶名称、产地..." 
                className="pl-10 border-green-200 focus:border-green-400"
              />
            </div>
            <Button variant="outline" className="text-green-600 border-green-200 hover:bg-green-50">
              <Filter className="w-4 h-4 mr-2" />
              筛选
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 统计概览 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-700">45</div>
            <div className="text-sm text-green-600">收藏茶叶</div>
          </CardContent>
        </Card>
        <Card className="bg-amber-50 border-amber-200">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-amber-700">128</div>
            <div className="text-sm text-amber-600">品茶记录</div>
          </CardContent>
        </Card>
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-700">4.6</div>
            <div className="text-sm text-blue-600">平均评分</div>
          </CardContent>
        </Card>
        <Card className="bg-purple-50 border-purple-200">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-700">12</div>
            <div className="text-sm text-purple-600">收藏夹</div>
          </CardContent>
        </Card>
      </div>

      {/* 茶叶收藏 */}
      <div>
        <h3 className="text-xl font-semibold text-green-800 mb-4">我的茶叶收藏</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {teaCollection.map((tea) => (
            <Card key={tea.id} className="bg-white/80 backdrop-blur-sm border-green-100 hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{tea.image}</div>
                    <div>
                      <h4 className="font-semibold text-green-800 group-hover:text-green-600 transition-colors">
                        {tea.name}
                      </h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge className={getTypeColor(tea.type)} variant="secondary">
                          {tea.type}
                        </Badge>
                        <div className="flex items-center space-x-1">
                          {renderStars(tea.rating)}
                          <span className="text-xs text-gray-600 ml-1">{tea.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={tea.favorite ? "text-red-500 hover:text-red-600" : "text-gray-400 hover:text-red-500"}
                  >
                    <Heart className={`w-4 h-4 ${tea.favorite ? 'fill-current' : ''}`} />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-green-600">
                    <MapPin className="w-3 h-3 mr-1" />
                    <span>{tea.origin}</span>
                  </div>
                  
                  <p className="text-sm text-gray-600 line-clamp-2">{tea.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{tea.records} 次品茶记录</span>
                    <span>最近品尝: {tea.lastTasted}</span>
                  </div>
                  
                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1 text-green-600 border-green-200 hover:bg-green-50">
                      查看详情
                    </Button>
                    <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                      记录品茶
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 添加新茶叶 */}
      <Card className="bg-gradient-to-r from-green-50 to-amber-50 border-green-200 border-dashed">
        <CardContent className="p-8 text-center">
          <div className="text-4xl mb-4">🍃</div>
          <h4 className="text-lg font-semibold text-green-800 mb-2">添加新的茶叶</h4>
          <p className="text-green-600 mb-4">扩展你的茶叶收藏，记录更多品茶体验</p>
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            添加茶叶
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeaLibrary;
