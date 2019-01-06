import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Button from './Button';
import TextInput from './TextInput';

import { colors } from './App';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // row, column, row-reverse, column-reverse
    // primary axis
    justifyContent: 'flex-start', // flex-start, flex-end, center, space-between, space-around, space-evenly
    // secondary axis
    alignItems: 'center', // flex-start, flex-end, center, stretch, baseline

    flexWrap: 'nowrap', // wrap, nowrap, wrap-reverse
  },
  wrapper: {
    marginTop: 40,
    width: '78%',

    flexDirection: 'column',
    alignItems: 'center',
  },
  btnWrapper: {
    width: '100%',

    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  btnRegister: {
    backgroundColor: colors.dodgerBlue,
    borderColor: colors.dodgerBlue,
    borderRadius: 4,
    borderWidth: 1,
    width: 136,
    height: 60,
    marginLeft: 4,
    marginTop: 24,
    marginBottom: 48,
    shadowColor: colors.dodgerBlue,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 4,
    shadowOpacity: 0.3,

    alignItems: 'center',
    justifyContent: 'center',
  },
  txtRegister: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

type Props = {};
export default class Signup extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      statusMsg: '',
      isRegistering: false,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <TextInput
            style={{ marginTop: 8 }}
            txtLabel='EMAIL'
            txtHint='Please write email.'
            txt={ this.state.email }
            onTextChanged={ (text) => this.onTextChanged('EMAIL', text) }
          />
          <TextInput
            style={{ marginTop: 24 }}
            txtLabel='PASSWORD'
            txtHint='Please write password.'
            txt={ this.state.password }
            onTextChanged={ (text) => this.onTextChanged('PASSWORD', text) }
            isPassword
          />
          <TextInput
            style={{ marginTop: 24 }}
            txtLabel='NAME'
            txtHint='Please write name.'
            txt={ this.state.name }
            onTextChanged={ (text) => this.onTextChanged('NAME', text) }
          />
          <TextInput
            style={{ marginTop: 24 }}
            txtLabel='STATUS MESSAGE'
            txtHint='Please write status message.'
            txt={ this.state.statusMsg }
            onTextChanged={ (text) => this.onTextChanged('STATUS_MSG', text) }
          />
          <View style={styles.btnWrapper}>
            <Button
              isLoading={this.state.isRegistering}
              onPress={() => {}}
              style={styles.btnRegister}
              textStyle={styles.txtRegister}
            >Register</Button>
          </View>
        </View>
      </View>
    );
  }

  onTextChanged = (type, text) => {
    switch(type) {
      case 'EMAIL':
        this.setState({
          email: text,
        });
      break;
      case 'PASSWORD':
        this.setState({
          password: text,
        });
      break;
      case 'NAME':
        this.setState({
          name: text,
        });
      break;
      case 'STATUS_MSG':
        this.setState({
          statusMsg: text,
        });
      break;
    }
  }
}
