import { styles } from "@/styles/_joinstyle";
import { Text, TextInput, View, TouchableOpacity, Image , SafeAreaView, Button} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { SafeAreaProvider } from "react-native-safe-area-context";



export default function Join(){
      return (
          <SafeAreaProvider>
            <SafeAreaView>
                <View style={styles.container}>
                 <MaterialIcons name="arrow-back" size={25}/>
                </View>
                 <Text style={styles.titleTextGroup}></Text> 
                 <Text style={styles.titleText}></Text>
                 <Text style={styles.subText}></Text>
            
            <View style={styles.formGroup}>
              <Text style={styles.formLabel}></Text>
              <View style={styles.formControl}>
              <View style={styles.formPasswordControl}>
                <TextInput style={styles.passwordControl}/>
              </View>
              </View> 
              </View>
              <Text style={styles.forgotPasswordText}></Text>
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.buttonText}></Text>
            </TouchableOpacity>

           <View style={styles.dividerGroup}>
            <View style={styles.divider}>
              <Text style={styles.dividerText}></Text>
            </View>
           </View>

            <View style={styles.secondaryButtonGroup}> 
            <TouchableOpacity style={styles.secondaryButton}>
              <Text style={styles.secondaryButtonText}></Text>
            </TouchableOpacity>
            </View>

            <View style={styles.signupgroup}>
              <Text style={styles.signupTitleText}></Text>
              <Text style={styles.signupSubTitleText}></Text>
            </View>

            </SafeAreaView>
          </SafeAreaProvider>
      );
}