'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {
  images: string[];
  className?: string;
};

function MotionGallery({ images, className }: Props) {
  return (
    <div className={`grid md:grid-cols-3 gap-6 mt-10 ${className}`}>
      {images.map((src) => (
        <div key={src} className="relative overflow-hidden rounded-xl group">
          <Image
            src={src}
            alt=""
            width={600}
            height={400}
            className="
              w-full h-full object-cover
              transition-transform duration-300
              group-hover:scale-105
            "
          />
        </div>
      ))}
    </div>
  );
}

export { MotionGallery };
