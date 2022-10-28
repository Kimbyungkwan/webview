import { useCallback, useEffect, useRef } from 'react';
import { BackHandler, SafeAreaView, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

export default function HomeScreen() {
  const webviewRef = useRef();

  const goback = useCallback(() => {
    if (!webviewRef.current) return false;
    webviewRef.current.goBack();
    return true;
  }, [webviewRef.current]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', goback);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', goback);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        allowsBackForwardNavigationGestures
        ref={webviewRef}
        /* expo go에서 테스트하려면 본인 ip 넣어줌 */
        source={{ uri: 'http://127.0.0.1:3030' }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
