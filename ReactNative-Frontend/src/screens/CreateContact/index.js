import {useNavigation, useRoute} from '@react-navigation/core';
import React, {useContext, useEffect, useRef, useState} from 'react';
import uploadImage from '../../assets/helpers/uploadImage';
import CreateContactComponent from '../../conponents/CreateContactComponent';
import {CONTACT_DETAIL, CONTACT_LIST} from '../../constants/routeName';
import createContact from '../../context/actions/contacts/createContact';
import editContact from '../../context/actions/contacts/editContact';
import {GlobalContext} from '../../context/Provider';
import countryCodes from '../../utils/countryCodes';

const CreateContact = () => {
  const {
    contactsDispatch,
    contactsState: {
      createContact: {loading, error},
    },
  } = useContext(GlobalContext);
  const [form, setForm] = useState({countryCode: 'VN', phoneCode: '84'});
  const [isLoading, setIsUpLoading] = useState(false);
  const {navigate, setOptions} = useNavigation();
  const onChangeText = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    if (params?.edit) {
      console.log('clicked');
      if (localFile?.size) {
        setIsUpLoading(true);
        uploadImage(localFile)((url) => {
          setIsUpLoading(false);
          editContact(params.contact.id, {...form, contactPicture: url})(
            contactsDispatch,
          )((item) => {
            navigate(CONTACT_DETAIL, {item});
          });
        })((errorr) => {
          console.log('error', errorr);
          setIsUpLoading(false);
        });
      } else {
        editContact(params.contact.id, form)(contactsDispatch)((item) => {
          navigate(CONTACT_DETAIL, {item});
        });
      }
    } else if (localFile?.size) {
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

  const {params} = useRoute();

  useEffect(() => {
    console.log(params?.contact?.contact_picture);
    if (params?.contact) {
      const {
        first_name: firstName,
        contact_picture: contactPicture,
        last_name: lastName,
        phone_number: phoneNumber,
        is_favorite: isFavorite,
        country_code: countryCode,
      } = params.contact;

      setOptions({
        title: 'Update Contact',
      });

      const country = countryCodes.find((item) => {
        return item.value.replace('+', '') === countryCode;
      });
      setForm({
        ...form,
        firstName,
        lastName,
        phoneNumber,
        isFavorite,
        contactPicture,
        phoneCode: countryCode,
        countryCode: country?.key.toUpperCase(),
      });

      if (params?.contact?.contact_picture) {
        setLocalFile(params.contact.contact_picture);
      }
    }
  }, []);
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
      edit={params?.edit}
    />
  );
};
export default CreateContact;
