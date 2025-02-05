// import '@/app/ui/global.css';
// import { inter } from '@/app/ui/fonts';
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//     <body className={`${inter.className} antialiased`}>{children}</body>
//     </html>
//   );
// }


import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
