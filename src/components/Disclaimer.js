import React, {useState} from 'react';
import {View, Modal, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Disclaimer = () => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.textStyle}>Disclaimer</Text>
            <Text style={{marginTop: 10}}>
              The information provided here is purely taken from the source
              RedCross. Please consult a physician before performing any safety
              measures. Also we are not liable for any actions or reactions
              performed on the basis of this information.
            </Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonOpen, styles.buttonClose]}
              onPress={() => setModalVisible(false)}
              title="Close modal">
              <Text style={styles.btnText}>Close Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Disclaimer;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 25,
    alignItems: 'center',
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    marginTop: 15,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
