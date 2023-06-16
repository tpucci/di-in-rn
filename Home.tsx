import styled from "@emotion/native";
import BottomSheet from "@gorhom/bottom-sheet";
import { BlurView } from "expo-blur";
import { useRef } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedProps,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Avatar } from "./components/Avatar";
import { Background } from "./components/Background";
import { Game } from "./components/Game";
import { Player } from "./components/Player";
import { TabBar } from "./components/TabBar";
import { WinCount } from "./components/WinCount";
import { container } from "./container";
import { GamesRepo } from "./repositories/GamesRepo";
import { PlayersRepo } from "./repositories/PlayersRepo";
import { theme } from "./ui/theme";

const Container = styled.View`
  display: flex;
  flex: 1;
`;

const H1 = styled.Text({
  color: theme.white,
  fontSize: 40,
  fontFamily: "Kanit-Medium",
  marginHorizontal: 32,
  marginTop: 16,
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

  const bottomSheetRef = useRef<BottomSheet>(null);

  // Manually resolve dependencies
  // const games = container.gamesRepo.getGames();
  // const players = container.playersRepo.getPlayers();

  // Resolve dependencies using inversify
  // const games = container.get<GamesRepo>(TYPES.GamesRepo).getGames();
  // const players = container.get<PlayersRepo>(TYPES.PlayersRepo).getPlayers();

  // Resolve dependencies using tsyringe
  // const games = container.resolve(GamesRepo).getGames();
  // const players = container.resolve(PlayersRepo).getPlayers();

  // Resolve dependencies using awilix
  console.log("ok");
  const games = container.resolve<GamesRepo>("gamesRepo").getGames();
  const players = container.resolve<PlayersRepo>("playersRepo").getPlayers();
  console.log("resolve ok");

  return (
    <Background>
      <Container>
        <FlatList
          data={games}
          ListHeaderComponent={
            <>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 16,
                  marginHorizontal: 32,
                }}
              >
                <WinCount value={3} />
                <Avatar
                  size={40}
                  pictureUrl="https://s.gravatar.com/avatar/ce72c1f1879c61795466d2b1a9c7e9b9?s=40"
                />
              </View>
              <H1>Scoreboard</H1>
              <H2>Players</H2>
              <FlatList
                horizontal
                data={players}
                renderItem={(lri) => (
                  <Player name={lri.item.name} pictureUrl="" />
                )}
                contentContainerStyle={{ paddingLeft: 24 }}
                style={{ flexGrow: 0 }}
              />
              <H2>Games</H2>
            </>
          }
          renderItem={(lri) => (
            <GameWrapper>
              <Game
                gameName={lri.item.title.title}
                scores={lri.item.scores.map((s) => ({
                  playerName: s.player.name,
                  value: s.value,
                }))}
              />
            </GameWrapper>
          )}
          style={{ paddingTop: insets.top }}
        />
      </Container>
      <TabBar onPress={() => bottomSheetRef.current.expand()} />

      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        pointerEvents="box-none"
      >
        <BottomSheet
          backdropComponent={({ animatedIndex }) => {
            const animatedProps = useAnimatedProps(() => ({
              intensity: interpolate(
                animatedIndex.value,
                [-1, 0],
                [0, 30],
                Extrapolate.CLAMP
              ),
              pointerEvents:
                animatedIndex.value === -1
                  ? ("none" as "none")
                  : ("auto" as "auto"),
            }));
            return (
              <AnimatedBlurView
                animatedProps={animatedProps}
                style={{ flex: 1 }}
              >
                <Pressable
                  style={{ flex: 1 }}
                  onPressIn={() => bottomSheetRef.current.close()}
                />
              </AnimatedBlurView>
            );
          }}
          ref={bottomSheetRef}
          index={-1}
          snapPoints={["50%"]}
          enablePanDownToClose
          backgroundStyle={{ backgroundColor: theme.black }}
          handleIndicatorStyle={{ backgroundColor: theme.white }}
        >
          <Text>Awesome 🎉</Text>
        </BottomSheet>
      </View>
    </Background>
  );
}

const GameWrapper = styled.View({
  paddingHorizontal: 32,
  paddingBottom: 16,
});

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);
