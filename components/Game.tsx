import { View, Text } from "react-native";
import styled from "@emotion/native";
import { theme } from "../ui/theme";
import { fade } from "../ui/colors";
import { LinearGradient } from "expo-linear-gradient";

interface Score {
  value: number;
  playerName: string;
}

type Props = {
  gameName: string;
  scores: Score[];
};

export const Game = ({ gameName, scores }: Props) => (
  <Container style={{ borderWidth: 1 }}>
    <LinearGradient
      colors={[fade(theme.secondary, 1), fade(theme.secondary, 5)]}
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 16,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <RowItem>
          <P>Terraforming Mars</P>
        </RowItem>
        <RowItem>
          <RowItem>
            <RightAligned>
              <P>Thomas</P>
              <P>75</P>
            </RightAligned>
          </RowItem>
          <RowItem>
            <LeftAligned>
              <P>46</P>
              <P>Marion</P>
            </LeftAligned>
          </RowItem>
        </RowItem>
      </View>
    </LinearGradient>
  </Container>
);

const P = styled.Text`
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

const RowItem = styled.View`
  flex: 1;
  flex-direction: row;
`;

const RightAligned = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  gap: 8em;
  margin-right: 4px;
`;

const LeftAligned = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  gap: 8em;
  margin-left: 4px;
`;
