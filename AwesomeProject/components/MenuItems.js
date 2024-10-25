import React, { useState, useEffect } from 'react'; 
import { View, Text, ScrollView, StyleSheet, FlatList, SectionList, Pressable } from 'react-native';
import { encode } from 'react-native-base64';

// ========== using ScrollView component ================

// const menuItemsToDisplay = [
//   'Hummus \nMoutabal \nFalafel \nMarinated Olives \nKofta \nEggplant Salad \nLentil Burger \nSmoked Salmon \nKofta Burger \nTurkish Kebab \nFries \nButtered Rice \nBread Sticks \nPita Pocket \nLentil Soup \nGreek Salad \nRice Pilaf \nBaklava \nTartufo \nTiramisu \nPanna Cotta',
// ];


// const MenuItems = () => {
//   return (
//     <View style={menuStyles.container}>
//       <ScrollView
//         horizontal={false}
//         indicatorStyle={'white'}
//         style={menuStyles.innerContainer}>
//         <Text style={menuStyles.headerText}>View Menu</Text>
//         <Text style={menuStyles.itemText}>{menuItemsToDisplay[0]}</Text>
//       </ScrollView>
//     </View>
//   );

// ========== using Flatlist component ================

// const menuItemsToDisplay = [
//   { name: 'Hummus', price: '$5.00', id: '1A' },
//   { name: 'Moutabal', price: '$5.00', id: '2B' },
//   { name: 'Falafel', price: '$7.50', id: '3C' },
//   { name: 'Marinated Olives', price: '$5.00', id: '4D' },
//   { name: 'Kofta', price: '$5.00', id: '5E' },
//   { name: 'Eggplant Salad', price: '$8.50', id: '6F' },
//   { name: 'Lentil Burger', price: '$10.00', id: '7G' },
//   { name: 'Smoked Salmon', price: '$14.00', id: '8H' },
//   { name: 'Kofta Burger', price: '$11.00', id: '9I' },
//   { name: 'Turkish Kebab', price: '$15.50', id: '10J' },
//   { name: 'Fries', price: '$3.00', id: '11K' },
//   { name: 'Buttered Rice', price: '$3.00', id: '12L' },
//   { name: 'Bread Sticks', price: '$3.00', id: '13M' },
//   { name: 'Pita Pocket', price: '$3.00', id: '14N' },
//   { name: 'Lentil Soup', price: '$3.75', id: '15O' },
//   { name: 'Greek Salad', price: '$6.00', id: '16Q' },
//   { name: 'Rice Pilaf', price: '$4.00', id: '17R' },
//   { name: 'Baklava', price: '$3.00', id: '18S' },
//   { name: 'Tartufo', price: '$3.00', id: '19T' },
//   { name: 'Tiramisu', price: '$5.00', id: '20U' },
//   { name: 'Panna Cotta', price: '$5.00', id: '21V' },
// ];

// ((Item is a child component of MenuItem and name was passed to Item as a property))

// const Item = ({ name, price }) => (
//   <View style={menuStyles.innerContainer}>
//     <Text style={menuStyles.itemText}>{name}</Text>
//     <Text style={menuStyles.itemText}>{price}</Text>

//   </View>
// );

// const MenuItems = () => {
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);

//   const getMenu = async () => {
//     try {
//       const response = await fetch(
//         'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/littleLemonSimpleMenu.json'
//       );
//       const json = await response.json();
//       setData(json.menu);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getMenu();
//   }, []);




//   const renderItem = ({ item }) => <Item name={item.title} price={item.price} />;

//   return (
//     <View style={menuStyles.container}>
//       <Text style={menuStyles.headerText}>View Menu</Text>
//       <FlatList data={data} keyExtractor={item => item.id} renderItem={renderItem}></FlatList>
//     </View>
//   );
// };

// ========== using Sectionlist component ================

