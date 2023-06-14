import type { PropsWithChildren } from 'react';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';

type Props = PropsWithChildren & {};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    minHeight: '100%',
  },
});

const Page: React.FC<Props> = ({ children }) => {
  return (
    <SafeAreaView style={[styles.page]}>
      <StatusBar />
      {children}
    </SafeAreaView>
  );
};

export default Page;
