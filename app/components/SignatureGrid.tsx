import SignatureCard from "./SignatureCard";

const signatures = [
  {
    id: 1,
    title: "Professional",
    imageUrl: "/images/S13.jpg?height=200&width=400",
    hasGDriveLink: true,
  },
  {
    id: 2,
    title: "Creative",
    imageUrl: "/images/S12.jpg?height=200&width=400",
  },
  {
    id: 3,
    title: "Minimalist Gray",
    imageUrl: "/images/S5.jpg?height=200&width=400",
  },
  {
    id: 4,
    title: "Bold Red",
    imageUrl: "/images/S7.jpg?height=200&width=400",
  },
  {
    id: 5,
    title: "Elegant Pink",
    imageUrl: "/images/S1.jpg?height=200&width=400",
  },
  {
    id: 6,
    title: "Modern Purple",
    imageUrl: "/images/S6.jpg?height=200&width=400",
  },
];

export default function SignatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {signatures.map((signature) => (
        <SignatureCard key={signature.id} {...signature} isHovered={false} />
      ))}
    </div>
  );
}
