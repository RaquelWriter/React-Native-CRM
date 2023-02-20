import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { resetForm } from '../features/Customers/reducers';
import stylesFn from './styles';

const ButtonAddCustomer = () => {
  const dispatch = useDispatch();
  const styles = stylesFn();
  const { navigate } = useNavigation();
  const handlePress = () => {
    dispatch(resetForm());
    navigate('New');
  };
  return (
    <TouchableOpacity
      style={Object.assign({}, styles.buttons, styles.buttonCreate)}
      onPress={handlePress}
    >
      <Text style={styles.textButton}>Add customer</Text>
    </TouchableOpacity>
  );
};

export default ButtonAddCustomer;
