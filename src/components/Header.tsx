import {View, Image, StyleSheet, Pressable, Text} from 'react-native';
import IMAGE from '../constants/ImageConstants';
import {goBack} from '../services/Navigation';

interface HeaderProps {
  LeftIcon: any;
  text?: string
}

const Header: React.FC<HeaderProps> = ({LeftIcon, text}) => {
  return (
    <View style={styles.headerContainer}>
      <Pressable style={styles.imageContainer} onPress={() => {
        if (LeftIcon === IMAGE.BACK) {
            goBack();
          }
      }}>
        <Image source={LeftIcon} />
      </Pressable>
      <Text style={styles.headerText}>{text}</Text>
      <Image style={styles.profileImage} source={IMAGE.PROFILE} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: 44,
    width: 44,
    borderRadius: 22,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'
  },
  headerText: {
    fontFamily:'Poppins',
    fontWeight: 400,
    fontSize: 28,
    lineHeight: 42,
    color: "#000000"
  },
  profileImage: {
    height: 44,
    width: 44,
    borderRadius: 22,
  },
});

export default Header;