// const menuItemsToDisplay = [
//   {
//     title: 'Appetizers',
//     data: [
//       { name: 'Hummus', price: '$5.00' },
//       { name: 'Moutabal', price: '$5.00' },
//       { name: 'Falafel', price: '$7.50' },
//       { name: 'Marinated Olives', price: '$5.00' },
//       { name: 'Kofta', price: '$5.00' },
//       { name: 'Eggplant Salad', price: '$8.50' },
//     ],
//   },
//   {
//     title: 'Main Dishes',
//     data: [
//       { name: 'Lentil Burger', price: '$10.00' },
//       { name: 'Smoked Salmon', price: '$14.00' },
//       { name: 'Kofta Burger', price: '$11.00' },
//       { name: 'Turkish Kebab', price: '$15.50' },
//     ],
//   },
//   {
//     title: 'Sides',
//     data: [
//       { name: 'Fries', price: '$3.00', id: '11K' },
//       { name: 'Buttered Rice', price: '$3.00' },
//       { name: 'Bread Sticks', price: '$3.00' },
//       { name: 'Pita Pocket', price: '$3.00' },
//       { name: 'Lentil Soup', price: '$3.75' },
//       { name: 'Greek Salad', price: '$6.00' },
//       { name: 'Rice Pilaf', price: '$4.00' },
//     ],
//   },
//   {
//     title: 'Desserts',
//     data: [
//       { name: 'Baklava', price: '$3.00' },
//       { name: 'Tartufo', price: '$3.00' },
//       { name: 'Tiramisu', price: '$5.00' },
//       { name: 'Panna Cotta', price: '$5.00' },
//     ],
//   },
// ];

let base64 = require("base-64");

const Item = ({ name, price }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
    <Text style={menuStyles.itemText}>{price}</Text>
  </View>
);

const Separator = () => <View style={menuStyles.separator} />;

const Footer = () => (
  <Text style={menuStyles.footerText}>
    All Rights Reserved by Little Lemon 2022
  </Text>
);

const MenuItems = ({token}) => {
  const [showMenu, setShowMenu] = useState(false);

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMenu = async () => {
    try {
      const response = await fetch('http://localhost:1010/api/menu_items', {
        method: 'GET',
        // headers: {
        //   'Authorization': `Bearer ${token}`, // Include the stored token
        //   'Content-Type': 'application/json', // Add other headers as needed
        // },
        headers: {
          Authorization: "Basic " + base64.encode(token.username + ":" + token.password),
        },
      });     
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMenu();
  }, []);




  const renderItem = ({ item }) => <Item name={item.name} price={item.price}/>;

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={menuStyles.sectionHeader}>{title} </Text>
  );

  return (
    <View style={menuStyles.container}>
      {!showMenu && (
        <Text style={menuStyles.infoSection}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. View our
          menu to explore our cuisine with daily specials!
        </Text>
      )}
      <Pressable
        style={menuStyles.button}
        onPress={() => {
          setShowMenu(!showMenu);
        }}>
        <Text style={menuStyles.buttonText}>
          {showMenu ? 'Home' : 'View Menu'}
        </Text>
      </Pressable>
      {showMenu && (
        <SectionList
          keyExtractor={(item, index) => item + index}
          sections={data}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          ListFooterComponent={Footer}
          ItemSeparatorComponent={Separator}></SectionList>
      )}
    </View>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 0.95,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#333333',
  },
  sectionHeader: {
    backgroundColor: '#fbdabb',
    color: '#333333',
    fontSize: 34,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 32,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: '#EDEFEE',
  },
  footerText: {
    color: '#EDEFEE',
    fontSize: 20,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 60,
    backgroundColor: '#EDEFEE',
    borderColor: '#EDEFEE',
    borderWidth: 2,
    borderRadius: 15
  },
  buttonText: {
    color: '#333333',
    textAlign: 'center',
    fontSize: 32,
  },
  infoSection: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
    backgroundColor: '#495E57',
  },
});

export default MenuItems;