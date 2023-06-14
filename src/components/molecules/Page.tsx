import type { PropsWithChildren } from "react";
import { StyleSheet } from "react-native";
import { StatusBar, SafeAreaView } from "react-native";

type Props = PropsWithChildren & {};

const Page: React.FC<Props> = ({ children }) => {
  return (
    <SafeAreaView style={[styles.page]}>
      <StatusBar />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    minHeight: "100%",
  },
});

export default Page;
