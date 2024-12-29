import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    alignItems: "center",
    height: 100,
    justifyContent: "center",
  },

  headerText: {
    fontSize: 32,
  },

  logo: {
    marginLeft: "10%",
    marginBottom: 20,
  },

  main: {
    flex: 1,
    marginLeft: "10%",
    marginTop: 20,
    gap: 20,
  },

  dropdownContainer: {
    width: 300,
  },

  dropdown: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderRadius: 5,
    paddingVertical: 10,
  },

  dropdownText: {
    fontSize: 24,
    color: "#333",
    fontWeight: "bold",
  },

  dropdownIcon: {
    marginLeft: 10,
  },

  dropdownContent: {
    marginTop: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    elevation: 3,
  },

  infoItem: {
    marginBottom: 10,
  },

  infoLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },

  infoDetail: {
    fontSize: 12,
    color: "#666",
  },

  radioGroup: {
    flexDirection: "column",
    padding:10,
    gap: 10,
  },

  radioOption: {
    flexDirection: "row",
    alignItems: "center",
  },

  radioText: {
    fontSize: 14,
    color: "#333",
  },

  radioInput: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: "#333",
    borderWidth: 1,
    backgroundColor: "#fff",
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default styles;
