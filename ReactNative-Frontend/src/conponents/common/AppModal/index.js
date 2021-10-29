import React from 'react';
import {Modal, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Icon from '../Icon';
import styles from './styles';
import PropTypes from 'prop-types';
const AppModal = ({
  modalVisible,
  title,
  modalFooter,
  modalBody,
  setModalVisible,
  closeOnTouchOutside,
}) => {
  return (
    <Modal visible={modalVisible} transparent>
      <TouchableOpacity
        onPress={() => {
          if (closeOnTouchOutside) {
            setModalVisible(false);
          }
        }}
        style={styles.wrapper}>
        <View style={styles.madalView}>
          <ScrollView>
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                }}>
                <Icon size={27} name="close" />
              </TouchableOpacity>
              <Text style={styles.title}>{title || 'RNContacts'}</Text>
              <View />
            </View>
            <View style={styles.separator} />
            <View style={styles.body}>{modalBody}</View>
            <View style={styles.separator} />
            <View style={styles.footer}>
              <Text> {modalFooter ? modalFooter : 'Privacy Policy'}</Text>
            </View>
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};
AppModal.propTypes = {closeOnTouchOutside: PropTypes.bool};
AppModal.defaultProps = {closeOnTouchOutside: true};

export default AppModal;
