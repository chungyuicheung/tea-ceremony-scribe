
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, BookOpen, Users, Settings, Leaf, Clock, Star, Camera } from "lucide-react";
import TeaRecordForm from "@/components/TeaRecordForm";
import TeaLibrary from "@/components/TeaLibrary";
import TeaCommunity from "@/components/TeaCommunity";
import TeaJournal from "@/components/TeaJournal";

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

const Index = () => {
  const [showRecordForm, setShowRecordForm] = useState(false);
  const [teaRecords, setTeaRecords] = useState<TeaRecord[]>([
    {
      id: 1,
      name: "龙井茶",
      type: "绿茶",
      date: "2024-06-15",
      rating: 4.5,
      aroma: "清香淡雅",
      taste: "甘甜回甘",
      color: "嫩绿明亮"
    },
    {
      id: 2,
      name: "铁观音",
      type: "乌龙茶",
      date: "2024-06-14",
      rating: 5,
      aroma: "兰花香",
      taste: "醇厚甘润",
      color: "金黄透亮"
    },
    {
      id: 3,
      name: "普洱熟茶",
      type: "黑茶",
      date: "2024-06-13",
      rating: 4,
      aroma: "陈香醇厚",
      taste: "绵柔甘醇",
      color: "红褐透亮"
    }
  ]);

  const addTeaRecord = (formData: any) => {
    const newRecord: TeaRecord = {
      id: Date.now(), // Simple ID generation
      name: formData.name,
      type: formData.type,
      date: formData.date,
      rating: formData.rating[0],
      aroma: formData.aroma,
      taste: formData.taste,
      color: formData.color
    };
    
    setTeaRecords(prev => [newRecord, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center shrink-0">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg sm:text-2xl font-bold text-green-800">茶韵记</h1>
                <p className="text-xs sm:text-sm text-green-600">品茶·记录·分享</p>
              </div>
            </div>
            <Button 
              onClick={() => setShowRecordForm(true)}
              className="bg-green-600 hover:bg-green-700 text-white w-10 h-10 p-0 sm:w-auto sm:h-auto sm:px-4 sm:py-2 flex items-center justify-center rounded-full sm:rounded-md shrink-0"
            >
              <Plus className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">记录品茶</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Tabs defaultValue="journal" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-8 bg-white/50 backdrop-blur-sm h-auto">
            <TabsTrigger value="journal" className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm py-2 sm:py-0">
              <BookOpen className="w-4 h-4" />
              <span>品茶日记</span>
            </TabsTrigger>
            <TabsTrigger value="library" className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm py-2 sm:py-0">
              <Leaf className="w-4 h-4" />
              <span>茶叶库</span>
            </TabsTrigger>
            <TabsTrigger value="community" className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm py-2 sm:py-0">
              <Users className="w-4 h-4" />
              <span>茶友圈</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm py-2 sm:py-0">
              <Settings className="w-4 h-4" />
              <span>个人中心</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="journal">
            <TeaJournal recentTeas={teaRecords} />
          </TabsContent>

          <TabsContent value="library">
            <TeaLibrary />
          </TabsContent>

          <TabsContent value="community">
            <TeaCommunity />
          </TabsContent>

          <TabsContent value="profile">
            <div className="grid gap-6">
              <Card className="bg-white/80 backdrop-blur-sm border-green-100">
                <CardHeader>
                  <CardTitle className="text-green-800">个人统计</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-700">{teaRecords.length}</div>
                      <div className="text-sm text-green-600">品茶记录</div>
                    </div>
                    <div className="text-center p-4 bg-amber-50 rounded-lg">
                      <div className="text-2xl font-bold text-amber-700">45</div>
                      <div className="text-sm text-amber-600">收藏茶叶</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-700">23</div>
                      <div className="text-sm text-orange-600">茶器收藏</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-700">12</div>
                      <div className="text-sm text-blue-600">茶友关注</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {showRecordForm && (
        <TeaRecordForm 
          onClose={() => setShowRecordForm(false)} 
          onSubmit={addTeaRecord}
        />
      )}
    </div>
  );
};

export default Index;
