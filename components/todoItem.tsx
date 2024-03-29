import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';

interface TodoItemProps {
    item: {
        text: string;
        key: string;
    },
    pressHandler: (text: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ item, pressHandler }) => {

    return (
        <View style={styles.item}>
            {/* <MaterialIcons name="delete" /> */}
            <TouchableOpacity onPress={() => pressHandler(item.key)}>
                <Text style={styles.trash}>&#128465;</Text>
            </TouchableOpacity>
            <Text style={styles.itemText}>{item.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row'
    },
    trash: {
        fontSize: 16
    },
    itemText: {
        marginLeft: 10
    }
})

export default TodoItem;