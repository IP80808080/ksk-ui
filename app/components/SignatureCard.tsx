import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

interface SignatureCardProps {
  title: string;
  imageUrl: string;
  hasGDriveLink?: boolean;
  isHovered: boolean;
}

export default function SignatureCard({
  title,
  imageUrl,
  hasGDriveLink,
  isHovered,
}: SignatureCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl bg-white">
      <CardContent className="p-0 relative">
        <div className="relative h-64">
          <Image
            src={imageUrl}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
          />
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-white text-center px-4">
              {title}
            </h3>
          </motion.div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center items-center p-4 bg-gray-50">
        {hasGDriveLink ? (
          <Button variant="default" className="w-full">
            <a
              href="https://drive.google.com/file/d/1bbrY3l1Bg7i7b93LMV4IHHgsX-_6Ie0R/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              Download PSD
            </a>
          </Button>
        ) : (
          <p className="text-gray-600 text-sm italic">Preview Only</p>
        )}
      </CardFooter>
    </Card>
  );
}
