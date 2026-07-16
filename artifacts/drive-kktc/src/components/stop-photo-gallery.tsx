import { useEffect, useState } from "react";
import { Camera, Images } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface StopPhotoGalleryProps {
  title: string;
  photos: string[];
}

export function StopPhotoGallery({ title, photos }: StopPhotoGalleryProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [activePhoto, setActivePhoto] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateActivePhoto = () => setActivePhoto(api.selectedScrollSnap());
    updateActivePhoto();
    api.on("select", updateActivePhoto);
    api.on("reInit", updateActivePhoto);

    return () => {
      api.off("select", updateActivePhoto);
      api.off("reInit", updateActivePhoto);
    };
  }, [api]);

  if (photos.length === 0) return null;

  return (
    <section className="mb-6" aria-label={`${title} photo gallery`}>
      <Carousel setApi={setApi} opts={{ loop: photos.length > 1 }} className="group/gallery">
        <CarouselContent>
          {photos.map((photo, index) => (
            <CarouselItem key={photo}>
              <figure className="relative aspect-[16/10] overflow-hidden rounded-xl bg-muted">
                <img
                  src={photo}
                  alt={`${title} — view ${index + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover/gallery:scale-[1.025]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                <figcaption className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/45 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  <Camera className="h-3.5 w-3.5" />
                  Local view
                </figcaption>
                <span className="absolute bottom-3 right-3 rounded-full bg-black/45 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {activePhoto + 1} / {photos.length}
                </span>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
        {photos.length > 1 && (
          <>
            <CarouselPrevious className="left-3 h-9 w-9 border-white/40 bg-black/35 text-white shadow-lg hover:bg-black/55 hover:text-white" />
            <CarouselNext className="right-3 h-9 w-9 border-white/40 bg-black/35 text-white shadow-lg hover:bg-black/55 hover:text-white" />
          </>
        )}
      </Carousel>

      {photos.length > 1 && (
        <div className="mt-3 flex items-center gap-2 overflow-x-auto pb-1" aria-label="Choose a photo">
          <span className="sr-only"><Images /> Choose a photo</span>
          {photos.map((photo, index) => (
            <button
              key={`${photo}-thumbnail`}
              type="button"
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                index === activePhoto
                  ? "border-primary shadow-sm opacity-100"
                  : "border-transparent opacity-55 hover:opacity-100",
              )}
              aria-label={`Show photo ${index + 1} of ${title}`}
              aria-current={index === activePhoto ? "true" : undefined}
            >
              <img src={photo} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
