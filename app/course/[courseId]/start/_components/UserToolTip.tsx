import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import React from "react";

const UserToolTip = ({
  username,
  userProfileImage,
}: {
  username: string;
  userProfileImage: string;
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex justify-center items-center gap-2">
            This Course is by -
            <Badge className="cursor-pointer">{username}</Badge>
          </div>
        </TooltipTrigger>
        <TooltipContent variant={"secondary"} className="p-2">
          <div className="flex items-center gap-2">
            <Image
              src={userProfileImage || "/userProfile.png"}
              alt={username || "AI Course Generator"}
              width={50}
              height={50}
              priority
              className="rounded-full"
            />
            <div>{username}</div>
          </div>
          <TooltipArrow />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default UserToolTip;
