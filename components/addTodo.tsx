import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

interface AddTodoProps {
    submitHandler: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ submitHandler }) => {
    const [text, setText] = useState('');

    const changeHandler = (val: React.SetStateAction<string>) => {
        setText(val);
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='new todo...'
                onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(text)} title='add todo' color='coral' />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})

export default AddTodo;