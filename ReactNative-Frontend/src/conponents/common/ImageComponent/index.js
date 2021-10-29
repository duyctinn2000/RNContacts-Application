import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const ImageComponent = ({source}) => {
  const [hasError, setHasError] = useState(false);

  const [isLoadding, setIsLoading] = useState(false);
  const onLoadStart = () => {
    setIsLoading(true);
  };
  const onLoadEnd = () => {
    setIsLoading(false);
  };
  const onError = () => {
    setIsLoading(false);
    setHasError(true);
  };
  return (
    <View style={styles.imageContainer}>
      {isLoadding && <Text style={styles.loading}>Loading Image</Text>}

      <View>
        <Image
          onLoadEnd={onLoadEnd}
          onError={onError}
          onLoadStart={onLoadStart}
          source={{uri: source}}
          style={styles.detailPhoto}
        />
      </View>
    </View>
  );
};

export default ImageComponent;
