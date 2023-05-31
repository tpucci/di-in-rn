import styled from "@emotion/native";
import { theme } from "../ui/theme";
import { fade } from "../ui/colors";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  pictureUrl: string;
  name: string;
};

export const Player = ({ pictureUrl, name }: Props) => (
  <Container style={{ borderWidth: 1, marginStart: 8 }}>
    <LinearGradient
      colors={[fade(theme.secondary, 1), fade(theme.secondary, 5)]}
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 16,
      }}
    >
      <PlayerName>{name}</PlayerName>
    </LinearGradient>
  </Container>
);

const PlayerName = styled.Text`
  font-family: "Kanit-Medium";
  color: ${theme.white};
  font-size: 16em;
`;

const Container = styled.View`
  height: 40px;
  border-radius: 32px;
  border-color: ${fade(theme.secondary, 10)};
  overflow: hidden;
`;
