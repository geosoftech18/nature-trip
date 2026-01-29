"use client";

import { motion } from "framer-motion";
import { Users, MessageSquare, BadgeCheck } from "lucide-react";

interface TrustIndicatorsProps {
  totalBookings: number;
  totalReviews: number;
  verified: boolean;
}

const TrustIndicators = ({ totalBookings, totalReviews, verified }: TrustIndicatorsProps) => {
  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num.toString();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="flex items-center gap-4 text-xs font-sans text-muted-foreground"
    >
      <div className="flex items-center gap-1.5">
        <Users className="w-3.5 h-3.5 text-primary" />
        <span>{formatNumber(totalBookings)} booked</span>
      </div>
      <div className="flex items-center gap-1.5">
        <MessageSquare className="w-3.5 h-3.5 text-primary" />
        <span>{formatNumber(totalReviews)} reviews</span>
      </div>
      {verified && (
        <div className="flex items-center gap-1.5 text-success">
          <BadgeCheck className="w-3.5 h-3.5" />
          <span>Verified</span>
        </div>
      )}
    </motion.div>
  );
};

export default TrustIndicators;
