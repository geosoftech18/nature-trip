"use client";

import { motion } from "framer-motion";
import { Star, TrendingUp, Coins } from "lucide-react";

interface SmartChartProps {
  rating: number;
  popularityScore: number;
  valueForMoney: number;
  isVisible: boolean;
}

const SmartChart = ({ rating, popularityScore, valueForMoney, isVisible }: SmartChartProps) => {
  const metrics = [
    {
      label: "Guest Rating",
      value: rating,
      maxValue: 5,
      percentage: (rating / 5) * 100,
      icon: Star,
      displayValue: rating.toFixed(1),
    },
    {
      label: "Popularity",
      value: popularityScore,
      maxValue: 100,
      percentage: popularityScore,
      icon: TrendingUp,
      displayValue: `${popularityScore}%`,
    },
    {
      label: "Value Score",
      value: valueForMoney,
      maxValue: 100,
      percentage: valueForMoney,
      icon: Coins,
      displayValue: `${valueForMoney}%`,
    },
  ];

  return (
    <div className="space-y-3">
      <h4 className="text-xs font-sans font-semibold uppercase tracking-widest text-primary/80">
        Smart Performance Chart
      </h4>
      <div className="space-y-2.5">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, x: -10 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="group"
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <metric.icon className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-sans text-muted-foreground">
                  {metric.label}
                </span>
              </div>
              <span className="text-xs font-sans font-semibold text-foreground">
                {metric.displayValue}
              </span>
            </div>
            <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-gold rounded-full"
                initial={{ width: 0 }}
                animate={isVisible ? { width: `${metric.percentage}%` } : { width: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SmartChart;
