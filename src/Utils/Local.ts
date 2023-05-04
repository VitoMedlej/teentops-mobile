import AsyncStorage from '@react-native-async-storage/async-storage';


export const loadState = async (key:string) => {
    try {
      const serializedState = await  AsyncStorage.getItem(key);
      if(!serializedState) {
          return undefined;
      }
      return JSON.parse(serializedState);
    }
    catch (err) {
        return undefined;
    }
  };
  
  export const saveState =  async (key:string, value:any) => {
    
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    }
    catch (err) {
        console.log('err: ', err);
  
    }
  };
  export const pushState = async (key:string, value:any) => {
    try {   
        let state : any = await  AsyncStorage.getItem('usercart2');
        if (!state) return;
        state  = state && JSON.parse(state)
        if ( state  && Array?.isArray(state)) {

          const itemId = state.find(x => x?._id === `${value._id}`);

          if (!itemId) {

            state.push(value);
            saveState(key,state);
            return
          }
          }
        else {
            saveState(key, [value]);
          }
    }
    catch(e) {
        console.log('e: ', e);

    }
  }