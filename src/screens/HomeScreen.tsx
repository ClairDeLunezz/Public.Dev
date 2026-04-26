import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Switch,
  Alert,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PrimaryButton from '../components/PrimaryButton';
import SocialButton from '../components/SocialButton';

export default function HomeScreen() {
  const navigation = useNavigation<any>();
  const [isDark, setIsDark] = useState(false);

  const theme = isDark ? dark : light;

  function handleSwitch(value: boolean) {
    setIsDark(value);
    Alert.alert('Switch pressionado');
  }

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: theme.bg }]}>
      <ScrollView contentContainerStyle={styles.container}>

        <Text style={[styles.appName, { color: theme.accent }]}>
          {'<Public.Dev/>'}
        </Text>

        <View style={styles.avatarWrapper}>
          <Image
            source={
              isDark
                ? require('../assets/pietro.png')
                : require('../assets/artur.png')
              }
            style={styles.avatar}
          />
          <View style={[styles.avatarBorder, { borderColor: theme.accent }]} />
        </View>

        <Text style={[styles.title, { color: theme.text }]}>
          Olá, nós somos{'\n'}
          <Text style={{ color: theme.accent }}>Artur e Pietro 👋</Text>
        </Text>
        <Text style={[styles.subtitle, { color: theme.muted }]}>
          Desenvolvedores Mobile & Web apaixonados por criar experiências digitais
          únicas. Estudantes de ADS e entusiasta de React Native.
        </Text>

        <View style={styles.buttonRow}>
          <PrimaryButton
            label="Sobre nós"
            onPress={() => navigation.navigate('About')}
            accent={theme.accent}
            textColor="#fff"
          />
          <PrimaryButton
            label="Entre em contato conosco!"
            onPress={() => Alert.alert('Entre em contato')}
            accent="transparent"
            textColor={theme.accent}
            bordered
            borderColor={theme.accent}
          />          
        </View>

        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          Acesse minhas redes — {isDark ? 'Pietro' : 'Artur'}
        </Text>

        <View style={styles.socialGrid}>
          {isDark ? (
            <>
              <SocialButton label="GitHub"    icon="🐙" url="https://github.com/pie-tro"    color="#24292e" />
              <SocialButton label="LinkedIn"  icon="💼" url="https://www.linkedin.com/in/pietro-maia-fernandes/" color="#0077b5" />
              <SocialButton label="Instagram" icon="📸" url="https://www.instagram.com/piedgd_/"  color="#e1306c" />
            </>
          ) : (
            <>
              <SocialButton label="GitHub"    icon="🐙" url="https://github.com/ClairDeLunezz"    color="#24292e" />
              <SocialButton label="LinkedIn"  icon="💼" url="https://www.linkedin.com/in/artur-silva-5b5678366/" color="#0077b5" />
              <SocialButton label="Instagram" icon="📸" url="https://www.instagram.com/arturesk/"  color="#e1306c" />
            </>
          )}
        </View>

        <View style={[styles.switchRow, { backgroundColor: theme.card }]}>
          <Text style={[styles.switchLabel, { color: theme.text }]}>
            {isDark ? '👤 Pietro' : '👤 Artur'}
          </Text>
          <Switch
            value={isDark}
            onValueChange={(value) => {
              setIsDark(value);
              Alert.alert('Switch pressionado');
            }}
            trackColor={{ false: '#6c47ff', true: '#9146ff' }}
            thumbColor="#fff"
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const light = {
  bg: '#f7f5f2',
  card: '#ffffff',
  text: '#1a1a2e',
  muted: '#555577',
  accent: '#6c47ff',
};
const dark = {
  bg: '#0f0e17',
  card: '#1c1b2e',
  text: '#fffffe',
  muted: '#a7a9be',
  accent: '#a78bfa',
};

const styles = StyleSheet.create({
  safe: { flex: 1 },
  container: {
    alignItems: 'center',
    padding: 24,
    paddingTop: 48,
    paddingBottom: 40,
  },
  appName: {
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 28,
    opacity: 0.85,
  },
  avatarWrapper: {
    width: 120,
    height: 120,
    marginBottom: 24,
    position: 'relative',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  avatarBorder: {
    position: 'absolute',
    top: -5,
    left: -5,
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 3,
    opacity: 0.6,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    lineHeight: 38,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 23,
    marginBottom: 28,
    maxWidth: 320,
  },
  buttonRow: {
    width: '100%',
    gap: 12,
    marginBottom: 36,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
    marginBottom: 16,
    alignSelf: 'flex-start',
  },
  socialGrid: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 32,
  },
  switchRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 16,
  },
  switchLabel: {
    fontSize: 15,
    fontWeight: '600',
  },
});