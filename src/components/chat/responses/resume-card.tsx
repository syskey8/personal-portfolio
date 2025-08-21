import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText } from "lucide-react";

export function ResumeCard() {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center gap-4">
        <FileText className="h-8 w-8 text-primary" />
        <div>
            <CardTitle>My Resume</CardTitle>
            <CardDescription>Click the button to download my resume.</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <Button asChild className="w-full">
          <a href="/Tanmay-Resume.pdf" download="Tanmay-Resume.pdf">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
