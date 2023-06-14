import styled from "@emotion/native";
import { Pressable, SafeAreaView } from "react-native";
import Svg, { Path } from "react-native-svg";
import { fade } from "../ui/colors";
import { theme } from "../ui/theme";

type Props = {
  onPress: () => any;
};

export const TabBar = ({ onPress }: Props) => (
  <Container>
    <ButtonContainer>
      <Pressable
        style={({ pressed }) => ({
          backgroundColor: pressed
            ? fade(theme.secondary, 80)
            : theme.secondary,
          borderRadius: 50,
          width: 64,
          height: 64,
          alignItems: "center",
          justifyContent: "center",
        })}
        onPress={onPress}
      >
        <Svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke={theme.black}
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <Path stroke="none" d="M0 0h24v24H0z" fill="none"></Path>
          <Path d="M12 5l0 14"></Path>
          <Path d="M5 12l14 0"></Path>
        </Svg>
      </Pressable>
    </ButtonContainer>
    <SafeAreaView />
  </Container>
);

const ButtonContainer = styled.View({
  backgroundColor: fade(theme.secondary, 30),
  width: 72,
  height: 72,
  borderRadius: 36,
  justifyContent: "center",
  alignItems: "center",
});

const Container = styled.View`
  background: ${fade(theme.black, 30)};
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  padding-top: 24px;
`;
