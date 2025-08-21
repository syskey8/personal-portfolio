
"use client";

import React, { useState }from "react";
import Image from "next/image";
import { photos } from "@/lib/data";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function PhotographyGallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof photos)[0] | null>(null);

  return (
    <Dialog>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {photos.map((photo) => (
          <DialogTrigger key={photo.id} asChild onClick={() => setSelectedImage(photo)}>
            <Card className="overflow-hidden cursor-pointer transition-transform hover:scale-105">
              <CardContent className="p-0">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={200}
                  height={200}
                  className="object-cover aspect-square w-full h-full"
                  data-ai-hint={photo.aiHint}
                />
              </CardContent>
            </Card>
          </DialogTrigger>
        ))}
      </div>
      {selectedImage && (
        <DialogContent className="max-w-3xl p-0 border-0">
           <DialogHeader>
            <VisuallyHidden>
              <DialogTitle>Image Lightbox</DialogTitle>
              <DialogDescription>
                Viewing an enlarged image from the gallery: {selectedImage.alt}
              </DialogDescription>
            </VisuallyHidden>
          </DialogHeader>
            <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="rounded-lg object-contain w-full h-full"
                data-ai-hint={selectedImage.aiHint}
            />
        </DialogContent>
      )}
    </Dialog>
  );
}

    