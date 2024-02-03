import { Pressable } from "react-native";
import { H1 } from "./Typography";

interface Button {
  text: string;
  onPress: () => void;
}

const Button = ({ text, onPress }: Button) => {
  return (
    <Pressable onPress={onPress}>
      <H1 text={text} />
    </Pressable>
  );
};

export default Button;
