import {Pressable, StyleSheet, Text} from 'react-native';

interface Buttonsprops {
    BtnText: string,
    goToCart?: () => void
}

const Buttons: React.FC<Buttonsprops> = ({BtnText,goToCart}) => {
  return (
    <Pressable style={styles.addCartbutton} onPress={goToCart}>
      <Text style={styles.addtocartText}>{BtnText}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  addCartbutton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: '100%',
    alignSelf:'center',
    height: 55,
    backgroundColor: '#E96E6E',
    marginHorizontal: 30,
    marginVertical: 18,
  },
  addtocartText: {
    color: '#ffffff',
    fontFamily: 'Poppins',
    fontWeight: 600,
    fontSize: 24,
    lineHeight: 36,
  },
});

export default Buttons;
