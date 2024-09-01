import { Image, StyleSheet, Platform, Pressable } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
const frutas = ['Sal', 'Yerba', 'Coca', 'queso', 'otros'];
const ListaDeFrutas = () => {
  return (
    <div>
        <ul>
            {frutas.map((fruta, index) => (
                <li key={index}>{fruta}</li>
            ))}
        </ul>
    </div>
);
}
export default function HomeScreen() {
    return (
      <>
        <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Stock</ThemedText>
                <HelloWave />
            </ThemedView>
        <ListaDeFrutas>

        </ListaDeFrutas>
      </>
          )}
<text><ListaDeFrutas>

</ListaDeFrutas></text>
const styles = StyleSheet.create({
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    stepContainer: {
      gap: 8,
      marginBottom: 8,
    },
    reactLogo: {
      height: 178,
      width: 290,
      bottom: 0,
      left: 0,
      position: 'absolute',
    }})