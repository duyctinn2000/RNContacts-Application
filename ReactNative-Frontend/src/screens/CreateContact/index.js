import {useNavigation} from '@react-navigation/core';
import React, {useContext, useRef, useState} from 'react';
import uploadImage from '../../assets/helpers/uploadImage';
import CreateContactComponent from '../../conponents/CreateContactComponent';
import {CONTACT_LIST} from '../../constants/routeName';
import createContact from '../../context/actions/contacts/createContact';
import {GlobalContext} from '../../context/Provider';

const CreateContact = () => {
  const {
    contactsDispatch,
    contactsState: {
      createContact: {loading, error},
    },
  } = useContext(GlobalContext);
  const [form, setForm] = useState({});
  const [isLoading, setIsUpLoading] = useState(false);
  const {navigate} = useNavigation();
  const onChangeText = ({name, value}) => {
    setForm({...form, [name]: value});
  };
  const onSubmit = () => {
    if (localFile?.size) {
      setIsUpLoading(true);
      uploadImage(localFile)((url) => {
        setIsUpLoading(false);
        createContact({...form, contactPicture: url})(contactsDispatch)(() => {
          navigate(CONTACT_LIST);
        });
      })((errorr) => {
        console.log('error', errorr);
        setIsUpLoading(false);
      });
    } else {
      createContact(form)(contactsDispatch)(() => {
        navigate(CONTACT_LIST);
      });
    }
  };
  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  };
  const openSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.open();
    }
  };
  const sheetRef = useRef(null);
  const toggleValueChange = () => {
    setForm({...form, isFavorite: !form.isFavorite});
  };
  const onFileSelected = (images) => {
    closeSheet();
    setLocalFile(images);
  };

  const [localFile, setLocalFile] = useState(null);
  return (
    <CreateContactComponent
      onSubmit={onSubmit}
      onChangeText={onChangeText}
      setForm={setForm}
      form={form}
      loading={loading || isLoading}
      error={error}
      toggleValueChange={toggleValueChange}
      sheetRef={sheetRef}
      openSheet={openSheet}
      closeSheet={closeSheet}
      onFileSelected={onFileSelected}
      localFile={localFile}
    />
  );
};
export default CreateContact;
