import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  const onClick = () => {
    navigation.push('Custom', { url: 'http://127.0.0.1:3030' });
  };
  return (
    <SafeAreaView style={[styles.container, styles.testNav]}>
      <View>
        <Pressable onPress={onClick}>
          <View style={styles.button}>
            <Text style={styles.text}>Webview</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  testNav: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    backgroundColor: '#ddd',
  },
  text: {
    fontSize: 24,
  },
});
