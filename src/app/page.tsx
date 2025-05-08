
import Image from 'next/image';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Check, Layers, ShieldCheck, Settings, BarChart3, Target, ScrollText, AlertTriangle, Gamepad2, BookOpen, TrendingUp } from 'lucide-react'; // Added Gamepad2, BookOpen, TrendingUp
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Leaderboard } from '@/components/leaderboard';
import { FaucetCard } from '@/components/faucet-card';
import { SwapCard } from '@/components/swap-card';
// import { RugPullCard } from '@/components/rug-pull-card'; // Removed RugPullCard import
import { ThemeToggleButton } from '@/components/theme-toggle-button';
import { SidebarNavigation } from '@/components/sidebar-navigation';
import { UserProfileCard } from '@/components/user-profile-card';
import { CryptoInfographicCard } from '@/components/crypto-infographic-card';
import { LpCard } from '@/components/lp-card';
import { ConnectWalletButton } from '@/components/connect-wallet-button';
import { DeFiDegenGame } from '@/components/defi-degen-game';

// Mock data - replace with actual data fetching
const quests = [
    { id: 1, title: "Mint Your First $CLASS Token", description: "Learn the basics of minting.", icon: <Gamepad2 />, completed: true, xp: 50 },
    { id: 2, title: "Swap $CLASS for $XP", description: "Understand token swapping.", icon: <BookOpen />, completed: false, xp: 75 },
    { id: 3, title: "Provide Liquidity", description: "Create your first LP.", icon: <Layers />, completed: false, xp: 100 },
    { id: 4, title: "Use the Faucet", description: "Get some free tokens.", icon: <ShieldCheck />, completed: false, xp: 50 },
    { id: 6, title: "Spot the Rug Pull", description: "Learn to identify risky projects.", icon: <Target />, completed: false, xp: 150 },
    { id: 7, title: "Survive Telegram Support", description: "Identify a common support scam.", icon: <AlertTriangle />, completed: false, xp: 100 },
    { id: 8, title: "Survive the Cycle", description: "Navigate the DeFi Degen Game.", icon: <Gamepad2 />, completed: false, xp: 250 },
];

export default function Home() {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar>
        <SidebarHeader className="p-4 flex justify-center w-full">
          <Image
              src="https://i.ibb.co/bMgZz4h4/a-logo-for-a-crypto-learning-and-gaming-applicatio.png"
              alt="ABC De-fi Logo"
              width={120}
              height={30}
              className="h-auto mx-auto"
              unoptimized
          />
        </SidebarHeader>
        <SidebarContent className="p-4 flex-1">
          <SidebarNavigation />
        </SidebarContent>
        <SidebarFooter className="p-4 flex items-center justify-between">
          <ThemeToggleButton />
        </SidebarFooter>
      </Sidebar>

      <SidebarInset className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-[57px] items-center gap-2 border-b bg-background px-4">
          <SidebarTrigger className="md:hidden" />
          <div className="flex-1 flex items-center justify-center gap-1 sm:gap-2">
            <TrendingUp className="h-5 w-5 text-primary hidden sm:inline-block" />
            <div className="hidden md:block text-base sm:text-lg md:text-xl font-semibold text-primary text-center font-sans flex-shrink min-w-0 bg-[#faf0dc] px-6 py-1 rounded-full shadow-md">
              Challenges and quests that increase your crypto IQ
            </div>
            <Gamepad2 className="h-5 w-5 text-primary hidden sm:inline-block" />
          </div>
          <ConnectWalletButton />
          <div className="ml-auto md:hidden">
            <ThemeToggleButton />
          </div>
        </header>

        <main className="flex-1 overflow-auto p-4 md:p-6 md:text-base">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <UserProfileCard className="col-span-1 h-full" />
            <CryptoInfographicCard className="col-span-1 h-full" />
            <Leaderboard className="col-span-1 h-full" />

            <DeFiDegenGame className="md:col-span-2 lg:col-span-3 h-full" questId={8} xpReward={250} /> {/* Ensure lg:col-span-3 is applied */}


            <FaucetCard className="col-span-1 h-full" questId={4} xpReward={50} />
            <SwapCard className="col-span-1 h-full" questId={2} xpReward={75} />
            <LpCard className="col-span-1 h-full" questId={3} xpReward={100} />

            {/* RugPullCard removed from here */}
            {/* <RugPullCard className="md:col-span-2 lg:col-span-3 h-full" questId={6} xpReward={150} /> */}


            <Card className="md:col-span-2 lg:col-span-3 h-full"> {/* Ensure lg:col-span-3 is applied */}
              <CardHeader>
                <CardTitle>Completed Quests</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {quests.filter(q => q.completed).map(quest => (
                    <li key={quest.id} className="flex items-center justify-between text-sm text-foreground">
                      <span className='flex items-center gap-2'>{quest.icon} {quest.title}</span>
                      <Check className="text-accent" size={16} />
                    </li>
                  ))}
                  {quests.filter(q => q.completed).length === 0 && (
                    <p className="text-sm text-foreground">No quests completed yet.</p>
                  )}
                </ul>
              </CardContent>
            </Card>
          </div>
        </main>
      </SidebarInset>
    </div>
  );
}
