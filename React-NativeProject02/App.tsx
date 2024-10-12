import {  SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCard from './components/ElevatedCard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import Contacts from './components/contacts';

const App = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <FlatCards />
                <ElevatedCard />
                <FancyCard />
                <Contacts/>
                <ActionCard/>
            </ScrollView>
        </SafeAreaView>
    );
}; export default App;

