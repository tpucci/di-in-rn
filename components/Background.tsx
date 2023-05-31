import { LinearGradient } from "expo-linear-gradient";
import { ReactNode } from "react";
import { theme } from "../ui/theme";
import { fade } from "../ui/colors";

type Props = {
  children: ReactNode;
};

export const Background = ({ children }: Props) => {
  return (
    <LinearGradient
      colors={[theme.black, fade(theme.black, 50)]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0.8 }}
    >
      <LinearGradient
        colors={["transparent", fade(theme.primary, 50)]}
        style={{ flex: 1 }}
        start={{ x: 0.5, y: 0.4 }}
        end={{ x: 0, y: 1 }}
      >
        <LinearGradient
          colors={[fade(theme.secondary, 0), fade(theme.secondary, 10)]}
          style={{ flex: 1 }}
          start={{ x: 0.5, y: 0.5 }}
          end={{ x: 1, y: 1 }}
        >
          {children}
        </LinearGradient>
      </LinearGradient>
    </LinearGradient>
  );
};
