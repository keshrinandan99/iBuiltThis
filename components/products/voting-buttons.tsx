"use client"
import { ChevronDown, ChevronUp } from "lucide-react";
import { useOptimistic, useTransition } from "react"
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export const VotingButtons=({hasVoted,voteCount:initialVoteCount,productId}:{hasVoted?:boolean,voteCount:number,productId:number})=>{
    const[optimisticCount,setOptimisticCount]=useOptimistic(initialVoteCount,(currentCount,change:number)=>Math.max(0,currentCount+change));
    const [isPending,startTransition]=useTransition();
    const handleUpVote=async()=>{
        startTransition(()=>{
            setOptimisticCount(1);
            //update votecount to db 
        })
    }
    const handleDownVote=async()=>{
        startTransition(()=>{
            setOptimisticCount(-1);
            //update db
        })
    }
    return(
        <>
        <div className="flex flex-cols gap-1 shrink-0 items-center" onClick={(e)=>{
            e.preventDefault();
            e.stopPropagation();
        }}>
            <Button onClick={handleUpVote} disabled={isPending} variant="ghost" size="icon-sm" className={cn("h-8 w-8 text-primary",hasVoted?"hover:text-destructive":"opacity-50 cursor-not-allowed")}>
                <ChevronUp className="size-5"/>
            </Button>
            <span className="text-sm font-semibold transition-colors text-foreground">{optimisticCount}</span>
            <Button onClick={handleDownVote} disabled={isPending} variant="ghost" size="icon-sm" className={cn("h-8 w-8 text-primary",hasVoted?"hover:text-destructive":" opacity-50 cursor-not-allowed")}>
            <ChevronDown size={5}/>

            </Button>


        </div>
        </>
    )
}