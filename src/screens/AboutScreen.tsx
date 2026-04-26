import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/Footer';

export default function AboutScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>

        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
          <Text style={styles.backText}>← Voltar</Text>
        </TouchableOpacity>

        <View style={styles.header}>
          <Text style={styles.tag}>{'// quem sou eu'}</Text>
          <Text style={styles.title}>Sobre mim</Text>
          <View style={styles.divider} />
        </View>

        <Section
          emoji="🎓"
          heading="Formação"
          body="Estudantes de Análise e Desenvolvimento de Sistemas, com foco em desenvolvimento mobile e web. 
          Sempre buscando aprender novas tecnologias e melhorar nossas habilidades."
        />

        <Section
          emoji="💻"
          heading="Tecnologias"
          body="Trabalhamos com Angular, Java SpringBoot, C, React Native, React.js, TypeScript, Node.js, bancos de dados relacionais, Figma, Astah."
        />

        <Section
          emoji="🚀"
          heading="Projetos & Experiência"
          body="GEA ( Gestão de Espaços Acadêmicos ) -  desenvolvido em Angular e SpringBoot.
          Projetos pessoais de agenda de contatos com Angular, SpringBoot, AWS Cloud (EC2, Amplify) e Docker."
        />

        <Section
          emoji="🎯"
          heading="Nossos Objetivos"
          body="Nos aprofundar cada vez mais na área de tecnologia, ingressar no mercado de trabalho através de estágios,
           e melhorar cada vez mais nossas habilidades técnicas e interpessoais, assim como projetos pessoais."
        />

        <Section
          emoji="⚡"
          heading="Além do código"
          body="Nas horas vagas gostamos de jogar Baldur's Gate 3 numa jornada em dupla, Overwatch, falar sobre músicas."
        />

        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

function Section({
  emoji,
  heading,
  body,
}: {
  emoji: string;
  heading: string;
  body: string;
}) {
  return (
    <View style={card.container}>
      <Text style={card.emoji}>{emoji}</Text>
      <View>
        <Text style={card.heading}>{heading}</Text>
        <Text style={card.body}>{body}</Text>
      </View>
    </View>
  );
}

const card = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 14,
    backgroundColor: '#1c1b2e',
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    alignItems: 'flex-start',
  },
  emoji: { fontSize: 24, marginTop: 2 },
  heading: {
    color: '#a78bfa',
    fontWeight: '700',
    fontSize: 15,
    marginBottom: 4,
  },
  body: {
    color: '#a7a9be',
    fontSize: 14,
    lineHeight: 21,
    maxWidth: 280,
  },
});

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#0f0e17' },
  container: { padding: 24, paddingTop: 48, paddingBottom: 40 },
  back: { marginBottom: 24 },
  backText: { color: '#a78bfa', fontSize: 15, fontWeight: '600' },
  header: { marginBottom: 28 },
  tag: { color: '#a78bfa', fontSize: 13, opacity: 0.7, marginBottom: 6 },
  title: {
    color: '#fffffe',
    fontSize: 36,
    fontWeight: '800',
    letterSpacing: -0.5,
    marginBottom: 12,
  },
  divider: {
    height: 3,
    width: 48,
    backgroundColor: '#a78bfa',
    borderRadius: 4,
  },
});