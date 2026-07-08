import { CalendarIcon, type LucideIcon } from "lucide-react";

type EmptyStateProps = {
    message?: string;
    
};

export default function EmptyState({ message = "No products found" }: EmptyStateProps) {
    return (
        <div className="empty-state flex flex-col items-center justify-center">
            
            <CalendarIcon className="mb-4 h-10 w-10 text-muted-foreground/60"/>
            <p className="text-lg text-muted-foreground">{message}</p>
        </div>
    );
}