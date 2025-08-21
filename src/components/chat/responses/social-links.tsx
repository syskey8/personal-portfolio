import { socialLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export function SocialLinks() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Connect with me</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {socialLinks.map((link) => (
          <Button key={link.name} variant="outline" asChild className="justify-start">
            <Link href={link.url} target="_blank" rel="noopener noreferrer">
              <link.icon className="mr-2 h-4 w-4" />
              {link.name}
            </Link>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
