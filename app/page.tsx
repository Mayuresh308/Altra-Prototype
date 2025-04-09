// import { Suspense } from 'react';
// import MarketOverview from '@/components/MarketOverview';
// import TradingDashboard from '@/components/TradingDashboard';
// import { StockChart } from '@/components/StockChart';
// import { ConnectionStatus } from '@/components/ConnectionStatus';

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-background">
//       <ConnectionStatus />
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-4xl font-bold mb-8 bg">Altra Trading Platform</h1>
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//           <div className="lg:col-span-8">
//             <Suspense fallback={<div>Loading market data...</div>}>
//               <MarketOverview />
//             </Suspense>
//             <div className="mt-8">
//               <Suspense fallback={<div>Loading chart...</div>}>
//                 <StockChart />
//               </Suspense>
//             </div>
//           </div>
//           <div className="lg:col-span-4">
//             <Suspense fallback={<div>Loading trading dashboard...</div>}>
//               <TradingDashboard />
//             </Suspense>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }







'use client';

import Image from 'next/image';
import { Suspense } from 'react';
import MarketOverview from '@/components/MarketOverview';
import TradingDashboard from '@/components/TradingDashboard';
import { StockChart } from '@/components/StockChart';
import { ConnectionStatus } from '@/components/ConnectionStatus';

export default function Home() {
  return (
    <main className="min-h-screen bg-background scroll-smooth">
      {/* Hero Section with Fullscreen Image */}
      <section className="relative h-screen w-full">
        <Image
          src="https://images.pexels.com/photos/7567520/pexels-photo-7567520.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Trading Hero"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-5xl font-bold mb-4">Welcome to Altra</h1>
          <p className="text-white text-lg max-w-xl">
            A modern trading simulation platform built for performance, charts, and real-time data.
          </p>
         
        </div>
      </section>

      {/* Dashboard Section */}
      <section id="dashboard" className="bg-background">
        <ConnectionStatus />
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-4xl font-bold mb-8">Altra Trading Platform</h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <Suspense fallback={<div>Loading market data...</div>}>
                <MarketOverview />
              </Suspense>
              <div className="mt-8">
                <Suspense fallback={<div>Loading chart...</div>}>
                  <StockChart />
                </Suspense>
              </div>
            </div>
            <div className="lg:col-span-4">
              <Suspense fallback={<div>Loading trading dashboard...</div>}>
                <TradingDashboard />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
