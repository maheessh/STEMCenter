import { Cpu, Box, Glasses, Bot } from "lucide-react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="bg-stem-gray-light border-b border-border">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <span className="text-sm font-medium text-muted-foreground">
          STEM Center @ IHub
        </span>
        <div className="flex items-center gap-4 md:gap-6 overflow-x-auto">
          <Link
            to="/hardware"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 whitespace-nowrap"
          >
            <Cpu className="w-4 h-4" />
            Hardware
          </Link>
          <Link
            to="/robots"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 whitespace-nowrap"
          >
            <Bot className="w-4 h-4" />
            Robots
          </Link>
          <Link
            to="/vr"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 whitespace-nowrap"
          >
            <Glasses className="w-4 h-4" />
            VR
          </Link>
          <Link
            to="/3d-print"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 whitespace-nowrap"
          >
            <Box className="w-4 h-4" />
            3D Print
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
