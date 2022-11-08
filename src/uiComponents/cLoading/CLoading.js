
import {View, Text, ActivityIndicator} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

//STYLING//
import styles from './CLoading.style';
import {themes} from "../../theme/colors";
import {CText} from "../index";


const CLoading = ({loading}) => {
  return (
    <Spinner
      visible={loading}
      customIndicator={
        <View style={styles.container}>
          <ActivityIndicator size='small' color={"#007CF8"} />
          <Text style={styles.text }>Loading, please wait...</Text>
        </View>
      }
    />
  
  );
};

export default CLoading;