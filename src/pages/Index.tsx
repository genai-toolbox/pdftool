import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PdfConverter } from "@/components/PdfConverter";
import { PdfReplacer } from "@/components/PdfReplacer";
import { FileImage, Replace, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
            <Sparkles className="w-4 h-4" />
            PDF 簡報工具箱
          </div>
          <h1 className="text-3xl font-bold gradient-text">
            NotebookLM 簡報工具
          </h1>
          <p className="text-muted-foreground">
            高品質 PDF 轉圖檔 & 智慧頁面替換
          </p>
        </div>

        {/* Main Card */}
        <div className="glass-card overflow-hidden transition-shadow duration-300">
          <Tabs defaultValue="convert" className="w-full">
            <TabsList className="rounded-b-none border-b border-border/50">
              <TabsTrigger value="convert" className="gap-2">
                <FileImage className="w-4 h-4" />
                PDF 轉高畫質圖檔
              </TabsTrigger>
              <TabsTrigger value="replace" className="gap-2">
                <Replace className="w-4 h-4" />
                PDF 頁面替換
              </TabsTrigger>
            </TabsList>
            <TabsContent value="convert">
              <PdfConverter />
            </TabsContent>
            <TabsContent value="replace">
              <PdfReplacer />
            </TabsContent>
          </Tabs>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          所有檔案處理皆在本機完成，不會上傳至任何伺服器
        </p>
      </div>
    </div>
  );
};

export default Index;
