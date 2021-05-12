/**
 *  application for performance tests
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Component } from "react";
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const testPrime = (number) => {
      if (number < 2) {
          return false;
      }

      for (var i = 2; i < number; i++) {
          if (number % i === 0) {
          return false;
          }
      }

      return true;

  };
  const runTest = (n) => {
      var foundPrime, count, isprime;
      console.log("test")
      count = 0;
      foundPrime = 0;

      while (count < n) {
          isprime = testPrime(count);

          if (isprime) {
              foundPrime++;
          }
          count++;
      }

      return foundPrime;
  };

  const ramTest = () => {
      var i = 0
      var objects = new Array();
      while (true) {
         objects[i] = new Object();
         console.log(i)
         i++
      }
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
            <Section>
              <Text style={styles.highlight}>CPU tests</Text>
              {/* <Text>Selected test found {{foundprime}} primenumbers</Text> */}

            </Section>
            <Section>
              <Button
                title="cpu"
                onPress={() => runTest(1000000)}
              />

            </Section>
            <Section>

              <Button
                title="ram"
                onPress={() => ramTest()}
              />
            </Section>
            {/* <Section>
              <Button
                title="50000"
                onPress={() => StartCpuTest(50000)}
              />

            </Section> */}
            {/* <Section>
              <Button
                title="100000"
                onPress={() => StartCpuTest(100000)}
              />

            </Section> */}
            {/* <Section>
              <Button
                title="150000"
                onPress={() => StartCpuTest(150000)}
              />

            </Section> */}
          {/* <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
