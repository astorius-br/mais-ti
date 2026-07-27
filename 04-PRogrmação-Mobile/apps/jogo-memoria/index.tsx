import { Stack, useEffect } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
    FlatList, Modal, Pressable, ScrollView, StyleSheet,
    Text, useWindowDimensions, View,
} from 'react-native';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

const colorScheme = useColorScheme();

export default function RootLayout() {
 return (
 <Stack
 screenOptions={{
 headerShown: false, }}  /> );
}

type MemoryCard = {
 id: number;
 emoji: string;
 isFlipped: boolean;
 isMatched: boolean;
};

const EMOJIS = ['🐶', '🐭', '🐸', '🐋', '🐍', '🐴', '🐯', '🐻'];
const POINTS_PER_PAIR = 10;
const MAX_SCORE = EMOJIS.length * POINTS_PER_PAIR;
const NUMBER_OF_COLUMNS = 4;
const CARD_GAP = 10;
const HORIZONTAL_PADDING = 20;

function createDeck(): MemoryCard[] {
  const duplicatedEmojis = [...EMOJIS, ...EMOJIS];
  const deck: MemoryCard[] = duplicatedEmojis.map((emoji, index) => ({
    id: index,
    emoji,
    isFlipped: false,
    isMatched: false,
  }));

  for (let index = deck.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    const temporaryCard = deck[index];
    deck[index] = deck[randomIndex];
    deck[randomIndex] = temporaryCard;
  }
  return deck;
}

function formatTime(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');
  return `${formattedMinutes}:${formattedSeconds}`;
}

export default function Index() {
  const { width } = useWindowDimensions();
  const boardWidth = Math.min(
    width - HORIZONTAL_PADDING * 2,
    420,
  );

  const cardSize =
   (boardWidth - CARD_GAP * (NUMBER_OF_COLUMNS - 1)) / NUMBER_OF_COLUMNS;
}

const [cards, setCards] = useState<MemoryCard[]>(() => createDeck());
const [selectedCardId, setSelectedCardId] = useState<number | null>(null);
const [boardLocked, setBoardLocked] = useState(false);
const [score, setScore] = useState(0);
const [attempts, setAttempts] = useState(0);
const [seconds, setSeconds] = useState(0);
const [timerRunning, setTimerRunning] = useState(false);
const [showVictory, setShowVictory] = useState(false);

useEffect(() => {
    if (!timerRunning) {
        return;
    }
    const intervalId = setInterval(() => {
        setSeconds((currentSeconds) => currentSeconds + 1);
    }, 1000);
    return () => {
        clearInterval(intervalId);
    };
 }, [timerRunning]);

