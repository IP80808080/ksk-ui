import Image from "next/image";

export default function CreatorInfo() {
  return (
    <div className="flex flex-col items-center mb-12 text-center">
      <div className="relative w-32 h-32 mb-4 overflow-hidden rounded-full">
        <Image
          src="/images/PhotoCV2.jpg"
          alt="Creator's profile"
          height={1200}
          width={1200}
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Kamlesh Kasambe</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        I&#39;ve crafted these email signatures using Adobe Photoshop, combining
        my design skills with attention to detail.
      </p>
    </div>
  );
}
