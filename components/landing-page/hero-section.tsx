"use client"
import {Button} from '@/components/ui/button'
import { Badge } from '../ui/badge'
import Link from 'next/link'
import { ArrowRightIcon, Sparkle, SparklesIcon, Users,RocketIcon, EyeIcon } from 'lucide-react'
import StatsCard from './stats-card'
const statsData=[
    {icon:RocketIcon,
     value:"2.5k",
     label:"Projects Shared"
    },
    {icon:Users,
        value:'10k+',
        label:'Active Creator',
        hasBorder:true
    },
    {
        icon:EyeIcon,
        value:'50k+',
        label:'Monthly Visitors'
    }

]
const LiveBatch = () => {
    return (
        <>
        <Badge variant={'outline'} className='px-4 py-4 mb-8 text-sm backdrop-blue-sm'>
        <span className='h-2 w-2 flex relative'>
            <span className='animate-ping absolute inline-flex rounded-full h-full w-full bg-primary opacity-75 '></span>
            <span className='relative inline-flex rounded-full h-2 w-2 bg-primary'></span>
        </span>
        <span className='text-muted-foreground'>
            Join thousands of creators sharing their work
          </span>  
          </Badge>
        </>
    )
}
function HeroSection() {
  return (
   <section className='relative overflow-hidden bg-linear-to-b from-background via-background to-muted/20 '>
    <div className='wrapper'>
        <div className='flex flex-col items-center justify-center lg:py-24 12 text-center'>

    <LiveBatch/>
    <h1 className='text-5xl sm:text-6xl lg:text-7xl mb-8 font-bold tracking-tight max-w-5xl'>Share What You&apos;ve Built, Discover What &apos;s Launching</h1>
    <p className='text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed'>A community platform for creators to showcase their apps, AI tools, SaaS products, and creative projects. Authentic launches, real builders, genuine feedback.</p>
    <div className='flex flex-col sm:flex-row mb-16 gap-4'>
    <Button  size='lg' className='text-base px-8 shadow' render={<Link href='/submit'/>}>  
    <SparklesIcon className='size-4'/>
      Share your Project
    </Button>
    <Button  size='lg' className='text-base px-8 shadow' render={<Link href='/explore'/>} variant={'secondary'}>
    Explore Projects 
    <ArrowRightIcon className='size-5'/>
        </Button>  
   
    
    </div>
     <div className='grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8'>
    {statsData.map((m)=>(<StatsCard key={m.label} {...m}/>))}

    </div>
    </div>
    </div>
   </section>
  )
}

export default HeroSection