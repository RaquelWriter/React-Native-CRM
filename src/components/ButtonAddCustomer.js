import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity } from 'react-native';
import stylesFn from './styles';

const ButtonAddCustomer = () => {
  const newId = crypto.randomUUID();
  const styles = stylesFn();
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      style={Object.assign({}, styles.buttons, styles.buttonCreate)}
      onPress={() => navigate('New', { id: newId })}
    >
      <Text style={styles.textButton}>Add customer</Text>
    </TouchableOpacity>
  );
};

export default ButtonAddCustomer;
