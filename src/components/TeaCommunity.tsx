
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarContent, AvatarFallback } from "@/components/ui/avatar";
import { Heart, MessageCircle, Share2, Star, Users, Calendar, Coffee } from "lucide-react";

const TeaCommunity = () => {
  const communityPosts = [
    {
      id: 1,
      user: {
        name: "茶道雅士",
        avatar: "🧘",
        level: "茶艺师",
        followers: 1203
      },
      content: {
        title: "今日品鉴：2023年班章古树普洱",
        description: "今天有幸品尝到一款2023年的班章古树普洱，汤色红润透亮，香气沉稳内敛，入口醇厚甘甜，回甘持久。这款茶的山韵非常明显，值得细细品味。",
        images: ["🍃", "🫖", "🍵"],
        tea: "班章古树普洱",
        rating: 4.8,
        tags: ["普洱茶", "古树茶", "班章", "品鉴笔记"]
      },
      stats: {
        likes: 156,
        comments: 23,
        shares: 8
      },
      timestamp: "2小时前"
    },
    {
      id: 2,
      user: {
        name: "清香若兰",
        avatar: "🌸",
        level: "品茶达人",
        followers: 856
      },
      content: {
        title: "春茶季：明前龙井的品鉴心得",
        description: "春茶季到了，分享一下最近品尝的几款明前龙井。这次特别对比了不同产区的龙井，发现每个产区都有其独特的风味特色。",
        images: ["🍃", "🌱"],
        tea: "明前龙井",
        rating: 4.6,
        tags: ["绿茶", "龙井", "春茶", "对比品鉴"]
      },
      stats: {
        likes: 89,
        comments: 12,
        shares: 5
      },
      timestamp: "5小时前"
    },
    {
      id: 3,
      user: {
        name: "武夷茶客",
        avatar: "🏔️",
        level: "岩茶专家",
        followers: 2104
      },
      content: {
        title: "武夷岩茶的冲泡技巧分享",
        description: "很多茶友询问岩茶的冲泡方法，今天详细分享一下我多年的冲泡经验。水温、投茶量、出汤时间都很关键。",
        images: ["🫖", "🍵", "🔥"],
        tea: "武夷岩茶",
        rating: 4.9,
        tags: ["乌龙茶", "岩茶", "冲泡技巧", "教学"]
      },
      stats: {
        likes: 234,
        comments: 45,
        shares: 18
      },
      timestamp: "1天前"
    }
  ];

  const teaEvents = [
    {
      id: 1,
      title: "线上品茶会：春茶品鉴专场",
      date: "2024年3月25日 19:00",
      participants: 128,
      host: "茶道学院",
      description: "邀请资深茶师带领大家品鉴多款春茶新品"
    },
    {
      id: 2,
      title: "茶文化讲座：禅茶一味",
      date: "2024年3月28日 14:00",
      participants: 89,
      host: "禅茶文化社",
      description: "探讨茶文化与禅学的深层联系"
    }
  ];

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
      {/* 社群统计 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-700">2.1k</div>
            <div className="text-sm text-green-600">茶友</div>
          </CardContent>
        </Card>
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-700">156</div>
            <div className="text-sm text-blue-600">今日分享</div>
          </CardContent>
        </Card>
        <Card className="bg-purple-50 border-purple-200">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-700">12</div>
            <div className="text-sm text-purple-600">关注中</div>
          </CardContent>
        </Card>
        <Card className="bg-orange-50 border-orange-200">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-700">45</div>
            <div className="text-sm text-orange-600">粉丝</div>
          </CardContent>
        </Card>
      </div>

      {/* 即将举行的活动 */}
      <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
        <CardHeader>
          <CardTitle className="text-amber-800 flex items-center space-x-2">
            <Calendar className="w-5 h-5" />
            <span>即将举行的茶事活动</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {teaEvents.map((event) => (
              <div key={event.id} className="bg-white/60 rounded-lg p-4 border border-amber-100">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-amber-800 mb-1">{event.title}</h4>
                    <p className="text-sm text-amber-700 mb-2">{event.description}</p>
                    <div className="flex items-center space-x-4 text-xs text-amber-600">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{event.date}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>{event.participants} 人参加</span>
                      </span>
                      <span>主办：{event.host}</span>
                    </div>
                  </div>
                  <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
                    报名参加
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 社群动态 */}
      <div>
        <h3 className="text-xl font-semibold text-green-800 mb-4">茶友分享</h3>
        <div className="space-y-6">
          {communityPosts.map((post) => (
            <Card key={post.id} className="bg-white/80 backdrop-blur-sm border-green-100">
              <CardHeader className="pb-3">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">{post.user.avatar}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold text-green-800">{post.user.name}</h4>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        {post.user.level}
                      </Badge>
                    </div>
                    <p className="text-sm text-green-600">{post.user.followers} 粉丝 • {post.timestamp}</p>
                  </div>
                  <Button variant="outline" size="sm" className="text-green-600 border-green-200">
                    关注
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-green-800 mb-2">{post.content.title}</h5>
                    <p className="text-gray-700 mb-3">{post.content.description}</p>
                    
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="flex items-center space-x-1">
                        <Coffee className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium">{post.content.tea}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        {renderStars(post.content.rating)}
                        <span className="text-sm text-gray-600 ml-1">{post.content.rating}</span>
                      </div>
                    </div>
                    
                    {/* 图片展示 */}
                    <div className="flex space-x-2 mb-3">
                      {post.content.images.map((image, index) => (
                        <div key={index} className="w-16 h-16 bg-green-50 rounded-lg flex items-center justify-center text-2xl border border-green-100">
                          {image}
                        </div>
                      ))}
                    </div>
                    
                    {/* 标签 */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.content.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-green-600 border-green-200">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* 互动按钮 */}
                  <div className="flex items-center justify-between pt-3 border-t border-green-100">
                    <div className="flex space-x-6">
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">{post.stats.likes}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm">{post.stats.comments}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition-colors">
                        <Share2 className="w-4 h-4" />
                        <span className="text-sm">{post.stats.shares}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 发布分享 */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200 border-dashed">
        <CardContent className="p-8 text-center">
          <div className="text-4xl mb-4">✨</div>
          <h4 className="text-lg font-semibold text-green-800 mb-2">分享你的品茶体验</h4>
          <p className="text-green-600 mb-4">记录茶香岁月，与茶友分享美好时光</p>
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            发布分享
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeaCommunity;
