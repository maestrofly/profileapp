import React from 'react'
import {View, FlatList, Text} from 'react-native'
import Contact from './components/Contact'

export default function ContactsScreen() {
    const contacts = [
        {name:"Derrick Darku", number:"0242015579"},
        {name:"Denise Debonaire", number:"023-546-3223"},
        {name:"Claire Underwood", number:"098-456-2323"},
        {name:"Daddy Berto", number:"074-453-2312"},
        {name:"Mommy Dearest", number:"054-342-456"},
    ]

    return (
        <View>
            <FlatList
                data={contacts}
                renderItem={({item})=>{
                    return <Contact name={item.name} phone={item.number}/>
                }}
                keyExtractor={(item)=>item.number}
            />
        </View>
    )
}


