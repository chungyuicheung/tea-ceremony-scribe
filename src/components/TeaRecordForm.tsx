
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { X, Star, Camera, Clock, Thermometer, Droplets } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface TeaRecordFormProps {
  onClose: () => void;
}

const TeaRecordForm = ({ onClose }: TeaRecordFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    origin: "",
    date: new Date().toISOString().split('T')[0],
    brewTime: [3],
    temperature: [85],
    rating: [4],
    aroma: "",
    taste: "",
    color: "",
    notes: "",
    mood: "",
    weather: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Tea record submitted:", formData);
    toast({
      title: "品茶记录已保存",
      description: "你的品茶体验已成功记录到茶韵记中",
    });
    onClose();
  };

  const teaTypes = [
    "绿茶", "红茶", "乌龙茶", "白茶", "黑茶", "黄茶", "花茶", "普洱茶"
  ];

  const moods = [
    "宁静", "愉悦", "思考", "放松", "专注", "感悟", "怀念", "期待"
  ];

  const weathers = [
    "晴朗", "多云", "阴天", "小雨", "大雨", "雪天", "雾天", "微风"
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-green-800 flex items-center space-x-2">
            <span>记录品茶时光</span>
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 基本信息 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">茶叶名称</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="请输入茶叶名称"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="type">茶叶类型</Label>
                <Select value={formData.type} onValueChange={(value) => setFormData({...formData, type: value})}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="选择茶叶类型" />
                  </SelectTrigger>
                  <SelectContent>
                    {teaTypes.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="origin">产地</Label>
                <Input
                  id="origin"
                  value={formData.origin}
                  onChange={(e) => setFormData({...formData, origin: e.target.value})}
                  placeholder="茶叶产地"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="date">品茶日期</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="mt-1"
                />
              </div>
            </div>

            {/* 冲泡参数 */}
            <div className="space-y-4">
              <h4 className="font-semibold text-green-800 flex items-center space-x-2">
                <Droplets className="w-4 h-4" />
                <span>冲泡参数</span>
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>冲泡时间: {formData.brewTime[0]}分钟</span>
                  </Label>
                  <Slider
                    value={formData.brewTime}
                    onValueChange={(value) => setFormData({...formData, brewTime: value})}
                    max={10}
                    min={0.5}
                    step={0.5}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label className="flex items-center space-x-2">
                    <Thermometer className="w-4 h-4" />
                    <span>水温: {formData.temperature[0]}°C</span>
                  </Label>
                  <Slider
                    value={formData.temperature}
                    onValueChange={(value) => setFormData({...formData, temperature: value})}
                    max={100}
                    min={60}
                    step={5}
                    className="mt-2"
                  />
                </div>
              </div>
            </div>

            {/* 品鉴记录 */}
            <div className="space-y-4">
              <h4 className="font-semibold text-green-800">品鉴记录</h4>
              
              <div>
                <Label className="flex items-center space-x-2">
                  <Star className="w-4 h-4" />
                  <span>整体评分: {formData.rating[0]}星</span>
                </Label>
                <Slider
                  value={formData.rating}
                  onValueChange={(value) => setFormData({...formData, rating: value})}
                  max={5}
                  min={1}
                  step={0.5}
                  className="mt-2"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="aroma">香气描述</Label>
                  <Input
                    id="aroma"
                    value={formData.aroma}
                    onChange={(e) => setFormData({...formData, aroma: e.target.value})}
                    placeholder="如：清香淡雅"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="taste">口感描述</Label>
                  <Input
                    id="taste"
                    value={formData.taste}
                    onChange={(e) => setFormData({...formData, taste: e.target.value})}
                    placeholder="如：甘甜回甘"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="color">汤色描述</Label>
                  <Input
                    id="color"
                    value={formData.color}
                    onChange={(e) => setFormData({...formData, color: e.target.value})}
                    placeholder="如：嫩绿明亮"
                    className="mt-1"
                  />
                </div>
              </div>
            </div>

            {/* 情境记录 */}
            <div className="space-y-4">
              <h4 className="font-semibold text-green-800">品茶情境</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="mood">当时心情</Label>
                  <Select value={formData.mood} onValueChange={(value) => setFormData({...formData, mood: value})}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="选择心情" />
                    </SelectTrigger>
                    <SelectContent>
                      {moods.map((mood) => (
                        <SelectItem key={mood} value={mood}>{mood}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="weather">天气状况</Label>
                  <Select value={formData.weather} onValueChange={(value) => setFormData({...formData, weather: value})}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="选择天气" />
                    </SelectTrigger>
                    <SelectContent>
                      {weathers.map((weather) => (
                        <SelectItem key={weather} value={weather}>{weather}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* 品茶心得 */}
            <div>
              <Label htmlFor="notes">品茶心得</Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                placeholder="记录这次品茶的感悟与体会..."
                rows={4}
                className="mt-1"
              />
            </div>

            {/* 添加照片 */}
            <div>
              <Label className="flex items-center space-x-2">
                <Camera className="w-4 h-4" />
                <span>添加照片</span>
              </Label>
              <div className="mt-2 border-2 border-dashed border-green-200 rounded-lg p-8 text-center">
                <Camera className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <p className="text-sm text-green-600">点击添加茶叶或茶汤照片</p>
              </div>
            </div>

            {/* 提交按钮 */}
            <div className="flex space-x-4 pt-4">
              <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700">
                保存记录
              </Button>
              <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                取消
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeaRecordForm;
