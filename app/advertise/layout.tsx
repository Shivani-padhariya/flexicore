import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advertise with Us | Engitech Expo",
  description: "Connect with thousands of industry professionals and decision-makers in the engineering and technology sector through Engitech Expo.",
  openGraph: {
    title: "Advertise with Us | Engitech Expo",
    description: "Grow your brand by connecting with our professional engineering and technology audience.",
    images: ["/flexicore-logo.webp"],
  },
};

export default function AdvertiseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
