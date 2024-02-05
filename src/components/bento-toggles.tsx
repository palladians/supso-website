import { useState } from "react";
import { Card } from "./ui/card";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import ConfettiExplosion from "react-confetti-explosion";

export const BentoToggles = () => {
  const [exploding, setExploding] = useState(false);
  const [toggles, setToggles] = useState({
    friyay: true,
    forgotten: false,
    http: true,
  });
  const toggle = (name: keyof typeof toggles) => {
    setExploding(false);
    setExploding(true);
    setToggles({ ...toggles, [name]: !toggles[name] });
  };
  return (
    <div className="flex flex-col gap-2 relative">
      {exploding && (
        <ConfettiExplosion
          onComplete={() => setExploding(false)}
          className="absolute"
        />
      )}
      <Card className="flex p-4 items-center gap-4">
        <Switch
          id="friyay"
          checked={toggles.friyay}
          onCheckedChange={() => toggle("friyay")}
        />
        <Label htmlFor="friyay">
          The feature that killed the production env on Friday.
        </Label>
      </Card>
      <Card className="flex p-4 items-center gap-4">
        <Switch
          id="forgotten"
          checked={toggles.forgotten}
          onCheckedChange={() => toggle("forgotten")}
        />
        <Label htmlFor="forgotten">
          The feature you hardcoded and forgot to turn on.
        </Label>
      </Card>
      <Card className="flex p-4 items-center gap-4">
        <Switch
          id="http"
          checked={toggles.http}
          onCheckedChange={() => toggle("http")}
        />
        <Label htmlFor="http">Provider responding with HTTP 200 error.</Label>
      </Card>
    </div>
  );
};
