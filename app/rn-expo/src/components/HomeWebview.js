import { SafeAreaView, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: 'http://127.0.0.1:3030' }} />
      {/* expo go에서 테스트하려면 본인 ip 넣어줌 */}
      {/* <WebView source={{ uri: 'http://127.0.0.1:3030' }} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
