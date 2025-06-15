
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus, BookOpen, Leaf, Users, Settings } from 'lucide-react';

interface OnboardingGuideProps {
  onClose: () => void;
}

const OnboardingGuide = ({ onClose }: OnboardingGuideProps) => {
  return (
    <Dialog open={true} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-green-800 flex items-center">
            <Leaf className="w-6 h-6 mr-2 text-green-600" />
            欢迎来到茶韵记
          </DialogTitle>
          <DialogDescription>
            这是一个简单的引导，帮助您快速开始使用。
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-start space-x-4">
            <div className="bg-green-100 p-2 rounded-full">
              <Plus className="w-5 h-5 text-green-700" />
            </div>
            <div>
              <h3 className="font-semibold text-green-800">记录品茶</h3>
              <p className="text-sm text-gray-600">点击右上角的 "记录品茶" 按钮，随时记录您的品茶心得。</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-green-100 p-2 rounded-full">
              <BookOpen className="w-5 h-5 text-green-700" />
            </div>
            <div>
              <h3 className="font-semibold text-green-800">品茶日记</h3>
              <p className="text-sm text-gray-600">在 "品茶日记" 标签页，您可以查看所有品茶记录。</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-green-100 p-2 rounded-full">
                <Leaf className="w-5 h-5 text-green-700" />
            </div>
            <div>
              <h3 className="font-semibold text-green-800">茶叶库</h3>
              <p className="text-sm text-gray-600">探索 "茶叶库"，了解不同种类的茶叶知识。</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-green-100 p-2 rounded-full">
              <Users className="w-5 h-5 text-green-700" />
            </div>
            <div>
              <h3 className="font-semibold text-green-800">茶友圈</h3>
              <p className="text-sm text-gray-600">在 "茶友圈" 与其他茶友分享和交流。</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-green-100 p-2 rounded-full">
              <Settings className="w-5 h-5 text-green-700" />
            </div>
            <div>
              <h3 className="font-semibold text-green-800">个人中心</h3>
              <p className="text-sm text-gray-600">管理您的个人资料和查看统计数据。</p>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={onClose} className="bg-green-600 hover:bg-green-700">我明白了</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default OnboardingGuide;
