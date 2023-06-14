import { Image, View, ViewStyle } from "react-native";

type Props = {
  size: number;
  pictureUrl: string;
  style?: ViewStyle | undefined;
};

export const Avatar = ({ size, pictureUrl, style }: Props) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        overflow: "hidden",
        ...style,
      }}
    >
      <Image
        source={{
          uri: pictureUrl,
        }}
        style={{ width: size, height: size }}
      />
    </View>
  );
};
