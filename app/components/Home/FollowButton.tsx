import { Share2 } from "lucide-react";

export default function FollowButton() {
    return (
        <button className="flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white">
            Follow
            <Share2 size={16} strokeWidth={1.75} />
        </button>
    );
}
