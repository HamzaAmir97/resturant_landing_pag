import { cn } from "@/lib/utils"




export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className={cn(
          "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center mb-8",
          "bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
        )}>
          Welcome to Your App
        </h1>
        <p className="text-center text-muted-foreground">
          Get started by editing app/page.tsx
        </p>
      </div>
    </main>
  )
}