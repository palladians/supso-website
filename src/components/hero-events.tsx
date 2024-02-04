import { cn } from "@/lib/utils";
import { Card } from "./ui/card";

const Event = ({
  className,
  emoji,
  eventName,
  channel,
  time,
}: {
  className?: string;
  emoji: string;
  eventName: string;
  channel: string;
  time: string;
}) => {
  return (
    <Card
      className={cn(
        "animate-in shadow-2xl rounded-full fade-in zoom-in-75 flex w-full py-4 px-8 items-center gap-8 duration-500 fill-mode-both direction-alternate",
        className
      )}
    >
      <div className="text-5xl">{emoji}</div>
      <div className="flex flex-col justify-center gap-2">
        <p>
          {eventName} in #{channel}
        </p>
        <p className="text-sm">{time}</p>
      </div>
    </Card>
  );
};

export const HeroEvents = () => {
  return (
    <div className="flex flex-col gap-6 items-center">
      <Event
        emoji="🌉"
        eventName="account_created"
        channel="mobile_app"
        time="Just now"
      />
      <Event
        emoji="🎆"
        className="delay-500"
        eventName="subscription_created"
        channel="stripe"
        time="2 min ago"
      />
      <Event
        emoji="📊"
        className="delay-1000"
        eventName="csv_exported"
        channel="dashboard"
        time="5 min ago"
      />
    </div>
  );
};
