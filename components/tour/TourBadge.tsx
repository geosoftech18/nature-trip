"use client";

import { motion } from "framer-motion";
import { Flame, Award, Sparkles, Clock } from "lucide-react";

type BadgeType = "Most Booked" | "Trending" | "Best Value" | "Limited Spots";

interface TourBadgeProps {
  type: BadgeType;
}

const badgeConfig: Record<BadgeType, { icon: typeof Flame; className: string }> = {
  "Most Booked": {
    icon: Award,
    className: "bg-gradient-gold text-primary-foreground",
  },
  "Trending": {
    icon: Flame,
    className: "bg-gradient-to-r from-primary to-green-600 text-foreground",
  },
  "Best Value": {
    icon: Sparkles,
    className: "bg-gradient-to-r from-emerald-500 to-teal-500 text-foreground",
  },
  "Limited Spots": {
    icon: Clock,
    className: "bg-gradient-to-r from-rose-500 to-pink-500 text-foreground",
  },
};

const TourBadge = ({ type }: TourBadgeProps) => {
  const config = badgeConfig[type];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-sans font-semibold uppercase tracking-wider shadow-lg ${config.className}`}
    >
      <Icon className="w-3.5 h-3.5" />
      {type}
    </motion.div>
  );
};

export default TourBadge;
