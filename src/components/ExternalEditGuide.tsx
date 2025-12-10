import { ExternalLink, Sparkles, Paintbrush, Eraser, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const tools = [
  {
    name: "Gemini Nano Banana Pro",
    description: "使用 AI 重新生成整張圖片，適合需要大幅度修改的頁面",
    icon: Sparkles,
    url: "https://aistudio.google.com/",
    color: "from-purple-500 to-pink-500",
    tips: ["上傳 PNG 圖片", "描述你想要的修改", "下載生成的新圖片"],
  },
  {
    name: "Lovart.ai",
    description: "專業的 AI 圖片編輯工具，支援「編輯文字」功能直接修改圖片中的文字",
    icon: Paintbrush,
    url: "https://www.lovart.ai/",
    color: "from-blue-500 to-cyan-500",
    tips: ["上傳需要修改的頁面", "使用「編輯文字」功能修改文字內容", "匯出高畫質圖片"],
  },
  {
    name: "Canva",
    description: "使用魔術橡皮擦、背景移除等功能進行細節調整",
    icon: Eraser,
    url: "https://www.canva.com/",
    color: "from-teal-500 to-green-500",
    tips: ["將圖片拖入 Canva 編輯器", "使用魔術橡皮擦移除不需要的元素", "調整文字、顏色或版面"],
  },
];

export const ExternalEditGuide = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h3 className="text-lg font-semibold text-foreground">
          使用外部工具編輯圖片
        </h3>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          選擇以下任一工具，對第一步驟匯出的 PNG 圖片進行修改
        </p>
      </div>

      {/* Video Tutorial Placeholder */}
      <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 border border-border/50">
        <div className="aspect-video flex items-center justify-center">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <Play className="w-8 h-8 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">教學影片即將推出</p>
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid gap-4">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="group relative rounded-xl border border-border/50 bg-card/50 p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center shadow-lg`}
              >
                <tool.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-semibold text-foreground">{tool.name}</h4>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-1.5 text-primary hover:text-primary"
                    onClick={() => window.open(tool.url, "_blank")}
                  >
                    前往
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">{tool.description}</p>

                {/* Tips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {tool.tips.map((tip, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1.5 text-xs bg-muted/50 text-muted-foreground px-2.5 py-1 rounded-full"
                    >
                      <span className="w-4 h-4 rounded-full bg-primary/20 text-primary text-[10px] font-medium flex items-center justify-center">
                        {index + 1}
                      </span>
                      {tip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="text-center">
        <p className="text-xs text-muted-foreground">
          編輯完成後，請將修改好的圖片儲存為 PNG 或 JPG 格式，以便在第三步驟中使用
        </p>
      </div>
    </div>
  );
};