function startNewGame() {
        setCards(createDeck());
        setSelectedCardId(null);
        setBoardLocked(false);
        setScore(0);
        setAttempts(0);
        setSeconds(0);
        setTimerRunning(false);
        setShowVictory(false);
    }

    function handleCardPress(card: MemoryCard) {
        // Bloco A - Se a carta foi virada
        if (boardLocked || card.isFlipped || card.isMatched) {
            return;
        }
        if (!timerRunning && score < MAX_SCORE) {
            setTimerRunning(true);
        }

        // Bloco B - virar a carta e guardar a primeira escolha
        setCards((currentCards) => currentCards.map((currentCard) =>
            currentCard.id === card.id 
                ? { ...currentCard, isFlipped: true } : currentCard,),
            );
            if (selectedCardId === null) {
                setSelectedCardId(card.id);
                return;
            }


    // Bloco C - localizar a primeira carta e comparar
    const firstCard = cards.find((currentCard) => currentCard.id === selectedCardId,);
    if (!firstCard) {
        setSelectedCardId(null);
        return;
    }
    setBoardLocked(true);
    setAttempts((currentAttempts) => currentAttempts + 1);
    const cardsMatch = firstCard.emoji === card.emoji;


    // Bloco D - tratar acerto e erro
    if (cardsMatch) {
        setTimeout(() => {
            setCards((currentCards) =>
                currentCards.map((currentCard) => {
                    const belongsToPair =
                    currentCard.id === firstCard.id || currentCard.id === card.id;
                    if (belongsToPair) {
                        return {
                            ...currentCard,
                            isFlipped: true,
                            isMatched: true,
                        };
                    }
                    return currentCard;
                }),);
                const nextScore = score + POINTS_PER_PAIR;
                setScore(nextScore);
                setSelectedCardId(null);
                setBoardLocked(false);
                if (nextScore === MAX_SCORE) {
                    setTimerRunning(false);
                    setShowVictory(true);
                }
        }, 450);
    } 
    else {
        setTimeout(() => {
            setCards((currentCards) =>
                currentCards.map((currentCard) => {
                        const wasSelected =
                        currentCard.id === firstCard.id || currentCard.id === card.id;
                        if (wasSelected && !currentCard.isMatched) {
                            return { ...currentCard, isFlipped: false };
                        }
                        return currentCard;
                    }
                ),
            );
            setSelectedCardId(null);
            setBoardLocked(false);
        }, 800);
    }



    return (
        <View style={styles.screen}>
            <StatusBar style="dark" />
            <ScrollView 
                contentContainerStyle={styles.screenContent}
                showsVerticalScrollIndicator={false} >
                <View style={styles.header}>
                    <Text style={styles.title}>Jogo da Memória</Text>
                    <Text style={styles.subtitle}>
                        Encontre todos os pares de animais
                    </Text>
                </View>
                <View style={styles.scoreboard}>
                    <View style={styles.scoreItem}>
                        <Text style={styles.scoreLabel}>Pontos</Text>
                        <Text style={styles.scoreValue}>{score}</Text>
                    </View>
                    <View style={styles.scoreItem}>
                        <Text style={styles.scoreLabel}>Jogadas</Text>
                        <Text style={styles.scoreValue}>{attempts}</Text>
                    </View>
                    <View style={styles.scoreItem}>
                        <Text style={styles.scoreLabel}>Tempo</Text>
                        <Text style={styles.scoreValue}>{formatTime(seconds)}</Text>
                    </View>
                </View>
                <View style={[styles.board, { width: boardWidth }]}>
                    <FlatList
                        data={cards}
                        numColumns={NUMBER_OF_COLUMNS}
                        keyExtractor={(item) => String(item.id)}
                        scrollEnabled={false}
                        extraData={`${boardLocked}-${cardSize}`}
                        columnWrapperStyle={styles.cardRow}
                        contentContainerStyle={styles.boardContent}
                        renderItem={({ item }) => {
                        const isVisible = item.isFlipped || item.isMatched;
                        return (
                        <Pressable
                            accessibilityRole="button"
                            accessibilityLabel={
                                isVisible
                                ? `Carta com o emoji ${item.emoji}`
                                : 'Carta virada para baixo'
                            }
                            disabled={boardLocked || item.isFlipped || item.isMatched}
                            onPress={() => handleCardPress(item)}
                            style={({ pressed }) => [
                                styles.card,
                                { width: cardSize, height: cardSize },
                                isVisible ? styles.cardVisible : styles.cardHidden,
                                item.isMatched && styles.cardMatched,
                                pressed && styles.cardPressed,
                            ]}
                        >
                            <Text style={[
                                    styles.cardText,
                                    !isVisible && styles.hiddenCardText,
                                ]}
                            >
                             {isVisible ? item.emoji : '?'}
                            </Text>
                        </Pressable>
                        );
                        }}
                    />
                </View>
                <Pressable accessibilityRole="button"
                disabled={boardLocked} onPress={startNewGame}
                style={({ pressed }) => [
                    styles.restartButton,
                    pressed && styles.restartButtonPressed,
                    boardLocked && styles.restartButtonDisabled,
                ]}
                >
                    <Text style={styles.restartButtonText}>Novo jogo</Text>
                </Pressable>
                <Text style={styles.instructions}>
                    Toque em duas cartas para procurar um par.
                </Text>
            </ScrollView>
            <Modal visible={showVictory}
                transparent animationType="fade"
                onRequestClose={() => setShowVictory(false)}>
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalEmoji}> </Text>
                        <Text style={styles.modalTitle}>Parabéns!</Text>
                        <Text style={styles.modalText}>
                            Você encontrou todos os pares.
                        </Text>
                        <View style={styles.finalResult}>
                            <Text style={styles.finalResultText}>Pontuação: {score}</Text>
                            <Text style={styles.finalResultText}>Jogadas: {attempts}</Text>
                            <Text style={styles.finalResultText}>
                                Tempo: {formatTime(seconds)}
                            </Text>
                        </View>
                        <Pressable
                            accessibilityRole="button"
                            onPress={startNewGame}
                            style={({ pressed }) => [
                            styles.modalButton,
                            pressed && styles.restartButtonPressed,
                            ]} >
                            <Text style={styles.modalButtonText}>Jogar novamente</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#f3f4f6',
    },
    
    screenContent: {
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 28,
        paddingHorizontal: HORIZONTAL_PADDING,
    },

    header: {
        alignItems: 'center',
        marginBottom: 20,
    },

    title: {
        color: '#172554',
        fontSize: 30,
        fontWeight: '700',
        textAlign: 'center',
    },

    subtitle: {
        color: '#64748b',
        fontSize: 15,
        marginTop: 5,
        textAlign: 'center',
    },

    scoreboard: {
        width: '100%',
        maxWidth: 420,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 22,
    },

    scoreItem: {
        width: '31%',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderColor: '#dbeafe',
        borderRadius: 14,
        borderWidth: 1,
        paddingHorizontal: 5,
        paddingVertical: 12,
    },

    scoreLabel: {
        color: '#64748b',
        fontSize: 13,
    },

    scoreValue: {
        color: '#1e3a8a',
        fontSize: 20,
        fontWeight: '700',
        marginTop: 3,
    },

    board: {
        alignSelf: 'center',
    },

    boardContent: {
        gap: CARD_GAP,
    },

    cardRow: {
        justifyContent: 'space-between',
    },

    card: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        borderWidth: 2,
    },

    cardHidden: {
        backgroundColor: '#1e3a8a',
        borderColor: '#1e40af',
    },

    cardVisible: {
        backgroundColor: '#ffffff',
        borderColor: '#93c5fd',
    },

    cardMatched: {
        backgroundColor: '#dcfce7',
        borderColor: '#22c55e',
    },

    cardPressed: {
        opacity: 0.75,
    },

    cardText: {
        fontSize: 34,
    },

    hiddenCardText: {
        color: '#ffffff',
        fontSize: 28,
        fontWeight: '700',
    },

    restartButton: {
        width: '100%',
        maxWidth: 420,
        alignItems: 'center',
        backgroundColor: '#1e3a8a',
        borderRadius: 14,
        marginTop: 20,
        paddingVertical: 14,
    },

    restartButtonPressed: {
        opacity: 0.8,
    },

    restartButtonDisabled: {
        opacity: 0.5,
    },

    restartButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '700',
    },

    instructions: {
        color: '#64748b',
        fontSize: 14,
        marginTop: 14,
        textAlign: 'center',
    },

    modalOverlay: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(15, 23, 42, 0.65)',
        padding: 24,
    },

    modalContent: {
        width: '100%',
        maxWidth: 360,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 24,
        padding: 28,
    },

    modalEmoji: {
        fontSize: 58,
    },

    modalTitle: {
        color: '#172554',
        fontSize: 28,
        fontWeight: '700',
        marginTop: 8,
    },

    modalText: {
        color: '#64748b',
        fontSize: 16,
        marginTop: 8,
        textAlign: 'center',
    },

    finalResult: {
        width: '100%',
        backgroundColor: '#eff6ff',
        borderRadius: 14,
        marginVertical: 20,
        padding: 16,
    },

    finalResultText: {
        color: '#1e3a8a',
        fontSize: 16,
        marginVertical: 3,
        textAlign: 'center',
    },

    modalButton: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#1e3a8a',
        borderRadius: 14,
        paddingVertical: 14,
    },

    modalButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '700',
    },
});  
