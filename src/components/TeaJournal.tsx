
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Clock, Thermometer, Droplets, Eye, Nose, Coffee } from "lucide-react";

interface TeaRecord {
  id: number;
  name: string;
  type: string;
  date: string;
  rating: number;
  aroma: string;
  taste: string;
  color: string;
}

interface TeaJournalProps {
  recentTeas: TeaRecord[];
}

const TeaJournal = ({ recentTeas }: TeaJournalProps) => {
  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      "绿茶": "bg-green-100 text-green-800",
      "红茶": "bg-red-100 text-red-800",
      "乌龙茶": "bg-blue-100 text-blue-800",
      "白茶": "bg-gray-100 text-gray-800",
      "黑茶": "bg-amber-100 text-amber-800",
      "黄茶": "bg-yellow-100 text-yellow-800",
    };
    return colors[type] || "bg-gray-100 text-gray-800";
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="space-y-6">
      {/* 今日品茶时刻 */}
      <Card className="bg-gradient-to-r from-green-100 via-amber-50 to-orange-100 border-green-200">
        <CardHeader>
          <CardTitle className="text-green-800 flex items-center space-x-2">
            <Clock className="w-5 h-5" />
            <span>今日品茶时刻</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <div className="text-6xl mb-4">🍃</div>
            <p className="text-green-700 text-lg mb-4">静心品茶，感受生活之美</p>
            <p className="text-green-600 text-sm">今天还没有品茶记录，开始你的茶道之旅吧</p>
          </div>
        </CardContent>
      </Card>

      {/* 最近品茶记录 */}
      <div>
        <h3 className="text-xl font-semibold text-green-800 mb-4">最近品茶记录</h3>
        <div className="grid gap-4">
          {recentTeas.map((tea) => (
            <Card key={tea.id} className="bg-white/80 backdrop-blur-sm border-green-100 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <h4 className="text-lg font-semibold text-green-800">{tea.name}</h4>
                    <Badge className={getTypeColor(tea.type)}>{tea.type}</Badge>
                  </div>
                  <div className="flex items-center space-x-1">
                    {renderStars(tea.rating)}
                  </div>
                </div>
                <p className="text-sm text-green-600">{tea.date}</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <Nose className="w-4 h-4 text-green-600" />
                    <div>
                      <p className="text-xs text-green-600">香气</p>
                      <p className="text-sm font-medium text-green-800">{tea.aroma}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Coffee className="w-4 h-4 text-green-600" />
                    <div>
                      <p className="text-xs text-green-600">口感</p>
                      <p className="text-sm font-medium text-green-800">{tea.taste}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4 text-green-600" />
                    <div>
                      <p className="text-xs text-green-600">汤色</p>
                      <p className="text-sm font-medium text-green-800">{tea.color}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex space-x-2">
                  <Button variant="outline" size="sm" className="text-green-600 border-green-200 hover:bg-green-50">
                    查看详情
                  </Button>
                  <Button variant="outline" size="sm" className="text-green-600 border-green-200 hover:bg-green-50">
                    分享记录
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 品茶心得 */}
      <Card className="bg-white/80 backdrop-blur-sm border-green-100">
        <CardHeader>
          <CardTitle className="text-green-800">今日茶语</CardTitle>
        </CardHeader>
        <CardContent>
          <blockquote className="text-green-700 italic text-center py-4 border-l-4 border-green-300 pl-4">
            "品茶如品人生，需要的是一份宁静致远的心境，在茶香中寻找内心的平静与智慧。"
          </blockquote>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeaJournal;
