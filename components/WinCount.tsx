import styled from "@emotion/native";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Path } from "react-native-svg";
import { fade } from "../ui/colors";
import { theme } from "../ui/theme";

type Props = {
  value: number;
};

export const WinCount = ({ value }: Props) => (
  <Container style={{ borderWidth: 1 }}>
    <LinearGradient
      colors={[fade(theme.secondary, 1), fade(theme.tertiary, 5)]}
      style={{
        flex: 1,
        alignItems: "center",
        padding: 4,
        flexDirection: "row",
      }}
    >
      <LinearGradient
        colors={[theme.primary, theme.secondary]}
        style={{
          width: 28,
          height: 28,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 14,
        }}
      >
        <Svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke={theme.black}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <Path stroke="none" d="M0 0h24v24H0z" fill="none"></Path>
          <Path
            d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2.17a3 3 0 1 1 0 5.659v.171a6.002 6.002 0 0 1 -5 5.917v2.083h3a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h3v-2.083a6.002 6.002 0 0 1 -4.996 -5.692l-.004 -.225v-.171a3 3 0 0 1 -3.996 -2.653l-.003 -.176l.005 -.176a3 3 0 0 1 3.995 -2.654l-.001 -2.17a1 1 0 0 1 1 -1h10zm-12 5a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm14 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z"
            strokeWidth="0"
            fill={theme.black}
          ></Path>
        </Svg>
      </LinearGradient>
      <Count>{value}</Count>
    </LinearGradient>
  </Container>
);

const Count = styled.Text({
  fontFamily: "Kanit-Medium",
  color: fade(theme.white, 30),
  fontSize: 16,
  paddingHorizontal: 8,
});

const Container = styled.View`
  height: 40px;
  border-radius: 32px;
  border-color: ${fade(theme.secondary, 10)};
  overflow: hidden;
`;
