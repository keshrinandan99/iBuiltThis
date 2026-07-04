import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export default function StatsCard({
    icon: Icon,
    value,
    label,
    hasBorder,
}: {
    icon: LucideIcon;
    value: string;
    label: string;
    hasBorder?: boolean;
}) {
    return (
        <div
            className={cn(
                "flex min-h-[88px] flex-col items-center justify-center gap-2 px-2 text-center sm:px-4",
                hasBorder && "border-x border-border/50"
            )}
        >
            <div className="flex items-center justify-center gap-2">
                <Icon className="size-4 shrink-0 text-primary/70 sm:size-5" />
                <p className="text-2xl font-bold leading-none sm:text-3xl lg:text-4xl">{value}</p>
            </div>
            <p className="text-xs leading-tight text-muted-foreground sm:text-sm">{label}</p>
        </div>
    );
}