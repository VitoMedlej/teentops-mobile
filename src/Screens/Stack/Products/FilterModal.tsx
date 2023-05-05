import * as React from 'react';
import { Modal, Portal, Text,  Provider } from 'react-native-paper';

const FilterModal = ({visible,hideModal}) => {
  
  const containerStyle = {backgroundColor: 'white',padding: 20};

  return (
    <Provider >
      <Portal>
        <Modal   visible={visible} onDismiss={hideModal}   contentContainerStyle={containerStyle}>
          <Text style={{color:'blue'}}>Example Modal.  Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
   
    </Provider>
  );
};

export default FilterModal;