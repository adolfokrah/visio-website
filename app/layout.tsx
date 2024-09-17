import localFont from "next/font/local";

const satoshiFonts = localFont({
  src: [
    {
      path: "../fonts/Satoshi-Black.woff2",
      weight: "900",
      style: "black",
    },
    {
      path: "../fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "../fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "../fonts/Satoshi-Regular.woff2",
      weight: "300",
      style: "regular",
    },
  ],
  display: "swap",
  variable: "--satoshi",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${satoshiFonts.variable} ${satoshiFonts.className}`}
    >
      <body>{children}</body>
    </html>
  );
}
