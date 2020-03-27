import styled from "styled-components/native";
import { StyleSheet, Platform } from "react-native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f5f5f5;
  align-items: center;
  justify-content: space-between;
`;

export const Img = styled.Image`
  margin-top: 50px;
`;

export const Avatar = styled.Image`
  flex: 1;
  height: 300px;
`;

export const List = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  max-height: 500px;
`;

export const Card = styled.View`
  position: absolute;
  border: 1px solid #dddddd;
  border-radius: 8px;
  margin: 30px;
  overflow: hidden;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Footer = styled.View`
  background-color: #ffffff;
  padding: 15px 20px;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333333;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 3
})`
  font-size: 14px;
  color: #999999;
  margin-top: 5px;
  line-height: 18px;
`;

export const Buttons = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
`;

export const Button = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
`;

export const Icon = styled.Image``;

export const Shadow = StyleSheet.create(
  Platform.OS === "android"
    ? {
        elevation: 1
      }
    : {
        elevation: 1,
        shadowColor: "#000000",
        shadowOpacity: 0.05,
        shadowRadius: 2,
        shadowOffset: {
          width: 0,
          height: 2
        }
      }
);

export const EmptyContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Empty = styled.Text`
  color: #999999;
  font-size: 24px;
  font-weight: bold;
`;

export const Back = styled.TouchableOpacity``;

export const Match = styled.View`
  flex: 1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
`;

export const MatchImg = styled.Image`
  height: 60px;
`;

export const MatchAvatar = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 80px;
  border: 5px solid #ffffff;
  margin: 30px;
`;

export const MatchName = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #ffffff;
`;

export const MatchBio = styled.Text`
  font-size: 16px;
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 24px;
  text-align: center;
  padding: 0 30px;
`;

export const MatchButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const MatchButtonText = styled.Text`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: bold;
`;
