import { View, Text, SafeAreaView, ScrollView, FlatList } from "react-native";
import styled from "@emotion/native";
import { Background } from "./components/Background";
import { TabBar } from "./components/TabBar";
import { useFonts } from "expo-font";
import { theme } from "./ui/theme";
import { Player } from "./components/Player";
import { Game } from "./components/Game";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Container = styled.View`
  display: flex;
  flex: 1;
`;

const H1 = styled.Text({
  color: theme.white,
  fontSize: 40,
  fontFamily: "Kanit-Medium",
  marginHorizontal: 32,
});

const H2 = styled.Text({
  color: theme.white,
  fontSize: 24,
  fontFamily: "Kanit-Medium",
  marginHorizontal: 32,
  marginTop: 16,
  marginBottom: 8,
});

export function Home() {
  const insets = useSafeAreaInsets();

  return (
    <Background>
      <Container>
        <FlatList
          data={["TM", "TM", "TM"]}
          ListHeaderComponent={
            <>
              <H1>Scoreboard</H1>
              <H2>Players</H2>
              <FlatList
                horizontal
                data={["Thomas", "Marion"]}
                renderItem={(lri) => <Player name={lri.item} pictureUrl="" />}
                contentContainerStyle={{ paddingLeft: 24 }}
                style={{ flexGrow: 0 }}
              />
              <H2>Games</H2>
            </>
          }
          renderItem={(lri) => (
            <GameWrapper>
              <Game gameName={lri.item} scores={[]} />
            </GameWrapper>
          )}
          style={{ paddingTop: insets.top }}
        />
      </Container>
      <TabBar />
    </Background>
  );
}

const GameWrapper = styled.View({
  paddingHorizontal: 32,
  paddingBottom: 16,
});
