
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/hooks/ThemeContext";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center space-x-2"
    >
      <Sun className={`w-4 h-4 ${isDark ? 'text-gray-500' : 'text-yellow-500'}`} />
      <Switch
        checked={isDark}
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-gray-600 data-[state=unchecked]:bg-yellow-400"
      />
      <Moon className={`w-4 h-4 ${isDark ? 'text-blue-400' : 'text-gray-500'}`} />
    </motion.div>
  );
};

export default ThemeToggle;
