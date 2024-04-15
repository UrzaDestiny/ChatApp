import { RootStackParamList } from './RootStackParamList';
import '@react-navigation/native';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}