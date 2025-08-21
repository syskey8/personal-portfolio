import { certifications } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";
import Link from "next/link";

export function CertificationsDisplay() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Certifications & Achievements</CardTitle>
        <CardDescription>
          A collection of my professional certifications.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {certifications.map((cert) => (
          <Button
            key={cert.id}
            variant="outline"
            asChild
            className="h-auto w-full justify-start text-left"
          >
            <Link href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
              <Award className="mr-3 h-5 w-5 flex-shrink-0" />
              <div className="flex-1">
                <p className="font-semibold">{cert.title}</p>
                <p className="text-sm text-muted-foreground">{cert.issuer} &middot; {cert.date}</p>
              </div>
              <ExternalLink className="ml-2 h-4 w-4 text-muted-foreground" />
            </Link>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
