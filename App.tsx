import { StatusBar } from 'expo-status-bar';
// never forget the required imports :)
import { StyleSheet, Text, TextInput, View,Button, ListRenderItem, } from 'react-native';
import {useState} from 'react';
import React from 'react';
import Flatlist from'react';


// defining custom data
type StoreItem= {
  id: String,// id helps diffrentiate

  name: String,
  price: String
}

export default function App() {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  var [catalogue, setCatalogue] = useState<StoreItem[]>([
    {id:"1" , name:"Bread", price:"R12"},// the comma meaans there is another item
    {id:"2" , name:"Butter", price:"R18"}
  ]);

  // a method has a name = (a list of what it was) => {a set of instructions}
  // onPress = {() => {}}
  const addNewItem = (name:String, price:String) => {

  }

  const renderItem: ListRenderItem<StoreItem> = ({item}) => (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>Name: {item.name}, Price: {item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>Welcome to Store(tm)!</Text>
      {/* the usual, we get text from the user, and update the variable*/}
      <TextInput placeholder='Please enter an item name '/>
      onChangeText={(newText) => setItemName(newText)} />
      {/* we do it again for price*/}
      <TextInput placeholder='Please enter an item price'/>
      {/* for the button, we cal the new method we created earlier and the variable */}
      <Button title='Add new item to catalogue'
      onPress ={() => addNewItem(itemName,itemPrice)}/>
      {/* flatlist to display all our shops items!*/}
      <Flatlist>
data = {catalogue}
renderItem={renderItem}
keyExtractor={ite => itemName.indexOf.toString()}
</Flatlist>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem:{
    //padding gives each item some persinal space, so they aren't so bunched up
    padding:20,
    backgroundColor: #782929ff
    borderRadius: 8
  },
  itemText: {
    color: #fff
  },
  itemSeperator: {
    height: 20
  }
});
